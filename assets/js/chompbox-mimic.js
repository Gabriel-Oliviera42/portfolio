(function() {
	"use strict";

	var prefersReducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
	var mimics = document.querySelectorAll(".chompbox-mimic");

	if (prefersReducedMotion) {
		return;
	}

	Array.prototype.forEach.call(mimics, function(mimic) {
		if (mimic.hasAttribute("data-interactive")) {
			window.addEventListener("mousemove", function(event) {
				var rect = mimic.getBoundingClientRect();
				var cx = rect.left + rect.width / 2;
				var cy = rect.top + rect.height / 2;
				var dx = event.clientX - cx;
				var dy = event.clientY - cy;
				var radius = Math.max(rect.width, rect.height) / 2 || 1;
				var sensitivity = radius * 0.3;
				var nx = dx / sensitivity;
				var ny = dy / sensitivity;
				var mag = Math.hypot(nx, ny) || 1;
				var clamped = Math.min(mag, 1);
				var maxOffset = 3.6;
				mimic.style.setProperty("--gaze-x", ((nx / mag) * clamped * maxOffset).toFixed(2) + "px");
				mimic.style.setProperty("--gaze-y", ((ny / mag) * clamped * maxOffset).toFixed(2) + "px");
			});
		}

		if (mimic.hasAttribute("data-auto-bite")) {
			var timeoutBite;
			var timeoutRest;

			function cycle() {
				mimic.classList.add("is-biting");
				timeoutBite = window.setTimeout(function() {
					mimic.classList.remove("is-biting");
					var rest = 3200 + Math.random() * 2200;
					timeoutRest = window.setTimeout(cycle, rest);
				}, 900);
			}

			var initialDelay = 600 + Math.random() * 1200;
			window.setTimeout(cycle, initialDelay);
		}
	});
})();
