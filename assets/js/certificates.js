/*
	Certificados da home (secao #certificates), lidos de certificates-data.js.

	Cada certificado vira uma barra curta: nome, emissor, horas e data. A imagem
	so aparece quando pedida, em dois niveis:

	  - Mouse em cima (ou foco pelo teclado): previa pequena flutuando sobre a
	    barra, com a miniatura de 480px (~14 KB). A imagem so e baixada no
	    primeiro hover, nao na abertura da pagina.
	  - Clique, toque ou Enter: a imagem inteira (1400px) numa janela <dialog>,
	    com emissor, codigo de validacao e link pra verificar. Setas do teclado
	    passam de um certificado pro outro, Esc fecha.

	Hover sozinho nao bastaria: celular nao tem hover e teclado tambem nao. Por
	isso a previa e so um extra, e o clique e o caminho que funciona em todo
	lugar.

	Link direto pra um certificado: index.html#certificado-<id> rola ate a
	barra e a destaca (usado pela pagina do portfolio).

	Falha em silencio: sem dado, a secao continua com hidden.
*/
(function() {
	"use strict";

	var certificados = (window.PORTFOLIO_CERTIFICATES || []).filter(function(cert) {
		return cert && cert.id && cert.title && cert.image;
	}).sort(function(a, b) {
		return String(b.date).localeCompare(String(a.date));
	});

	var secao = document.getElementById("certificates");
	var lista = document.getElementById("certificates-list");
	var resumo = document.getElementById("certificates-summary");

	if (!secao || !lista || !certificados.length) {
		return;
	}

	var MESES = [
		"janeiro", "fevereiro", "março", "abril", "maio", "junho",
		"julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
	];

	var janela = null;
	var atual = 0;

	lista.innerHTML = certificados.map(renderBarra).join("");
	secao.hidden = false;

	if (resumo) {
		var horas = certificados.reduce(function(soma, cert) {
			return soma + (Number(cert.hours) || 0);
		}, 0);
		resumo.textContent = certificados.length + " certificados · " + horas + " horas";
	}

	lista.addEventListener("click", function(event) {
		var barra = event.target.closest(".certificate-item");

		if (barra) {
			abrir(Number(barra.getAttribute("data-index")));
		}
	});

	lista.addEventListener("pointerover", carregarPrevia);
	lista.addEventListener("focusin", carregarPrevia);

	irParaAncora();
	window.addEventListener("hashchange", irParaAncora);

	/* ---------- barras ---------- */

	function renderBarra(cert, indice) {
		var horas = cert.hours ? " · " + cert.hours + " h" : "";

		return [
			"<li id=\"certificado-" + escapeAttr(cert.id) + "\">",
			"<button type=\"button\" class=\"certificate-item\" data-index=\"" + indice + "\" aria-haspopup=\"dialog\">",
			"<span class=\"certificate-icon icon solid fa-certificate\" aria-hidden=\"true\"></span>",
			"<span class=\"certificate-text\">",
			"<span class=\"certificate-name\">" + escapeHtml(cert.title) + "</span>",
			"<span class=\"certificate-meta\">" + escapeHtml(cert.issuer) + horas + " · " + tagData(cert.date, false) + "</span>",
			"</span>",
			"<span class=\"certificate-preview\" aria-hidden=\"true\">",
			"<img alt=\"\" data-src=\"" + escapeAttr(cert.thumb || cert.image) + "\" />",
			"</span>",
			"</button>",
			"</li>"
		].join("");
	}

	// a miniatura so e baixada quando a pessoa chega na barra
	function carregarPrevia(event) {
		var barra = event.target.closest && event.target.closest(".certificate-item");
		var img = barra && barra.querySelector("img[data-src]");

		if (img) {
			img.src = img.getAttribute("data-src");
			img.removeAttribute("data-src");
		}
	}

	function irParaAncora() {
		var id = decodeURIComponent(window.location.hash.slice(1));

		if (id.indexOf("certificado-") !== 0) {
			return;
		}

		var alvo = document.getElementById(id);

		if (alvo) {
			alvo.scrollIntoView({ block: "center" });
		}
	}

	/* ---------- janela com a imagem inteira ---------- */

	function abrir(indice) {
		if (!janela) {
			janela = criarJanela();
		}

		mostrar(indice);

		if (typeof janela.showModal === "function") {
			janela.showModal();
		} else {
			// navegador sem <dialog>: abre a imagem numa aba, que e melhor que nada
			window.open(certificados[indice].image, "_blank", "noopener");
		}
	}

	function mostrar(indice) {
		var total = certificados.length;
		atual = (indice + total) % total;

		var cert = certificados[atual];
		var img = janela.querySelector(".certificate-dialog-media img");
		var codigo = janela.querySelector(".certificate-dialog-code");
		var verificar = janela.querySelector("[data-acao='verificar']");

		img.src = cert.image;
		img.alt = "Certificado de conclusão do curso " + cert.fullTitle + ", emitido por " + cert.issuer;

		janela.querySelector(".certificate-dialog-count").textContent = (atual + 1) + " de " + total;
		janela.querySelector("#certificate-dialog-title").textContent = cert.fullTitle || cert.title;
		janela.querySelector(".certificate-dialog-meta").innerHTML = escapeHtml(cert.issuer)
			+ (cert.hours ? " · " + cert.hours + " horas" : "")
			+ " · concluído em " + tagData(cert.date, true);

		codigo.hidden = !cert.code;
		codigo.querySelector("code").textContent = cert.code || "";
		codigo.querySelector("[data-acao='copiar']").textContent = "Copiar código";

		verificar.hidden = !cert.credentialUrl;
		verificar.href = cert.credentialUrl || "#";
		verificar.querySelector(".certificate-dialog-verify-text").textContent = cert.code
			? "Validar no site do " + cert.issuer
			: "Ver na " + cert.issuer;
	}

	function criarJanela() {
		var dialogo = document.createElement("dialog");
		dialogo.className = "certificate-dialog";
		dialogo.setAttribute("aria-labelledby", "certificate-dialog-title");

		dialogo.innerHTML = [
			"<div class=\"certificate-dialog-body\">",
			"<div class=\"certificate-dialog-top\">",
			"<p class=\"certificate-dialog-count\"></p>",
			"<button type=\"button\" class=\"certificate-dialog-close\" data-acao=\"fechar\" aria-label=\"Fechar\"><span class=\"icon solid fa-times\" aria-hidden=\"true\"></span></button>",
			"</div>",
			"<figure class=\"certificate-dialog-media\"><img alt=\"\" /></figure>",
			"<div class=\"certificate-dialog-info\">",
			"<h3 id=\"certificate-dialog-title\"></h3>",
			"<p class=\"certificate-dialog-meta\"></p>",
			"<p class=\"certificate-dialog-code\">Código de validação: <code></code> <button type=\"button\" class=\"button small\" data-acao=\"copiar\">Copiar código</button></p>",
			"<a class=\"certificate-dialog-verify\" data-acao=\"verificar\" target=\"_blank\" rel=\"noopener noreferrer\"><span class=\"icon solid fa-external-link-alt\" aria-hidden=\"true\"></span><span class=\"certificate-dialog-verify-text\"></span></a>",
			"</div>",
			"<div class=\"certificate-dialog-nav\">",
			"<button type=\"button\" class=\"button small\" data-acao=\"anterior\"><span class=\"icon solid fa-chevron-left\" aria-hidden=\"true\"></span> Anterior</button>",
			"<button type=\"button\" class=\"button small\" data-acao=\"proximo\">Próximo <span class=\"icon solid fa-chevron-right\" aria-hidden=\"true\"></span></button>",
			"</div>",
			"</div>"
		].join("");

		document.body.appendChild(dialogo);

		dialogo.addEventListener("click", function(event) {
			// o <dialog> nao tem padding: clique que cai nele mesmo (e nao no
			// .certificate-dialog-body) veio do fundo escurecido, e fecha
			if (event.target === dialogo) {
				dialogo.close();
				return;
			}

			var botao = event.target.closest("[data-acao]");
			var acao = botao && botao.getAttribute("data-acao");

			if (acao === "fechar") {
				dialogo.close();
			} else if (acao === "anterior") {
				mostrar(atual - 1);
			} else if (acao === "proximo") {
				mostrar(atual + 1);
			} else if (acao === "copiar") {
				copiarCodigo(botao);
			}
		});

		dialogo.addEventListener("keydown", function(event) {
			if (event.key === "ArrowLeft") {
				mostrar(atual - 1);
			} else if (event.key === "ArrowRight") {
				mostrar(atual + 1);
			}
		});

		return dialogo;
	}

	function copiarCodigo(botao) {
		var codigo = certificados[atual].code;

		if (!codigo || !navigator.clipboard) {
			return;
		}

		navigator.clipboard.writeText(codigo).then(function() {
			botao.textContent = "Copiado";
		}, function() {
			botao.textContent = "Não consegui copiar";
		});
	}

	/* ---------- apoio ---------- */

	// "2026-05-26" -> <time datetime="2026-05-26">maio de 2026</time>
	// (com dia: "26 de maio de 2026")
	function tagData(iso, comDia) {
		var partes = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(iso));

		if (!partes) {
			return escapeHtml(iso || "");
		}

		var mes = MESES[parseInt(partes[2], 10) - 1];
		var texto = (comDia ? parseInt(partes[3], 10) + " de " : "") + mes + " de " + partes[1];

		return "<time datetime=\"" + escapeAttr(iso) + "\">" + texto + "</time>";
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
