# Performance Budgets

## Metas de referência

Core Web Vitals em campo, percentil 75:
- LCP: até 2,5 s.
- INP: abaixo de 200 ms.
- CLS: abaixo de 0,1.

São metas de experiência, não promessa, garantia de ranking ou resultado automático de laboratório. Diferenciar dados de campo e laboratório.

Fonte: https://developers.google.com/search/docs/appearance/core-web-vitals

## Orçamento por projeto

Registrar orçamento para peso da hero/mídia, formatos/dimensões, fontes/pesos, CSS/JS inicial, terceiros, tarefas longas, requests, vídeo/3D/animação. Definir limites conforme público, rede, hosting e conteúdo; não adotar números universais cegamente.

## Estratégias

- Exportar imagens em dimensões certas; AVIF/WebP e fallback conforme suporte.
- Reservar espaço com width/height ou aspect-ratio.
- Não lazy-load da imagem LCP/hero se atrasar renderização.
- Lazy-load mídia abaixo da dobra.
- Limitar famílias/pesos de fonte e usar font-display.
- Reduzir JS/widgets; adiar analytics/embeds não críticos.
- Evitar motion contínuo caro e layout thrashing.
- Carregar 3D sob demanda com fallback.
- Medir custo de terceiros antes de manter.

## Medição e aceite

Usar Lighthouse/PageSpeed/DevTools em condições registradas; usar dados reais quando disponíveis. Registrar URL/build, dispositivo, rede, data e ferramenta. Não declarar otimização sem medição.

Referências:
- Lighthouse: https://developer.chrome.com/docs/lighthouse
- Playwright: https://playwright.dev/docs/intro
