self.addEventListener("install", (event) => {
    console.log("Service Worker installiert");
    self.skipWaiting();
});

self.addEventListener("activate", (event) => {
    console.log("Service Worker aktiv");
});

self.addEventListener("fetch", (event) => {
    event.respondWith(fetch(event.request));
});
