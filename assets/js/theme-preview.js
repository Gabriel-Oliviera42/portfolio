(function() {
	"use strict";

	Array.prototype.forEach.call(document.querySelectorAll("[data-theme-preview]"), function(wrapper) {
		var button = wrapper.querySelector("[data-theme-preview-toggle]");
		var img = wrapper.querySelector("img[data-dark-src]");
		if (!button || !img) {
			return;
		}

		var label = button.querySelector(".theme-preview-toggle-label");
		var icon = button.querySelector(".icon");
		var lightSrc = img.getAttribute("data-light-src") || img.getAttribute("src");
		var darkSrc = img.getAttribute("data-dark-src");
		var isDark = false;

		button.addEventListener("click", function() {
			isDark = !isDark;
			img.src = isDark ? darkSrc : lightSrc;
			button.setAttribute("aria-pressed", String(isDark));
			if (label) {
				label.textContent = isDark ? "Ver modo claro" : "Ver modo escuro";
			}
			if (icon) {
				icon.className = "icon solid " + (isDark ? "fa-sun" : "fa-moon");
			}
		});
	});
})();
