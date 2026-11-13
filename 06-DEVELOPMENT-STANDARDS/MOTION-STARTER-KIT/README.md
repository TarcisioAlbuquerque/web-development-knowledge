# Motion Starter Kit — Vanilla HTML/CSS/JS

Starter kit sem dependência obrigatória de framework para acelerar padrões comuns de motion e interação. Pode ser adaptado para projetos HTML/CSS/JS, Astro, React, Vue ou outros; em frameworks, respeite o ciclo de vida e faça cleanup dos observers/listeners.

## Arquivos
- `motion.css`: tokens, reveal, image reveal, text mask, hover feedback, scroll-snap carousel, marquee e SVG draw.
- `motion.js`: IntersectionObserver, tabs acessíveis, pause control de marquee, SVG draw e CTA contextual para WhatsApp.
- `quiz.js`: quiz multi-pergunta com feedback, progresso, pontuação e reinício.
- `carousel.js`: controles anterior/próximo para trilha horizontal com scroll-snap nativo.

## Instalação
Copie os arquivos necessários para o projeto. Inclua o CSS no stylesheet global e os JS com `defer` ou como módulos após o HTML. Exemplo:
```html
<link rel="stylesheet" href="/assets/motion.css">
<script src="/assets/motion.js" defer></script>
<script src="/assets/quiz.js" defer></script>
<script src="/assets/carousel.js" defer></script>
```

Não copie os arquivos cegamente: adapte cores, tokens, semântica e componentes à stack/briefing do cliente. O starter kit não é um pacote npm, não foi publicado como biblioteca e não instala GSAP.

## Reveal e image reveal
```html
<div data-motion="reveal-up">Conteúdo revelado ao entrar na viewport.</div>
<div data-motion="reveal-left" data-motion-delay="2">Outro bloco.</div>

<div class="motion-image" data-motion="fade" style="aspect-ratio: 4 / 5">
  <img src="/images/retrato.webp" alt="Descrição da fotografia" loading="lazy">
</div>
```
Valores de `data-motion`: `reveal-up`, `reveal-left`, `reveal-right`, `fade`. Delays: `data-motion-delay="1|2|3|4"`. Sem JS, o conteúdo permanece visível.

## Text mask reveal
```html
<h1 data-motion="fade">
  <span class="motion-mask"><span class="motion-mask__inner">Headline em primeira linha</span></span>
  <span class="motion-mask"><span class="motion-mask__inner">e continuação do título</span></span>
</h1>
```
Quebre linhas de forma responsiva e preserve o texto semântico. Use em headlines, não em parágrafos longos.

## SVG stroke draw
```html
<svg data-motion-svg-draw aria-hidden="true" viewBox="0 0 300 80">
  <path d="M4 40 C80 4 210 76 296 30" stroke="currentColor" stroke-width="2" />
</svg>
```

## Tabs
```html
<div data-tabs>
  <div role="tablist" aria-label="Serviços">
    <button id="tab-branding" type="button" role="tab" data-tab="branding"
      aria-controls="panel-branding" aria-selected="true">Branding</button>
    <button id="tab-sites" type="button" role="tab" data-tab="sites"
      aria-controls="panel-sites" aria-selected="false" tabindex="-1">Sites</button>
  </div>
  <section id="panel-branding" role="tabpanel" data-tab-panel="branding" aria-labelledby="tab-branding">
    Conteúdo de branding.
  </section>
  <section id="panel-sites" role="tabpanel" data-tab-panel="sites" aria-labelledby="tab-sites" hidden>
    Conteúdo de sites.
  </section>
</div>
```

## Marquee com pausa
```html
<div class="motion-marquee" data-marquee>
  <div class="motion-marquee__track">
    <div class="motion-marquee__group">
      <span>Retratos</span><span>Casamentos</span><span>Editorial</span>
    </div>
    <div class="motion-marquee__group" aria-hidden="true">
      <span>Retratos</span><span>Casamentos</span><span>Editorial</span>
    </div>
  </div>
  <button type="button" data-marquee-toggle aria-pressed="false"
    data-pause-label="Pausar movimento" data-resume-label="Retomar movimento">
    Pausar movimento
  </button>
</div>
```
Para manter o loop sem salto, os dois grupos devem ter conteúdo e largura equivalentes. A cópia `aria-hidden` não deve conter links ou controles focáveis.

## Carousel com scroll-snap
```html
<div data-carousel role="region" aria-roledescription="carousel" aria-label="Projetos selecionados">
  <button type="button" data-carousel-prev aria-label="Projeto anterior">Anterior</button>
  <div class="motion-carousel__track" data-carousel-track tabindex="0" aria-label="Lista de projetos">
    <article class="motion-carousel__slide" data-carousel-slide>Projeto 1</article>
    <article class="motion-carousel__slide" data-carousel-slide>Projeto 2</article>
    <article class="motion-carousel__slide" data-carousel-slide>Projeto 3</article>
  </div>
  <button type="button" data-carousel-next aria-label="Próximo projeto">Próximo</button>
  <p data-carousel-status aria-live="polite"></p>
</div>
```
A trilha também aceita swipe/toque e scroll horizontal nativo. Botões e estado são controlados por `carousel.js`.

## WhatsApp contextual
```html
<a data-whatsapp-cta
   data-phone="5492210000000"
   data-message="Hola, quiero consultar por sus servicios."
   href="https://wa.me/5492210000000">
  Consultar por WhatsApp
</a>
```
Substitua o telefone e a mensagem por dados aprovados do cliente. Não deixe números fictícios em produção.

## Quiz com feedback, score e reinício
```html
<section data-quiz>
  <p data-quiz-progress aria-live="polite"></p>
  <p>Acertos: <span data-quiz-score>0</span></p>

  <article data-quiz-question>
    <h2 data-quiz-question-title tabindex="-1">Pergunta 1: exemplo?</h2>
    <button type="button" data-quiz-answer data-correct="true"
      data-feedback="Isso mesmo.">Verdade</button>
    <button type="button" data-quiz-answer data-correct="false"
      data-feedback="Não exatamente.">Mito</button>
    <p data-quiz-feedback aria-live="polite" hidden></p>
    <button type="button" data-quiz-next hidden>Próxima pergunta</button>
  </article>

  <article data-quiz-question hidden>
    <h2 data-quiz-question-title tabindex="-1">Pergunta 2: exemplo?</h2>
    <button type="button" data-quiz-answer data-correct="false"
      data-feedback="Vamos rever esse ponto.">Verdade</button>
    <button type="button" data-quiz-answer data-correct="true"
      data-feedback="Correto.">Mito</button>
    <p data-quiz-feedback aria-live="polite" hidden></p>
    <button type="button" data-quiz-next hidden>Ver resultado</button>
  </article>

  <div data-quiz-result hidden>
    Você acertou <strong data-quiz-result-score>0</strong> respostas.
    <button type="button" data-quiz-restart>Jogar novamente</button>
  </div>
</section>
```
Repita o bloco de pergunta para cada questão. Cada pergunta precisa ter respostas e feedback próprios. O conteúdo deve continuar compreensível sem depender de cor.

## Requisitos
- Sem JS, conteúdo continua visível e controles essenciais não desaparecem.
- Com reduced-motion, reveals são exibidos sem deslocamento/transição e marquee/SVG draw não animam.
- Marquee contínuo oferece pausa explícita.
- Tabs são operáveis com teclado e ARIA.
- Carrossel tem botões além de swipe.
- Links de WhatsApp usam URL encoding e dados aprovados.
- Use o starter kit como base; não é substituto para teste visual, mobile QA e acessibilidade.
