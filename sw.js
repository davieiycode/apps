self.addEventListener('install', (e) => {
  self.skipWaiting();
});
self.addEventListener('fetch', (e) => {
  // Hanya bypass untuk verifikasi install Chrome Android
});
