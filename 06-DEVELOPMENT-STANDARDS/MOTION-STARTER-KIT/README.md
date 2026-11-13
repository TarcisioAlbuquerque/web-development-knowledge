# Motion Starter Kit — Vanilla HTML/CSS/JS

Starter kit sem dependência obrigatória de framework para acelerar padrões comuns de motion e interação. Pode ser adaptado para projetos HTML/CSS/JS, Astro, React, Vue ou outros; em frameworks, respeite o ciclo de vida e faça cleanup dos observers/listeners.

## Arquivos
- `motion.css`: tokens, reveal, image reveal, hover feedback, marquee e SVG draw.
- `motion.js`: IntersectionObserver, tabs acessíveis, pause control de marquee, SVG draw e CTA contextual para WhatsApp.
- `quiz.js`: quiz multi-pergunta com feedback, progresso, pontuação e reinício.

## Instalação
Copie os arquivos necessários para o projeto. Inclua o CSS no stylesheet global e os JS com `defer` ou como módulos após o HTML. Exemplo:
```html
<link rel="stylesheet" href="/assets/motion.css">
<script src="/assets/motion.js" defer></script>
<script src="/assets/quiz.js" defer></script>
```

Não copie os arquivos cegamente: adapte cores, tokens, semântica e componentes à stack/briefing do cliente. O starter kit não é um pacote npm, não foi publicado como biblioteca e não instala GSAP.

## API declarativa

### Reveal
```html
<div data-motion="reveal-up">Conteúdo que será revelado.</div>
<div data-motion="reveal-left" data-motion-delay="2">Outro bloco.</div>
```
Valores: `reveal-up`, `reveal-left`, `reveal-right`, `fade`. Delays: `data-motion-delay="1|2|3|4"`.

### SVG stroke draw
```html
<svg data-motion-svg-draw aria-hidden="true" viewBox="0 0 300 80">
  <path d="M4 40 C80 4 210 76 296 30" />
</svg>
```

### Tabs
Use `[data-tabs]`, buttons com `role="tab"`, `data-tab="id"`, `aria-controls="panel-id"`, e panels com `role="tabpanel"`, `data-tab-panel="id"`. Veja exemplo completo em `INTERACTIVE-COMPONENTS.md`.

### Marquee
Use `[data-marquee]`, uma trilha `.motion-marquee__track`, conteúdo repetido, e botão `[data-marquee-toggle]` com `aria-pressed`. A cópia decorativa deve ter `aria-hidden="true"` e não conter links focáveis.

### WhatsApp contextual
```html
<a data-whatsapp-cta
   data-phone="5492210000000"
   data-message="Hola, quiero consultar por sus servicios."
   href="https://wa.me/5492210000000">
  Consultar por WhatsApp
</a>
```
Substitua o telefone e a mensagem por dados aprovados do cliente. Não deixe números fictícios em produção.

### Quiz
O markup deve ter `data-quiz`, blocos `data-quiz-question`, opções `data-quiz-answer`, feedback `data-quiz-feedback`, botão `data-quiz-next`, progresso `data-quiz-progress`, pontuação `data-quiz-score` e resultado `data-quiz-result`. Veja comentários e exemplo no arquivo `quiz.js`.

## Regras
- Sem JS, conteúdo continua visível e controles essenciais não desaparecem.
- Com reduced-motion, reveals são exibidos sem deslocamento/transição e marquee/SVG draw não animam.
- Marquee contínuo oferece pausa explícita.
- Tabs são operáveis com teclado e ARIA.
- Links de WhatsApp são montados com URL encoding.
- Use o starter kit como base; não é substituto para teste visual, mobile QA e acessibilidade.
