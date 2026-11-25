// Writes public/version.json (commit hash + recent commit log). Runs at build/start; the file is git-ignored.
import { execSync } from 'node:child_process';
import fs from 'node:fs';

const sh = c => { try { return execSync(c, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim(); } catch { return ''; } };
const log = sh('git log -n 20 --pretty=format:%h%x1f%cI%x1f%s').split('\n').filter(Boolean)
  .map(l => { const [h, d, s] = l.split('\x1f'); return { h, d, s }; });
const hash = sh('git rev-parse HEAD') || process.env.COMMIT_REF || '';
const out = {
  hash, short: hash.slice(0, 7), date: log[0] ? log[0].d : '', built: new Date().toISOString(),
  dirty: !process.env.NETLIFY && !!sh('git status --porcelain'), log,
};
fs.writeFileSync(new URL('../public/version.json', import.meta.url), JSON.stringify(out));
console.log('version', out.short || '(no git)', out.dirty ? '+local changes' : '');
