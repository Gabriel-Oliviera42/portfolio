/*
	Carrega video de vitrine so quando ele chega perto da tela.

	Por que existe: os videos do site rodam `autoplay muted loop`, e com autoplay
	o navegador baixa o arquivo INTEIRO assim que a pagina abre, mesmo o video
	que esta la embaixo e que a pessoa talvez nunca role ate ver. O
	`preload="metadata"` que costuma estar na tag e simplesmente ignorado nesse
	caso. Numa pagina com varios videos isso vira megabytes gastos de uma vez,
	que no celular e pior ainda.

	Como usar na pagina:

	    <video muted loop playsinline preload="none" poster="...">
	        <source data-src="https://.../desktop.mp4" type="video/mp4" />
	    </video>

	Repare no `data-src` no lugar de `src`, e na AUSENCIA de `autoplay`: e isso
	que impede o download automatico. Quem liga o video e este script.

	Sem JavaScript, o que aparece e o `poster` (imagem estatica). E uma
	degradacao de proposito: melhor mostrar a imagem do que baixar megabytes
	em silencio.
*/
(function() {
	"use strict";

	var videos = [].slice.call(document.querySelectorAll("video[data-lazy]"));

	if (!videos.length) {
		return;
	}

	// Navegador sem IntersectionObserver carrega tudo na hora: perde a economia,
	// mas o video funciona. Nunca deixar a pagina com video que nao toca.
	if (typeof window.IntersectionObserver !== "function") {
		videos.forEach(carregar);
		return;
	}

	var observador = new IntersectionObserver(function(entradas) {
		entradas.forEach(function(entrada) {
			var video = entrada.target;

			if (entrada.isIntersecting) {
				carregar(video);
				tocar(video);
			} else if (!video.paused) {
				// fora da tela nao precisa gastar CPU nem bateria
				video.pause();
			}
		});
	}, {
		/*
			Comeca a baixar bem antes de o video aparecer, pra ele ja estar pronto
			quando a pessoa chegar nele.

			600px e medido, nao chutado: em 22/09/2026 a PRIMEIRA requisicao ao
			bucket R2 numa aba nova levou ~3,5 s ate o video poder tocar (DNS +
			TLS + resposta). Com margem pequena o visitante encarava alguns
			segundos de poster. Com 600px, mais de meia tela de rolagem de
			antecedencia, esse tempo corre enquanto ele ainda esta lendo.

			Nao adianta aumentar muito mais: margem grande demais carrega tudo de
			novo e joga fora a economia que motivou este arquivo.
		*/
		rootMargin: "600px 0px"
	});

	videos.forEach(function(video) {
		observador.observe(video);
	});

	function carregar(video) {
		if (video.dataset.carregado) {
			return;
		}

		var fontes = [].slice.call(video.querySelectorAll("source[data-src]"));

		if (!fontes.length) {
			return;
		}

		fontes.forEach(function(fonte) {
			fonte.src = fonte.getAttribute("data-src");
			fonte.removeAttribute("data-src");
		});

		video.dataset.carregado = "1";
		video.load();
	}

	function tocar(video) {
		var promessa = video.play();

		// Em navegador que bloqueia autoplay, play() rejeita. Nao e erro nosso:
		// engolimos pra nao sujar o console, e o poster continua na tela.
		if (promessa && typeof promessa.catch === "function") {
			promessa.catch(function() {});
		}
	}
})();
