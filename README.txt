Portfolio - Gabriel Lourenco
============================

Site estatico para apresentar projetos, habilidades e contatos.

Estrutura principal
-------------------

- index.html: estrutura da pagina.
- assets/css/main.css: estilos do template e customizacoes do portfolio.
- assets/js/projects-data.js: lista de projetos, tags, linguagens e temas.
- assets/js/projects.js: busca, filtros, ordenacao e avatar tematico.
- projects: paginas individuais de detalhes dos projetos.
- images/sites: imagens dos projetos.

Como adicionar um projeto
-------------------------

Abra assets/js/projects-data.js e adicione um novo item em window.PORTFOLIO_PROJECTS:

{
	title: "Nome do projeto",
	slug: "nome-do-projeto",
	description: "Descricao curta do que o projeto faz.",
	image: "images/sites/imagem.png",
	detailUrl: "projects/nome-do-projeto.html",
	demoUrl: "https://link-do-projeto.com",
	codeUrl: "https://github.com/usuario/repositorio",
	status: "Publicado",
	special: false,
	languages: ["JavaScript", "React"],
	tags: ["frontend", "jogos"],
	themes: ["jogos"],
	featuredNote: ""
}

Tags e filtros
--------------

Os filtros de linguagem, tema, tag e status aparecem automaticamente com base nos projetos cadastrados.
Para destacar um projeto, use special: true. Ele aparece antes dos outros e recebe uma estrela.
Para guardar uma ideia sem mostrar no site, use draft: true.

Avatares tematicos
------------------

O espaco para trocar a foto por tema ja existe em window.PORTFOLIO_THEME_PROFILES.
Cada tema pode controlar imagem, rotulo, texto, icone e cores do painel esquerdo:

rpg: {
	label: "RPG",
	caption: "Texto do tema RPG",
	image: "images/avatar.png",
	iconClass: "icon solid fa-dice-d20",
	accent: "#c084fc",
	panelStart: "rgba(40, 24, 69, 0.82)",
	panelEnd: "rgba(19, 18, 35, 0.95)"
}

Combinacoes tambem podem existir, por exemplo "ensino+rpg", "ensino+jogos", "rpg+jogos" ou "ensino+rpg+jogos". O filtro de temas permite marcar mais de um tema; quando existir uma combinacao cadastrada, o painel esquerdo usa esse perfil visual.
Os temas principais atuais sao ensino, rpg e jogos. Tags como "ia" ainda podem continuar como tag de busca quando o projeto realmente usar inteligencia artificial.
Por enquanto todos os perfis visuais usam images/avatar.png. Quando quiser voltar com imagens tematicas, basta trocar o campo image de cada perfil.

Paginas de detalhes
-------------------

O card inteiro abre a pagina definida em detailUrl. O botao "Ver projeto" aparece apenas quando demoUrl existe.
Cada arquivo dentro de projects pode ter um layout diferente, entao projetos especiais podem receber textos, imagens, sessoes e organizacao proprios.

Publicacao
----------

O projeto pode ser publicado no GitHub Pages, Vercel, Netlify ou qualquer hospedagem de arquivos estaticos.
