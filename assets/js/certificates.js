(function() {
	"use strict";

	var certificates = window.PORTFOLIO_CERTIFICATES || [];
	var section = document.getElementById("certificates");
	var grid = document.getElementById("certificates-grid");

	if (!section || !grid || certificates.length === 0) {
		return;
	}

	section.hidden = false;
	grid.innerHTML = certificates.map(renderCertificateCard).join("");

	function renderCertificateCard(cert) {
		var tags = Array.isArray(cert.tags) ? cert.tags.filter(Boolean) : [];
		var link = cert.credentialUrl
			? "<a class=\"button small\" href=\"" + escapeAttr(cert.credentialUrl) + "\" target=\"_blank\" rel=\"noopener noreferrer\">Ver certificado</a>"
			: "";

		return [
			"<article class=\"certificate-card\">",
			"<span class=\"certificate-icon icon solid fa-certificate\" aria-hidden=\"true\"></span>",
			"<div class=\"certificate-body\">",
			"<h3>" + escapeHtml(cert.title) + "</h3>",
			"<p class=\"certificate-meta\">" + escapeHtml(cert.issuer) + " &middot; " + escapeHtml(cert.date) + "</p>",
			(tags.length ? "<div class=\"tag-list\">" + tags.map(function(tag) {
				return "<span>" + escapeHtml(tag) + "</span>";
			}).join("") + "</div>" : ""),
			link,
			"</div>",
			"</article>"
		].join("");
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
