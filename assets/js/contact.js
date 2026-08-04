(function() {
	"use strict";

	var copyButtons = document.querySelectorAll(".contact-copy");
	var feedback = document.getElementById("copy-feedback");

	if (!copyButtons.length || !feedback) {
		return;
	}

	Array.prototype.forEach.call(copyButtons, function(button) {
		button.addEventListener("click", function() {
			var value = button.getAttribute("data-copy-value");

			if (!value) {
				return;
			}

			if (navigator.clipboard && navigator.clipboard.writeText) {
				navigator.clipboard.writeText(value).then(function() {
					showFeedback("E-mail copiado: " + value);
				}, function() {
					showFeedback("Não consegui copiar automaticamente — copie manualmente: " + value);
				});
			} else {
				showFeedback("Copie manualmente: " + value);
			}
		});
	});

	var feedbackTimeout;

	function showFeedback(message) {
		feedback.textContent = message;
		window.clearTimeout(feedbackTimeout);
		feedbackTimeout = window.setTimeout(function() {
			feedback.textContent = "";
		}, 3000);
	}
})();
