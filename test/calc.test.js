const test = require('node:test');
const assert = require('node:assert');
const { addMonths, loanState } = require('../public/calc.js');

const loan = { date: '2026-01-10', amount: 100000, itype: 'pct', rate: 2 };

test('month ends are clamped but do not drift', () => {
  assert.equal(addMonths('2026-01-31', 1), '2026-02-28');
  assert.equal(addMonths('2026-01-31', 2), '2026-03-31');
  assert.equal(addMonths('2026-11-15', 2), '2027-01-15');
});
test('nothing is due before the first month ends', () => {
  const s = loanState(loan, [], '2026-02-09');
  assert.equal(s.due, 0); assert.equal(s.monthly, 2000); assert.equal(s.nextDue, '2026-02-10');
});
test('interest accrues monthly and payments are deducted', () => {
  const s = loanState(loan, [{ date: '2026-02-10', int: 2000, prin: 0 }], '2026-04-10');
  assert.equal(s.charged, 6000); assert.equal(s.due, 4000); assert.equal(s.monthsDue, 2); assert.equal(s.since, '2026-03-10');
});
test('principal paid lowers later interest', () => {
  const s = loanState(loan, [{ date: '2026-02-10', int: 0, prin: 40000 }], '2026-04-10');
  assert.deepEqual(s.charges.map(c => c.amt), [2000, 1200, 1200]); assert.equal(s.balance, 60000);
});
test('mid-month part payment applies from the next month', () => {
  const s = loanState(loan, [{ date: '2026-02-20', int: 0, prin: 50000 }], '2026-04-10');
  assert.deepEqual(s.charges.map(c => c.amt), [2000, 2000, 1000]);
});
test('clearing mid-month charges that month at once, then stops', () => {
  const pays = [{ date: '2026-02-20', int: 0, prin: 100000 }];
  const now = loanState(loan, pays, '2026-02-20');
  assert.equal(now.due, 4000); assert.equal(now.closed, false);
  const later = loanState(loan, [...pays, { date: '2026-02-20', int: 4000, prin: 0 }], '2026-08-01');
  assert.equal(later.due, 0); assert.equal(later.closed, true); assert.equal(later.nextDue, '');
});
test('clearing on a due date does not charge the next month', () => {
  assert.equal(loanState(loan, [{ date: '2026-02-10', int: 0, prin: 100000 }], '2026-05-01').charged, 2000);
});
test('fixed interest, advance payment, and old loans already paid up', () => {
  const s = loanState({ ...loan, itype: 'fix', rate: 1500, paidUpto: '2026-03-10' }, [{ date: '2026-04-10', int: 4000, prin: 0 }], '2026-04-10');
  assert.equal(s.charged, 1500); assert.equal(s.due, -2500);
});
