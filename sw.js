/*
	Service worker "network-first": SEMPRE tenta a rede primeiro.
	So usa o cache quando a rede falha de verdade (sem internet).
	Isso evita o problema classico de service worker: nunca serve
	conteudo desatualizado pra quem esta online, so ajuda no offline.
*/

/* v2: a v1 guardava tudo, inclusive os videos do R2, e o "activate" abaixo
   apaga qualquer cache com outro nome. Trocar o nome e o que limpa esses
   videos de quem ja visitou o site. */
var CACHE_NAME = "portfolio-offline-v2";

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
				if (valeGuardar(event.request, response)) {
					var copy = response.clone();
					caches.open(CACHE_NAME).then(function(cache) {
						cache.put(event.request, copy);
					});
				}
				return response;
			})
			.catch(function() {
				return caches.match(event.request);
			})
	);
});

/* Video fica de fora do cache. Os do R2 chegavam como resposta "opaca"
   (status 0, conteudo ilegivel): nao tocam offline, porque video e lido em
   pedacos, e o Chrome conta cada resposta opaca como varios MB na cota do
   site. Resposta com erro ou parcial (206) tambem nao serve pra guardar. */
function valeGuardar(request, response) {
	if (!response || !response.ok || response.status !== 200) {
		return false;
	}

	if (response.type === "opaque" || request.destination === "video" || request.headers.has("range")) {
		return false;
	}

	return !/\.mp4(\?|$)/i.test(request.url);
}
