window.PORTFOLIO_PROJECTS = [
	{
		title: "AcessiLab",
		slug: "acessibilidade-web",
		description: "Plataforma de auditoria automatizada de acessibilidade web com WCAG, Playwright, Axe Core e sugestões de correção assistidas por IA. TCC em evolução a partir de iniciação científica.",
		image: "images/sites/TCC - AcessiLab.webp",
		detailUrl: "projects/acessibilidade-web.html",
		demoUrl: "http://129.121.43.216:8081/",
		codeUrl: "https://github.com/Gabriel-Oliviera42/tc-acessibilidade",
		status: "Em evolução",
		special: true,
		languages: ["Python", "FastAPI", "React", "MongoDB"],
		tags: ["acessibilidade", "pesquisa", "ia", "backend", "full-stack"],
		themes: ["ensino"],
		featuredNote: "TCC | Iniciação científica"
	},
	{
		title: "Deck Fill MTG (Proxy)",
		slug: "deck-fill-mtg",
		description: "Ferramenta full-stack para criar proxies personalizados de Magic: The Gathering consumindo API externa.",
		image: "images/sites/Deck Fill MTG (Proxy).webp",
		detailUrl: "projects/deck-fill-mtg.html",
		demoUrl: "https://deck-fill-mtg.vercel.app/",
		codeUrl: "",
		status: "Publicado",
		special: true,
		languages: ["JavaScript", "API", "CSS"],
		tags: ["ferramenta", "full-stack"],
		themes: ["rpg", "jogos"],
		featuredNote: "Projeto pessoal"
	},
	{
		title: "Jornada no Front-end",
		slug: "jornada-no-front-end",
		description: "Projeto de estudo focado em UI, estrutura semântica, responsividade e CSS moderno.",
		image: "images/sites/Jornada no Front-end.webp",
		detailUrl: "projects/jornada-no-front-end.html",
		demoUrl: "https://gabriel-oliviera42.github.io/Jornada-no-Front-end/",
		codeUrl: "",
		status: "Publicado",
		special: false,
		languages: ["HTML", "CSS", "JavaScript"],
		tags: ["frontend", "ui"],
		themes: ["ensino"],
		featuredNote: ""
	},
	{
		title: "Laboratório JavaScript com AsmrProg",
		slug: "laboratorio-javascript-asmrprog",
		description: "Coleção de cinco estudos guiados em JavaScript, reunindo jogos, interface animada, gerador de senhas e visualização de dados.",
		image: "images/sites/Laboratorio JavaScript AsmrProg.webp",
		detailUrl: "projects/laboratorio-javascript-asmrprog.html",
		demoUrl: "",
		codeUrl: "",
		status: "Publicado",
		special: false,
		languages: ["HTML", "CSS", "JavaScript"],
		tags: ["frontend", "ui"],
		themes: ["ensino", "jogos"],
		featuredNote: "Coleção de estudos guiados"
	},
	{
		title: "Projeto Cadeboost",
		slug: "projeto-cadeboost",
		description: "Interface web desenvolvida em estudos avançados de interação, composição visual e componentes responsivos.",
		image: "images/sites/Projeto Cadeboost.webp",
		detailUrl: "projects/projeto-cadeboost.html",
		demoUrl: "https://gabriel-oliviera42.github.io/Projeto-Cadeboost-1/",
		codeUrl: "",
		status: "Publicado",
		special: false,
		languages: ["HTML", "CSS", "JavaScript"],
		tags: ["frontend", "ui"],
		themes: ["ensino"],
		featuredNote: ""
	},
	{
		title: "Chompbox",
		slug: "chompbox",
		description: "Montador de encontros de D&D 5e com banco de ~4.400 criaturas, filtros visuais e gerador automático com lógica de relações entre monstros.",
		image: "images/sites/Chompbox.webp",
		detailUrl: "projects/chompbox.html",
		demoUrl: "https://chomp-box.vercel.app/",
		codeUrl: "https://github.com/Gabriel-Oliviera42/ChompBox",
		status: "Publicado",
		special: true,
		languages: ["React", "Vite", "Tailwind", "Python", "FastAPI"],
		tags: ["ferramenta", "rpg", "dnd", "banco-de-dados", "full-stack", "design"],
		themes: ["rpg"],
		featuredNote: "Projeto pessoal"
	},
];

window.PORTFOLIO_THEME_PROFILES = {
	default: {
		label: "Desenvolvedor full-stack",
		caption: "Projetos, estudos e ferramentas organizados por tema, linguagem e contexto.",
		image: "images/avatar.webp",
		iconClass: "icon solid fa-code",
		accent: "#56d8e7",
		panelStart: "rgba(14, 52, 61, 0.88)",
		panelEnd: "rgba(10, 28, 38, 0.96)"
	},
	ensino: {
		label: "Ensino",
		caption: "Projetos acadêmicos, estudos guiados e ferramentas para aprender melhor.",
		image: "images/avatar.webp",
		iconClass: "icon solid fa-graduation-cap",
		accent: "#5eead4",
		detailAccent: "#0f766e",
		panelStart: "rgba(18, 83, 92, 0.88)",
		panelEnd: "rgba(12, 45, 55, 0.96)"
	},
	rpg: {
		label: "RPG",
		caption: "Ferramentas, cartas, dados, mesas e sistemas criativos.",
		image: "images/avatar.webp",
		iconClass: "icon solid fa-dice-d20",
		accent: "#c084fc",
		detailAccent: "#7c3aed",
		panelStart: "rgba(40, 24, 69, 0.82)",
		panelEnd: "rgba(19, 18, 35, 0.95)"
	},
	jogos: {
		label: "Jogos",
		caption: "Cartas, estratégia, interfaces interativas e experimentos jogáveis.",
		image: "images/avatar.webp",
		iconClass: "icon solid fa-gamepad",
		accent: "#60a5fa",
		detailAccent: "#2563eb",
		panelStart: "rgba(20, 55, 101, 0.84)",
		panelEnd: "rgba(16, 31, 55, 0.95)"
	},
	"ensino+rpg": {
		label: "Ensino + RPG",
		caption: "Projetos que misturam aprendizado, sistemas criativos e experiência de mesa.",
		image: "images/avatar.webp",
		iconClass: "icon solid fa-dice-d20",
		accent: "#a7f3d0",
		detailAccent: "#7e22ce",
		panelStart: "rgba(37, 61, 72, 0.84)",
		panelEnd: "rgba(29, 24, 48, 0.95)"
	},
	"ensino+jogos": {
		label: "Ensino + jogos",
		caption: "Projetos que usam jogos, progresso e interação para transformar aprendizado em experiência.",
		image: "images/avatar.webp",
		iconClass: "icon solid fa-puzzle-piece",
		accent: "#facc15",
		detailAccent: "#0e7490",
		panelStart: "rgba(18, 93, 109, 0.84)",
		panelEnd: "rgba(35, 62, 82, 0.95)"
	},
	"rpg+jogos": {
		label: "RPG + jogos",
		caption: "Projetos que misturam estratégia, cartas, dados e experiências interativas.",
		image: "images/avatar.webp",
		iconClass: "icon solid fa-dice-d20",
		accent: "#93c5fd",
		detailAccent: "#4f46e5",
		panelStart: "rgba(32, 38, 89, 0.84)",
		panelEnd: "rgba(36, 24, 54, 0.95)"
	},
	"ensino+rpg+jogos": {
		label: "Ensino + RPG + jogos",
		caption: "Aprendizado gamificado com narrativa, estratégia e experiências interativas.",
		image: "images/avatar.webp",
		iconClass: "icon solid fa-hat-wizard",
		accent: "#facc15",
		detailAccent: "#b45309",
		panelStart: "rgba(45, 45, 93, 0.84)",
		panelEnd: "rgba(29, 24, 48, 0.95)"
	}
};
