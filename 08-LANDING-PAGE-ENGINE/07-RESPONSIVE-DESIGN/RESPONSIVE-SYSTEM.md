# Responsive Design System

## Princípio

Mobile-first é decisão sobre conteúdo e interação, não apenas ordem do CSS. Breakpoints respondem à quebra da composição.

## Viewports de partida

Testar 320–390 px, 390–430 px, 768 px, 1024 px e 1280–1440 px, adaptando ao público/analytics. Incluir orientação/altura com sticky, pin ou mídia.

## Regras

- Evitar largura fixa maior que viewport; preservar zoom/reflow.
- Texto legível, line-length e escala tipográfica ajustados.
- Imagem com aspect ratio e object-position por breakpoint.
- Navegação previsível e acessível.
- Controles operáveis por toque; não depender de hover.
- Forms respeitam teclado e visual viewport.
- Evitar overflow horizontal involuntário.
- Não transformar todo conteúdo em cards.
- Sticky não cobre foco/conteúdo.
- Interações desktop têm alternativa touch.

## Conteúdo e motion

Definir ordem, elementos alternativos/ocultos e razão, alinhamento, mídia/crop, navegação/CTA e estados por breakpoint. Não apenas empilhar colunas. Consultar sistema canônico e testar pin/parallax/horizontal em touch e alturas diferentes.

## QA de overflow

Verificar viewport meta, imagens, URLs longas, largura intrínseca, transforms, absolutos, carrossel intencional, header, modal, footer e safe areas.
