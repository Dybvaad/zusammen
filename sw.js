// Service Worker: wird in Etappe 4 für Push-Nachrichten erweitert.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
