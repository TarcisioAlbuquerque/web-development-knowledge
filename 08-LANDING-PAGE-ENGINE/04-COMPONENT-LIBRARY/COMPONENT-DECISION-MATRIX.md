# Component Decision Matrix

Escolher pelo comportamento necessário, conteúdo e acessibilidade. Não criar componente customizado se HTML nativo resolver.

| Necessidade | Primeira opção | Escalar quando | Verificação |
|---|---|---|---|
| Navegação por seção | Links âncora | Header fixo exigir offset/estado | Foco, hash, scroll |
| Menu mobile | Button + nav semântica | Overlay exigir foco controlado | Escape, foco, aria-expanded |
| FAQ | details/summary | Estado/transição específica | Teclado e conteúdo |
| Tabs | Botões com roles/painéis | Estado complexo | Teclado, ARIA, painel |
| Seletor | Select/botões | Personaliza conteúdo/CTA | Estado e lógica real |
| Galeria | Imagens/links semânticos | Filtro/lightbox útil | Alt, foco, fechar/navegar |
| Carrossel | Scroll-snap nativo | Controles/status melhoram UX | Swipe, botões e teclado |
| Depoimentos | Conteúdo estático | Volume pede navegação | Fonte e autorização |
| Formulário | HTML nativo | Multi-etapa/integração justificam | Labels, erro, envio, sucesso |
| WhatsApp | Link para URL aprovada | Mensagem contextual útil | Número e URL codificada |
| Vídeo | HTML video com poster/controls | Autoplay silencioso controlado adequado | Reduced-motion e fallback |
| Quiz | Form/estado local | Educação/diagnóstico agrega valor | Respostas, feedback, reinício |
| Modal/drawer | Página/details quando suficiente | Tarefa exige overlay | Escape, foco e retorno |

## Reuso

Consultar Motion & Interaction System e Motion Starter Kit. Ler markup, dependências, estados e limites. Em React/Vue/Astro/SPA, respeitar ciclo de vida e cleanup.

## Contrato

Documentar tarefa, dados, estados, ações, teclado/toque, semântica/ARIA, fallback, relação com CTA e critério QA. Botão sem ação não está concluído. Simulação visual deve estar identificada.
