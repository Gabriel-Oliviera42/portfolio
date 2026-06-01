# Padrão de página de projeto

Este arquivo define o padrão das páginas dentro de `projects/`.

A página não precisa ser igual para todo projeto, mas o começo e o card lateral devem manter uma estrutura consistente.

## Partes fixas

Toda página deve ter:

- Botão `Voltar para projetos`.
- Topo com categoria, título, resumo e ações.
- Imagem principal grande, sem legenda.
- Card lateral com ficha, links e aprendizados.

## Topo

O topo deve explicar rápido o que é o projeto.

Estrutura:

```html
<header class="detail-hero">
	<div>
		<p class="eyebrow">Estudo guiado | Codeboost</p>
		<h1>Jornada no Front-end</h1>
		<p class="detail-summary">Resumo em primeira pessoa, explicando contexto e importância do projeto.</p>
		<div class="detail-actions">
			<div class="detail-primary-actions">
				<a href="#" class="button primary">Ver projeto</a>
				<a href="#video-referencia" class="button">Ver vídeo base</a>
			</div>
			<div class="detail-social-actions" aria-label="Links pessoais">
				<a href="#" class="button icon-only" title="GitHub"><span class="icon brands fa-github" aria-hidden="true"></span><span class="label">GitHub</span></a>
				<a href="#" class="button icon-only" title="LinkedIn"><span class="icon brands fa-linkedin-in" aria-hidden="true"></span><span class="label">LinkedIn</span></a>
				<a href="#" class="button icon-only" title="E-mail"><span class="icon solid fa-envelope" aria-hidden="true"></span><span class="label">E-mail</span></a>
			</div>
		</div>
	</div>
	<figure class="detail-media">
		<img src="../images/sites/imagem.png" alt="Tela do projeto Nome do Projeto" />
	</figure>
</header>
```

Regras:

- A imagem principal não deve ter `figcaption`.
- GitHub, LinkedIn e e-mail devem aparecer só como ícones redondos.
- O resumo deve ser humano e direto, não texto de propaganda.
- Se o projeto não tiver link publicado, não inventar botão `Ver projeto`.

## Card lateral

O card lateral é para leitura rápida.

Estrutura recomendada:

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
			<li><a href="#"><span class="icon brands fa-youtube" aria-hidden="true"></span>Vídeo da aula</a></li>
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

## Corpo da página

O corpo pode mudar.

Seções possíveis:

- `Por que eu fiz`
- `Meu processo`
- `Minha leitura do resultado`
- `O que esse projeto me ensinou`
- `Vídeo usado como referência`
- `Galeria e materiais`
- `Conclusões`

Nem todo projeto precisa ter todas essas seções.

## Tom de escrita

Escrever como uma explicação real do meu processo.

O texto pode mostrar:

- Onde eu estava na época.
- O que eu sabia e o que eu ainda não sabia.
- Se foi guiado, autoral, pesquisa ou ferramenta.
- O que eu aprendi.
- O que olhando hoje parece simples, mas na época era difícil.

Evitar:

- Fingir que projeto guiado foi autoral.
- Escrever como anúncio.
- Supervalorizar projeto simples.
- Esconder dificuldade.

Frases que combinam com o tom:

- `Na época eu ainda era bem cru.`
- `O valor dele está mais no processo do que no resultado final.`
- `Olhando hoje parece simples, mas naquele momento foi um projeto grande para mim.`
- `Eu não estava tentando inventar uma solução autoral.`

## Galeria e vídeos

Quando tiver vídeo:

- Usar `autoplay muted loop playsinline`.
- Não usar controles.
- Desktop pode ter uma explicação simples abaixo.
- Mobile pode ficar apenas como apoio visual.
- O texto da legenda deve ser texto normal, sem moldura extra.

Exemplo:

```html
<div class="project-demo-caption">
	<p>Foi minha primeira vez fazendo algo bom de verdade com responsividade. Eu não usei nada que não conhecesse na época, mas só de entender melhor a ordem de fazer as coisas e os cuidados necessários, isso já ajudou muito nos sites que eu faço hoje.</p>
</div>
```
