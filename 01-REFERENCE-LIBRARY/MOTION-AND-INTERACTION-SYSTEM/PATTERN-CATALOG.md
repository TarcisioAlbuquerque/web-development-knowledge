# Catálogo de padrões de Motion Design

Este catálogo reúne efeitos que podem ser combinados em projetos de diferentes segmentos. Os IDs são estáveis para referência em briefs, código, handoffs e QA.

**Legenda:**  
- **ANA / RELATADO:** aparece no relatório de auditoria do site Ana Marques fornecido pelo usuário; conferir a proveniência em `CASE-STUDY-ANA-MARQUES.md`.  
- **UNIVERSAL / RECOMENDADO:** padrão de biblioteca para avaliar e aplicar conforme o projeto; não significa que foi visto no site Ana Marques.

## 1. Entrada e primeira impressão

| ID | Padrão | Comportamento | Uso recomendado |
|---|---|---|---|
| M-01 | Header Fade + Slide | Header aparece com opacidade e pequeno deslocamento vertical | Entrada limpa, navegação |
| M-02 | Hero Text Mask Reveal | Título é revelado por linha/palavra dentro de máscara | Portfólios, marcas, profissionais |
| M-03 | Hero Stagger | Headline, apoio, CTA e mídia entram em sequência | Hierarquia e narrativa |
| M-04 | Hero Image Scale + Fade | Imagem entra com escala sutil e opacidade | Fotografia, retratos, produtos |
| M-05 | Split/Clip Reveal | Imagem ou bloco é descoberto por máscara/clip | Editorial, campanha, portfólio |
| M-06 | Blur-to-Sharp Reveal | Elemento sai de blur controlado para nitidez | Uso pontual; evitar em texto longo |
| M-07 | Load/Intro Sequence | Sequência breve de abertura | Só quando agrega identidade; nunca atrasar conteúdo |

## 2. Scroll reveal e narrativa

| ID | Padrão | Comportamento | Uso recomendado |
|---|---|---|---|
| M-08 | Scroll Fade/Reveal | Conteúdo aparece ao entrar na viewport | Seções, cards, depoimentos |
| M-09 | Stagger on Scroll | Elementos relacionados aparecem em sequência | Grids e listas |
| M-10 | Scroll-linked Transform | Propriedades acompanham o progresso do scroll | Narrativa visual específica |
| M-11 | Sticky Storytelling | Painel fica sticky enquanto conteúdo adjacente avança | Processo, etapas, manifesto |
| M-12 | Scroll Pinning | Seção/painel é fixado durante uma timeline | Uso seletivo; preservar saída e navegação |
| M-13 | Parallax Layers | Camadas movem-se em velocidades diferentes | Fotografia, profundidade, hero |
| M-14 | Horizontal Scroll Scene | Scroll vertical controla trilha horizontal | Portfólios e galerias; alternativa por swipe no mobile |
| M-15 | Progress Indicator | Indicador acompanha leitura/etapas | Artigos, processos, narrativas |
| M-16 | Section Transition | Mudança visual entre blocos sem interromper conteúdo | Continuidade editorial |

## 3. Imagem, SVG e elementos gráficos

| ID | Padrão | Comportamento | Uso recomendado |
|---|---|---|---|
| M-17 | Image Reveal Mask | Máscara revela a fotografia | Fotografia e projetos |
| M-18 | Image Scale on Scroll | Escala da imagem muda durante o scroll | Hero e storytelling |
| M-19 | Image Parallax | Imagem/camada desloca-se com velocidade distinta | Profundidade, com moderação |
| M-20 | Image Crossfade | Uma imagem dá lugar a outra | Comparações, portfólio |
| M-21 | Animated SVG Stroke | Traçado SVG é desenhado progressivamente | Linhas orgânicas, mapas, assinatura visual |
| M-22 | Organic SVG Divider | Linha SVG decorativa conecta seções | Narrativa editorial; não apenas ornamento |
| M-23 | Shape Morph | Forma SVG muda de contorno | Identidade visual que justifique |
| M-24 | Cursor-follow Media | Mídia reage ao cursor | Desktop criativo; desativar em touch |

## 4. Componentes e transições

| ID | Padrão | Comportamento | Uso recomendado |
|---|---|---|---|
| M-25 | Card Slide Transition | Card atual sai e próximo entra lateralmente | Quiz, decks, etapas |
| M-26 | Content Crossfade | Painel antigo desaparece e novo aparece | Tabs e filtros |
| M-27 | Accordion Expansion | Resposta expande/recolhe; indicador pode girar | FAQ, detalhes |
| M-28 | Modal/Drawer Transition | Modal ou painel entra/sai com transição | Galeria, formulário, menu |
| M-29 | Navigation State Transition | Estado ativo do menu muda com feedback | Navegação por âncoras |
| M-30 | Page/Route Transition | Transição entre rotas/páginas | Sites multi-page; manter navegação rápida |
| M-31 | CTA Hover/Focus | Cor, seta, fundo ou posição responde ao estado | Botões e links de ação |
| M-32 | Card/Image Hover | Imagem, overlay ou card responde ao ponteiro | Desktop; equivalente acessível em foco/toque |
| M-33 | Magnetic Interaction | Elemento segue levemente o cursor | Uso raro; nunca essencial à ação |
| M-34 | Custom Cursor | Cursor contextual acompanha ponteiro | Portfólios criativos; fornecer fallback |

## 5. Movimento contínuo e audiovisual

| ID | Padrão | Comportamento | Uso recomendado |
|---|---|---|---|
| M-35 | Infinite Marquee | Trilha horizontal em loop contínuo | Logos, fotos, palavras, trabalhos |
| M-36 | Auto Carousel | Slides avançam em intervalos | Conteúdo curto; oferecer pausa |
| M-37 | Video Autoplay Loop | Vídeo silencioso reproduz em loop quando visível | Bastidores, atmosfera |
| M-38 | Video Scrub | Frames do vídeo respondem ao scroll | Narrativa de campanha; peso e acessibilidade avaliados |
| M-39 | Gallery Crossfade | Galeria alterna imagens com transição | Portfólios e produtos |
| M-40 | Ambient Motion | Movimento lento de fundo/forma | Somente quando não competir com conteúdo |

## 6. Timing, composição e acabamento

| ID | Padrão | Comportamento | Uso |
|---|---|---|---|
| M-41 | Stagger Timeline | Sequência de elementos com intervalos | Hero, listas, cards |
| M-42 | Easing System | Curvas coerentes para entrada, saída e feedback | Sistema de movimento consistente |
| M-43 | Micro Feedback | Pequena resposta a ação, carregamento ou sucesso | Formulários e controles |
| M-44 | Counter/Number Transition | Número muda com animação | Dados reais, estatísticas verificadas |
| M-45 | Scroll Progress Reveal | Progresso de leitura anima linha/indicador | Etapas e conteúdo longo |

## Baseline obrigatório de landing page

Planejar e implementar uma seleção coerente, em geral:
- M-02 ou M-03 para entrada de headline/hero;
- M-04 ou M-05 para tratamento da mídia principal;
- M-08 e/ou M-09 em várias seções;
- M-31 para CTAs e controles, com estados hover/focus/active;
- pelo menos um padrão adicional adequado à história da marca, por exemplo M-11, M-13, M-14, M-21, M-22, M-35 ou M-39.

Para landing page profissional, o mínimo de aceite é **6 tratamentos distintos**; a faixa recomendada é 6–10. Não contar repetição de um mesmo reveal como um efeito diferente. Para todo projeto, adaptar ao conteúdo/dispositivos, mas ficar abaixo do mínimo em landing pages exige exceção documentada e aprovada.

## Relação com a auditoria Ana Marques

Os padrões do relatório recebido do usuário estão listados em `CASE-STUDY-ANA-MARQUES.md`. Os IDs relacionados são M-01, M-02, M-04, M-21/M-22, M-25, M-26, M-27, M-31, M-35 e M-37, sujeitos à ressalva de proveniência do caso.
