(function() {
	"use strict";

	if (!("serviceWorker" in navigator)) {
		return;
	}

	if (location.protocol !== "https:" && location.hostname !== "localhost" && location.hostname !== "127.0.0.1") {
		return;
	}

	var swPath = location.pathname.indexOf("/projects/") !== -1 ? "../sw.js" : "sw.js";

	window.addEventListener("load", function() {
		navigator.serviceWorker.register(swPath).catch(function() {
			/* falha silenciosa - o site funciona normalmente sem o service worker */
		});
	});
})();
