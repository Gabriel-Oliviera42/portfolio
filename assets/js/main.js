/*
	Este arquivo era o main.js do template Strata (HTML5 UP), rodando em cima de
	jQuery + util.js + browser.min.js + breakpoints.min.js: uns 100 KB baixados
	so na home.

	Na pratica ele fazia uma coisa so: tirar a classe is-preload do body depois
	do load. O resto estava morto: o parallax do cabecalho vinha desligado na
	propria configuracao, os breakpoints so existiam pra ele, e a classe
	is-touch so mexia em CSS de coisa que o site nao usa mais (poptrox,
	.image.thumb). Reescrito sem dependencia em 2026-09-30.
*/
(function() {
	"use strict";

	// O base.css desliga toda animacao e transicao enquanto o body tem
	// is-preload, pra pagina nao "piscar" enquanto monta.
	window.addEventListener("load", function() {
		window.setTimeout(function() {
			document.body.classList.remove("is-preload");
		}, 100);
	});
})();
