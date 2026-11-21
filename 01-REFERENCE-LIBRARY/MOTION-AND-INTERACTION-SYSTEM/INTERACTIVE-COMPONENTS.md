# Catálogo de componentes e interações

Motion é movimento; interação é comportamento. Um componente pode ser interativo sem precisar de animação elaborada, e uma animação pode ocorrer sem interação. Planeje e teste os dois separadamente.

## Componentes reutilizáveis

| ID | Componente | Comportamento obrigatório | Quando usar |
|---|---|---|---|
| I-01 | Anchor Navigation | Navegação para seções com estado ativo e offset do header | Landing pages longas |
| I-02 | Responsive Menu | Abre/fecha, fecha por Escape/seleção, foco controlado | Sites com navegação compacta |
| I-03 | Contextual CTA | CTA gera mensagem/caminho de acordo com escolha/intenção | WhatsApp, contato, orçamento |
| I-04 | Interactive Tabs | Painéis mudam por seleção; teclado e ARIA | Serviços, objetivos, categorias |
| I-05 | Service/Goal Selector | Visitante seleciona necessidade e recebe conteúdo/CTA relevante | Profissionais e serviços |
| I-06 | Educational Quiz | Perguntas, escolha, feedback, progresso, resultado e reinício | Saúde, educação, consultoria |
| I-07 | Swipe/Slide Cards | Conteúdo avança por toque, botões e teclado | Quiz, depoimentos, etapas |
| I-08 | FAQ Accordion | Perguntas expandem e recolhem; usar `details/summary` quando suficiente | FAQ e objeções |
| I-09 | Interactive Q&A | Perguntas predefinidas revelam respostas e próximo passo | Profissionais e serviços |
| I-10 | WhatsApp Conversation Preview | Simulação claramente identificada como ilustrativa; CTA real separado | Demonstrar acompanhamento |
| I-11 | Image Gallery | Grade, filtros, lightbox, navegação e fechamento acessível | Fotografia, projetos, produtos |
| I-12 | Carousel/Slider | Controles anterior/próximo, indicadores e pausa quando autoplay | Depoimentos, fotos, serviços |
| I-13 | Infinite Marquee | Loop contínuo, conteúdo duplicado de forma segura e controle de pausa | Logos, fotos e destaques |
| I-14 | Video Module | Poster, play/pause, mute/controls e carregamento consciente | Bastidores, apresentação |
| I-15 | Progress/Step Indicator | Indica estado atual e progresso real | Formulários e processos |
| I-16 | Multi-step Form | Validação por etapa, voltar/avançar, erro acessível | Briefing e orçamento |
| I-17 | Filterable Portfolio | Categorias filtram projetos sem perder contexto | Portfólios e fotografia |
| I-18 | Testimonial Switcher | Navegação clara por depoimentos reais autorizados | Prova social |
| I-19 | Before/After Slider | Controle acessível para comparar duas imagens autorizadas | Estética, reforma, design |
| I-20 | Modal/Drawer | Abre, fecha, Escape, foco preso/restaurado quando modal | Detalhes e formulários |

## Requisitos de qualidade por componente

### Tabs e seletores
- estado selecionado visual e semanticamente expresso;
- operação por teclado (setas quando adequado, Tab para sair);
- painéis associados por `aria-controls` / `aria-labelledby`;
- transição curta que não esconda conteúdo nem altere altura de forma abrupta;
- em mobile, converter para controles adequados (tabs roláveis, select, acordeão) conforme a UX.

### Quiz
- pergunta e progresso legíveis;
- opções operáveis por teclado e toque;
- resposta correta/feedback sem depender apenas de cor;
- pontuação calculada corretamente;
- próximo passo e tela final;
- reinício funcional;
- CTA contextual com texto honesto;
- não coletar dado pessoal desnecessário.

### FAQ
- preferir HTML nativo `details/summary` quando atender ao design;
- indicador de estado visível;
- foco e operação por teclado;
- transição opcional, sem esconder a resposta no fallback.

### Galeria e carrossel
- anterior/próximo, posição atual e descrição acessível;
- swipe não pode ser o único meio de navegação;
- lightbox fecha por botão e Escape e devolve foco;
- imagens com dimensões/alt apropriados;
- autoplay, quando realmente necessário, deve oferecer pausa.

### Marquee e autoplay
- não usar movimento contínuo como único meio de comunicar informação;
- oferecer controle explícito de pausa/retomar;
- pausar em hover/focus quando apropriado, sem depender disso como único controle;
- reduzir ou interromper;
- duplicações visuais marcadas como decorativas (`aria-hidden`) para evitar leitura repetida;
- garantir que foco de teclado não fique preso em conteúdo duplicado.

### Vídeo
- autoplay somente sem áudio e quando fizer sentido;
- pausar fora da viewport se isso for seguro e previsível;
- poster e dimensões reservadas para evitar layout shift;
- controles acessíveis e alternativa textual quando houver informação importante;
- não iniciar reprodução com áudio inesperadamente.

### WhatsApp e CTAs contextuais
- número e mensagem devem vir do briefing aprovado;
- mensagem URL-encoded;
- link com destino real, não placeholder;
- diferenciar novos contatos de clientes existentes só quando o negócio realmente opera esses fluxos;
- não afirmar que uma conversa simulada é uma conversa real.

## Regras de implementação

1. Componentes devem ser pequenos, reutilizáveis e configuráveis por dados, não cópias rígidas do caso Ana.
2. Separar lógica, conteúdo e estilo.
3. Não criar componente complexo se HTML nativo resolver com melhor acessibilidade.
4. Garantir estado vazio, loading, erro, sucesso e desabilitado quando aplicável.
5. O componente continua compreensível sem animação.
6. Documentar props/configuração, eventos e requisitos de conteúdo.
7. Incluir testes de teclado, toque, foco e.


## Mínimo de interação em landing pages
Toda landing page deve conter pelo menos **3 padrões de interação úteis e distintos**, escolhidos conforme a jornada do visitante. Exemplos de composição:
- navegação por âncoras + FAQ accordion + CTA contextual;
- seletor de serviços + galeria filtrável + formulário de orçamento;
- quiz + tabs de objetivos + CTA personalizado;
- galeria/carrossel + lightbox + FAQ.

Não contar três botões que fazem a mesma coisa como três padrões. Cada padrão deve oferecer tarefa/feedback próprio. Exceção abaixo do mínimo requer justificativa e aprovação explícita no Motion Brief.
