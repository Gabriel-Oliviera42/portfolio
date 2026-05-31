(function() {
	"use strict";

	var allProjects = window.PORTFOLIO_PROJECTS || [];
	var projects = allProjects.filter(function(project) {
		return !project.draft;
	});
	var themeProfiles = window.PORTFOLIO_THEME_PROFILES || {};
	var baseThemes = ["ensino", "rpg", "jogos"];
	var state = {
		query: "",
		language: "all",
		themes: new Set(),
		tag: "all",
		status: "all"
	};

	var grid = document.getElementById("project-grid");
	var count = document.getElementById("project-count");
	var search = document.getElementById("project-search");
	var languageFilter = document.getElementById("language-filter");
	var themeFilter = document.getElementById("theme-filter");
	var tagFilter = document.getElementById("tag-filter");
	var statusFilter = document.getElementById("status-filter");
	var emptyState = document.getElementById("empty-state");
	var activeThemes = document.getElementById("active-themes");
	var profileAvatar = document.getElementById("profile-avatar");
	var themeCaption = document.getElementById("theme-caption");
	var profileLabel = document.getElementById("profile-label");
	var themeIcon = document.getElementById("theme-icon");

	if (!grid || !search || !languageFilter || !themeFilter || !tagFilter || !statusFilter) {
		return;
	}

	renderFilterOptions();
	renderProjects();

	search.addEventListener("input", function(event) {
		state.query = event.target.value.trim().toLowerCase();
		renderProjects();
	});

	languageFilter.addEventListener("change", function(event) {
		state.language = event.target.value;
		renderProjects();
	});

	tagFilter.addEventListener("change", function(event) {
		state.tag = event.target.value;
		renderProjects();
	});

	statusFilter.addEventListener("change", function(event) {
		state.status = event.target.value;
		renderProjects();
	});

	function renderFilterOptions() {
		fillSelect(languageFilter, "Todas", unique(projects.flatMap(function(project) {
			return normalizeList(project.languages);
		})).sort(sortTags));

		renderThemeOptions(baseThemes);

		fillSelect(tagFilter, "Todas", unique(projects.flatMap(function(project) {
			return normalizeList(project.tags);
		})).sort(sortTags));

		fillSelect(statusFilter, "Todos", unique(projects.map(function(project) {
			return project.status;
		})).sort(sortTags));
	}

	function renderThemeOptions(values) {
		var themeValues = values || baseThemes;

		themeFilter.innerHTML = themeValues.map(function(theme) {
			var checked = state.themes.has(theme) ? " checked" : "";
			return [
				"<label class=\"theme-check\">",
				"<input type=\"checkbox\" value=\"" + escapeAttr(theme) + "\"" + checked + " />",
				"<span>" + escapeHtml(formatTag(theme)) + "</span>",
				"</label>"
			].join("");
		}).join("");

		Array.prototype.forEach.call(themeFilter.querySelectorAll("input"), function(input) {
			input.addEventListener("change", function(event) {
				var theme = event.target.value;
				if (event.target.checked) {
					state.themes.add(theme);
				} else {
					state.themes.delete(theme);
				}
				renderThemeOptions(themeValues);
				renderProjects();
			});
		});
	}

	function renderProjects() {
		var filtered = projects
			.filter(matchesSearch)
			.filter(matchesFields)
			.sort(function(a, b) {
				if (a.special !== b.special) {
					return a.special ? -1 : 1;
				}
				return a.title.localeCompare(b.title);
			});

		grid.innerHTML = filtered.map(renderProjectCard).join("");
		bindProjectCards();
		emptyState.hidden = filtered.length > 0;
		count.textContent = filtered.length + " de " + projects.length + " projetos";
		updateThemePreview(filtered);
	}

	function matchesSearch(project) {
		if (!state.query) {
			return true;
		}

		var haystack = [
			project.title,
			project.description,
			project.status,
			project.featuredNote
		].concat(normalizeList(project.tags), normalizeList(project.languages), normalizeList(project.themes)).join(" ").toLowerCase();

		return haystack.indexOf(state.query) !== -1;
	}

	function matchesFields(project) {
		return matchesValue(state.language, project.languages)
			&& matchesThemes(project.themes)
			&& matchesValue(state.tag, project.tags)
			&& matchesValue(state.status, [project.status]);
	}

	function renderProjectCard(project) {
		var image = project.image || "images/bg.jpg";
		var detailUrl = project.detailUrl || ("projects/" + project.slug + ".html");
		var tags = normalizeList(project.tags).concat(normalizeList(project.languages));
		var specialBadge = project.special ? "<span class=\"special-badge\" title=\"Projeto especial\" aria-label=\"Projeto especial\">&#9733;</span>" : "";
		var note = project.featuredNote ? "<p class=\"featured-note\">" + escapeHtml(project.featuredNote) + "</p>" : "";
		var demo = project.demoUrl ? "<a class=\"button small primary\" href=\"" + escapeAttr(project.demoUrl) + "\" target=\"_blank\" rel=\"noopener noreferrer\">Ver projeto</a>" : "";
		var code = project.codeUrl ? "<a class=\"button small\" href=\"" + escapeAttr(project.codeUrl) + "\" target=\"_blank\" rel=\"noopener noreferrer\">Codigo</a>" : "";
		var status = project.status ? "<span class=\"status-pill\">" + escapeHtml(project.status) + "</span>" : "";

		return [
			"<article class=\"project-card" + (project.special ? " is-special" : "") + "\" data-detail-url=\"" + escapeAttr(detailUrl) + "\" role=\"link\" tabindex=\"0\" aria-label=\"Abrir detalhes do projeto " + escapeAttr(project.title) + "\">",
			"<div class=\"project-media\">",
			"<img src=\"" + escapeAttr(image) + "\" alt=\"Imagem do projeto " + escapeAttr(project.title) + "\" loading=\"lazy\" />",
			specialBadge,
			"</div>",
			"<div class=\"project-body\">",
			"<div class=\"project-title-row\"><h3>" + escapeHtml(project.title) + "</h3>" + status + "</div>",
			note,
			"<p>" + escapeHtml(project.description) + "</p>",
			"<div class=\"tag-list\">" + tags.map(function(tag) {
				return "<span>" + escapeHtml(formatTag(tag)) + "</span>";
			}).join("") + "</div>",
			(demo || code ? "<div class=\"project-actions\">" + demo + code + "</div>" : ""),
			"</div>",
			"</article>"
		].join("");
	}

	function bindProjectCards() {
		Array.prototype.forEach.call(grid.querySelectorAll(".project-card"), function(card) {
			card.addEventListener("click", function(event) {
				if (event.target.closest("a, button")) {
					return;
				}
				openProject(card);
			});

			card.addEventListener("keydown", function(event) {
				if (event.key === "Enter" || event.key === " ") {
					event.preventDefault();
					openProject(card);
				}
			});
		});
	}

	function openProject(card) {
		var detailUrl = card.getAttribute("data-detail-url");
		if (detailUrl) {
			window.location.href = detailUrl;
		}
	}

	function updateThemePreview(filtered) {
		var selectedThemes = [];

		if (state.themes.size > 0) {
			selectedThemes = Array.from(state.themes);
		}

		if (state.tag !== "all" && themeProfiles[state.tag]) {
			selectedThemes.push(state.tag);
		}

		selectedThemes = unique(selectedThemes);

		var key = findThemeProfileKey(selectedThemes);
		var profile = themeProfiles[key] || themeProfiles[selectedThemes[0]] || themeProfiles.default || {};
		var avatar = profile.image || "images/avatar.png";
		var caption = profile.caption || "Explorando projetos por tecnologia, tema e impacto.";
		var label = profile.label || "Desenvolvedor full-stack";

		setProfileAvatar(avatar);
		themeCaption.textContent = caption;
		profileLabel.textContent = label;
		document.body.setAttribute("data-theme-context", key);
		document.body.style.setProperty("--profile-accent", profile.accent || "#1f9d8a");
		document.body.style.setProperty("--profile-panel-start", profile.panelStart || "rgba(23, 33, 38, 0.86)");
		document.body.style.setProperty("--profile-panel-end", profile.panelEnd || "rgba(23, 33, 38, 0.94)");

		if (themeIcon) {
			themeIcon.className = "theme-icon " + (profile.iconClass || "icon solid fa-code");
		}

		activeThemes.innerHTML = selectedThemes.length ? selectedThemes.slice(0, 4).map(function(theme) {
			return "<span>" + escapeHtml(formatTag(theme)) + "</span>";
		}).join("") : "";
	}

	function findThemeProfileKey(themes) {
		var orderedThemes = unique(themes).sort(sortTags);

		for (var size = orderedThemes.length; size > 0; size--) {
			var matches = combinations(orderedThemes, size)
				.map(function(group) {
					return group.join("+");
				})
				.filter(function(key) {
					return Boolean(themeProfiles[key]);
				});

			if (matches.length) {
				return matches[0];
			}
		}

		return "default";
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

	function setProfileAvatar(avatar) {
		if (!profileAvatar || profileAvatar.getAttribute("src") === avatar) {
			return;
		}

		profileAvatar.classList.add("is-changing");

		window.setTimeout(function() {
			profileAvatar.onload = function() {
				profileAvatar.classList.remove("is-changing");
				profileAvatar.onload = null;
			};
			profileAvatar.src = avatar;
		}, 140);
	}

	function normalizeList(value) {
		return Array.isArray(value) ? value.filter(Boolean) : [];
	}

	function unique(values) {
		return Array.from(new Set(values.map(function(value) {
			return String(value).trim();
		}).filter(Boolean)));
	}

	function fillSelect(select, allLabel, values) {
		select.innerHTML = ["<option value=\"all\">" + escapeHtml(allLabel) + "</option>"].concat(values.map(function(value) {
			return "<option value=\"" + escapeAttr(value) + "\">" + escapeHtml(formatTag(value)) + "</option>";
		})).join("");
	}

	function matchesValue(selected, values) {
		if (selected === "all") {
			return true;
		}

		return normalizeList(values).indexOf(selected) !== -1;
	}

	function matchesThemes(values) {
		if (state.themes.size === 0) {
			return true;
		}

		var projectThemes = normalizeList(values);
		return Array.from(state.themes).some(function(theme) {
			return projectThemes.indexOf(theme) !== -1;
		});
	}

	function sortTags(a, b) {
		var priority = ["ensino", "rpg", "jogos", "ia", "frontend", "backend", "full-stack"];
		var aIndex = priority.indexOf(a);
		var bIndex = priority.indexOf(b);

		if (aIndex !== -1 || bIndex !== -1) {
			return (aIndex === -1 ? 99 : aIndex) - (bIndex === -1 ? 99 : bIndex);
		}

		return a.localeCompare(b);
	}

	function formatTag(tag) {
		return String(tag)
			.replace(/-/g, " ")
			.replace(/\b\w/g, function(letter) {
				return letter.toUpperCase();
			});
	}

	function escapeHtml(value) {
		return String(value)
			.replace(/&/g, "&amp;")
			.replace(/</g, "&lt;")
			.replace(/>/g, "&gt;")
			.replace(/"/g, "&quot;")
			.replace(/'/g, "&#039;");
	}

	function escapeAttr(value) {
		return escapeHtml(value);
	}
})();
