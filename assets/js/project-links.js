/*
	Blocos que puxam OUTROS projetos dentro de uma pagina de projeto.

	Dois hoje, os dois em projects/portfolio.html:

	  [data-latest-project]   - card lateral, mostra o ultimo projeto cadastrado
	  [data-continue-reading] - fim da pagina, sugere leituras

	Os dois excluem o projeto da propria pagina e pintam cada item com a cor do
	tema daquele projeto, usando o mesmo PORTFOLIO_THEME_PROFILES que o
	detail-theme.js le. A cor NAO e reimplementada aqui: chamamos a funcao real
	(PortfolioThemeUtils.findProfileKey), pela mesma razao do achado 2 do docs/09.

	Falha em silencio de proposito: os blocos nascem com o atributo hidden e so
	perdem o hidden quando ha o que mostrar.
*/
(function() {
	"use strict";

	var projetos = window.PORTFOLIO_PROJECTS || [];
	var perfis = window.PORTFOLIO_THEME_PROFILES || {};
	var utils = window.PortfolioThemeUtils;

	if (!projetos.length) {
		return;
	}

	var slugAtual = location.pathname.split("/").pop().replace(/\.html$/, "");

	var outros = projetos.filter(function(projeto) {
		return projeto
			&& projeto.slug !== slugAtual
			&& projeto.title
			&& projeto.detailUrl;
	});

	if (!outros.length) {
		return;
	}

	preencherUltimo(document.querySelector("[data-latest-project]"));
	preencherLeituras(document.querySelector("[data-continue-reading]"));

	/* ---------- card lateral: o ultimo projeto que entrou ---------- */

	function preencherUltimo(bloco) {
		if (!bloco) {
			return;
		}

		var datados = outros.filter(function(projeto) {
			return projeto.addedAt;
		}).sort(function(a, b) {
			return b.addedAt.localeCompare(a.addedAt);
		});

		var recente = datados[0];
		var data = recente && formatarData(recente.addedAt);

		if (!data) {
			return;
		}

		var link = document.createElement("a");
		link.className = "latest-project";
		link.href = paraRaiz(recente.detailUrl);

		var icone = iconeDe(recente);

		if (icone) {
			link.appendChild(icone);
		}

		var texto = document.createElement("span");
		texto.className = "latest-project-text";

		var nome = document.createElement("span");
		nome.className = "latest-project-name";
		nome.textContent = recente.title;

		var quando = document.createElement("span");
		quando.className = "latest-project-date";
		quando.textContent = "entrou em " + data;

		texto.appendChild(nome);
		texto.appendChild(quando);
		link.appendChild(texto);

		pintar(link, recente);
		bloco.appendChild(link);
		bloco.removeAttribute("hidden");
	}

	/* ---------- fim da pagina: continuar lendo ---------- */

	function preencherLeituras(bloco) {
		if (!bloco) {
			return;
		}

		var quantos = parseInt(bloco.getAttribute("data-continue-reading"), 10) || 2;

		// prioriza os que o dono marcou como especiais, depois os mais recentes
		var escolhidos = outros.slice().sort(function(a, b) {
			if (Boolean(a.special) !== Boolean(b.special)) {
				return a.special ? -1 : 1;
			}

			return String(b.addedAt || "").localeCompare(String(a.addedAt || ""));
		}).slice(0, quantos);

		if (!escolhidos.length) {
			return;
		}

		var lista = document.createElement("div");
		lista.className = "continue-reading";

		escolhidos.forEach(function(projeto) {
			var item = document.createElement("a");
			item.className = "continue-reading-item";
			item.href = paraRaiz(projeto.detailUrl);

			var topo = document.createElement("span");
			topo.className = "continue-reading-head";

			var icone = iconeDe(projeto);

			if (icone) {
				topo.appendChild(icone);
			}

			var nome = document.createElement("span");
			nome.className = "continue-reading-name";
			nome.textContent = projeto.title;
			topo.appendChild(nome);

			var resumo = document.createElement("span");
			resumo.className = "continue-reading-text";
			resumo.textContent = encurtar(projeto.description || "", 150);

			var chamada = document.createElement("span");
			chamada.className = "continue-reading-cta";
			chamada.textContent = "Continuar lendo";

			item.appendChild(topo);
			item.appendChild(resumo);
			item.appendChild(chamada);

			pintar(item, projeto);
			lista.appendChild(item);
		});

		bloco.appendChild(lista);
		bloco.removeAttribute("hidden");
	}

	/* ---------- apoio ---------- */

	function corDe(projeto) {
		if (!utils || !projeto.themes || !projeto.themes.length) {
			return null;
		}

		var perfil = perfis[utils.findProfileKey(projeto.themes, perfis)];

		return perfil ? (perfil.detailAccent || perfil.accent) : null;
	}

	function pintar(elemento, projeto) {
		var cor = corDe(projeto);

		if (cor) {
			elemento.style.setProperty("--cor-do-projeto", cor);
		}
	}

	function iconeDe(projeto) {
		if (!utils || !projeto.themes || !projeto.themes.length) {
			return null;
		}

		var perfil = perfis[utils.findProfileKey(projeto.themes, perfis)];

		if (!perfil || !perfil.iconClass) {
			return null;
		}

		var icone = document.createElement("span");
		icone.className = perfil.iconClass;
		icone.setAttribute("aria-hidden", "true");

		return icone;
	}

	// detailUrl e relativo a raiz do site; estas paginas moram em projects/
	function paraRaiz(url) {
		return "../" + url;
	}

	function encurtar(texto, limite) {
		if (texto.length <= limite) {
			return texto;
		}

		var corte = texto.slice(0, limite);
		var espaco = corte.lastIndexOf(" ");

		return (espaco > 0 ? corte.slice(0, espaco) : corte) + "...";
	}

	function formatarData(iso) {
		var partes = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);

		if (!partes) {
			return null;
		}

		var meses = [
			"janeiro", "fevereiro", "março", "abril", "maio", "junho",
			"julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
		];

		var mes = meses[parseInt(partes[2], 10) - 1];

		return mes ? (parseInt(partes[3], 10) + " de " + mes + " de " + partes[1]) : null;
	}
})();
