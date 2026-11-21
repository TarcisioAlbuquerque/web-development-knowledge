# Bootstrap obrigatório — Motion & Interaction em projetos de clientes

Use este documento ao abrir/criar um repositório independente de cliente. O repositório de conhecimento é a fonte canônica, mas suas instruções não são automaticamente carregadas por Gemini, ChatGPT, Copilot ou por um repositório de cliente separado.

## 1. Preparar o projeto
1. Garanta que o agente que vai implementar o site consiga consultar a pasta MOTION-AND-INTERACTION-SYSTEM e MOTION-STARTER-KIT.
2. Se o workspace não tiver acesso ao repositório de conhecimento, copie os documentos necessários para docs/reference/motion-and-interaction/ ou forneça os arquivos/links no contexto do agente.
3. Copie MOTION-BRIEF-TEMPLATE.md para docs/MOTION-BRIEF.md e preencha-o antes de estruturar o motion.
4. Adicione o bloco de instruções abaixo ao AGENTS.md ou .github/copilot-instructions.md do projeto de cliente.

## 2. Bloco para AGENTS.md / Copilot Instructions

```md
## Mandatory Motion & Interaction Gate

Before designing or implementing any page, read the project's docs/MOTION-BRIEF.md and the shared Motion & Interaction System:
- README.md
- PATTERN-CATALOG.md
- INTERACTIVE-COMPONENTS.md
- IMPLEMENTATION-PLAYBOOK.md
- the Motion Starter Kit README and source files.

Motion and interaction are required product features, not optional polish.

For every landing page, plan and implement:
- an intentional hero entrance sequence;
- reveal motion across multiple content sections;
- at least one image/video motion treatment;
- consistent hover, focus-visible and active feedback for CTAs and controls;
- at least one contextual interactive component that helps visitors understand, choose, explore or convert.

Minimum acceptance for a professional landing page: 6 distinct motion treatments and 3 useful interaction patterns; recommended range: 6–10 motion treatments and 3–5 interactions. Adapt the selection to the brief; do not force every catalog item into one site. Falling below the minimum requires a concrete alternative and explicit user/client approval in the Motion Brief.

Map every implemented effect/component to a stable catalog ID. A concept, TODO, placeholder or button without a working action does not count as implementation.

The frontend agent must implement the approved brief. QA must verify every selected ID in a real browser on desktop and mobile, with keyboard/touch and. Do not mark the page ready until the motion and interaction checklist is complete.

Never sacrifice content clarity, accessibility, performance, responsive behavior or conversion just to increase animation count. Preserve progressive enhancement and a usable experience when motion is disabled.
```

## 3. Prompt de arranque para el agente

Copie este texto en el primer encargo de cada sitio:

> Antes de proponer el diseño o escribir código, consulta el Motion & Interaction System de la base de conocimiento, revisa el briefing y crea docs/MOTION-BRIEF.md con IDs del catálogo. Propón una composición de motion de intensidad media-alta con mínimo 6 tratamientos de motion y 3 patrones de interacción funcionales, relevantes para este negocio. No entregues una landing page estática: implementa los efectos aprobados en el navegador y prueba los comportamientos. Usa el Motion Starter Kit cuando sea adecuado y justifica cualquier dependencia adicional. Al finalizar, entrega los IDs implementados, archivos, evidencias de desktop/mobile, pruebas de teclado/touch/ y cualquier excepción.

## 4. Regra de sincronização entre agentes

- O GitHub é a fonte canônica, mas não existe sincronização automática de memória entre ferramentas/modelos.
- Sempre fornecer os documentos ou links ao agente que inicia o projeto.
- Em handoffs entre Gemini, ChatGPT, Copilot ou outro agente, transportar o Motion Brief e o estado dos IDs implementados.
- Não considerar "a IA já sabe" como prova de que consultou a metodologia.
- Registrar divergências ou melhorias no repositório central antes de transformar uma proposta em padrão.

## 5. Definition of Done

Um site só pode ser considerado pronto quando:
- Motion Brief está preenchido e aprovado;
- padrões selecionados estão implementados de verdade;
- cada interação executa a função prometida;
- IDs estão mapeados para seções/componentes;
- evidências de QA estão anexadas ao projeto;
- mobile, teclado/toque e passaram;
- exceções estão documentadas e aceitas.
