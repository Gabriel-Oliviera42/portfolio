(function() {
	"use strict";

	var sequence = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
	var progress = 0;

	document.addEventListener("keydown", function(event) {
		var expected = sequence[progress];
		var key = event.key.length === 1 ? event.key.toLowerCase() : event.key;

		if (key === expected) {
			progress++;

			if (progress === sequence.length) {
				progress = 0;
				triggerEasterEgg();
			}
		} else {
			progress = key === sequence[0] ? 1 : 0;
		}
	});

	function triggerEasterEgg() {
		var toast = document.createElement("div");
		toast.className = "konami-toast";
		toast.textContent = "Você encontrou o easter egg! Isso mostra que você presta atenção nos detalhes.";
		document.body.appendChild(toast);

		document.body.classList.add("konami-pulse");

		window.setTimeout(function() {
			toast.classList.add("is-visible");
		}, 10);

		window.setTimeout(function() {
			toast.classList.remove("is-visible");
			document.body.classList.remove("konami-pulse");
		}, 2600);

		window.setTimeout(function() {
			toast.remove();
		}, 3200);
	}
})();
