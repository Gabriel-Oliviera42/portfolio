/*
	Service worker "network-first": SEMPRE tenta a rede primeiro.
	So usa o cache quando a rede falha de verdade (sem internet).
	Isso evita o problema classico de service worker: nunca serve
	conteudo desatualizado pra quem esta online, so ajuda no offline.
*/

var CACHE_NAME = "portfolio-offline-v1";

self.addEventListener("install", function(event) {
	self.skipWaiting();
});

self.addEventListener("activate", function(event) {
	event.waitUntil(
		caches.keys().then(function(keys) {
			return Promise.all(
				keys.filter(function(key) {
					return key !== CACHE_NAME;
				}).map(function(key) {
					return caches.delete(key);
				})
			);
		})
	);
	self.clients.claim();
});

self.addEventListener("fetch", function(event) {
	if (event.request.method !== "GET") {
		return;
	}

	event.respondWith(
		fetch(event.request)
			.then(function(response) {
				var copy = response.clone();
				caches.open(CACHE_NAME).then(function(cache) {
					cache.put(event.request, copy);
				});
				return response;
			})
			.catch(function() {
				return caches.match(event.request);
			})
	);
});
