/* Les enchères gadget — fonctionnement hors ligne. Fichier généré par outils/construire.js */
const CACHE = "gadget-v4";
const FICHIERS = [
  "./",
  "index.html",
  "manifest.webmanifest",
  "icon-180.png",
  "icon-192.png",
  "icon-512.png",
  "lecon-01-roudi.html",
  "lecon-02-puppet.html",
  "lecon-03-drury.html",
  "lecon-04-spoutnik.html"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FICHIERS))
    .then(() => self.skipWaiting()).catch(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys()
    .then(cles => Promise.all(cles.filter(c => c !== CACHE).map(c => caches.delete(c))))
    .then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  if(e.request.method !== "GET") return;
  e.respondWith(caches.match(e.request).then(rep => rep || fetch(e.request).then(res => {
    const copie = res.clone();
    caches.open(CACHE).then(c => c.put(e.request, copie)).catch(() => {});
    return res;
  }).catch(() => caches.match("./index.html"))));
});
