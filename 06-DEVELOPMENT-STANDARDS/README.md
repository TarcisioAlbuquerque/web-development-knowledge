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
- não comunicar só por movimento; manter fallback se JS falhar.
- Testar mobile, toque, teclado, resize e carregamento tardio.
- Handoff de cada efeito deve indicar objetivo, elemento, trigger, propriedades, duration, easing, dependência, fallback e validação.

## Acessibilidade
HTML semântico, teclado, foco visível, labels, erros associados, contraste, texto alternativo Componentes customizados precisam nome, função, estado e operação acessíveis.

## Performance
Medir antes/depois; não declarar otimização sem medir. Otimizar imagem/fontes, lazy-load de conteúdo fora da primeira viewport quando adequado, reduzir scripts/dependências e evitar trabalho excessivo na main thread. Considerar Core Web Vitals e rede/dispositivo do público.

## SEO
Titles/descriptions únicos, headings semânticos, conteúdo útil, URLs legíveis, canonical/sitemap/robots quando aplicáveis, Open Graph, alt e structured data somente se correta. Não prometer ranking nem usar keyword stuffing.

## Segurança e privacidade
HTTPS, dependências confiáveis, proteção de formulários, minimização de dados e revisão de scripts/embeds. Nunca colocar secrets ou dados privados no repositório.
