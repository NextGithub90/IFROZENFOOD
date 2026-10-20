/**
 * iFrozen Food Nusantara - Boost Cache Service Worker
 * Version: 1.0.0
 * Provides instant load times, stale-while-revalidate for assets,
 * cache-first for images/fonts, and seamless offline capability.
 */

const CACHE_NAME = "ifrozen-boost-cache-v1";

const CORE_ASSETS = [
  "./",
  "./index.html",
  "./style.css",
  "./script.js",
  "./site.webmanifest",
  // Core Branding & Layout Images
  "./assets/images/01-s1600-logo-new.webp",
  "./assets/images/02-s1600-1.webp",
  "./assets/images/04-s1600-2.webp",
  "./assets/images/06-s600-3.peluang.webp",
  "./assets/images/08-s600-4.paket-bahan-baku.webp",
  "./assets/images/09-s1600-seblak-1-2juta.webp",
  "./assets/images/10-s1600-paket-1-2juta.webp",
  "./assets/images/11-s1600-paket-2-3juta.webp",
  "./assets/images/12-s1600-paket-3-5juta.webp",
  "./assets/images/13-s1600-paket-6-5juta.webp",
  "./assets/images/14-s1600-paket-10juta.webp",
  "./assets/images/25-s1600-21.webp",
  "./assets/images/56-s1600-22.webp",
  // Icons
  "./assets/icons/chevron-left.svg",
  "./assets/icons/chevron-right.svg",
  "./assets/icons/clipboard-check.svg",
  "./assets/icons/close.svg",
  "./assets/icons/file-check-2.svg",
  "./assets/icons/house.svg",
  "./assets/icons/menu.svg",
  "./assets/icons/package.svg",
  "./assets/icons/whatsapp.svg",
  // Fonts
  "./assets/fonts/poppins-300.ttf",
  "./assets/fonts/poppins-400.ttf",
  "./assets/fonts/poppins-600.ttf",
  "./assets/fonts/poppins-700.ttf",
  "./assets/fonts/poppins-800.ttf",
];

// Install: pre-cache core assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(async (cache) => {
        // Cache assets individually to prevent a single failure from aborting install
        await Promise.allSettled(
          CORE_ASSETS.map(async (url) => {
            try {
              const res = await fetch(url, { cache: "reload" });
              if (res.ok) await cache.put(url, res);
            } catch (err) {
              console.warn("[BoostCache] Failed to pre-cache:", url, err);
            }
          })
        );
      })
      .then(() => self.skipWaiting())
  );
});

// Activate: clean up previous caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys.map((key) => {
            if (key !== CACHE_NAME) {
              return caches.delete(key);
            }
          })
        )
      )
      .then(() => self.clients.claim())
  );
});

// Fetch: Smart Caching Strategies
self.addEventListener("fetch", (event) => {
  const request = event.request;
  const url = new URL(request.url);

  // Ignore non-GET requests and external third parties like WhatsApp or Google Maps
  if (request.method !== "GET" || url.origin !== self.location.origin) {
    return;
  }

  // 1. Navigation / HTML: Network-first with cache fallback
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          }
          return response;
        })
        .catch(async () => {
          const cached = await caches.match(request);
          if (cached) return cached;
          return caches.match("./index.html");
        })
    );
    return;
  }

  const pathname = url.pathname;

  // 2. Images & Fonts: Cache-First strategy (Lightning fast delivery)
  const isImageOrFont =
    pathname.endsWith(".webp") ||
    pathname.endsWith(".svg") ||
    pathname.endsWith(".png") ||
    pathname.endsWith(".jpg") ||
    pathname.endsWith(".jpeg") ||
    pathname.endsWith(".ttf") ||
    pathname.endsWith(".woff") ||
    pathname.endsWith(".woff2");

  if (isImageOrFont) {
    event.respondWith(
      caches.match(request, { ignoreSearch: true }).then((cached) => {
        if (cached) return cached;
        return fetch(request).then((networkResponse) => {
          if (networkResponse && networkResponse.ok) {
            const clone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          }
          return networkResponse;
        });
      })
    );
    return;
  }

  // 3. CSS, JS & Other Static Assets: Stale-While-Revalidate
  event.respondWith(
    caches.match(request).then((cached) => {
      const fetchPromise = fetch(request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.ok) {
            const clone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          }
          return networkResponse;
        })
        .catch(() => null);

      return cached || fetchPromise;
    })
  );
});
