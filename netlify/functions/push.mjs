import { getStore } from '@netlify/blobs';
import { createHash } from 'node:crypto';
import { vapid, webpush, MSG } from '../lib/push.mjs';

// /api/push/key (GET) · /subscribe · /unsubscribe · /test (POST). Same required SYNC_KEY as /api/sync.
export default async (req) => {
  const key = process.env.SYNC_KEY || '';
  if (!key) return new Response('SYNC_KEY is not set on the server', { status: 503 });
  if (req.headers.get('x-sync-key') !== key) return new Response('bad key', { status: 401 });
  const route = new URL(req.url).pathname.split('/').pop();
  const store = getStore('push');
  const id = ep => 'sub:' + createHash('sha1').update(ep).digest('hex');

  if (route === 'key' && req.method === 'GET') return Response.json({ key: (await vapid()).publicKey });
  if (req.method !== 'POST') return new Response('POST only', { status: 405 });
  const b = await req.json().catch(() => null);
  if (!b) return new Response('bad json', { status: 400 });
  const lang = b.lang === 'ta' ? 'ta' : 'en';

  if (route === 'subscribe') {
    const ep = b.sub && b.sub.endpoint;
    const times = (Array.isArray(b.times) ? b.times : []).filter(x => /^([01]\d|2[0-3]):[0-5]\d$/.test(x)).slice(0, 2);
    if (typeof ep !== 'string' || !times.length) return new Response('bad request', { status: 400 });
    let tz = b.tz;
    try { new Intl.DateTimeFormat('en', { timeZone: tz }); } catch { tz = 'Asia/Kolkata'; }
    const old = await store.get(id(ep), { type: 'json' });
    await store.setJSON(id(ep), { sub: b.sub, times, tz, lang, user: String(b.user || '').slice(0, 60), sent: old && old.sent ? old.sent : {} });
    return Response.json({ ok: true });
  }
  if (route === 'unsubscribe') { await store.delete(id(String(b.endpoint || ''))); return Response.json({ ok: true }); }
  if (route === 'test') {
    const rec = await store.get(id(String(b.endpoint || '')), { type: 'json' });
    if (!rec) return new Response('not subscribed', { status: 404 });
    await vapid();
    try {
      await webpush.sendNotification(rec.sub, JSON.stringify({ title: MSG[lang].title, body: MSG[lang].test, url: './' }));
    } catch (e) { return new Response('push failed', { status: 502 }); }
    return Response.json({ ok: true });
  }
  return new Response('not found', { status: 404 });
};

export const config = { path: '/api/push/*' };
