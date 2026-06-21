/* Suminagashi PWA — service worker mínimo.
   Cacheia o núcleo (mesma origem) para abrir offline; deixa a CDN (MediaPipe,
   usada só pelo rastreio de mãos) passar pela rede. */
const CACHE = 'suminagashi-v2.7';
const CORE = [
  './index.html',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(CORE))
      .then(() => self.skipWaiting())
      .catch(() => self.skipWaiting())   // não falha a instalação se algum arquivo faltar
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (url.origin === self.location.origin) {
    // núcleo: cache primeiro, rede como reserva
    e.respondWith(
      caches.match(e.request).then(r => r || fetch(e.request).then(resp => {
        const copy = resp.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy)).catch(() => {});
        return resp;
      }).catch(() => r))
    );
  }
  // outras origens (CDN do MediaPipe): comportamento padrão da rede
});
