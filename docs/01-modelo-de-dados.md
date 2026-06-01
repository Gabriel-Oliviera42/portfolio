# Modelo de dados dos projetos

Hoje os projetos ficam em `assets/js/projects-data.js`, dentro de `window.PORTFOLIO_PROJECTS`.

Esse arquivo funciona como um banco de dados simples em JavaScript. Para o momento atual, isso é suficiente: o site é estático, fácil de publicar e não depende de servidor.

## Campos de um projeto

```js
{
	title: "Nome do projeto",
	slug: "nome-do-projeto",
	description: "Resumo curto para o card da página inicial.",
	image: "images/sites/imagem.png",
	detailUrl: "projects/nome-do-projeto.html",
	demoUrl: "https://link-publicado.com",
	codeUrl: "https://github.com/usuario/repositorio",
	status: "Publicado",
	special: false,
	languages: ["HTML", "CSS", "JavaScript"],
	tags: ["frontend", "ensino"],
	themes: ["ensino"],
	featuredNote: ""
}
```

## Regras dos campos

### `title`

Nome exibido no card.

Deve ser claro e curto. Evitar nomes genéricos como `Projeto 1`.

### `slug`

Identificador do projeto.

Usar letras minúsculas, sem acentos, sem espaços, separado por hífen.

Exemplos:

- `jornada-no-front-end`
- `deck-fill-mtg`
- `sistema-gestao-academica`

### `description`

Resumo curto para a listagem.

Não precisa contar toda a história. A página de detalhes faz isso.

### `image`

Caminho da imagem usada no card.

Preferência:

- Screenshot real do projeto.
- Imagem que mostre a interface ou o resultado.
- Evitar imagem genérica que não ajude a entender o projeto.

### `detailUrl`

Página de detalhes dentro de `projects/`.

Todo projeto importante deve ter uma página própria.

### `demoUrl`

Link do projeto publicado.

Se não existir, deixar vazio. Não inventar link.

### `codeUrl`

Link do repositório.

Se o código não estiver público ou ainda não fizer sentido mostrar, deixar vazio.

### `status`

Estado do projeto.

Valores recomendados:

- `Publicado`
- `Em evolução`
- `Pesquisa`
- `Protótipo`
- `Estudo guiado`
- `Arquivado`

### `special`

Marca projetos que devem aparecer com prioridade.

Usar `true` apenas quando o projeto realmente merece destaque.

### `languages`

Tecnologias principais.

Usar nomes consistentes:

- `HTML`
- `CSS`
- `JavaScript`
- `Python`
- `C#`
- `.NET`
- `MongoDB`
- `API`

### `tags`

Assuntos de busca.

Podem ser mais livres que temas. Exemplo:

- `frontend`
- `ensino`
- `rpg`
- `jogos`
- `ia`
- `pesquisa`
- `full-stack`
- `acessibilidade`

### `themes`

Temas que mudam contexto visual e filtros principais.

Por enquanto usar apenas:

- `ensino`
- `rpg`
- `jogos`

Não criar tema novo sem motivo forte. Tags já resolvem boa parte dos casos.

### `featuredNote`

Texto curto de destaque.

Exemplos:

- `1º lugar em hackathon`
- `Projeto pessoal`
- `Iniciação científica`

Se não tiver destaque real, deixar vazio.

## Quando PostgreSQL faria sentido

PostgreSQL pode ser útil no futuro, mas não precisa entrar agora.

Ele começa a fazer sentido se o portfólio tiver:

- Muitos projetos para cadastrar e editar com frequência.
- Painel administrativo.
- Login.
- Busca mais complexa.
- Projetos com muitas mídias, links e versões.
- Relacionamentos mais fortes entre projetos, tecnologias, temas e textos.

## Possível estrutura futura em PostgreSQL

```sql
projects (
	id,
	title,
	slug,
	description,
	image_path,
	detail_url,
	demo_url,
	code_url,
	status,
	special,
	featured_note,
	created_at,
	updated_at
)

languages (
	id,
	name
)

project_languages (
	project_id,
	language_id
)

tags (
	id,
	name
)

project_tags (
	project_id,
	tag_id
)

themes (
	id,
	name
)

project_themes (
	project_id,
	theme_id
)

project_media (
	id,
	project_id,
	type,
	path,
	caption,
	sort_order
)
```

## Decisão prática

Antes de usar PostgreSQL, o próximo passo mais simples seria transformar os dados em um JSON mais organizado ou criar um script que gere as páginas a partir de um template.

Banco de dados fica para uma fase em que o portfólio virar quase um sistema.
