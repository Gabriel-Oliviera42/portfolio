/* cor do tema entra sozinha na pagina de projeto a partir do campo "themes" */
(function() {
	"use strict";

	var projects = window.PORTFOLIO_PROJECTS || [];
	var profiles = window.PORTFOLIO_THEME_PROFILES || {};
	var utils = window.PortfolioThemeUtils;

	if (!projects.length || !utils) {
		return;
	}

	var slug = location.pathname.split("/").pop().replace(/\.html$/, "");
	var project = projects.filter(function(item) {
		return item.slug === slug;
	})[0];

	if (!project || !project.themes || !project.themes.length) {
		return;
	}

	var key = utils.findProfileKey(project.themes, profiles);
	var profile = profiles[key];
	var accent = profile && (profile.detailAccent || profile.accent);

	if (!accent) {
		return;
	}

	var rgb = hexToRgb(accent);

	document.body.style.setProperty("--portfolio-accent", accent);
	document.body.style.setProperty("--portfolio-accent-dark", accent);

	if (rgb) {
		document.body.style.setProperty("--portfolio-accent-rgb", rgb);
	}

	function hexToRgb(hex) {
		var match = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

		if (!match) {
			return null;
		}

		return [
			parseInt(match[1], 16),
			parseInt(match[2], 16),
			parseInt(match[3], 16)
		].join(", ");
	}
})();
