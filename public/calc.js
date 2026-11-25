'use strict';
/* Loan maths. Pure functions, used by the app and by test/calc.test.js.

   Rules:
   - A loan's month runs from its date to the same date next month (31 Jan -> 28 Feb -> 31 Mar).
   - Interest for a month is on the principal still owed at the START of that month, and falls due at its end.
   - A principal payment made on a due date lowers the next month's interest.
   - If the principal is cleared in the middle of a month, that month's full interest is charged at once.
   - Simple interest: unpaid interest never earns interest.                                             */
(function (root) {
  const pad = n => String(n).padStart(2, '0');
  function addMonths(s, n) {
    const [y, m, d] = s.split('-').map(Number), i = y * 12 + (m - 1) + n, yy = Math.floor(i / 12), mm = i % 12;
    const last = new Date(Date.UTC(yy, mm + 1, 0)).getUTCDate();
    return `${yy}-${pad(mm + 1)}-${pad(Math.min(d, last))}`;
  }
  const round = n => Math.round(n * 100) / 100;
  // itype 'pct' = percent per month (rounded to whole rupees); 'fix' = fixed rupees per month
  const monthInterest = (loan, bal) => (bal <= 0 ? 0 : loan.itype === 'fix' ? +loan.rate : Math.round(bal * loan.rate / 100));

  // loan: {date, amount, itype, rate, paidUpto?}   pays: [{date, int, prin}]
  function loanState(loan, pays, today) {
    const principalPaid = ok => pays.reduce((s, p) => s + (ok(p.date) ? +p.prin || 0 : 0), 0);
    const charges = [];
    for (let n = 1; n <= 1200; n++) {
      const from = addMonths(loan.date, n - 1), due = addMonths(loan.date, n);
      if (from > today) break;
      const bal = round(loan.amount - principalPaid(d => d <= from));
      if (bal <= 0) break;
      // cleared part-way through this month?
      const closing = pays.filter(p => p.date < due && p.date <= today && +p.prin > 0).map(p => p.date).sort().pop();
      const cleared = round(loan.amount - principalPaid(d => d < due && d <= today)) <= 0;
      if (due > today && !cleared) break;
      if (loan.paidUpto && due <= loan.paidUpto) continue; // settled before the loan was entered in the app
      charges.push({ date: due > today ? closing : due, from, bal, amt: monthInterest(loan, bal) });
    }
    const balance = Math.max(0, round(loan.amount - principalPaid(() => true)));
    const charged = round(charges.reduce((s, c) => s + c.amt, 0));
    const received = round(pays.reduce((s, p) => s + (+p.int || 0), 0));
    const due = round(charged - received); // negative = paid in advance
    // payments settle the oldest months first
    let left = received, monthsDue = 0, since = '';
    for (const c of charges) {
      const used = Math.min(left, c.amt); left = round(left - used);
      c.open = round(c.amt - used);
      if (c.open > 0) { monthsDue++; since = since || c.date; }
    }
    let nextDue = '';
    if (balance > 0) for (let n = 1; n <= 1200 && !nextDue; n++) { const d = addMonths(loan.date, n); if (d > today) nextDue = d; }
    return { charges, balance, charged, received, due, monthsDue, since, nextDue, monthly: monthInterest(loan, balance), closed: balance <= 0 && due <= 0 };
  }

  const api = { addMonths, monthInterest, loanState, round };
  if (typeof module !== 'undefined') module.exports = api; else Object.assign(root, api);
})(this);
