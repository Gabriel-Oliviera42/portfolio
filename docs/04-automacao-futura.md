# Automação futura

O portfólio já pode ficar mais organizado sem virar um sistema completo.

A ideia é evoluir por fases.

## Fase 1: organização atual

Manter:

- `projects-data.js` como fonte dos cards.
- Páginas HTML em `projects/`.
- Imagens em `images/sites/`.
- Vídeos em `assets/videos/projects/`.
- Documentação em `docs/`.

Essa fase é simples, rápida e funciona bem com GitHub Pages.

## Fase 2: template de projeto

Criar um arquivo modelo, por exemplo:

```text
templates/project-detail.html
```

Ele teria:

- Topo pronto.
- Card lateral pronto.
- Estrutura básica das seções.
- Comentários indicando onde trocar texto, links e imagens.

Isso reduz erro manual ao criar uma página nova.

## Fase 3: script gerador

Criar um script para gerar uma página a partir de dados.

Exemplo de comando futuro:

```powershell
node scripts/new-project.js jornada-no-front-end
```

O script poderia:

- Criar o HTML em `projects/`.
- Adicionar um objeto inicial em `projects-data.js`.
- Criar pastas ou arquivos de mídia.
- Validar se o `slug` já existe.
- Avisar se falta imagem, link ou tecnologia.

## Fase 4: dados em JSON

Em vez de editar direto `projects-data.js`, usar:

```text
data/projects.json
data/theme-profiles.json
```

Depois um script geraria o JavaScript usado pelo site.

Vantagem:

- Dados ficam mais limpos.
- Dá para validar campos.
- Fica mais fácil migrar para banco no futuro.

## Fase 5: Markdown para conteúdo

Cada projeto poderia ter um arquivo:

```text
content/projects/jornada-no-front-end.md
```

Com metadados no topo:

```md
---
title: Jornada no Front-end
slug: jornada-no-front-end
status: Publicado
languages: [HTML, CSS, JavaScript]
themes: [ensino]
---

## Por que eu fiz

Texto do projeto...
```

Um gerador transformaria isso em HTML.

Essa fase é boa se as páginas ficarem mais textuais.

## Fase 6: PostgreSQL

PostgreSQL só deve entrar quando existir uma necessidade real.

Sinais de que chegou a hora:

- Quero cadastrar projetos por formulário.
- Quero editar sem mexer no código.
- Quero ter login ou painel administrativo.
- Quero relacionar projetos, tags, mídias, versões e textos.
- Quero reaproveitar os dados em outro site ou API.

Se for só para listar projetos no portfólio, PostgreSQL é mais trabalho do que benefício.

## Caminho recomendado

Ordem sugerida:

1. Documentar padrões.
2. Criar template HTML.
3. Criar script simples para novo projeto.
4. Separar dados em JSON.
5. Gerar páginas a partir de Markdown.
6. Só depois pensar em PostgreSQL.

Assim o projeto cresce sem perder simplicidade.
