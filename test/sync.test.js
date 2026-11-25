const test = require('node:test');
const assert = require('node:assert');
const { serverSync, applyReply, wasReset, validReply } = require('../public/sync-core.js');

const empty = () => ({ seq: 0, records: {} });
const rec = (k, u, v = 'x', del = 0) => ({ k, u, d: { v }, del, b: 'me' });
const send = (db, records, since = 0, mode = 'edit', now = 1e12) => serverSync(db, { since, records }, mode, now).reply;

test('newest change wins and the loser is told', () => {
  const db = empty();
  send(db, [rec('a', 200, 'new')]);
  const out = send(db, [rec('a', 100, 'old')], db.seq);
  assert.equal(db.records.a.d.v, 'new'); assert.equal(out.records[0].d.v, 'new');
});
test('sending the same change twice does nothing', () => {
  const db = empty(); send(db, [rec('a', 100)]);
  assert.equal(serverSync(db, { since: db.seq, records: [rec('a', 100)] }, 'edit', 1e12).changed, false);
});
test('view-only requests never write', () => {
  const db = empty(); send(db, [rec('a', 100)], 0, 'view');
  assert.deepEqual(db.records, {});
});
test('broken records are ignored', () => {
  const db = empty();
  send(db, [null, { k: 'a' }, { k: 'b', u: 'soon', d: {} }, { k: '__proto__', u: 1, d: {} }, { k: '', u: 1, d: {} }, rec('constructor', 1)]);
  assert.deepEqual(Object.keys(db.records), ['constructor']);
});
test('a change stamped in the future is brought back to server time', () => {
  const db = empty(); send(db, [rec('a', 9e15)], 0, 'edit', 1000000);
  assert.equal(db.records.a.u, 1000000);
  send(db, [rec('a', 1000001, 'later')], 0, 'edit', 1000002);
  assert.equal(db.records.a.d.v, 'later');
});
test('large downloads come in pages that add up to everything', () => {
  const db = empty(); send(db, Array.from({ length: 4500 }, (_, i) => rec('r' + i, 100)));
  const got = new Set(); let since = 0, pages = 0, out;
  do { out = send(db, [], since); out.records.forEach(r => got.add(r.k)); since = out.seq; pages++; } while (out.more);
  assert.equal(got.size, 4500); assert.equal(pages, 3); assert.equal(since, db.seq);
});
test('pages are also limited by size', () => {
  const db = empty(); send(db, Array.from({ length: 10 }, (_, i) => rec('r' + i, 100, 'y'.repeat(300000))));
  const out = send(db, []);
  assert.equal(out.records.length, 3); assert.equal(out.more, true);
});
test('a replaced or rolled-back server is noticed', () => {
  assert.equal(wasReset({ dbId: 'a', since: 5 }, { dbId: 'b', seq: 9 }), true);
  assert.equal(wasReset({ dbId: 'a', since: 5 }, { dbId: 'a', seq: 4 }), true);
  assert.equal(wasReset({ dbId: '', since: 0 }, { dbId: 'a', seq: 4 }), false);
  assert.equal(validReply({ ok: true }), false);
});
test('phone keeps an edit made while the request was in flight', () => {
  const sent = rec('a', 100, 'first'), recs = new Map([['a', { ...rec('a', 150, 'second'), dirty: 1 }]]);
  applyReply(recs, [sent], { mode: 'edit', records: [{ ...sent, seq: 1 }] });
  assert.equal(recs.get('a').d.v, 'second'); assert.equal(recs.get('a').dirty, 1);
});
test('phone marks sent records clean, takes a newer server copy, and a view-only phone follows the server', () => {
  const recs = new Map([['a', { ...rec('a', 100), dirty: 1 }], ['b', { ...rec('b', 100, 'mine'), dirty: 1 }]]);
  applyReply(recs, [rec('a', 100)], { mode: 'edit', records: [rec('b', 200, 'theirs')] });
  assert.equal(recs.get('a').dirty, 0); assert.equal(recs.get('b').d.v, 'theirs');
  recs.set('c', { ...rec('c', 300, 'stale'), dirty: 1 });
  applyReply(recs, [], { mode: 'view', records: [rec('c', 200, 'server')] });
  assert.equal(recs.get('c').d.v, 'server');
});
