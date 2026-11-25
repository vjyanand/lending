import { getStore } from '@netlify/blobs';
import { vapid, webpush, MSG, localNow } from '../lib/push.mjs';
import calc from '../../public/calc.js';

// Runs every 15 minutes. Each subscriber has up to two reminder times (default 09:15 and 17:00, in their own
// timezone). A reminder is sent once, within 45 minutes after its time, and only if interest is pending.
export default async () => {
  await vapid();
  const store = getStore('push');
  const { blobs } = await store.list({ prefix: 'sub:' });
  const db = await getStore({ name: 'lending', consistency: 'strong' }).get('db', { type: 'json' });
  const { pending, today } = calc.dueSummary(Object.values((db || { records: {} }).records), localNow('Asia/Kolkata').date);
  if (!pending) return;

  for (const { key } of blobs) {
    const rec = await store.get(key, { type: 'json' });
    if (!rec) continue;
    const { date, min } = localNow(rec.tz);
    rec.sent ||= {};
    let dirty = false, dead = false;
    for (const time of rec.times || []) {
      const [h, m] = time.split(':').map(Number), target = h * 60 + m;
      if (min < target || min >= target + 45 || rec.sent[time] === date) continue;
      const msg = MSG[rec.lang] || MSG.en;
      try {
        // counts only: notifications show on the lock screen, so no names or amounts
        await webpush.sendNotification(rec.sub, JSON.stringify({ title: msg.title, body: msg.body(pending, today), url: './' }));
        rec.sent[time] = date; dirty = true;
      } catch (e) {
        if (e.statusCode === 404 || e.statusCode === 410) { dead = true; break; } // phone unsubscribed
      }
    }
    if (dead) await store.delete(key); else if (dirty) await store.setJSON(key, rec);
  }
};

export const config = { schedule: '*/15 * * * *' };
