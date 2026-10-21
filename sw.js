/**
 * iFrozen Food Nusantara - lightweight offline and runtime cache.
 * The shell is pre-cached; larger below-the-fold images are cached on demand.
 */

const CACHE_VERSION = "v2";
const STATIC_CACHE = `ifrozen-static-${CACHE_VERSION}`;
const RUNTIME_CACHE = `ifrozen-runtime-${CACHE_VERSION}`;
const OWNED_CACHES = [STATIC_CACHE, RUNTIME_CACHE];

const STATIC_ASSETS = [
  "./",
  "./index.html",
  "./style.css?v=20261021-v2",
  "./script.js?v=20261021-v2",
  "./site.webmanifest",
  "./assets/images/01-s1600-logo-new.webp",
  "./assets/images/02-s1600-1.webp",
  "./assets/images/04-s1600-2.webp",
  "./assets/icons/chevron-left.svg",
  "./assets/icons/chevron-right.svg",
  "./assets/icons/clipboard-check.svg",
  "./assets/icons/close.svg",
  "./assets/icons/file-check-2.svg",
  "./assets/icons/house.svg",
  "./assets/icons/menu.svg",
  "./assets/icons/package.svg",
  "./assets/icons/whatsapp.svg",
  "./assets/fonts/poppins-400.ttf",
  "./assets/fonts/poppins-600.ttf",
  "./assets/fonts/poppins-700.ttf",
  "./assets/fonts/poppins-800.ttf",
];

const cacheResponse = async (cacheName, request, response) => {
  if (response && response.ok && response.type !== "opaque") {
    const cache = await caches.open(cacheName);
    await cache.put(request, response.clone());
  }
  return response;
};

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => Promise.allSettled(STATIC_ASSETS.map((asset) => cache.add(asset))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    Promise.all([
      caches.keys().then((keys) => Promise.all(keys.map((key) => (
        key.startsWith("ifrozen-") && !OWNED_CACHES.includes(key) ? caches.delete(key) : Promise.resolve()
      )))),
      self.registration.navigationPreload ? self.registration.navigationPreload.enable() : Promise.resolve(),
    ]).then(() => self.clients.claim())
  );
});

self.addEventListener("message", (event) => {
  if (event.data === "SKIP_WAITING") self.skipWaiting();
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  const url = new URL(request.url);

  if (request.method !== "GET" || url.origin !== self.location.origin) return;

  if (request.mode === "navigate") {
    event.respondWith((async () => {
      try {
        const preload = await event.preloadResponse;
        const networkResponse = preload || await fetch(request);
        return cacheResponse(RUNTIME_CACHE, request, networkResponse);
      } catch {
        return (await caches.match(request)) || (await caches.match("./index.html"));
      }
    })());
    return;
  }

  const isLongLivedAsset = /\.(?:webp|png|jpe?g|svg|ttf|woff2?)$/i.test(url.pathname);
  if (isLongLivedAsset) {
    event.respondWith((async () => {
      const cached = await caches.match(request, { ignoreSearch: true });
      if (cached) return cached;
      return cacheResponse(RUNTIME_CACHE, request, await fetch(request));
    })());
    return;
  }

  const network = fetch(request)
    .then((response) => cacheResponse(RUNTIME_CACHE, request, response))
    .catch(() => null);
  event.waitUntil(network.then(() => undefined));
  event.respondWith(
    caches.match(request).then((cached) => cached || network).then((response) => response || Response.error())
  );
});
