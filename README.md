# Portfólio - Gabriel Lourenço de Oliveira

Meu portfólio pessoal para apresentar projetos, estudos, habilidades e formas de contato.

A proposta do site é funcionar como uma vitrine organizada do meu processo como desenvolvedor: não mostrar apenas o resultado final dos projetos, mas também contexto, decisões, aprendizados e evolução.

## O que tem no portfólio

- Página inicial com apresentação, links de contato e projetos em destaque.
- Busca e filtros por linguagem, tema, tag e status.
- Projetos especiais com prioridade visual.
- Páginas individuais para explicar cada projeto com mais liberdade.
- Espaço para vídeos, imagens, links publicados e materiais de referência.
- Sistema de temas para adaptar o painel lateral conforme o tipo de projeto.

## Tecnologias

- HTML
- CSS
- JavaScript

O projeto é estático, então pode ser publicado em GitHub Pages, Vercel, Netlify ou qualquer hospedagem simples de arquivos.

## Estrutura

```text
.
+-- assets/
|   +-- css/
|   +-- js/
|   +-- videos/
+-- images/
|   +-- sites/
|   +-- themes/
+-- projects/
+-- index.html
+-- README.md
```

## Como os projetos são cadastrados

A lista de projetos fica em:

```text
assets/js/projects-data.js
```

Cada projeto pode ter título, descrição, imagem, tecnologias, temas, tags, links e página própria de detalhes.

Exemplo resumido:

```js
{
	title: "Nome do projeto",
	slug: "nome-do-projeto",
	description: "Descrição curta do projeto.",
	image: "images/sites/imagem.png",
	detailUrl: "projects/nome-do-projeto.html",
	demoUrl: "https://link-do-projeto.com",
	codeUrl: "https://github.com/usuario/repositorio",
	status: "Publicado",
	special: false,
	languages: ["HTML", "CSS", "JavaScript"],
	tags: ["frontend", "estudo"],
	themes: ["ensino"]
}
```

## Páginas de detalhes

Cada projeto pode ter uma página própria dentro de `projects/`.

Essas páginas não precisam seguir todas a mesma estrutura. Alguns projetos podem ter vídeos, outros podem ter prints, links, explicações mais técnicas ou textos mais pessoais sobre o processo.

O objetivo é que cada página conte melhor a história daquele projeto.

## Rodando localmente

Como é um site estático, basta abrir o `index.html` no navegador.

Também dá para usar uma extensão como Live Server no VS Code para navegar com mais conforto durante o desenvolvimento.

## Status

Portfólio em evolução. Novos projetos, melhorias visuais e páginas individuais serão adicionados aos poucos.
