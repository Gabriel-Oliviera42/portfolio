(function() {
	"use strict";

	var summary = document.querySelector(".detail-summary");
	var content = document.querySelector(".detail-layout > div");

	if (!summary || !content) {
		return;
	}

	var words = content.textContent.trim().split(/\s+/).filter(Boolean).length;
	var minutes = Math.max(1, Math.round(words / 200));

	var el = document.createElement("p");
	el.className = "reading-time";
	el.textContent = "~" + minutes + " min de leitura";

	summary.insertAdjacentElement("afterend", el);
})();
