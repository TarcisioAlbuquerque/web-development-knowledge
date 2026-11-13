# Development Standards

Padrões reutilizáveis sem stack única obrigatória.

## Seleção de stack
Escolher a menor complexidade que atende requisitos. Avaliar tipo de site, conteúdo, integrações, SEO, acessibilidade, performance, capacidade do executor, ambiente, hospedagem, custo e manutenção. HTML/CSS/JS pode bastar para landing/institucional simples; avaliar Astro/CMS para conteúdo e React ou equivalente para interfaces com estado complexo; e-commerce deve usar solução apropriada para catálogo/pagamentos/estoque. Motion: começar com CSS/Web Animations API; adicionar GSAP/ScrollTrigger quando timeline, pin ou scroll orchestration justificarem. Comparar opção principal e alternativa.

## Front-end
- Inspecionar antes de refatorar.
- Usar HTML semântico, headings e landmarks.
- Componentizar proporcionalmente à complexidade.
- Tratar hover, focus-visible, active, disabled, loading, error e success.
- Rotular campos e validar formulários.
- Não expor chaves ou secrets.
- Otimizar imagens, dimensões, fontes e carregamento.
- Manter dependências enxutas e documentar build/test.
- Testar browsers/larguras do público.

## Motion Engineering
- Motion deve comunicar hierarquia, continuidade, feedback ou narrativa.
- O conteúdo deve funcionar sem animação.
- Evitar intro longa, scroll hijacking e bloqueio de ação.
- CSS para transições simples; Web Animations API para controle nativo; IntersectionObserver para entrada na viewport; GSAP/ScrollTrigger para timelines/pin/scroll complexos quando justificável.
- Respeitar `prefers-reduced-motion`; não comunicar só por movimento; manter fallback se JS falhar.
- Testar mobile, toque, teclado, resize e carregamento tardio.
- Handoff de cada efeito deve indicar objetivo, elemento, trigger, propriedades, duration, easing, dependência, fallback e validação.

## Acessibilidade
HTML semântico, teclado, foco visível, labels, erros associados, contraste, texto alternativo e reduced-motion. Componentes customizados precisam nome, função, estado e operação acessíveis.

## Performance
Medir antes/depois; não declarar otimização sem medir. Otimizar imagem/fontes, lazy-load de conteúdo fora da primeira viewport quando adequado, reduzir scripts/dependências e evitar trabalho excessivo na main thread. Considerar Core Web Vitals e rede/dispositivo do público.

## SEO
Titles/descriptions únicos, headings semânticos, conteúdo útil, URLs legíveis, canonical/sitemap/robots quando aplicáveis, Open Graph, alt e structured data somente se correta. Não prometer ranking nem usar keyword stuffing.

## Segurança e privacidade
HTTPS, dependências confiáveis, proteção de formulários, minimização de dados e revisão de scripts/embeds. Nunca colocar secrets ou dados privados no repositório.


## Motion Engineering — padrão de implementação

Consultar o sistema completo em `01-REFERENCE-LIBRARY/MOTION-AND-INTERACTION-SYSTEM/` e o starter kit em `MOTION-STARTER-KIT/`.

### Obrigatório em landing pages
- Hero com sequência intencional de entrada.
- Reveal de conteúdo ao longo de múltiplas seções.
- Pelo menos um tratamento de imagem ou vídeo.
- Hover/focus-visible/active consistentes em CTAs e controles.
- Pelo menos um componente interativo contextual, além de links estáticos.
- Mínimo de aceite: 6 tratamentos de motion distintos e 3 padrões de interação úteis por landing page; faixa recomendada de 6–10 e 3–5. Abaixo disso, exigir exceção documentada e aprovação explícita.

### Implementação
- Reutilizar tokens e primitives do starter kit quando aplicáveis.
- Entregar os efeitos do Motion Brief em código funcional.
- Preferir CSS e APIs nativas para movimentos simples; adicionar GSAP/ScrollTrigger ou outra biblioteca apenas com justificativa.
- Evitar animação de propriedades que causam layout/reflow quando transform e opacity bastarem.
- Não ocultar conteúdo por dependência de JavaScript.
- Implementar pausa para marquee e mídia contínua, quando aplicável.
- Respeitar `prefers-reduced-motion`, teclado, touch e foco visível.

### Definição de pronto
O efeito só conta como implementado quando funciona no navegador, nos breakpoints previstos, com estados de fallback e sem erros conhecidos. Código não executado, placeholder ou proposta visual não conta.
