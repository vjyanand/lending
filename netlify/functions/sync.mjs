import { getStore } from '@netlify/blobs';
import core from '../../public/sync-core.js';

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
  try { msg = await req.json(); } catch {}
  if (!msg || typeof msg !== 'object') return new Response('bad json', { status: 400 });

  // Phones sync at the same moment, so: always read the latest copy ('strong'), and only write if nobody else
  // wrote since that read. Otherwise start again, so one phone's save can never wipe out another's.
  const store = getStore({ name: 'lending', consistency: 'strong' });
  for (let attempt = 0; attempt < 12; attempt++) {
    if (attempt) await new Promise(ok => setTimeout(ok, Math.random() * 100 * attempt));
    const found = await store.getWithMetadata('db', { type: 'json' });
    const db = found ? found.data : { seq: 0, records: {} };
    const { changed, reply } = core.serverSync(db, msg, mode, Date.now());
    if (changed) {
      if (found && !found.etag) return new Response('storage gave no version tag', { status: 500 }); // never overwrite blindly
      const w = await store.setJSON('db', db, found ? { onlyIfMatch: found.etag } : { onlyIfNew: true });
      if (!w.modified || !w.etag) continue; // someone else got there first, or the write failed (no etag)
    }
    return Response.json(reply);
  }
  return new Response('busy, try again', { status: 503 }); // the phone keeps its changes and retries
};

export const config = { path: '/api/sync' };
