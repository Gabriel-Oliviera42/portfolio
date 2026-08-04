/* acha o perfil combinando com uma lista de temas, ex: ["ensino","jogos"] -> "ensino+jogos" */
window.PortfolioThemeUtils = (function() {
	"use strict";

	var priority = ["ensino", "rpg", "jogos"];

	function sortThemes(a, b) {
		var aIndex = priority.indexOf(a);
		var bIndex = priority.indexOf(b);

		if (aIndex !== -1 || bIndex !== -1) {
			return (aIndex === -1 ? 99 : aIndex) - (bIndex === -1 ? 99 : bIndex);
		}

		return a.localeCompare(b);
	}

	function unique(values) {
		return Array.from(new Set((values || []).filter(Boolean)));
	}

	function combinations(values, size) {
		var result = [];

		function walk(start, group) {
			if (group.length === size) {
				result.push(group.slice());
				return;
			}

			for (var index = start; index < values.length; index++) {
				group.push(values[index]);
				walk(index + 1, group);
				group.pop();
			}
		}

		walk(0, []);
		return result;
	}

	function findProfileKey(themes, profiles) {
		var ordered = unique(themes).sort(sortThemes);

		for (var size = ordered.length; size > 0; size--) {
			var matches = combinations(ordered, size)
				.map(function(group) {
					return group.join("+");
				})
				.filter(function(key) {
					return Boolean(profiles[key]);
				});

			if (matches.length) {
				return matches[0];
			}
		}

		return "default";
	}

	return {
		sortThemes: sortThemes,
		unique: unique,
		combinations: combinations,
		findProfileKey: findProfileKey
	};
})();
