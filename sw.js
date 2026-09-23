self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('jorvie-store').then((cache) => cache.addAll([
      './index.html',
      './manifest.json',
      './logo.svg'
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
