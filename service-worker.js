self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('vinilo-cache').then(cache => {
      return cache.addAll([
        './',
        'index.html',
        'vehiculos_combinado_convertido.json',
        'manifest.json',
        'img/icon-192.png',
        'img/icon-512.png',
        // cualquier otro recurso necesario
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(resp => {
      return resp || fetch(event.request);
    })
  );
});
