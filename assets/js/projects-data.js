window.PORTFOLIO_PROJECTS = [
	{
		title: "Sistema de Gestao Academica",
		slug: "sistema-gestao-academica",
		description: "Sistema premiado em hackathon para organizar atividades academicas, com arquitetura MVC, MongoDB e integracao com agentes de IA.",
		image: "images/sites/Projeto Cadeboost.png",
		detailUrl: "projects/sistema-gestao-academica.html",
		demoUrl: "",
		codeUrl: "",
		status: "Em evolucao",
		special: true,
		languages: ["C#", ".NET", "MongoDB"],
		tags: ["ensino", "ia", "backend", "full-stack"],
		themes: ["ensino"],
		featuredNote: "1o lugar em hackathon"
	},
	{
		title: "AcessiLab",
		slug: "acessibilidade-web",
		description: "Plataforma de auditoria automatizada de acessibilidade web com WCAG, Playwright, Axe Core e sugestoes de correcao assistidas por IA. TCC em evolucao a partir de iniciacao cientifica.",
		image: "images/sites/TCC - AcessiLab.png",
		detailUrl: "projects/acessibilidade-web.html",
		demoUrl: "http://129.121.43.216:8081/",
		codeUrl: "https://github.com/Gabriel-Oliviera42/tc-acessibilidade",
		status: "Em evolucao",
		special: true,
		languages: ["Python", "FastAPI", "React", "MongoDB"],
		tags: ["ensino", "acessibilidade", "pesquisa", "ia", "backend", "full-stack"],
		themes: ["ensino"],
		featuredNote: "TCC | Iniciacao cientifica"
	},
	{
		title: "Deck Fill MTG (Proxy)",
		slug: "deck-fill-mtg",
		description: "Ferramenta full-stack para criar proxies personalizados de Magic: The Gathering consumindo API externa.",
		image: "images/sites/Deck Fill MTG (Proxy).png",
		detailUrl: "projects/deck-fill-mtg.html",
		demoUrl: "https://deck-fill-mtg.vercel.app/",
		codeUrl: "",
		status: "Publicado",
		special: true,
		languages: ["JavaScript", "API", "CSS"],
		tags: ["rpg", "jogos", "ferramenta", "full-stack"],
		themes: ["rpg", "jogos"],
		featuredNote: "Projeto pessoal"
	},
	{
		title: "Jornada no Front-end",
		slug: "jornada-no-front-end",
		description: "Projeto de estudo focado em UI, estrutura semantica, responsividade e CSS moderno.",
		image: "images/sites/Jornada no Front-end.png",
		detailUrl: "projects/jornada-no-front-end.html",
		demoUrl: "https://gabriel-oliviera42.github.io/Jornada-no-Front-end/",
		codeUrl: "",
		status: "Publicado",
		special: false,
		languages: ["HTML", "CSS", "JavaScript"],
		tags: ["frontend", "ensino", "ui"],
		themes: ["ensino"],
		featuredNote: ""
	},
	{
		title: "Laboratorio JavaScript com AsmrProg",
		slug: "laboratorio-javascript-asmrprog",
		description: "Colecao de cinco estudos guiados em JavaScript, reunindo jogos, interface animada, gerador de senhas e visualizacao de dados.",
		image: "images/sites/Laboratorio JavaScript AsmrProg.png",
		detailUrl: "projects/laboratorio-javascript-asmrprog.html",
		demoUrl: "",
		codeUrl: "",
		status: "Publicado",
		special: false,
		languages: ["HTML", "CSS", "JavaScript"],
		tags: ["frontend", "ensino", "jogos", "ui"],
		themes: ["ensino", "jogos"],
		featuredNote: "Colecao de estudos guiados"
	},
	{
		title: "Projeto Cadeboost",
		slug: "projeto-cadeboost",
		description: "Interface web desenvolvida em estudos avancados de interacao, composicao visual e componentes responsivos.",
		image: "images/sites/Projeto Cadeboost.png",
		detailUrl: "projects/projeto-cadeboost.html",
		demoUrl: "https://gabriel-oliviera42.github.io/Projeto-Cadeboost-1/",
		codeUrl: "",
		status: "Publicado",
		special: false,
		languages: ["HTML", "CSS", "JavaScript"],
		tags: ["frontend", "ui", "ensino"],
		themes: ["ensino"],
		featuredNote: ""
	},
	{
		title: "Landing Page One Bit Code",
		slug: "landing-page-one-bit-code",
		description: "Landing page responsiva criada para praticar apresentacao de produto, conversao e experiencia mobile.",
		image: "images/sites/Landing Page One Bit Code.png",
		detailUrl: "projects/landing-page-one-bit-code.html",
		demoUrl: "https://gabriel-oliviera42.github.io/PROJETO-LANDING-PAGE-One-Bit-Code/",
		codeUrl: "",
		status: "Publicado",
		special: false,
		languages: ["HTML", "CSS", "JavaScript"],
		tags: ["frontend", "landing-page", "ensino"],
		themes: ["ensino"],
		featuredNote: ""
	}
];

window.PORTFOLIO_THEME_PROFILES = {
	default: {
		label: "Desenvolvedor full-stack",
		caption: "Projetos, estudos e ferramentas organizados por tema, linguagem e contexto.",
		image: "images/avatar.png",
		iconClass: "icon solid fa-code",
		accent: "#56d8e7",
		panelStart: "rgba(14, 52, 61, 0.88)",
		panelEnd: "rgba(10, 28, 38, 0.96)"
	},
	ensino: {
		label: "Ensino",
		caption: "Projetos academicos, estudos guiados e ferramentas para aprender melhor.",
		image: "images/avatar.png",
		iconClass: "icon solid fa-graduation-cap",
		accent: "#5eead4",
		panelStart: "rgba(18, 83, 92, 0.88)",
		panelEnd: "rgba(12, 45, 55, 0.96)"
	},
	rpg: {
		label: "RPG",
		caption: "Ferramentas, cartas, dados, mesas e sistemas criativos.",
		image: "images/avatar.png",
		iconClass: "icon solid fa-dice-d20",
		accent: "#c084fc",
		panelStart: "rgba(40, 24, 69, 0.82)",
		panelEnd: "rgba(19, 18, 35, 0.95)"
	},
	jogos: {
		label: "Jogos",
		caption: "Cartas, estrategia, interfaces interativas e experimentos jogaveis.",
		image: "images/avatar.png",
		iconClass: "icon solid fa-gamepad",
		accent: "#60a5fa",
		panelStart: "rgba(20, 55, 101, 0.84)",
		panelEnd: "rgba(16, 31, 55, 0.95)"
	},
	"ensino+rpg": {
		label: "Ensino + RPG",
		caption: "Projetos que misturam aprendizado, sistemas criativos e experiencia de mesa.",
		image: "images/avatar.png",
		iconClass: "icon solid fa-dice-d20",
		accent: "#a7f3d0",
		panelStart: "rgba(37, 61, 72, 0.84)",
		panelEnd: "rgba(29, 24, 48, 0.95)"
	},
	"ensino+jogos": {
		label: "Ensino + jogos",
		caption: "Projetos que usam jogos, progresso e interacao para transformar aprendizado em experiencia.",
		image: "images/avatar.png",
		iconClass: "icon solid fa-puzzle-piece",
		accent: "#facc15",
		panelStart: "rgba(18, 93, 109, 0.84)",
		panelEnd: "rgba(35, 62, 82, 0.95)"
	},
	"rpg+jogos": {
		label: "RPG + jogos",
		caption: "Projetos que misturam estrategia, cartas, dados e experiencias interativas.",
		image: "images/avatar.png",
		iconClass: "icon solid fa-dice-d20",
		accent: "#93c5fd",
		panelStart: "rgba(32, 38, 89, 0.84)",
		panelEnd: "rgba(36, 24, 54, 0.95)"
	},
	"ensino+rpg+jogos": {
		label: "Ensino + RPG + jogos",
		caption: "Aprendizado gamificado com narrativa, estrategia e experiencias interativas.",
		image: "images/avatar.png",
		iconClass: "icon solid fa-puzzle-piece",
		accent: "#facc15",
		panelStart: "rgba(45, 45, 93, 0.84)",
		panelEnd: "rgba(29, 24, 48, 0.95)"
	}
};
