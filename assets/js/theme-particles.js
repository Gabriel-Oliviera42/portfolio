(function() {
	"use strict";

	var container = document.getElementById("theme-particles");
	var iconsContainer = document.getElementById("theme-icons-decor");
	var reducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

	var themeConfigs = {
		"default": { color: "#56d8e7", shape: "circle", count: 26, speed: 0.5, icon: "icon solid fa-code" },
		"ensino": { color: "#5eead4", shape: "circle", count: 26, speed: 0.4, icon: "icon solid fa-graduation-cap" },
		"rpg": { color: "#c084fc", shape: "circle", count: 24, speed: 0.55, icon: "icon solid fa-dice-d20" },
		"jogos": { color: "#60a5fa", shape: "square", count: 30, speed: 0.9, icon: "icon solid fa-gamepad" }
	};

	var iconSpots = [
		{ top: "8%", left: "10%", rotate: "-12deg" },
		{ top: "58%", left: "82%", rotate: "10deg" },
		{ top: "82%", left: "18%", rotate: "6deg" }
	];

	if (iconsContainer) {
		applyIcons(document.body.getAttribute("data-theme-context"));

		var iconObserver = new MutationObserver(function() {
			applyIcons(document.body.getAttribute("data-theme-context"));
		});

		iconObserver.observe(document.body, { attributes: true, attributeFilter: ["data-theme-context"] });
	}

	if (!container || typeof tsParticles === "undefined" || reducedMotion) {
		return;
	}

	function configFor(themeKey) {
		if (themeConfigs[themeKey]) {
			return themeConfigs[themeKey];
		}

		var parts = String(themeKey || "").split("+");
		for (var i = 0; i < parts.length; i++) {
			if (themeConfigs[parts[i]]) {
				return themeConfigs[parts[i]];
			}
		}

		return themeConfigs["default"];
	}

	function applyIcons(themeKey) {
		var cfg = configFor(themeKey);

		iconsContainer.innerHTML = iconSpots.map(function(spot) {
			return "<span class=\"" + cfg.icon + "\" style=\"top:" + spot.top + ";left:" + spot.left + ";transform:rotate(" + spot.rotate + ");\" aria-hidden=\"true\"></span>";
		}).join("");
	}

	function buildOptions(cfg) {
		return {
			fpsLimit: 30,
			fullScreen: { enable: false },
			particles: {
				number: { value: cfg.count },
				color: { value: cfg.color },
				opacity: { value: 0.35 },
				size: { value: { min: 1, max: cfg.shape === "square" ? 3.5 : 2.5 } },
				shape: { type: cfg.shape },
				links: {
					enable: cfg.shape !== "square",
					color: cfg.color,
					distance: 110,
					opacity: 0.18,
					width: 1
				},
				move: {
					enable: true,
					speed: cfg.speed,
					direction: "none",
					random: true,
					outModes: { default: "out" }
				}
			},
			interactivity: {
				events: { onHover: { enable: false }, onClick: { enable: false } }
			},
			detectRetina: true
		};
	}

	function applyTheme(themeKey) {
		tsParticles.load({ id: "theme-particles", options: buildOptions(configFor(themeKey)) });
	}

	applyTheme(document.body.getAttribute("data-theme-context"));

	var observer = new MutationObserver(function() {
		applyTheme(document.body.getAttribute("data-theme-context"));
	});

	observer.observe(document.body, { attributes: true, attributeFilter: ["data-theme-context"] });
})();
