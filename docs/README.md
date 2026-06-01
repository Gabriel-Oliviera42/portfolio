# Documentação do portfólio

Esta pasta organiza as regras e decisões para evoluir o portfólio sem virar bagunça.

Ela existe para responder três perguntas:

- Como cadastrar um projeto novo?
- Como escrever uma página de projeto mantendo minha voz?
- Quando vale automatizar mais, inclusive pensando em banco de dados?

## Arquivos

- [Modelo de dados](./01-modelo-de-dados.md): campos usados hoje em `projects-data.js` e como eles poderiam virar banco no futuro.
- [Padrão de página de projeto](./02-pagina-de-projeto.md): topo, imagem principal, card lateral e tom de escrita.
- [Fluxo para novo projeto](./03-fluxo-novo-projeto.md): passo a passo para criar um projeto novo.
- [Automação futura](./04-automacao-futura.md): ideias para gerar páginas, validar campos e decidir se PostgreSQL faz sentido.

## Decisão atual

Por enquanto, o portfólio deve continuar estático.

Isso mantém o projeto simples para publicar no GitHub Pages e evita criar uma estrutura pesada antes de existir necessidade real. A organização principal fica em:

```text
assets/js/projects-data.js
projects/
images/sites/
assets/videos/projects/
```

Quando a quantidade de projetos crescer ou quando fizer sentido ter uma área administrativa, aí sim dá para pensar em banco de dados, API e geração automática.

## Registros de andamento

- [Laboratório JavaScript com AsmrProg](./05-andamento-laboratorio-asmrprog.md): contexto da primeira versão da página, imagem principal, vídeos usados e pendências para continuar.
