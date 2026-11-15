# Development Standards

Padrões técnicos reutilizáveis, sem stack única obrigatória. Escolha a menor complexidade capaz de atender aos requisitos presentes e futuros.

## Seleção de stack

Avalie tipo de site, conteúdo, integrações, SEO, acessibilidade, performance, complexidade, experiência da equipe, ambiente, hospedagem, custo e manutenção.

- HTML/CSS/JS: sites estáticos e landing pages simples quando suficientes.
- Astro ou CMS: conteúdo editorial e páginas que se beneficiam de renderização estática/gerenciamento.
- React/Next.js ou equivalente: interfaces com estado/ecossistema/requisitos comprovados.
- E-commerce: plataforma apropriada a catálogo, pagamentos, estoque, pedidos e segurança.
- TypeScript, Tailwind e bibliotecas: somente quando justificadas.

Compare opção principal e alternativa. Não force frameworks por preferência.

## Front-end

- Inspecione antes de refatorar.
- Use HTML semântico, landmarks e hierarquia de headings.
- Componentize proporcionalmente à complexidade.
- Trate hover, focus-visible, active, disabled, loading, error e success.
- Rotule campos e valide no cliente e no servidor quando aplicável.
- Não confie apenas na validação do browser para segurança.
- Otimize imagens, dimensões, fontes e carregamento.
- Mantenha dependências enxutas e documente build/test.
- Teste browsers e larguras relevantes ao público.

## Acessibilidade

HTML semântico, teclado, foco visível, labels, erros associados, contraste, alt text e reduced-motion. Componentes customizados precisam nome, função, estado e comportamento acessíveis. Ferramentas automatizadas ajudam, mas não substituem revisão manual.

## Performance

Meça antes/depois; não declare otimização sem medição. Otimize imagens/fontes, lazy-load quando adequado, reduza scripts/dependências e evite trabalho excessivo na main thread. Considere Core Web Vitals e dispositivos/rede do público.

## SEO

Titles/descriptions únicos, headings semânticos, conteúdo útil, URLs legíveis, canonical/sitemap/robots quando aplicáveis, Open Graph, alt e structured data somente quando corretas. Não prometa ranking nem use keyword stuffing.

## Segurança e privacidade

HTTPS, dependências confiáveis, validação server-side, proteção de forms, minimização de dados e revisão de scripts/embeds. Nunca coloque secrets/dados privados no repositório; não confie em valores enviados pelo navegador.

## Motion Engineering

Fonte normativa: 01-REFERENCE-LIBRARY/MOTION-AND-INTERACTION-SYSTEM/. Starter Kit: MOTION-STARTER-KIT/.

- CSS para transições simples; Web Animations API/IntersectionObserver para controle nativo; GSAP/ScrollTrigger para timeline/pin/scroll complexos quando justificável.
- Reutilize tokens/primitives quando adequados.
- Não oculte conteúdo por dependência de JS.
- Evite animações que forçam layout; prefira transform/opacity quando apropriado.
- Limpe observers, listeners e timelines ao desmontar componentes/SPAs.
- Preserve fallback, teclado, toque, mobile e reduced-motion.
- Não adicione dependências sem justificativa e revisão.

## Definition of Done

Recurso só é concluído quando implementado, executado e testado nos contextos previstos. Código não executado, placeholder ou proposta visual não é validação. Consulte 07-QUALITY-CONTROL e o checklist do Landing Page Engine.
