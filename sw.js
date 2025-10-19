const CACHE_NAME = 'maison-beignet-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/assets/Image beignet Acceuil.png',
  '/assets/Logo Texte.png',
  '/assets/Logo Maison.png',
  '/assets/beignet pomme.png',
  '/assets/beignet chocolat.png',
  '/assets/image a propos.png',
  '/assets/Image plage.jpg',
  '/assets/Plage Nauzan.jpg',
  '/assets/Plage le Bois-Plage.jpeg',
  '/assets/Plage Saint Palais.jpg',
  '/assets/Super Joyful.ttf'
];

// Installation du service worker
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Cache ouvert');
        return cache.addAll(urlsToCache);
      })
  );
});

// Récupération des ressources
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - retourner la réponse
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
