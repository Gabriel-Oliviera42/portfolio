(function() {
	"use strict";

	var reducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

	if (typeof AOS !== "undefined") {
		AOS.init({
			duration: 500,
			once: true,
			offset: 60,
			disable: reducedMotion
		});
	}

	if (typeof VanillaTilt !== "undefined" && !reducedMotion) {
		VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
			max: 4,
			speed: 400,
			glare: true,
			"max-glare": 0.15
		});
	}
})();
