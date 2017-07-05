self.addEventListener('install', event => {
  event.waitUntil(skipWaiting());
})

// self.addEventListener('fetch', event => {
//   event.respondWith(fetch(event.request));
// })
