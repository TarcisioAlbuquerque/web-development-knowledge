# Playbook de implementação — Motion & Interaction

## 1. Escolha da ferramenta pelo problema

| Necessidade | Primeira opção | Quando escalar |
|---|---|---|
| Hover, focus, fade, slide simples | CSS Transitions/Animations | Não adicionar biblioteca |
| Revelar quando entra na viewport | IntersectionObserver + CSS | GSAP se integrar timeline complexa |
| Animação acionada por interação | Estado do framework + CSS | Motion library se estados/transições complexos |
| Tabs, FAQ simples | HTML nativo/JS acessível | Framework se já adotado |
| Sequências coreografadas | GSAP timeline ou Web Animations API | Avaliar manutenção e custo |
| Pin, scrub, horizontal scroll | GSAP ScrollTrigger quando justificado | Prototipar e medir mobile |
| Componentes React com estados animados | CSS ou Framer Motion/Motion | Só adicionar se reduzir complexidade |
| Marquee simples | CSS animation | JS apenas para controles/pausa |
| Linha SVG desenhada | CSS ou Web Animations API | GSAP para sincronização complexa |

Não escolha biblioteca por moda. Compare dependências, compatibilidade do projeto, manutenção, acessibilidade e performance. A stack deve ser a menor capaz de atender ao Motion Brief.

## 2. Arquitetura recomendada

Separar:
- **tokens:** duração, easing, distância, escala e z-index;
- **primitives:** reveal, text mask, image reveal, hover/focus;
- **orchestration:** timelines, scroll triggers, sequências;
- **components:** tabs, quiz, gallery, FAQ, marquee, form;
- **accessibility:** reduced-motion, keyboard, focus, pause;
- **QA:** evidência e estados testados.

Evitar que cada seção invente sua própria curva, duração ou comportamento. Criar consistência de movimento em todo o site.

## 3. Motion tokens iniciais

Valores são ponto de partida e devem ser ajustados ao conceito:
- micro feedback: 120–220 ms;
- transição de componente: 180–350 ms;
- entrada/revelação: 450–850 ms;
- sequência de hero: total preferencialmente abaixo de 1.8 s;
- distância de deslocamento: pequena a média (ex.: 12–32 px);
- easing de entrada: ease-out suave;
- easing de saída: ease-in;
- deslocamento e escala devem ser sutis quando o usuário está lendo.

Não aplicar estes valores cegamente. Medir ritmo e evitar atrasar conteúdo principal.

## 4. Receitas por padrão

### Text Mask Reveal (M-02)
1. Dividir heading em linhas apenas se a semântica continuar preservada.
2. Envolver visualmente cada linha em container com overflow hidden.
3. Animar inner span de translateY(100%) para 0.
4. Escalonar linhas com stagger curto.
5. Respeitar reflow; não congelar line breaks em larguras não testadas.
6. Em reduced-motion ou JS indisponível, exibir texto imediatamente.

### Scroll reveal (M-08/M-09)
1. Definir estado visível por padrão no HTML.
2. Adicionar classe de preparação somente quando JS inicializar corretamente.
3. Usar IntersectionObserver para ativar a classe.
4. Observar uma vez por padrão; repetir apenas quando houver intenção clara.
5. Evitar animar propriedades que causam layout quando transform/opacity bastam.

### Image reveal (M-04/M-05/M-17)
1. Reservar aspect ratio para evitar layout shift.
2. Aplicar clip/scale no wrapper ou imagem.
3. Manter alt e conteúdo compreensíveis.
4. Lazy-load fora do primeiro viewport.
5. Não usar parallax que corte o sujeito ou cause desconforto.

### Animated SVG (M-21/M-22)
1. Preferir SVG inline controlado e leve.
2. Animar stroke-dashoffset para desenho do traçado.
3. Se sincronizado ao scroll, medir progresso de forma eficiente e testar touch.
4. Linha decorativa deve ser ignorável por leitores de tela (`aria-hidden=true`).

### Sticky/pin/parallax/horizontal (M-11/M-12/M-13/M-14)
1. Definir a história que exige a técnica.
2. Fazer protótipo pequeno antes de integrar.
3. Testar alturas de viewport, trackpad, wheel, touch e orientação.
4. Preservar scroll natural, foco e saída previsível.
5. No mobile, preferir scroll vertical ou carrossel tocável se pin/track horizontal prejudicar UX.
6. Verificar reduced-motion e fallback sem JS.
7. Não usar scroll hijacking.

### Marquee (M-35)
1. Repetir trilha apenas para continuidade visual.
2. Garantir loop sem salto.
3. Adicionar controle de pausa/retomar.
4. Pausar em reduced-motion por padrão.
5. Tratar duplicatas como decorativas e impedir tab stops duplicados.

### CTA hover (M-31)
1. Criar feedback para hover, focus-visible e active.
2. A animação não pode ser a única indicação de estado.
3. Não deslocar layout vizinho.
4. Em touch, estado deve continuar evidente sem hover.

### FAQ (M-27)
Preferir `details/summary` nativo. A transição é melhoria progressiva; não esconder o texto no HTML base.

## 5. Exemplo GSAP / ScrollTrigger — usar somente quando necessário

```js
// Instalar/registrar GSAP e ScrollTrigger conforme a documentação da versão escolhida.
gsap.registerPlugin(ScrollTrigger);

gsap.from(".story-panel__media", {
  y: 36,
  autoAlpha: 0,
  duration: 0.8,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".story-panel",
    start: "top 80%",
    once: true
  }
});
```

Exemplo de scroll-linked:
```js
gsap.to(".story-image", {
  scale: 1.12,
  ease: "none",
  scrollTrigger: {
    trigger: ".story-section",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
});
```

Antes de integrar, verificar a versão atual da biblioteca, instalação, compatibilidade com o framework e limpeza de ScrollTriggers em componentes que desmontam. Esses trechos são receitas ilustrativas, não prova de uso no site de referência.

## 6. Progressive enhancement

- HTML contém todo o conteúdo e estrutura funcional.
- CSS mantém legibilidade sem JS.
- JS adiciona motion/interatividade.
- Falha de JS não pode ocultar conteúdo ou bloquear navegação.
- Reduced-motion altera ou remove transformações não essenciais.
- Estados operáveis por teclado e toque.

Consulte os arquivos do Motion Starter Kit como ponto de partida vanilla. Em React/Astro/Vue, adapte os princípios ao ciclo de vida do framework; não misture inicialização global e efeitos de componente sem cleanup.

## 7. Checklist do handoff para desenvolvimento

Para cada animação, o Motion Brief deve indicar:
- ID do catálogo;
- seção/elemento;
- objetivo UX/narrativo;
- trigger;
- estado inicial/final;
- propriedades;
- duração/easing aproximados;
- sequência/dependências;
- desktop/mobile;
- reduced-motion;
- fallback;
- critério de aceite.

Para cada componente interativo:
- ID;
- conteúdo/dados;
- estados;
- eventos;
- teclado/toque;
- semântica/ARIA;
- feedback;
- conexão com conversão;
- critério de teste.

## 8. Regra de honestidade técnica

Não afirmar "usa GSAP", "usa Lenis" ou "usa Framer Motion" por observação visual isolada. Registrar separado:
- tecnologia confirmada por código;
- provável tecnologia;
- tecnologia recomendada para implementação.


## Starter kit avançado disponível
Quando o projeto justificar GSAP/ScrollTrigger, consulte `06-DEVELOPMENT-STANDARDS/MOTION-STARTER-KIT/gsap-recipes.js`. Ele contém receitas reutilizáveis para:
- reveal e stagger vinculados ao viewport;
- desenho de SVG;
- image reveal por clip-path;
- parallax desktop;
- pin storytelling;
- horizontal scroll desktop.

O módulo é opcional e requer a dependência GSAP instalada no projeto. Em mobile e reduced-motion, pin/parallax/horizontal ficam desativados; o desenvolvedor deve preservar alternativa vertical ou scroll-snap. Não carregar GSAP por padrão em sites simples.
