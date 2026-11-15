# Motion Integration

Este módulo integra Engine e sistema canônico; não cria catálogo nem redefine baseline.

## Fonte única

Ler 01-REFERENCE-LIBRARY/MOTION-AND-INTERACTION-SYSTEM/README.md e, conforme necessidade, Pattern Catalog, Interactive Components, Implementation Playbook, Motion Brief Template e 06-DEVELOPMENT-STANDARDS/MOTION-STARTER-KIT/. O brief vive no projeto cliente e acompanha handoffs.

## Seleção de tecnologia

| Necessidade | Opção inicial | Escalar quando |
|---|---|---|
| Hover/focus/active | CSS | Estado coordenado exigir JS |
| Entrada em viewport | IntersectionObserver + CSS | Timeline complexa |
| Interação | Estado do componente + CSS | Orquestração complexa |
| Motion nativo controlado | Web Animations API | Timeline avançada |
| Timeline, pin, scrub, horizontal | GSAP + ScrollTrigger | Ganho claro e testado |

Não adicionar GSAP, Lenis, Framer Motion, Motion ou Three.js por padrão.

## Engenharia

Conteúdo permanece legível sem motion; respeitar reduced-motion; evitar scroll hijacking e atraso em CTA; evitar layout shift/main-thread excessiva; limpar observers/listeners/timelines na desmontagem; testar touch, resize, orientação e viewport; fornecer pausa para marquee/autoplay quando aplicável.

## GSAP

Starter Kit possui receitas em gsap-recipes.js. Usa gsap.matchMedia() e cleanup via media.revert(); manter cleanup em frameworks/SPA e verificar versão na documentação oficial. Não carregar GSAP para fade simples.

## Aceite

Quantidade, baseline, exceções e QA são definidos somente pelo README do Motion & Interaction System. Registrar IDs e evidências reais.
