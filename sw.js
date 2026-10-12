// Chrome installs a page that has a service worker handling fetches. This one only passes requests through: the board
// is live data, so nothing is cached.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", e => e.respondWith(fetch(e.request)));
