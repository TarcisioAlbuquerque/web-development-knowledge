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

Select motion and interactions according to the brief, user journey, brand and conversion goal. There is no universal minimum count. Do not force effects to satisfy a quota; document the purpose, fallback and validation of selected behaviors.

Map every implemented effect/component to a stable catalog ID. A concept, TODO, placeholder or button without a working action does not count as implementation.

The frontend agent must implement the approved brief. QA must verify every selected ID in a real browser on desktop and mobile, with keyboard/touch and prefers-reduced-motion. Do not mark the page ready until the motion and interaction checklist is complete.

Never sacrifice content clarity, accessibility, performance, responsive behavior or conversion just to increase animation count. Preserve progressive enhancement and a usable experience when motion is disabled.
```

## 3. Prompt de arranque para el agente

Copie este texto en el primer encargo de cada sitio:

 > Antes de diseñar o codificar, consulta el Motion & Interaction System cuando seja relevante para o projeto, revisa o briefing e cria uma especificação proporcional com os IDs selecionados. Escolhe comportamentos por propósito e intensidade adequada à marca; não uses contagens mínimas nem imponhas motion de intensidade alta. Implementa apenas o que foi aprovado e testa navegador, desktop/mobile, teclado/toque e reduced-motion conforme aplicável. Usa o Motion Starter Kit quando adequado e justifica dependências adicionais. Ao finalizar, informa IDs, arquivos, testes, evidências e limitações.

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
- mobile, teclado/toque e reduced-motion passaram;
- exceções estão documentadas e aceitas.
