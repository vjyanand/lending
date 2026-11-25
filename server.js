// Zero-dependency sync + static server.  Run: node server.js
// Env: PORT (default 3001), SYNC_KEY (optional shared secret), DATA_FILE
const http = require('http');
const fs = require('fs');
const path = require('path');
const { serverSync } = require('./public/sync-core.js');

const PORT = process.env.PORT || 3001;
const KEY = process.env.SYNC_KEY || '';
const VIEW_KEY = process.env.VIEW_KEY || ''; // optional: a second key that can read everything but change nothing
const DATA_FILE = process.env.DATA_FILE || path.join(__dirname, 'data', 'db.json');
const PUB = path.join(__dirname, 'public');

fs.mkdirSync(path.dirname(DATA_FILE), { recursive: true });
let db = { seq: 0, records: {} };
try { db = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8')); }
catch (e) { // only a missing file means "start empty": never write over data that can't be read
  if (e.code !== 'ENOENT') { console.error('Cannot read ' + DATA_FILE + ': ' + e.message + '\nFix or restore this file, then start again.'); process.exit(1); }
}

function save() {
  const tmp = DATA_FILE + '.tmp';
  fs.writeFileSync(tmp, JSON.stringify(db), { flush: true });
  fs.renameSync(tmp, DATA_FILE);
}
let unsaved = false; // a failed save is retried before anything else is confirmed

const MIME = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8', '.json': 'application/json', '.svg': 'image/svg+xml',
  '.webmanifest': 'application/manifest+json', '.png': 'image/png', '.ico': 'image/x-icon',
};

function sync(req, res) {
  const given = req.headers['x-sync-key'] || '';
  let mode = 'edit';
  if (KEY && given !== KEY) {
    if (VIEW_KEY && given === VIEW_KEY) mode = 'view';
    else { res.writeHead(401); return res.end('bad key'); }
  }
  const chunks = []; let size = 0;
  req.on('data', c => { chunks.push(c); size += c.length; if (size > 20e6) req.destroy(); });
  req.on('end', () => {
    let msg;
    try { msg = JSON.parse(Buffer.concat(chunks).toString('utf8')); } catch {} // decode once, so no character is split
    if (!msg || typeof msg !== 'object') { res.writeHead(400); return res.end('bad json'); }
    const { changed, reply } = serverSync(db, msg, mode, Date.now());
    if (changed || unsaved) {
      try { save(); unsaved = false; }
      catch (e) { unsaved = true; console.error('save failed: ' + e.message); res.writeHead(500); return res.end('could not save'); }
    }
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(reply));
  });
}

http.createServer((req, res) => {
  const url = new URL(req.url, 'http://x');
  if (url.pathname === '/api/sync' && req.method === 'POST') return sync(req, res);
  if (url.pathname === '/api/ping') { res.writeHead(200); return res.end('ok'); }
  let p = path.normalize(decodeURIComponent(url.pathname));
  if (p === '/' || p === '\\') p = '/index.html';
  const file = path.join(PUB, p);
  if (!file.startsWith(PUB)) { res.writeHead(403); return res.end(); }
  fs.readFile(file, (err, buf) => {
    if (err) { res.writeHead(404); return res.end('not found'); }
    const h = { 'Content-Type': MIME[path.extname(file)] || 'application/octet-stream' };
    if (p === '/sw.js') h['Cache-Control'] = 'no-cache';
    res.writeHead(200, h);
    res.end(buf);
  });
}).listen(PORT, '0.0.0.0', () => console.log('Lending book running on http://localhost:' + PORT));
