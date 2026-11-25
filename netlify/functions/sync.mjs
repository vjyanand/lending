import { getStore } from '@netlify/blobs';

// Same protocol as server.js. This is money data on a public URL, so SYNC_KEY (Netlify env var) is REQUIRED.
export default async (req) => {
  const key = process.env.SYNC_KEY || '', viewKey = process.env.VIEW_KEY || ''; // VIEW_KEY: optional read-only key
  const given = req.headers.get('x-sync-key') || '';
  let mode = 'edit';
  if (!key) return new Response('SYNC_KEY is not set on the server', { status: 503 });
  if (given !== key) {
    if (viewKey && given === viewKey) mode = 'view';
    else return new Response('bad key', { status: 401 });
  }
  if (req.method !== 'POST') return new Response('POST only', { status: 405 });

  let msg;
  try { msg = await req.json(); } catch { return new Response('bad json', { status: 400 }); }

  // Phones sync at the same moment, so: always read the latest copy ('strong'), and only write if nobody else
  // wrote since that read. Otherwise start again, so one phone's save can never wipe out another's.
  const store = getStore({ name: 'lending', consistency: 'strong' });
  const since = Number(msg.since) || 0;
  const incoming = mode === 'edit' ? msg.records || [] : []; // view-only keys can never write
  for (let attempt = 0; attempt < 12; attempt++) {
    if (attempt) await new Promise(ok => setTimeout(ok, Math.random() * 100 * attempt));
    const found = await store.getWithMetadata('db', { type: 'json' });
    const db = found ? found.data : { seq: 0, records: {} };
    const newer = new Map(); // sent records the server didn't take: the phone must get the winning copy back
    let changed = false;
    for (const r of incoming) {
      if (!r || typeof r.k !== 'string') continue;
      const cur = db.records[r.k];
      if (!cur || r.u > cur.u) { // last-write-wins
        db.records[r.k] = { k: r.k, d: r.d, u: r.u, del: r.del ? 1 : 0, b: String(r.b || ''), seq: ++db.seq };
        changed = true;
      } else if (r.u !== cur.u || JSON.stringify(r.d) !== JSON.stringify(cur.d)) newer.set(r.k, cur);
    }
    if (changed) {
      if (found && !found.etag) return new Response('storage gave no version tag', { status: 500 }); // never overwrite blindly
      const w = await store.setJSON('db', db, found ? { onlyIfMatch: found.etag } : { onlyIfNew: true });
      if (!w.modified || !w.etag) continue; // someone else got there first, or the write failed (no etag)
    }
    const records = Object.values(db.records).filter(r => r.seq > since || newer.has(r.k));
    return Response.json({ seq: db.seq, now: Date.now(), mode, records });
  }
  return new Response('busy, try again', { status: 503 }); // the phone keeps its changes and retries
};

export const config = { path: '/api/sync' };
