const CACHE = 'lending-v8'; // bump when the app files change
const SHELL = ['./', 'index.html', 'sync-core.js', 'calc.js', 'app.js', 'style.css', 'manifest.webmanifest', 'icon.svg'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('lending-') && k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).pathname.startsWith('/api/')) return;
  // network-first so a new version shows up on the next open; cache when offline or slower than 3 seconds
  e.respondWith((async () => {
    const c = await caches.open(CACHE);
    try {
      const r = await Promise.race([fetch(req), new Promise((_, no) => setTimeout(no, 3000))]);
      if (r.ok) c.put(req, r.clone());
      return r;
    } catch {
      return (await c.match(req, { ignoreSearch: true })) || Response.error();
    }
  })());
});

self.addEventListener('push', e => {
  let d = {}; try { d = e.data.json(); } catch {}
  e.waitUntil(self.registration.showNotification(d.title || 'Lending Book', { body: d.body || '', tag: 'reminder', data: { url: d.url || './' } }));
});
self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(clients.matchAll({ type: 'window', includeUncontrolled: true }).then(cs => {
    for (const c of cs) if ('focus' in c) return c.focus();
    return clients.openWindow(e.notification.data.url);
  }));
});
