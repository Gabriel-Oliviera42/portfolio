# Fluxo para criar um novo projeto

Este é o passo a passo recomendado para adicionar um projeto novo ao portfólio.

## 1. Separar informações básicas

Antes de mexer no código, responder:

- Qual é o nome do projeto?
- Ele é autoral, estudo guiado, pesquisa, ferramenta ou protótipo?
- Existe link publicado?
- Existe repositório público?
- Quais tecnologias aparecem de verdade?
- Quais temas principais ele usa: `ensino`, `rpg`, `jogos`?
- Quais tags ajudam na busca?
- Ele merece `special: true`?

## 2. Criar ou escolher imagens

Imagens recomendadas:

- Screenshot principal para `images/sites/`.
- Vídeo desktop, se o movimento ajudar.
- Vídeo mobile, se responsividade for relevante.

Regras:

- Nomear arquivos de forma clara.
- Evitar imagens temporárias ou prints confusos.
- Usar imagem real do projeto quando possível.

## 3. Cadastrar no `projects-data.js`

Adicionar um objeto em `window.PORTFOLIO_PROJECTS`.

Conferir:

- `slug` igual ao nome do HTML em `projects/`.
- `detailUrl` apontando para a página certa.
- `demoUrl` vazio se não existir projeto publicado.
- `codeUrl` vazio se o repositório não for público.
- `languages`, `tags` e `themes` consistentes.

## 4. Criar página em `projects/`

Nome do arquivo:

```text
projects/slug-do-projeto.html
```

Começar copiando a estrutura de uma página existente e adaptar:

- `<title>`
- `<meta name="description">`
- `eyebrow`
- `h1`
- `detail-summary`
- imagem principal
- ficha lateral
- links laterais
- aprendizados
- seções do corpo

## 5. Escrever o texto

O texto deve responder:

- Por que eu fiz?
- Como foi o processo?
- O que deu trabalho?
- O que eu aprendi?
- O que esse projeto mostra sobre minha evolução?

Se o projeto foi guiado, falar isso claramente.

Se foi autoral, explicar de onde veio a ideia.

Se foi pesquisa, explicar problema, método e resultado.

## 6. Testar visualmente

Verificar:

- Página inicial lista o projeto.
- Filtros funcionam.
- Card abre a página certa.
- Botões não aparecem quebrados.
- Imagem principal está boa.
- Card lateral está preenchido.
- Mobile não quebra.
- Acentuação aparece corretamente no navegador.

## 7. Antes de publicar

Rodar:

```powershell
git status
```

Conferir se não existem arquivos temporários, prints de teste ou documentos internos entrando no commit.

Arquivos internos devem ficar no `.gitignore`.

## 8. Commit sugerido

Formato simples:

```powershell
git add -A
git commit -m "Adiciona pagina do projeto Nome do Projeto"
git push origin main
```
