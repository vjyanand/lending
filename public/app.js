'use strict';
/* ---------- i18n ---------- */
const I18N = {
  en: {
    app: 'Lending Book', home: 'People', month: 'Monthly', settings: 'Settings', back: 'Back', save: 'Save', cancel: 'Cancel', del: 'Delete', edit: 'Edit',
    addPerson: 'Add person', name: 'Name', note: 'Note', search: 'Search…', noPeople: 'No one yet. Tap + to add a person and the money you lent.',
    lent: 'Principal owed', intDue: 'Interest due', perMonth: 'Interest per month', gotMonth: 'Received this month', total: 'Total to collect', advance: 'Interest paid in advance',
    addLoan: 'Add loan', editLoan: 'Edit loan', loan: 'Loan', amount: 'Amount lent', date: 'Date given', itype: 'Interest type', pct: '% per month', fix: 'Fixed ₹ per month', rate: 'Rate', fixAmt: 'Interest each month (₹)',
    paidUpto: 'Old loan: interest already settled up to (optional)', paidUptoHint: 'Months ending on or before this date are not counted as due. For an old loan, also enter the amount still owed or record the old principal payments.',
    rateHint: 'Changing the amount or rate recalculates every month of this loan.',
    receive: 'Receive payment', receiveShort: 'Receive', intPaid: 'Interest received', prinPaid: 'Principal received', payDate: 'Date received', editPay: 'Edit payment',
    balance: 'Balance', nextDue: 'Next interest date', monthsDue: '{n} month(s) pending since {d}', upToDate: 'Up to date', closed: 'Closed', statement: 'Statement', charge: 'Interest charged', given: 'Loan given', payment: 'Payment',
    closing: 'This clears the principal. Interest due including this month: {amt}', after: 'After this: principal {p}, interest due {i}',
    errName: 'Enter a name', errAmount: 'Enter an amount more than 0', errRate: 'Enter the interest (0 or more)', errPay: 'Enter interest or principal received', errOver: 'Principal received is more than the balance ({amt})', errEarly: 'Date is before the loan was given', errFuture: 'Future dates are not allowed', errPaid: 'A payment is dated before this loan date',
    confirmLoan: 'Delete this loan and all its payments?', confirmPay: 'Delete this payment?', confirmPerson: 'Delete this person and their closed loans?', cannotDel: 'Cannot delete: this person still owes money.',
    charged: 'Interest charged', gotInt: 'Interest received', gotPrin: 'Principal received', newLent: 'New money lent', pendingList: 'Interest pending now', payments: 'Payments', none: 'Nothing here', export: 'Download CSV',
    language: 'Language', auto: 'Auto (follow browser language)', yourName: 'Your name', yourNameHint: 'Saved with every change you make.', auditLog: 'Audit log', noLog: 'No log entries', allDates: 'All dates', dataVer: 'Data version', version: 'App version', updatedBy: 'Updated by', lastBy: 'by', range: 'Date range', oneMonth: 'Month', from: 'From', to: 'To', allTime: 'All time', byPerson: 'Received by person', soon: 'Due in the next 7 days', share: 'Share statement', stmtAsOf: 'Statement as of {d}',
    remindTitle: 'Interest reminders', remindHint: 'Notifications on this phone, sent only when interest is pending.', remindT1: 'First reminder', remindT2: 'Second reminder', turnOn: 'Turn on', turnOff: 'Turn off', sendTest: 'Send test', pushNo: 'Notifications are not supported here. On iPhone, add the app to the Home Screen first.', pushDenied: 'Notifications are blocked in the browser settings.', pushUnavail: 'Reminders need the online server and the sync key.', remindSet: 'Reminders set', testSent: 'Test sent', changeLog: 'Change log', built: 'Built', localChanges: 'local changes',
    server: 'Server address (blank = this site)', key: 'Sync key (if set on server)', syncNow: 'Sync now', online: 'Online', offline: 'Offline', pending: 'pending', synced: 'Synced', syncFail: 'Sync failed, will retry', syncErrShort: 'Sync failed', lastSync: 'Last sync', never: 'never', viewOnly: 'View only', viewOnlyHint: 'You can see everything, but this phone cannot change anything.', saved: 'Saved',
    log_person_add: 'Person added: {who}', log_person_edit: 'Person edited: {who}', log_person_del: 'Person deleted: {who}',
    log_loan_add: '{who}: loan added {amt} ({date})', log_loan_edit: '{who}: loan edited {amt} ({date})', log_loan_del: '{who}: loan deleted {amt} ({date})',
    log_pay_add: '{who}: received interest {int}, principal {prin} ({date})', log_pay_edit: '{who}: payment edited, interest {int}, principal {prin} ({date})', log_pay_del: '{who}: payment deleted, interest {int}, principal {prin} ({date})',
  },
  ta: {
    app: 'கடன் கணக்கு', home: 'நபர்கள்', month: 'மாதம்', settings: 'அமைப்புகள்', back: 'பின்', save: 'சேமி', cancel: 'ரத்து', del: 'நீக்கு', edit: 'திருத்து',
    addPerson: 'நபர் சேர்', name: 'பெயர்', note: 'குறிப்பு', search: 'தேடு…', noPeople: 'இன்னும் யாரும் இல்லை. + அழுத்தி நபரையும் கொடுத்த கடனையும் சேர்க்கவும்.',
    lent: 'நிலுவை அசல்', intDue: 'நிலுவை வட்டி', perMonth: 'மாத வட்டி', gotMonth: 'இம்மாதம் வரவு', total: 'வசூலிக்க வேண்டியது', advance: 'முன்கூட்டிய வட்டி',
    addLoan: 'கடன் சேர்', editLoan: 'கடன் திருத்து', loan: 'கடன்', amount: 'கொடுத்த தொகை', date: 'கொடுத்த தேதி', itype: 'வட்டி வகை', pct: 'மாதம் %', fix: 'மாதம் நிலையான ₹', rate: 'வட்டி விகிதம்', fixAmt: 'மாத வட்டி (₹)',
    paidUpto: 'பழைய கடன்: எந்தத் தேதி வரை வட்டி தீர்ந்தது (விருப்பம்)', paidUptoHint: 'இந்தத் தேதி வரை முடியும் மாதங்கள் நிலுவையாகக் கணக்கிடப்படாது. பழைய கடனுக்கு, இன்னும் உள்ள தொகையை இடவும் அல்லது பழைய அசல் வரவுகளைப் பதியவும்.',
    rateHint: 'தொகை அல்லது வட்டியை மாற்றினால் இந்தக் கடனின் எல்லா மாதங்களும் மீண்டும் கணக்கிடப்படும்.',
    receive: 'பணம் பெறு', receiveShort: 'பெறு', intPaid: 'பெற்ற வட்டி', prinPaid: 'பெற்ற அசல்', payDate: 'பெற்ற தேதி', editPay: 'வரவைத் திருத்து',
    balance: 'மீதி', nextDue: 'அடுத்த வட்டி தேதி', monthsDue: '{d} முதல் {n} மாதம் நிலுவை', upToDate: 'நிலுவை இல்லை', closed: 'முடிந்தது', statement: 'கணக்கு விவரம்', charge: 'வட்டி கணக்கு', given: 'கடன் கொடுத்தது', payment: 'வரவு',
    closing: 'இதனால் அசல் தீரும். இம்மாதம் உட்பட நிலுவை வட்டி: {amt}', after: 'இதன் பிறகு: அசல் {p}, நிலுவை வட்டி {i}',
    errName: 'பெயரை இடவும்', errAmount: '0-க்கு மேல் தொகை இடவும்', errRate: 'வட்டியை இடவும் (0 அல்லது மேல்)', errPay: 'பெற்ற வட்டி அல்லது அசலை இடவும்', errOver: 'பெற்ற அசல் மீதியை விட அதிகம் ({amt})', errEarly: 'தேதி கடன் கொடுத்த தேதிக்கு முந்தையது', errFuture: 'எதிர்கால தேதி அனுமதி இல்லை', errPaid: 'இந்தக் கடன் தேதிக்கு முன் ஒரு வரவு உள்ளது',
    confirmLoan: 'இந்தக் கடனையும் அதன் வரவுகளையும் நீக்கவா?', confirmPay: 'இந்த வரவை நீக்கவா?', confirmPerson: 'இவரையும் முடிந்த கடன்களையும் நீக்கவா?', cannotDel: 'நீக்க முடியாது: இவர் இன்னும் பணம் தர வேண்டும்.',
    charged: 'கணக்கான வட்டி', gotInt: 'பெற்ற வட்டி', gotPrin: 'பெற்ற அசல்', newLent: 'புதிதாகக் கொடுத்தது', pendingList: 'தற்போது நிலுவை வட்டி', payments: 'வரவுகள்', none: 'எதுவும் இல்லை', export: 'CSV பதிவிறக்கு',
    language: 'மொழி', auto: 'தானியங்கி (உலாவி மொழி)', yourName: 'உங்கள் பெயர்', yourNameHint: 'நீங்கள் செய்யும் ஒவ்வொரு மாற்றத்துடனும் சேமிக்கப்படும்.', auditLog: 'தணிக்கை பதிவு', noLog: 'பதிவுகள் இல்லை', allDates: 'அனைத்து நாட்கள்', dataVer: 'தரவு பதிப்பு', version: 'செயலி பதிப்பு', updatedBy: 'புதுப்பித்தவர்', lastBy: 'செய்தவர்', range: 'காலம்', oneMonth: 'மாதம்', from: 'முதல்', to: 'வரை', allTime: 'அனைத்துக் காலம்', byPerson: 'நபர் வாரியாக வரவு', soon: 'அடுத்த 7 நாட்களில் வரவேண்டியது', share: 'கணக்கைப் பகிர்', stmtAsOf: '{d} நிலவரக் கணக்கு',
    remindTitle: 'வட்டி நினைவூட்டல்கள்', remindHint: 'வட்டி நிலுவை இருக்கும்போது மட்டும் இந்த போனுக்கு அறிவிப்பு.', remindT1: 'முதல் நினைவூட்டல்', remindT2: 'இரண்டாம் நினைவூட்டல்', turnOn: 'இயக்கு', turnOff: 'நிறுத்து', sendTest: 'சோதனை அனுப்பு', pushNo: 'இங்கு அறிவிப்புகள் ஆதரிக்கப்படவில்லை. ஐபோனில் முதலில் செயலியை Home Screen-இல் சேர்க்கவும்.', pushDenied: 'உலாவி அமைப்புகளில் அறிவிப்புகள் தடுக்கப்பட்டுள்ளன.', pushUnavail: 'நினைவூட்டலுக்கு இணைய சர்வரும் ஒத்திசைவு விசையும் தேவை.', remindSet: 'நினைவூட்டல் அமைக்கப்பட்டது', testSent: 'சோதனை அனுப்பப்பட்டது', changeLog: 'மாற்றங்களின் பதிவு', built: 'உருவாக்கியது', localChanges: 'உள்ளூர் மாற்றங்கள்',
    server: 'சர்வர் முகவரி (காலி = இதே தளம்)', key: 'ஒத்திசைவு விசை (சர்வரில் இருந்தால்)', syncNow: 'இப்போது ஒத்திசை', online: 'இணைப்பில்', offline: 'இணைப்பு இல்லை', pending: 'நிலுவை', synced: 'ஒத்திசைந்தது', syncFail: 'ஒத்திசைவு தோல்வி, மீண்டும் முயற்சிக்கும்', syncErrShort: 'ஒத்திசைவு தோல்வி', lastSync: 'கடைசி ஒத்திசைவு', never: 'இல்லை', viewOnly: 'பார்வை மட்டும்', viewOnlyHint: 'நீங்கள் அனைத்தையும் பார்க்கலாம், ஆனால் இந்த போனில் மாற்றம் செய்ய முடியாது.', saved: 'சேமிக்கப்பட்டது',
    log_person_add: 'நபர் சேர்க்கப்பட்டார்: {who}', log_person_edit: 'நபர் திருத்தம்: {who}', log_person_del: 'நபர் நீக்கம்: {who}',
    log_loan_add: '{who}: கடன் சேர்ப்பு {amt} ({date})', log_loan_edit: '{who}: கடன் திருத்தம் {amt} ({date})', log_loan_del: '{who}: கடன் நீக்கம் {amt} ({date})',
    log_pay_add: '{who}: வரவு வட்டி {int}, அசல் {prin} ({date})', log_pay_edit: '{who}: வரவு திருத்தம், வட்டி {int}, அசல் {prin} ({date})', log_pay_del: '{who}: வரவு நீக்கம், வட்டி {int}, அசல் {prin} ({date})',
  },
};

/* ---------- helpers ---------- */
const $ = s => document.querySelector(s);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const uid = () => (crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(36) + Math.random().toString(36).slice(2, 10));
const dmy = s => s ? `${s.slice(8, 10)}/${s.slice(5, 7)}/${s.slice(2, 4)}` : '';
const money = n => (n < 0 ? '−' : '') + '₹' + (Math.round(Math.abs(n) * 100) / 100).toLocaleString('en-IN');
const sum = (a, f) => round(a.reduce((n, x) => n + (+f(x) || 0), 0));
let lang = 'en';
const detectLang = () => ((navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || 'en']).map(l => String(l).toLowerCase()).find(l => l.startsWith('ta') || l.startsWith('en')) || 'en').startsWith('ta') ? 'ta' : 'en';
const t = k => (I18N[lang] && I18N[lang][k]) || I18N.en[k] || k;
const tf = (k, v) => t(k).replace(/\{(\w+)\}/g, (m, x) => v[x] ?? '');

/* ---------- storage (IndexedDB, everything cached in memory) ---------- */
// record: {k, d:{...}, u:updatedAt, del:0|1, dirty:0|1, b:user}
// keys:  P:<id> person | N:<id> loan {pid} | T:<id> payment {lid} | G:… change history
let idb; const recs = new Map(); const meta = { mode: 'edit', remind: null, clockOffset: 0, user: '', lang: '', since: 0, dbId: '', server: '', key: '', lastSync: 0 };
function openDB() {
  return new Promise((res, rej) => {
    const r = indexedDB.open('lending-db', 1);
    r.onupgradeneeded = () => { r.result.createObjectStore('rec', { keyPath: 'k' }); r.result.createObjectStore('meta'); };
    r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error);
  });
}
const idbAll = st => new Promise(res => { const q = idb.transaction(st).objectStore(st).getAll(); q.onsuccess = () => res(q.result); });
const idbGet = (st, k) => new Promise(res => { const q = idb.transaction(st).objectStore(st).get(k); q.onsuccess = () => res(q.result); });
const idbPut = (st, v, k) => idb.transaction(st, 'readwrite').objectStore(st).put(v, k);
async function load() {
  idb = await openDB();
  (await idbAll('rec')).forEach(r => recs.set(r.k, r));
  for (const k of Object.keys(meta)) { const v = await idbGet('meta', k); if (v !== undefined) meta[k] = v; }
  lang = I18N[meta.lang] ? meta.lang : detectLang();
}
const saveMeta = (k, v) => { meta[k] = v; idbPut('meta', v, k); };
// "today" is the Indian date, corrected by the server clock once synced
const TZ = 'Asia/Kolkata';
const istDate = new Intl.DateTimeFormat('en-CA', { timeZone: TZ, year: 'numeric', month: '2-digit', day: '2-digit' });
const now = () => Date.now() + Math.round(meta.clockOffset || 0);
const today = () => istDate.format(new Date(now()));
const ro = () => meta.mode === 'view';
function writeRec(k, d, del) {
  const u = Math.max(now(), (recs.get(k)?.u || 0) + 1);
  const r = { k, d, u, del, dirty: 1, b: meta.user };
  recs.set(k, r); idbPut('rec', r); scheduleSync();
}
function put(k, d, del = 0) {
  if (ro()) { toast(t('viewOnly')); throw new Error('read only'); }
  if (!meta.user) { askName(); throw new Error('user name required'); } // every change is signed
  writeRec(k, d, del);
}
const remove = k => put(k, recs.get(k).d, 1);
// [[field, old, new]] for every field an edit actually changed
const diff = (old, next) => Object.keys(next).filter(k => String(old[k] ?? '') !== String(next[k] ?? '')).map(k => [k, old[k] ?? '', next[k]]);
const audit = (act, o) => put(`G:${now()}:${uid().slice(0, 6)}`, { act, ...o });

/* ---------- data ---------- */
const live = prefix => [...recs.values()].filter(r => !r.del && r.k.startsWith(prefix));
const get = (p, id) => { const r = recs.get(p + id); return r && !r.del ? { id, ...r.d } : null; };
const all = p => live(p).map(r => ({ id: r.k.slice(2), ...r.d }));
const paysOf = lid => all('T:').filter(p => p.lid === lid).sort((a, b) => a.date.localeCompare(b.date));
// every person with their loans and computed balances
function book() {
  const day = today(), pays = new Map(), loans = new Map();
  const group = (m, k, v) => (m.get(k) || m.set(k, []).get(k)).push(v);
  for (const p of all('T:')) group(pays, p.lid, p);
  for (const l of all('N:')) {
    const ps = (pays.get(l.id) || []).sort((a, b) => a.date.localeCompare(b.date));
    group(loans, l.pid, { ...l, pays: ps, st: loanState(l, ps, day) });
  }
  return all('P:').map(p => {
    const ls = (loans.get(p.id) || []).sort((a, b) => a.st.closed - b.st.closed || a.date.localeCompare(b.date));
    return {
      ...p, loans: ls,
      balance: sum(ls, l => l.st.balance),
      due: sum(ls, l => Math.max(0, l.st.due)),
      advance: sum(ls, l => Math.max(0, -l.st.due)),
      monthly: sum(ls, l => l.st.monthly),
      since: ls.map(l => l.st.since).filter(Boolean).sort()[0] || '',
    };
  });
}

/* ---------- sync ---------- */
let syncing = false, syncTimer, syncErr = false, syncMsg = '';
const pendingCount = () => (ro() ? 0 : [...recs.values()].filter(r => r.dirty).length);
function scheduleSync(ms = 1500) { updateSyncBtn(); clearTimeout(syncTimer); syncTimer = setTimeout(sync, ms); }
// `again`: something changed while a sync was running. `loading`: still downloading the first copy, page by page.
// `connection` goes up when the server or key changes, so a reply from the old one is thrown away.
// `busy`: show the syncing icon. Quiet background checks that finish quickly leave the button as it is.
let again = false, loading = false, busy = false, connection = 0;
async function sync(manual) {
  if (syncing) { again = true; return; }
  if (!navigator.onLine) { if (manual === true) toast(t('offline')); return; }
  busy = manual === true || syncErr || !meta.lastSync || pendingCount() > 0;
  syncing = true; again = false; syncErr = false; updateSyncBtn();
  const slow = setTimeout(() => { busy = true; updateSyncBtn(); }, 1000);
  const abort = new AbortController(), timeout = setTimeout(() => abort.abort(), 30000); // a hung request must not block later syncs
  const url = (meta.server || '').replace(/\/$/, '') + '/api/sync', conn = connection;
  try {
    const queue = meta.mode === 'edit' ? [...recs.values()].filter(r => r.dirty) : [], sent = queue.slice(0, 500), t0 = Date.now();
    const res = await fetch(url, {
      method: 'POST', signal: abort.signal,
      headers: { 'Content-Type': 'application/json', ...(meta.key ? { 'x-sync-key': meta.key } : {}) },
      body: JSON.stringify({ since: meta.since, records: sent.map(({ k, d, u, del, b }) => ({ k, d, u, del, b })) }),
    });
    if (!res.ok) throw new Error('HTTP ' + res.status + (res.status === 404 ? ' (no sync server at this address)' : res.status === 401 ? ' (wrong sync key)' : res.status === 503 ? ' (server busy or SYNC_KEY not set)' : ''));
    const out = await res.json().catch(() => null);
    if (!SyncCore.validReply(out)) throw new Error('unexpected reply (not the sync server)');
    if (conn !== connection) again = true;
    else {
      if (out.now) saveMeta('clockOffset', out.now - Math.round((t0 + Date.now()) / 2));
      const mode = out.mode === 'view' ? 'view' : 'edit', modeChanged = mode !== meta.mode;
      if (SyncCore.wasReset(meta, out)) { // the server's data was replaced or rolled back: compare everything again
        saveMeta('mode', mode);
        await startOver(out.dbId || '');
        again = true;
      } else {
        const first = !meta.since || loading;
        const { writes, changed } = SyncCore.applyReply(recs, sent, out);
        const next = { mode, since: out.seq, dbId: out.dbId || meta.dbId, lastSync: Date.now() };
        await SyncCore.commit(idb, writes, next, mode === 'view');
        if (conn === connection) Object.assign(meta, next);
        loading = first && !!out.more;
        // more to download, more to upload, or a new connection that has just been allowed to upload
        if (out.more || queue.length > sent.length || (modeChanged && pendingCount())) again = true;
        syncMsg = '';
        if (modeChanged || changed.length) render(true);
        const others = first ? [] : [...new Set(changed.map(r => r.b).filter(b => b && b !== meta.user))]; // whose changes just arrived
        if (others.length) toast(t('updatedBy') + ' ' + others.slice(0, 3).join(', '), 3000);
      }
    }
  } catch (e) {
    syncErr = true; syncMsg = e instanceof TypeError || e.name === 'AbortError' ? 'cannot reach server' : e.message;
    if (manual === true) toast(t('syncFail') + ' · ' + syncMsg);
  } finally {
    clearTimeout(timeout); clearTimeout(slow); syncing = false;
    if (again && !syncErr) scheduleSync(200); // after a failure the regular timer retries
    updateSyncBtn(); if (tab === 'set') render(true);
  }
}
// Forget the sync position and (if allowed to write) offer the server every record on this phone; newest wins.
function startOver(dbId) {
  const writes = meta.mode === 'view' ? [] : [...recs.values()].map(r => ({ ...r, dirty: 1 }));
  for (const r of writes) recs.set(r.k, r);
  Object.assign(meta, { since: 0, dbId });
  return SyncCore.commit(idb, writes, { since: 0, dbId }, false);
}
// a different server or key: download everything again, and upload what it doesn't have
function newConnection() {
  connection++; saveMeta('mode', 'probe');
  startOver('').catch(() => {}).then(() => sync(true));
}
// header button: one cloud icon per state, with the count of unsent changes
const CLOUD = '<path d="M7 18.5h10.5a4 4 0 0 0 .6-7.96A6 6 0 0 0 6.4 9.1 4.75 4.75 0 0 0 7 18.5Z"/>';
const SYNC_ICON = {
  ok: CLOUD + '<path d="M9 13.5l2.2 2.2 4-4"/>',
  busy: '<path d="M20 11a8 8 0 0 0-14.5-4M4 4v4h4M4 13a8 8 0 0 0 14.5 4M20 20v-4h-4"/>',
  pend: CLOUD + '<path d="M12 16v-5M9.7 13l2.3-2.3 2.3 2.3"/>',
  off: CLOUD + '<path d="M3.5 3.5l17 17"/>',
  bad: CLOUD + '<path d="M12 10.5v3M12 15.8h.01"/>',
};
// last successful sync and the data version, in front of the icon (always short, in either language)
const infoTime = new Intl.DateTimeFormat('en-IN', { timeZone: TZ, hour: 'numeric', minute: '2-digit', hour12: true });
function updateSyncInfo() {
  const el = $('#syncinfo'); if (!el) return;
  el.innerHTML = meta.lastSync ? `<span>⟳ ${dmy(istDate.format(new Date(meta.lastSync)))}, ${esc(infoTime.format(new Date(meta.lastSync)))}</span><span>DB v${esc(meta.since || '—')}</span>` : '';
  el.title = `${t('lastSync')} · ${t('dataVer')}`;
}
function updateSyncBtn() {
  updateSyncInfo();
  const b = $('#syncbtn'), p = pendingCount();
  const state = !navigator.onLine ? 'off' : syncing && busy ? 'busy' : syncErr ? 'bad' : p ? 'pend' : 'ok';
  const label = { off: t('offline'), busy: t('syncNow'), bad: t('syncErrShort'), pend: `${p} ${t('pending')}`, ok: t('synced') }[state];
  const count = p && state !== 'ok' && state !== 'busy' ? String(p) : '';
  b.className = 'sync ' + state; b.title = label; b.setAttribute('aria-label', label);
  const html = `<svg viewBox="0 0 24 24" aria-hidden="true">${SYNC_ICON[state]}</svg>${count ? `<b>${count}</b>` : ''}`;
  if (b.dataset.shown !== html) { b.dataset.shown = html; b.innerHTML = html; } // unchanged: leave the spin running
}
addEventListener('online', () => { updateSyncBtn(); sync(); });
addEventListener('offline', updateSyncBtn);
setInterval(() => { if (document.visibilityState === 'visible' ? navigator.onLine : pendingCount()) sync(); }, 15000);
// sync on coming back, and send anything unsent the moment the app is left
document.addEventListener('visibilitychange', () => { if (navigator.onLine && (document.visibilityState === 'visible' || pendingCount())) sync(); });

/* ---------- UI shell ---------- */
// URLs: #/people, #/person/<id>, #/monthly/<yyyy-mm>, #/report/<from>/<to>, #/settings, #/help, #/log
let ranged = false, repFrom = '', repTo = ''; // the Monthly tab shows one month, or any date range
let tab = 'month', pid = '', ym = '', q = '';
const TABS = [['month', '📊', 'month'], ['home', '👥', 'home'], ['set', '⚙️', 'settings']];
const hashFor = () => '#/' + (tab === 'person' ? 'person/' + pid : tab === 'month' ? (ranged ? `report/${repFrom}/${repTo}` : 'monthly/' + ym) : { home: 'people', set: 'settings', log: 'log', help: 'help' }[tab]);
const isDate = x => /^\d{4}-\d\d-\d\d$/.test(x || '');
function readHash() {
  const [a, b, c] = location.hash.replace(/^#\/?/, '').split('/');
  tab = { people: 'home', person: 'person', monthly: 'month', report: 'month', settings: 'set', log: 'log', help: 'help' }[a] || 'month';
  if (tab === 'person') pid = b || '';
  if (tab === 'month') {
    ranged = a === 'report';
    if (!ranged && /^\d{4}-\d\d$/.test(b || '')) ym = b;
    if (ranged) { if (isDate(b)) repFrom = b; if (isDate(c)) repTo = c; }
  }
}
function go(to) { tab = to; history.pushState(null, '', hashFor()); render(); scrollTo(0, 0); }
addEventListener('popstate', () => { readHash(); render(); });
function toast(m, ms) { const e = $('#toast'); e.textContent = m; e.classList.add('show'); clearTimeout(toast.t); toast.t = setTimeout(() => e.classList.remove('show'), ms || 1800); }
function render(soft) {
  document.documentElement.lang = lang;
  const rb = $('#robadge'); rb.hidden = !ro(); rb.textContent = '👁'; rb.title = t('viewOnly'); rb.setAttribute('aria-label', t('viewOnly'));
  $('#title').textContent = t('app'); document.title = t('app');
  const on = k => tab === k || (k === 'home' && tab === 'person') || (k === 'set' && (tab === 'log' || tab === 'help'));
  $('#nav').innerHTML = TABS.map(([k, ic, l]) => `<button data-act="tab" data-v="${k}" class="${on(k) ? 'on' : ''}"><span>${ic}</span>${esc(t(l))}</button>`).join('');
  updateSyncBtn();
  // don't wipe a field someone is typing in when a sync arrives
  if (soft && document.activeElement && document.activeElement.matches('main input:not([type=date])')) { if (tab === 'home') drawPeople(); return; }
  $('#view').innerHTML = { home: homeView, person: personView, month: monthView, set: setView, log: logView, help: helpView }[tab]();
  if (tab === 'home') drawPeople();
}
const stat = (v, l, bad) => `<div class="${bad ? 'bad' : ''}"><b>${money(v)}</b><small>${esc(t(l))}</small></div>`;
const kv = (l, v, cls = '') => `<div class="kv"><span class="mu">${esc(t(l))}</span><b class="${cls}">${v}</b></div>`;
const dueTag = x => x.due > 0 ? `<span class="tag bad">${esc(x.since ? tf('monthsDue', { n: x.monthsDue, d: dmy(x.since) }) : t('intDue'))}</span>` : '';

/* ---------- people ---------- */
function homeView() {
  const b = book(), m = today().slice(0, 7), got = all('T:').filter(p => p.date.startsWith(m));
  return `<div class="stats two2">${stat(sum(b, p => p.balance), 'lent')}${stat(sum(b, p => p.due), 'intDue', true)}${stat(sum(b, p => p.monthly), 'perMonth')}${stat(sum(got, p => p.int + p.prin), 'gotMonth')}</div>
    <div class="card kv"><span>${esc(t('total'))}</span><b>${money(sum(b, p => p.balance + p.due))}</b></div>
    ${b.length ? `<input id="q" type="search" placeholder="${esc(t('search'))}" value="${esc(q)}" style="margin-bottom:10px">` : ''}
    <div id="people"></div>${ro() ? '' : `<div style="height:84px"></div>${fab('addperson', 'addPerson')}`}`;
}
const fab = (act, label) => `<button class="fab" data-act="${act}" aria-label="${esc(t(label))}" title="${esc(t(label))}"><svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true"><path d="M12 5v14M5 12h14" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round"/></svg></button>`;
function drawPeople() {
  const el = $('#people'); if (!el) return;
  // longest-pending interest first, then whoever still owes, then name
  const list = book().filter(p => !q || p.name.toLowerCase().includes(q.toLowerCase()))
    .sort((a, b) => (a.since || '9').localeCompare(b.since || '9') || (b.balance > 0) - (a.balance > 0) || a.name.localeCompare(b.name));
  el.innerHTML = list.length ? list.map(p => {
    const months = Math.max(0, ...p.loans.map(l => l.st.monthsDue));
    return `<div class="card" data-act="person" data-id="${esc(p.id)}">
      <div class="row sp"><span class="name">${esc(p.name)}</span><b>${money(p.balance)}</b></div>
      <div class="row sp"><span class="mu">${esc(t('perMonth'))}: ${money(p.monthly)}</span>${p.due > 0 ? `<b class="amt-ex">${esc(t('intDue'))} ${money(p.due)}</b>` : `<span class="tag">${esc(t(p.loans.length && !p.balance ? 'closed' : 'upToDate'))}</span>`}</div>
      ${p.due > 0 ? `<div style="margin-top:6px">${dueTag({ ...p, monthsDue: months })}</div>` : ''}</div>`;
  }).join('') : `<div class="empty">${esc(t('noPeople'))}</div>`;
}

/* ---------- one person ---------- */
function lastBy(k) { const r = recs.get(k); return r && r.b ? `<div class="mu">✎ ${esc(t('lastBy'))} ${esc(r.b)} · ${fmtT(r.u)}</div>` : ''; }
function statement(l) {
  const rows = [{ date: l.date, o: 0, label: t('given'), val: money(l.amount) },
    ...l.st.charges.map(c => ({ date: c.date, o: 1, label: `${t('charge')} (${money(c.bal)})`, val: money(c.amt), cls: 'amt-ex' })),
    ...l.pays.map(p => ({ date: p.date, o: 2, id: p.id, label: [t('payment'), p.note].filter(Boolean).join(' · '), val: [p.int ? `${t('intPaid')} ${money(p.int)}` : '', p.prin ? `${t('prinPaid')} ${money(p.prin)}` : ''].filter(Boolean).map(esc).join('<br>'), html: true, cls: 'amt-in' }))]
    .sort((a, b) => b.date.localeCompare(a.date) || b.o - a.o);
  return `<table><tbody>${rows.map(r => `<tr ${r.id && !ro() ? `data-act="editpay" data-id="${esc(r.id)}"` : ''}><td>${dmy(r.date)}</td><td style="text-align:left">${esc(r.label)}${r.id && !ro() ? ' ✎' : ''}${r.id ? lastBy('T:' + r.id) : ''}</td><td class="${r.cls || ''}">${r.html ? r.val : esc(r.val)}</td></tr>`).join('')}</tbody></table>`;
}
function personView() {
  const p = book().find(x => x.id === pid);
  const back = `<div class="row" style="margin-bottom:10px"><button class="btn sec sm" data-act="tab" data-v="home">‹ ${esc(t('back'))}</button><span class="grow"></span>${p && !ro() ? `<button class="btn sec sm" data-act="editperson">✎ ${esc(t('edit'))}</button><button class="btn dng sm" data-act="delperson">${esc(t('del'))}</button>` : ''}</div>`;
  if (!p) return back + `<div class="empty">${esc(t('none'))}</div>`;
  const opened = new Set([...document.querySelectorAll('details[data-loan][open]')].map(d => d.dataset.loan));
  return back + `<div class="card"><span class="name">${esc(p.name)}</span>
      ${p.note ? `<div class="mu">${esc(p.note)}</div>` : ''}${lastBy('P:' + p.id)}
      ${kv('lent', money(p.balance))}${kv('intDue', money(p.due), p.due ? 'amt-ex' : '')}${p.advance ? kv('advance', money(p.advance), 'amt-in') : ''}${kv('perMonth', money(p.monthly))}${kv('total', money(p.balance + p.due))}</div>` +
    p.loans.map(l => {
      const s = l.st;
      return `<div class="card" style="${s.closed ? 'opacity:.7' : ''}">
        <div class="row sp"><b>${esc(t('loan'))} ${money(l.amount)} · ${dmy(l.date)}</b>${ro() ? '' : `<button class="rate" data-act="editloan" data-id="${esc(l.id)}">✎</button>`}</div>
        <div class="mu">${l.itype === 'fix' ? `${money(l.rate)} ${esc(t('fix'))}` : `${esc(l.rate)} ${esc(t('pct'))}`}</div>${lastBy('N:' + l.id)}
        ${kv('balance', money(s.balance))}
        ${s.due < 0 ? kv('advance', money(-s.due), 'amt-in') : kv('intDue', money(s.due), s.due ? 'amt-ex' : '')}
        ${s.nextDue ? kv('nextDue', `${dmy(s.nextDue)} · ${money(s.nextAmt)}`) : ''}
        <div style="margin:6px 0">${s.closed ? `<span class="tag">${esc(t('closed'))}</span>` : s.due > 0 ? dueTag(s) : `<span class="tag">${esc(t('upToDate'))}</span>`}</div>
        ${ro() || s.closed ? '' : `<button class="btn full" data-act="pay" data-id="${esc(l.id)}">₹ ${esc(t('receive'))}</button>`}
        <details data-loan="${esc(l.id)}" ${opened.has(l.id) ? 'open' : ''} style="margin-top:10px"><summary>${esc(t('statement'))}</summary>${statement(l)}</details></div>`;
    }).join('') + `<button class="btn sec full" style="margin-bottom:10px" data-act="share">📤 ${esc(t('share'))}</button>` + (ro() ? '' : `<button class="btn sec full" data-act="addloan">＋ ${esc(t('addLoan'))}</button>`);
}

/* ---------- share a statement (amounts and dates only, never the private notes) ---------- */
function statementText(p) {
  const lines = [p.name, tf('stmtAsOf', { d: dmy(today()) })];
  for (const l of p.loans) {
    const s = l.st;
    lines.push('', `${t('loan')} ${money(l.amount)} · ${dmy(l.date)}`, l.itype === 'fix' ? `${money(l.rate)} ${t('fix')}` : `${l.rate} ${t('pct')}`);
    for (const x of l.pays) lines.push(`${dmy(x.date)}: ${[x.int ? `${t('intPaid')} ${money(x.int)}` : '', x.prin ? `${t('prinPaid')} ${money(x.prin)}` : ''].filter(Boolean).join(', ')}`);
    lines.push(`${t('balance')}: ${money(s.balance)}`, s.due < 0 ? `${t('advance')}: ${money(-s.due)}` : `${t('intDue')}: ${money(s.due)}`);
    if (s.nextDue) lines.push(`${t('nextDue')}: ${dmy(s.nextDue)} · ${money(s.nextAmt)}`);
  }
  lines.push('', `${t('total')}: ${money(p.balance + p.due)}`);
  return lines.join('\n');
}
async function shareStatement() { // the phone's share sheet (WhatsApp etc.), or WhatsApp's web link where there is none
  const p = book().find(x => x.id === pid); if (!p) return;
  const text = statementText(p);
  if (navigator.share) { try { await navigator.share({ text }); return; } catch (e) { if (e.name === 'AbortError') return; } }
  window.open('https://wa.me/?text=' + encodeURIComponent(text), '_blank', 'noopener');
}

/* ---------- forms ---------- */
// the browser's own date box follows the phone's locale, so show dd/mm/yy on top of it
const dateInput = (attrs, value) => `<span class="dpick"><span>${esc(value ? dmy(value) : 'dd/mm/yy')} 📅</span><input type="date" ${attrs} value="${esc(value)}" aria-label="${esc(t('date'))}"></span>`;
const dateField = (label, name, attrs, value) => `<label>${esc(t(label))}</label>${dateInput(`name="${name}" ${attrs}`, value)}`;
const field = (label, name, attrs = '', value = '') => `<label>${esc(t(label))}</label><input name="${name}" ${attrs} value="${esc(value)}">`;
const num = 'type="number" inputmode="decimal" min="0" step="any"';
// onSave returns an error key/text to keep the dialog open
function openForm(title, body, onSave, onDelete) {
  if (ro()) return toast(t('viewOnly'));
  if (!meta.user) return askName();
  const dlg = $('#dlg');
  dlg.innerHTML = `<form id="form" novalidate><h2>${esc(title)}</h2>${body}<p class="err" id="err"></p>
    <div class="row" style="margin-top:10px">${onDelete ? `<button type="button" class="btn dng" id="fdel">${esc(t('del'))}</button>` : ''}<span class="grow"></span>
    <button type="button" class="btn sec" id="fcancel">${esc(t('cancel'))}</button><button class="btn">${esc(t('save'))}</button></div></form>`;
  const form = $('#form');
  form.onsubmit = e => {
    e.preventDefault();
    const err = onSave(Object.fromEntries(new FormData(form)));
    if (err) { $('#err').textContent = err; return; }
    dlg.close(); render(); toast(t('saved'));
  };
  form.addEventListener('input', () => { $('#err').textContent = ''; });
  $('#fcancel').onclick = () => dlg.close();
  if (onDelete) $('#fdel').onclick = () => { if (onDelete() !== false) { dlg.close(); render(); } };
  dlg.showModal();
  return form;
}
const loanFields = l => `<div class="two"><div>${field('amount', 'amount', num, l.amount ?? '')}</div><div>${dateField('date', 'date', `max="${today()}"`, l.date || today())}</div></div>
  <div class="two"><div><label>${esc(t('itype'))}</label><select name="itype"><option value="pct">${esc(t('pct'))}</option><option value="fix" ${l.itype === 'fix' ? 'selected' : ''}>${esc(t('fix'))}</option></select></div>
  <div><label id="ratelbl">${esc(t(l.itype === 'fix' ? 'fixAmt' : 'rate'))}</label><input name="rate" ${num} value="${esc(l.rate ?? '')}"></div></div>
  ${dateField('paidUpto', 'paidUpto', `max="${today()}"`, l.paidUpto || '')}<p class="mu">${esc(t('paidUptoHint'))}</p>`;
function readLoan(v) {
  const amount = round(+v.amount), rate = +v.rate;
  if (!(amount > 0)) return t('errAmount');
  if (v.rate === '' || !(rate >= 0)) return t('errRate');
  if (!v.date) return t('date');
  if (v.date > today() || v.paidUpto > today()) return t('errFuture');
  return { amount, date: v.date, itype: v.itype === 'fix' ? 'fix' : 'pct', rate, paidUpto: v.paidUpto || '' };
}
function personDialog(id) {
  const p = id ? get('P:', id) : {};
  openForm(t(id ? 'edit' : 'addPerson'), field('name', 'name', 'autocomplete="off"', p.name || '') + field('note', 'note', '', p.note || '') + (id ? '' : loanFields({})), v => {
    const name = v.name.trim(); if (!name) return t('errName');
    const loan = id ? null : readLoan(v); if (typeof loan === 'string') return loan;
    const nid = id || uid(), next = { name, note: v.note.trim() }, chg = id ? diff(p, next) : [];
    put('P:' + nid, next);
    if (!id || chg.length) audit(id ? 'person_edit' : 'person_add', { who: name, chg });
    if (loan) { put('N:' + uid(), { pid: nid, ...loan }); audit('loan_add', { who: name, amt: loan.amount, date: loan.date }); pid = nid; tab = 'person'; history.pushState(null, '', hashFor()); }
  });
}
function loanDialog(id) {
  const l = id ? get('N:', id) : {}, who = get('P:', id ? l.pid : pid).name;
  openForm(t(id ? 'editLoan' : 'addLoan'), loanFields(l) + (id ? `<p class="mu">${esc(t('rateHint'))}</p>` : ''), v => {
    const loan = readLoan(v); if (typeof loan === 'string') return loan;
    if (id) {
      const ps = paysOf(id);
      if (ps.some(p => p.date < loan.date)) return t('errPaid');
      if (sum(ps, p => p.prin) > loan.amount) return tf('errOver', { amt: money(loan.amount) });
    }
    const chg = id ? diff(l, loan) : [];
    put('N:' + (id || uid()), { pid: id ? l.pid : pid, ...loan });
    if (!id || chg.length) audit(id ? 'loan_edit' : 'loan_add', { who, amt: loan.amount, date: loan.date, chg });
  }, id && (() => {
    if (!confirm(t('confirmLoan'))) return false;
    for (const p of paysOf(id)) remove('T:' + p.id);
    remove('N:' + id); audit('loan_del', { who, amt: l.amount, date: l.date });
  }));
}
function payDialog(loanId, payId) {
  const old = payId ? get('T:', payId) : null, id = old ? old.lid : loanId, loan = get('N:', id), who = get('P:', loan.pid).name;
  const others = () => paysOf(id).filter(p => p.id !== payId);
  const owed = round(loan.amount - sum(others(), p => p.prin)); // principal still owed without this payment
  const suggest = old ? old.int : Math.max(0, loanState(loan, others(), today()).due);
  const form = openForm(`${t(old ? 'editPay' : 'receive')} · ${who}`,
    `<p class="mu">${esc(t('balance'))}: ${money(owed)} · ${esc(t('intDue'))}: ${money(suggest)}</p>
    ${dateField('payDate', 'date', `min="${loan.date}" max="${today()}"`, old ? old.date : today())}
    <div class="two"><div>${field('intPaid', 'int', num, suggest || '')}</div><div>${field('prinPaid', 'prin', num, old ? old.prin || '' : '')}</div></div>
    ${field('note', 'note', '', old ? old.note || '' : '')}<p class="mu" id="preview"></p>`,
    v => {
      const int = round(+v.int || 0), prin = round(+v.prin || 0);
      if (int < 0 || prin < 0 || !(int + prin > 0)) return t('errPay');
      if (!v.date || v.date < loan.date) return t('errEarly');
      if (v.date > today()) return t('errFuture');
      if (prin > owed) return tf('errOver', { amt: money(owed) });
      const next = { date: v.date, int, prin, note: v.note.trim() }, chg = old ? diff(old, next) : [];
      put('T:' + (payId || uid()), { lid: id, ...next });
      if (!old || chg.length) audit(old ? 'pay_edit' : 'pay_add', { who, int, prin, date: v.date, chg });
    }, old && (() => {
      if (!confirm(t('confirmPay'))) return false;
      remove('T:' + payId); audit('pay_del', { who, int: old.int, prin: old.prin, date: old.date });
    }));
  if (!form) return;
  const preview = () => { // show the effect before saving
    const v = Object.fromEntries(new FormData(form)), int = +v.int || 0, prin = +v.prin || 0;
    if (!v.date) return;
    const s = loanState(loan, [...others(), { date: v.date, int, prin }], today());
    $('#preview').textContent = prin > 0 && prin === owed ? tf('closing', { amt: money(Math.max(0, s.due + int)) }) + ' · ' + tf('after', { p: money(s.balance), i: money(s.due) }) : tf('after', { p: money(s.balance), i: money(s.due) });
  };
  form.oninput = preview; preview();
}
function delPerson() {
  const p = book().find(x => x.id === pid);
  if (p.loans.some(l => !l.st.closed)) return alert(t('cannotDel'));
  if (!confirm(t('confirmPerson'))) return;
  // closed loans and their payments stay, so past monthly totals remain correct; the person is only hidden
  remove('P:' + pid); audit('person_del', { who: p.name }); go('home');
}

/* ---------- monthly report ---------- */
const shiftMonth = (m, n) => addMonths(m + '-01', n).slice(0, 7);
const personName = id => { const r = recs.get('P:' + id); return r ? r.d.name : '?'; }; // deleted people keep their name in history
function periodData(from, to) {
  const day = today(), loans = all('N:'), pays = all('T:'), within = d => d >= from && d <= to;
  const charged = sum(loans, l => sum(loanState(l, pays.filter(p => p.lid === l.id), day).charges.filter(c => within(c.date)), c => c.amt));
  const list = pays.filter(p => within(p.date)).sort((a, b) => b.date.localeCompare(a.date));
  return { charged, pays: list, int: sum(list, p => p.int), prin: sum(list, p => p.prin), lent: sum(loans.filter(l => within(l.date)), l => l.amount) };
}
// one row per loan that owes interest; the loan is named only when the person has more than one waiting
function pendingRows(p) {
  const owing = p.loans.filter(l => l.st.due > 0);
  return owing.map(l => `<div class="row lrow" data-act="person" data-id="${esc(p.id)}">
    <div class="grow"><span class="name">${esc(p.name)}</span><span class="mu">${owing.length > 1 ? `${esc(t('loan'))} ${money(l.amount)} · ${dmy(l.date)}` : dmy(l.st.since)}</span></div>
    <b class="amt-ex">${money(l.st.due)}</b>${ro() ? '' : `<button class="btn sm" data-act="pay" data-id="${esc(l.id)}">₹ ${esc(t('receiveShort'))}</button>`}</div>`).join('');
}
// loans whose next interest date falls within a week, less anything already paid in advance
function soonRows(people) {
  const limit = new Date(Date.parse(today()) + 7 * 864e5).toISOString().slice(0, 10);
  return people.flatMap(p => p.loans.map(l => ({ p, l, amt: round(l.st.nextAmt + Math.min(0, l.st.due)) })))
    .filter(x => x.amt > 0 && x.l.st.nextDue <= limit).sort((a, b) => a.l.st.nextDue.localeCompare(b.l.st.nextDue))
    .map(x => `<div class="row lrow" data-act="person" data-id="${esc(x.p.id)}"><div class="grow"><span class="name">${esc(x.p.name)}</span><span class="mu">${dmy(x.l.st.nextDue)}</span></div><b>${money(x.amt)}</b></div>`).join('');
}
const firstDate = () => [...all('N:'), ...all('T:')].map(x => x.date).sort()[0] || today();
function monthView() {
  const cur = today().slice(0, 7);
  // every date in a month sorts between its "-01" and "-31"
  const d = ranged ? periodData(repFrom, repTo) : periodData(ym + '-01', ym + '-31');
  const title = new Date(ym + '-01T00:00:00').toLocaleDateString(lang === 'ta' ? 'ta-IN' : 'en-IN', { month: 'long', year: 'numeric' });
  const people = book(), pend = people.filter(p => p.due > 0).sort((a, b) => b.due - a.due), soon = soonRows(people);
  const loanById = id => (recs.get('N:' + id) || { d: {} }).d;
  const who = new Map(); // interest and principal received per person in this period
  for (const p of d.pays) { const id = loanById(p.lid).pid, o = who.get(id) || { int: 0, prin: 0 }; o.int = round(o.int + p.int); o.prin = round(o.prin + p.prin); who.set(id, o); }
  const table = rows => rows.length ? `<table><thead><tr><th>${esc(t('name'))}</th><th>${esc(t('intPaid'))}</th><th>${esc(t('prinPaid'))}</th></tr></thead><tbody>${rows.join('')}</tbody></table>` : `<div class="empty">${esc(t('none'))}</div>`;
  const row = (id, x, sub) => `<tr data-act="person" data-id="${esc(id)}"><td>${esc(personName(id))}${sub ? `<div class="mu">${sub}</div>` : ''}</td><td>${money(x.int)}</td><td>${money(x.prin)}</td></tr>`;
  return `<div class="gsel" style="margin-bottom:10px"><button class="${ranged ? '' : 'on'}" data-act="range" data-v="">${esc(t('oneMonth'))}</button><button class="${ranged ? 'on' : ''}" data-act="range" data-v="1">${esc(t('range'))}</button></div>` +
    (ranged ? `<div class="card two"><div><label>${esc(t('from'))}</label>${dateInput(`id="rf" max="${today()}"`, repFrom)}</div><div><label>${esc(t('to'))}</label>${dateInput(`id="rt" max="${today()}"`, repTo)}</div></div>
      <button class="btn sec full" style="margin-bottom:10px" data-act="alltime">${esc(t('allTime'))}</button>`
      : `<div class="date"><button class="btn sec" data-act="shift" data-v="-1">‹</button><div class="grow card" style="margin:0;text-align:center;font-weight:600">${esc(title)}</div><button class="btn sec" data-act="shift" data-v="1" ${ym >= cur ? 'disabled' : ''}>›</button></div>`) +
    `<div class="stats two2">${stat(d.charged, 'charged')}${stat(d.int, 'gotInt')}${stat(d.prin, 'gotPrin')}${stat(d.lent, 'newLent')}</div>
    ${ranged ? `<div class="secthead">${esc(t('byPerson'))}</div><div class="card">${table([...who].sort((a, b) => b[1].int - a[1].int).map(([id, x]) => row(id, x)))}</div>` : ''}
    <div class="secthead">${esc(t('pendingList'))}</div><div class="card">${pend.length ? pend.map(pendingRows).join('') : `<div class="empty">${esc(t('upToDate'))}</div>`}</div>
    ${soon ? `<div class="secthead">${esc(t('soon'))}</div><div class="card">${soon}</div>` : ''}
    <div class="secthead">${esc(t('payments'))}</div><div class="card">${table(d.pays.map(p => row(loanById(p.lid).pid, p, dmy(p.date))))}</div>
    <button class="btn sec full" data-act="csv">⬇ ${esc(t('export'))}</button>`;
}
function exportCSV() {
  const b = book(), loans = new Map(all('N:').map(l => [l.id, l]));
  const rows = [[t('name'), t('date'), t('amount'), t('itype'), t('rate'), t('balance'), t('intDue')],
    ...b.flatMap(p => p.loans.map(l => [p.name, dmy(l.date), l.amount, t(l.itype), l.rate, l.st.balance, l.st.due])),
    [], [t('payDate'), t('name'), t('intPaid'), t('prinPaid'), t('note')],
    ...all('T:').sort((a, b) => a.date.localeCompare(b.date)).map(p => [dmy(p.date), personName((loans.get(p.lid) || {}).pid), p.int, p.prin, p.note])];
  // text starting with = + - @ would run as a formula in a spreadsheet
  const cell = c => { let s = String(c ?? ''); if (typeof c === 'string' && /^[=+\-@]/.test(s)) s = "'" + s; return `"${s.replace(/"/g, '""')}"`; };
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob(['﻿' + rows.map(r => r.map(cell).join(',')).join('\n')], { type: 'text/csv' }));
  a.download = `lending_${today()}.csv`; a.click();
}

/* ---------- change history, settings ---------- */
const fmtT = u => `${dmy(istDate.format(new Date(u)))}, ${new Date(u).toLocaleTimeString(lang === 'ta' ? 'ta-IN' : 'en-IN', { timeZone: TZ, hour: '2-digit', minute: '2-digit' })}`;
const FIELD = { name: 'name', note: 'note', amount: 'amount', date: 'date', itype: 'itype', rate: 'rate', paidUpto: 'paidUpto', int: 'intPaid', prin: 'prinPaid' };
function fmtChg(chg) {
  if (!Array.isArray(chg) || !chg.length) return '';
  const val = (k, x) => x === '' || x == null ? '—' : k === 'date' || k === 'paidUpto' ? dmy(String(x)) : k === 'itype' ? t(x) : ['amount', 'int', 'prin'].includes(k) ? money(+x) : x;
  return chg.map(([k, a, b]) => `<div class="mu">${esc(t(FIELD[k] || k))}: ${esc(val(k, a))} → <b>${esc(val(k, b))}</b></div>`).join('');
}
const logText = o => esc(tf('log_' + o.act, { who: o.who, date: dmy(o.date), amt: money(+o.amt || 0), int: money(+o.int || 0), prin: money(+o.prin || 0) }));
let logDate = ''; // filter: the day the change was made
function logView() {
  const items = live('G:').filter(r => !logDate || istDate.format(new Date(r.u)) === logDate).sort((a, b) => b.u - a.u).slice(0, 300);
  return `<div class="row" style="margin-bottom:10px"><button class="btn sec sm" data-act="tab" data-v="set">‹ ${esc(t('back'))}</button>
    ${dateInput(`id="logdate" max="${today()}"`, logDate)}<button class="btn sec sm" data-act="logall">${esc(t('allDates'))}</button></div>` +
    (items.length ? items.map(r => `<div class="card"><div>${logText(r.d)}</div>${fmtChg(r.d.chg)}<div class="mu">${esc(r.b)} · ${fmtT(r.u)}</div></div>`).join('') : `<div class="empty">${esc(t('noLog'))}</div>`);
}

/* ---------- app version (public/version.json, written at build time) ---------- */
let ver = null;
async function loadVersion() {
  try { const r = await fetch('version.json'); if (r.ok) { ver = await r.json(); if (tab === 'set') render(true); } } catch {}
}
const fmtD = d => d ? dmy(istDate.format(new Date(d))) : '';
function verCard() {
  if (!ver) return '';
  return `<div class="card"><div class="row sp"><b>${esc(t('version'))}</b><span><code>${esc(ver.short || '—')}</code>${ver.dirty ? ` <span class="mu">+ ${esc(t('localChanges'))}</span>` : ''}</span></div>
    <div class="mu">${esc(fmtD(ver.date))}${ver.built ? ` · ${esc(t('built'))} ${esc(fmtT(Date.parse(ver.built)))}` : ''}</div>
    ${ver.log && ver.log.length ? `<details style="margin-top:8px"><summary>${esc(t('changeLog'))}</summary>${ver.log.map(c => `<div style="padding:6px 0;border-bottom:1px solid var(--bd)"><div>${esc(c.s)}</div><div class="mu"><code>${esc(c.h)}</code> · ${esc(fmtD(c.d))}</div></div>`).join('')}</details>` : ''}</div>`;
}

/* ---------- push reminders (defaults: 9:15 AM and 5:00 PM IST) ---------- */
const pushOK = () => 'serviceWorker' in navigator && 'PushManager' in window && 'Notification' in window;
const remindCfg = () => ({ on: false, t1: '09:15', t2: '17:00', ...(meta.remind || {}) });
const apiUrl = p => (meta.server || '').replace(/\/$/, '') + p;
const apiHdr = () => ({ 'Content-Type': 'application/json', ...(meta.key ? { 'x-sync-key': meta.key } : {}) });
const b64 = s => Uint8Array.from(atob((s + '='.repeat((4 - s.length % 4) % 4)).replace(/-/g, '+').replace(/_/g, '/')), c => c.charCodeAt(0));
async function pushSubscribe() { // create/refresh this phone's subscription and its reminder settings on the server
  const reg = await navigator.serviceWorker.ready, c = remindCfg();
  let sub = await reg.pushManager.getSubscription();
  if (!sub) {
    const kr = await fetch(apiUrl('/api/push/key'), { headers: apiHdr() });
    if (!kr.ok) throw new Error('unavailable');
    sub = await reg.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: b64((await kr.json()).key) });
  }
  const r = await fetch(apiUrl('/api/push/subscribe'), { method: 'POST', headers: apiHdr(), body: JSON.stringify({
    sub: sub.toJSON(), times: [c.t1, c.t2].filter(Boolean), tz: TZ, lang, user: meta.user }) });
  if (!r.ok) throw new Error('unavailable');
}
async function remindOn() {
  if (!pushOK()) return toast(t('pushNo'));
  if ((await Notification.requestPermission()) !== 'granted') return toast(t('pushDenied'));
  saveMeta('remind', { ...remindCfg(), on: true });
  try { await pushSubscribe(); toast(t('remindSet')); } catch { saveMeta('remind', { ...remindCfg(), on: false }); toast(t('pushUnavail')); }
  render();
}
async function remindOff() {
  saveMeta('remind', { ...remindCfg(), on: false });
  try {
    const sub = await (await navigator.serviceWorker.ready).pushManager.getSubscription();
    if (sub) { await fetch(apiUrl('/api/push/unsubscribe'), { method: 'POST', headers: apiHdr(), body: JSON.stringify({ endpoint: sub.endpoint }) }).catch(() => {}); await sub.unsubscribe(); }
  } catch {}
  render();
}
async function remindTest() {
  try {
    const sub = await (await navigator.serviceWorker.ready).pushManager.getSubscription();
    const r = sub && await fetch(apiUrl('/api/push/test'), { method: 'POST', headers: apiHdr(), body: JSON.stringify({ endpoint: sub.endpoint, lang }) });
    toast(r && r.ok ? t('testSent') : t('pushUnavail'));
  } catch { toast(t('pushUnavail')); }
}
function remindCard() {
  if (ro()) return '';
  const c = remindCfg(), on = c.on && pushOK() && Notification.permission === 'granted';
  return `<div class="card"><b>🔔 ${esc(t('remindTitle'))}</b><p class="mu">${esc(t('remindHint'))}</p>` + (!pushOK() ? `<p class="mu">${esc(t('pushNo'))}</p>` :
    `<div class="two"><div><label>${esc(t('remindT1'))}</label><input type="time" id="rt1" value="${esc(c.t1)}"></div><div><label>${esc(t('remindT2'))}</label><input type="time" id="rt2" value="${esc(c.t2)}"></div></div>
    <div class="row" style="margin-top:12px">${on ? `<button class="btn dng grow" data-act="remindoff">${esc(t('turnOff'))}</button><button class="btn sec grow" data-act="remindtest">${esc(t('sendTest'))}</button>` : `<button class="btn grow" data-act="remindon">${esc(t('turnOn'))}</button>`}</div>`) + '</div>';
}

/* ---------- help (English + Tamil). The sync key is deliberately NOT written here. ---------- */
const HELP = {
  en: ['Open the app in Chrome (Android) or Safari (iPhone), then choose <b>Add to Home screen</b> to install it.',
    'In <b>Settings</b>, type <b>Your name</b> and the <b>Sync key</b> the owner gave you. Leave <b>Server address</b> empty, then tap <b>Sync now</b>.',
    'Add a borrower: <b>People</b> → <b>+</b>. Enter the amount lent, the date and the monthly interest.',
    'Record money received: tap <b>₹ Receive</b> on the <b>Monthly</b> tab, or open the person and tap <b>Receive payment</b>. Enter interest, principal or both.',
    'Fix a mistake: open the person → <b>Statement</b> → tap the payment. Use ✎ on a loan to change it.',
    'Send a borrower their account: open the person → <b>Share statement</b>.',
    'The app works without internet and syncs when the internet comes back.'],
  ta: ['Android-இல் Chrome அல்லது iPhone-இல் Safari-யில் செயலியைத் திறந்து, <b>Add to Home screen</b> தேர்ந்தெடுத்து நிறுவவும்.',
    '<b>அமைப்புகள்</b>-இல் <b>உங்கள் பெயர்</b>, உரிமையாளர் கொடுத்த <b>ஒத்திசைவு விசை</b> இடவும். <b>சர்வர் முகவரி</b>-யை காலியாக விட்டு <b>இப்போது ஒத்திசை</b> தொடவும்.',
    'கடன் வாங்கியவரைச் சேர்க்க: <b>நபர்கள்</b> → <b>+</b>. கொடுத்த தொகை, தேதி, மாத வட்டியை இடவும்.',
    'பணம் பெற்றதைப் பதிய: <b>மாதம்</b> பக்கத்தில் <b>₹ பெறு</b> தொடவும், அல்லது நபரைத் திறந்து <b>பணம் பெறு</b> தொடவும். வட்டி, அசல் அல்லது இரண்டையும் இடவும்.',
    'தவறைத் திருத்த: நபர் → <b>கணக்கு விவரம்</b> → அந்த வரவைத் தொடவும். கடனை மாற்ற ✎ தொடவும்.',
    'கணக்கை அனுப்ப: நபரைத் திறந்து <b>கணக்கைப் பகிர்</b> தொடவும்.',
    'இணையம் இல்லாமலும் செயலி வேலை செய்யும்; இணையம் வந்ததும் ஒத்திசைக்கும்.'],
};
const helpView = () => `<div class="row" style="margin-bottom:10px"><button class="btn sec sm" data-act="tab" data-v="set">‹ ${esc(t('back'))}</button></div>
  <div class="card"><h2 style="margin:0;font-size:18px">❓ Help / உதவி</h2>
  ${['en', 'ta'].sort(l => (l === lang ? -1 : 1)).map(l => `<h3 class="hh">${l === 'en' ? 'English' : 'தமிழ்'}</h3><ol class="help">${HELP[l].map(x => `<li>${x}</li>`).join('')}</ol>`).join('')}</div>`;

/* ---------- settings ---------- */
function setView() {
  return `<button class="btn sec full" style="margin-bottom:10px" data-act="tab" data-v="help">❓ Help / உதவி</button>
    ${ro() ? `<div class="card"><b>👁 ${esc(t('viewOnly'))}</b><p class="mu" style="margin-bottom:0">${esc(t('viewOnlyHint'))}</p></div>` : ''}
    <div class="card"><label style="margin-top:0">${esc(t('yourName'))}</label><input id="uname" value="${esc(meta.user)}"><p class="mu" style="margin-bottom:0">${esc(t('yourNameHint'))}</p></div>
    ${remindCard()}
    <button class="btn sec full" style="margin-bottom:10px" data-act="tab" data-v="log">🕘 ${esc(t('auditLog'))}</button>
    <div class="card"><label style="margin-top:0">${esc(t('language'))}</label>
      <div class="gsel"><button class="${meta.lang === 'en' ? 'on' : ''}" data-act="lang" data-v="en">English</button><button class="${meta.lang === 'ta' ? 'on' : ''}" data-act="lang" data-v="ta">தமிழ்</button></div>
      <button class="btn sec sm full" style="margin-top:8px;${!meta.lang ? 'font-weight:800;outline:2px solid var(--g)' : ''}" data-act="lang" data-v="">🌐 ${esc(t('auto'))}</button></div>
    <div class="card" id="synccard"><label style="margin-top:0">${esc(t('server'))}</label><input id="srv" value="${esc(meta.server)}" placeholder="https://example.com">
      <label>${esc(t('key'))}</label><input id="key" type="password" value="${esc(meta.key)}">
      ${syncErr && syncMsg ? `<p class="err">⚠ ${esc(syncMsg)}</p>` : ''}
      <p class="mu">${esc(t('lastSync'))}: ${meta.lastSync ? fmtT(meta.lastSync) : esc(t('never'))} · ${pendingCount()} ${esc(t('pending'))}<br>${esc(t('dataVer'))}: ${meta.since || '—'}</p>
      <button class="btn full" data-act="sync">⟳ ${esc(t('syncNow'))}</button></div>
    ${verCard()}`;
}

/* ---------- events ---------- */
document.addEventListener('click', e => {
  const b = e.target.closest('[data-act]'); if (!b) return;
  const { act, v, id } = b.dataset;
  if (act === 'tab') go(v);
  else if (act === 'person') { pid = id; go('person'); }
  else if (act === 'addperson') personDialog();
  else if (act === 'editperson') personDialog(pid);
  else if (act === 'delperson') delPerson();
  else if (act === 'addloan') loanDialog();
  else if (act === 'editloan') loanDialog(id);
  else if (act === 'pay') payDialog(id);
  else if (act === 'editpay') payDialog(null, id);
  else if (act === 'shift') { ym = shiftMonth(ym, +v); history.replaceState(null, '', hashFor()); render(); }
  else if (act === 'csv') exportCSV();
  else if (act === 'range') { ranged = !!v; history.replaceState(null, '', hashFor()); render(); }
  else if (act === 'alltime') { repFrom = firstDate(); repTo = today(); history.replaceState(null, '', hashFor()); render(); }
  else if (act === 'share') shareStatement();
  else if (act === 'remindon') remindOn();
  else if (act === 'remindoff') remindOff();
  else if (act === 'remindtest') remindTest();
  else if (act === 'logall') { logDate = ''; render(); }
  else if (act === 'sync') sync(true);
  else if (act === 'syncbtn') {
    if (syncErr) { // take the person straight to the sync form and highlight it
      go('set');
      const c = $('#synccard'); if (c) { c.scrollIntoView({ block: 'center' }); c.classList.add('flash'); setTimeout(() => c.classList.remove('flash'), 1600); }
    } else sync(true);
  }
  else if (act === 'lang') { saveMeta('lang', v); lang = v || detectLang(); render(); if (remindCfg().on) pushSubscribe().catch(() => {}); }
});
// open the calendar from anywhere on a date box, and keep the dd/mm/yy label in step
document.addEventListener('click', e => { if (e.target.matches('input[type=date]')) try { e.target.showPicker(); } catch {} });
document.addEventListener('input', e => { if (e.target.matches('.dpick input')) e.target.previousElementSibling.textContent = (dmy(e.target.value) || 'dd/mm/yy') + ' 📅'; });
document.addEventListener('input', e => { if (e.target.id === 'q') { q = e.target.value; drawPeople(); } });
document.addEventListener('change', e => {
  const el = e.target;
  if (el.name === 'itype') $('#ratelbl').textContent = t(el.value === 'fix' ? 'fixAmt' : 'rate');
  else if (el.id === 'rf' || el.id === 'rt') {
    if (el.value) { if (el.id === 'rf') { repFrom = el.value; if (repTo < repFrom) repTo = repFrom; } else { repTo = el.value; if (repFrom > repTo) repFrom = repTo; } }
    history.replaceState(null, '', hashFor()); render();
  }
  else if (el.id === 'rt1' || el.id === 'rt2') { saveMeta('remind', { ...remindCfg(), [el.id === 'rt1' ? 't1' : 't2']: el.value }); if (remindCfg().on) pushSubscribe().then(() => toast(t('remindSet'))).catch(() => toast(t('pushUnavail'))); }
  else if (el.id === 'logdate') { logDate = el.value; render(); }
  else if (el.id === 'uname') { const n = el.value.trim(); if (!n) { el.value = meta.user; return; } saveMeta('user', n); toast(t('saved')); }
  else if (el.id === 'srv') { saveMeta('server', el.value.trim()); newConnection(); }
  else if (el.id === 'key') { saveMeta('key', el.value); newConnection(); }
});
function askName() {
  const dlg = $('#namedlg');
  if (meta.user || dlg.open) return;
  dlg.innerHTML = `<form method="dialog" id="nameform"><h2>${esc(t('yourName'))}</h2><p class="mu">${esc(t('yourNameHint'))}</p>
    <input name="n" required autofocus><div class="row" style="margin-top:14px"><span class="grow"></span><button class="btn">${esc(t('save'))}</button></div></form>`;
  $('#nameform').onsubmit = e => {
    const n = new FormData(e.target).get('n').trim();
    if (!n) return e.preventDefault();
    saveMeta('user', n); render(); toast(t('saved'));
  };
  dlg.showModal();
}

/* ---------- boot ---------- */
(async () => {
  await load();
  ym = today().slice(0, 7); repTo = today(); repFrom = today().slice(0, 5) + '01-01'; // default range: this year so far
  readHash();
  render();
  loadVersion();
  if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(() => {});
  if (navigator.storage && navigator.storage.persist) navigator.storage.persist();
  if (!ro() && remindCfg().on && pushOK() && Notification.permission === 'granted' && navigator.onLine) pushSubscribe().catch(() => {}); // refresh language and name
  sync();
})();
