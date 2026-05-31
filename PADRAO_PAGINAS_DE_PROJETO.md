# Padrão para páginas de projeto

Este arquivo serve como referência para criar as próximas páginas dentro de `projects/`.
A ideia não é engessar todos os projetos, mas manter uma base visual e narrativa consistente.

## Estrutura fixa

Toda página de projeto deve começar com:

- Botão `Voltar para projetos`.
- Topo com categoria curta, título, resumo e ações.
- Imagem principal grande do projeto, sem legenda embaixo.
- Card lateral com ficha, links do projeto e aprendizados.

O corpo do texto pode mudar bastante de acordo com o projeto. Seções como `Por que eu fiz`, `Meu processo`, `Minha leitura do resultado`, `O que esse projeto me ensinou`, `Galeria e materiais` e `Conclusões` são sugestões, não obrigação.

## Topo da página

O topo deve apresentar o projeto rápido, sem explicar tudo ali.

Campos esperados:

- `eyebrow`: uma frase curta com tipo/contexto, como `Estudo guiado | Codeboost`, `Projeto autoral | RPG`, `Ferramenta web | Estudos`.
- `h1`: nome do projeto.
- `detail-summary`: resumo em primeira pessoa, com 2 a 4 linhas. Deve explicar o contexto do projeto e por que ele importa.
- Ações principais:
  - `Ver projeto`, quando existir link publicado.
  - `Ver vídeo base`, `Ver repositório`, `Ver documentação` ou outro link principal, quando fizer sentido.
- Links pessoais:
  - GitHub, LinkedIn e e-mail devem ficar só como ícones redondos, sem texto visível.

Exemplo de tom para resumo:

```html
<p class="detail-summary">Esse foi um dos meus primeiros projetos práticos de front-end. Eu fiz acompanhando a série da Codeboost, depois de conhecer o Will em uma palestra na faculdade, quando eu ainda estava muito mais acostumado a ver teoria do que a construir algo de verdade.</p>
```

## Imagem principal

A imagem principal deve ser uma captura, foto ou preview forte do projeto.

Regras:

- Usar `figure.detail-media`.
- Não colocar `figcaption` no topo.
- A imagem precisa ajudar a entender o projeto de cara.
- Se precisar explicar a imagem, fazer isso no texto do corpo, não embaixo dela.

## Card lateral

O card lateral deve funcionar como uma ficha rápida para quem está escaneando a página.

Campos recomendados:

```html
<aside class="detail-aside detail-aside-sticky">
	<section>
		<h2>Ficha</h2>
		<ul>
			<li><strong>Status:</strong> Publicado</li>
			<li><strong>Tipo:</strong> Código guiado</li>
			<li><strong>Tecnologias:</strong> HTML, CSS, JavaScript</li>
			<li><strong>Temas:</strong> Ensino, Front-end, UI</li>
			<li><strong>Tempo:</strong> Cerca de 20h de prática</li>
		</ul>
	</section>

	<section class="detail-aside-block">
		<h2>Links do projeto</h2>
		<ul class="detail-link-list">
			<li><a href="#"><span class="icon solid fa-external-link-alt" aria-hidden="true"></span>Projeto publicado</a></li>
			<li><a href="#"><span class="icon brands fa-github" aria-hidden="true"></span>Repositório</a></li>
		</ul>
	</section>

	<section class="detail-aside-block">
		<h2>Aprendizados</h2>
		<ul>
			<li>Prática além da teoria.</li>
			<li>HTML e CSS em uma página completa.</li>
			<li>Paciência para depurar erros simples.</li>
		</ul>
	</section>
</aside>
```

Adapte os campos conforme o projeto. Nem todo projeto precisa ter `Tempo`, `Vídeo da aula` ou `Projeto publicado`.

## Tom de escrita

Escrever em primeira pessoa, com uma linguagem honesta e direta.

O texto deve soar como uma explicação real do meu processo, não como propaganda. Pode mostrar dificuldade, demora, tentativa, erro e aprendizado. O objetivo é mostrar trajetória.

Boas características do texto:

- Usar frases como `na época`, `olhando hoje`, `eu ainda estava`, `o valor dele está mais no processo`.
- Explicar o contexto antes de listar tecnologia.
- Não fingir autoria quando o projeto foi guiado.
- Não exagerar a complexidade.
- Mostrar o que eu aprendi de verdade.

Evitar:

- Texto genérico demais, tipo `projeto desenvolvido para aprimorar habilidades`.
- Falar como se todo projeto fosse perfeito.
- Esconder quando foi tutorial, estudo guiado ou prática.
- Encher de termos técnicos sem explicar o processo.

## Galeria e vídeos

Quando tiver vídeo ou GIF:

- Os vídeos devem ficar em loop, sem controles, como material visual.
- O vídeo desktop pode ter um texto simples logo abaixo.
- O vídeo mobile deve aparecer como apoio visual, sem descrição própria quando a explicação já estiver no desktop.
- Não usar moldura extra em texto de legenda. Texto simples é suficiente.

Exemplo de legenda boa:

```html
<div class="project-demo-caption">
	<p>Foi minha primeira vez fazendo algo bom de verdade com responsividade. Eu não usei nada que não conhecesse na época, mas só de entender melhor a ordem de fazer as coisas e os cuidados necessários, isso já ajudou muito nos sites que eu faço hoje.</p>
</div>
```

## Conclusão

A conclusão deve fechar o projeto olhando para trás.

Ela pode falar:

- O que esse projeto representa hoje.
- O que ele mostra sobre minha evolução.
- O que eu faria diferente.
- Por que ele ainda merece estar no portfólio.
- Agradecimentos, quando fizer sentido.

Exemplo de direção:

```text
Hoje eu gosto de olhar para esse projeto como um registro de começo. Ele não tem uma proposta autoral minha, mas ainda assim representa tempo, esforço e uma virada importante.
```

## Checklist antes de publicar

- A imagem principal está sem legenda.
- Os links pessoais do topo estão só como ícones redondos.
- O card lateral está preenchido e fácil de escanear.
- O texto deixa claro se o projeto é autoral, guiado, estudo ou ferramenta.
- A página tem links úteis, mas não inventa link quando não existe.
- Os vídeos ou imagens carregam corretamente.
- A acentuação está correta no navegador.
