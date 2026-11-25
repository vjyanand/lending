'use strict';
/* Sync rules, shared by the phone (browser), server.js and the Netlify function.

   Record: {k, d, u: time of the change, del: 0|1, b: who}. The newest change to a key wins.
   The server numbers every accepted change (seq); a phone asks for everything after the last number it saw.
   The server's data has an id, so a phone notices when that data was replaced, emptied or rolled back.   */
(function (root) {
  const MAX_SKEW = 5 * 60 * 1000; // a change stamped further ahead than this comes from a wrong clock
  const PAGE_RECORDS = 2000, PAGE_CHARS = 1000000; // keeps every reply well under hosting size limits

  const own = (o, k) => (Object.prototype.hasOwnProperty.call(o, k) ? o[k] : undefined);
  const valid = r => !!r && typeof r.k === 'string' && r.k.length > 0 && r.k.length <= 200 && r.k !== '__proto__'
    && Number.isFinite(r.u) && !!r.d && typeof r.d === 'object';
  const same = (a, b) => a.u === b.u && !a.del === !b.del && JSON.stringify(a.d) === JSON.stringify(b.d);

  /* ---------- server ---------- */
  // Applies a request to db ({id, seq, records}). Save db before sending the reply whenever changed is true.
  function serverSync(db, msg, mode, now) {
    let changed = false;
    if (!db.id) { db.id = now.toString(36) + Math.random().toString(36).slice(2, 10); changed = true; }
    const newer = new Map(); // sent records the server didn't take: the phone must get the winning copy back
    const incoming = mode === 'edit' && Array.isArray(msg.records) ? msg.records : []; // view-only keys can never write
    for (const r of incoming) {
      if (!valid(r)) continue;
      const u = r.u > now + MAX_SKEW ? now : r.u, cur = own(db.records, r.k);
      if (!cur || u > cur.u) {
        db.records[r.k] = { k: r.k, d: r.d, u, del: r.del ? 1 : 0, b: String(r.b || ''), seq: ++db.seq };
        changed = true;
      } else if (!same(r, cur)) newer.set(r.k, cur);
    }
    const since = Number(msg.since) || 0;
    const waiting = Object.values(db.records).filter(r => r.seq > since).sort((a, b) => a.seq - b.seq);
    const page = [];
    let chars = 0;
    for (const r of waiting) {
      chars += JSON.stringify(r).length;
      if (page.length && (page.length >= PAGE_RECORDS || chars > PAGE_CHARS)) break;
      page.push(r);
    }
    const more = page.length < waiting.length;
    const seq = more ? page[page.length - 1].seq : db.seq; // the next request continues from here
    const included = new Set(page.map(r => r.k));
    for (const [k, r] of newer) if (!included.has(k)) page.push(r);
    return { changed, reply: { dbId: db.id, seq, more, now, mode, records: page } };
  }

  /* ---------- phone ---------- */
  const validReply = o => !!o && Number.isFinite(o.seq) && Array.isArray(o.records);
  // true when the server's data is not the data this phone has been syncing with
  const wasReset = (meta, out) => !!(meta.dbId && out.dbId && meta.dbId !== out.dbId) || out.seq < meta.since;

  // Updates the in-memory records from a reply. Returns what must be stored, and what really changed.
  function applyReply(recs, sent, out) {
    const view = out.mode === 'view', writes = new Map(), changed = [];
    if (!view) for (const s of sent) { // the server has these now, unless they were edited again meanwhile
      const cur = recs.get(s.k);
      if (cur && cur.u === s.u) { const n = { ...cur, dirty: 0 }; recs.set(s.k, n); writes.set(s.k, n); }
    }
    for (const r of out.records) {
      if (!valid(r)) continue;
      const cur = recs.get(r.k);
      // an unsent change is kept unless the server's is newer; a view-only phone can't send, so the server wins
      if (cur && cur.dirty && !view && !(r.u > cur.u)) continue;
      const n = { k: r.k, d: r.d, u: r.u, del: r.del, b: r.b, dirty: 0 };
      if (!cur || !same(cur, n)) changed.push(n);
      recs.set(r.k, n); writes.set(r.k, n);
    }
    return { writes: [...writes.values()], changed };
  }

  // Stores records and sync position together: both are saved, or neither is. A newer unsent change already
  // on disk (made in another tab) is never overwritten, except on a view-only phone.
  function commit(idb, writes, meta, force) {
    return new Promise((ok, no) => {
      const tx = idb.transaction(['rec', 'meta'], 'readwrite'), rec = tx.objectStore('rec');
      for (const w of writes) {
        const q = rec.get(w.k);
        q.onsuccess = () => { const old = q.result; if (force || !old || !old.dirty || w.u >= old.u) rec.put(w); };
      }
      for (const [k, v] of Object.entries(meta)) tx.objectStore('meta').put(v, k);
      tx.oncomplete = () => ok(); tx.onabort = () => no(new Error('could not save on this phone'));
    });
  }

  const api = { serverSync, validReply, wasReset, applyReply, commit };
  if (typeof module !== 'undefined') module.exports = api; else root.SyncCore = api;
})(this);
