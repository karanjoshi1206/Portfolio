const staticCacheName = "site-static-v1";
const assets = [
	"/",
	"/index.html",
	"/style.css",
	"/images/bg.jpg",
	"/images/bg.png",
	"/images/im.jpg",
	"/images/logo.jpg",
	"/images/logo.png",
];
// install event
self.addEventListener("install", (evt) => {
	evt.waitUntil(
		caches.open(staticCacheName).then((cache) => {
			console.log("caching shell assets");
			cache.addAll(assets);
		})
	);
});
// activate event
self.addEventListener("activate", (evt) => {
	evt.waitUntil(
		caches.keys().then((keys) => {
			return Promise.all(
				keys
					.filter((key) => key !== staticCacheName)
					.map((key) => caches.delete(key))
			);
		})
	);
});
// fetch event
self.addEventListener("fetch", (evt) => {
	evt.respondWith(
		caches.match(evt.request).then((cacheRes) => {
			return cacheRes || fetch(evt.request);
		})
	);
});
