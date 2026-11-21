# Bootstrap obrigatório — Motion & Interaction em projetos de clientes

Use este documento ao abrir/criar um repositório independente de cliente. O repositório de conhecimento é a fonte canônica, mas suas instruções não são automaticamente carregadas por Gemini, ChatGPT, Copilot ou por um repositório de cliente separado.

## 1. Preparar o projeto
1. Garanta que o agente que vai implementar o site consiga consultar a pasta MOTION-AND-INTERACTION-SYSTEM e MOTION-STARTER-KIT.
2. Se o workspace não tiver acesso ao repositório de conhecimento, copie os documentos necessários para docs/reference/motion-and-interaction/ ou forneça os arquivos/links no contexto do agente.
3. Copie MOTION-BRIEF-TEMPLATE.md para docs/MOTION-BRIEF.md e preencha-o antes de estruturar o motion.
4. Adicione o bloco de instruções abaixo ao AGENTS.md ou .github/copilot-instructions.md do projeto de cliente.

## 2. Bloco para AGENTS.md / Copilot Instructions

```md
## Motion & Interaction (quando aplicável)

Consulte os documentos do sistema compartilhado que forem relevantes ao escopo. Crie um brief ou especificação proporcional quando motion ou componentes interativos fizerem parte dos requisitos.

Escolha comportamentos conforme o briefing, a jornada, a marca, os dispositivos e o objetivo de conversão. Não há quantidade mínima nem conjunto obrigatório de efeitos. Não force hero sequence, reveals, animação de mídia ou componentes interativos se não resolverem uma necessidade real.

Mapeie os comportamentos implementados aos IDs do catálogo quando aplicável. Um conceito, TODO, placeholder ou botão sem ação funcional não conta como implementação.

Implemente os comportamentos aprovados e verifique-os no navegador nos dispositivos e estados relevantes, incluindo teclado/toque e conforme aplicável. Não declare QA concluído sem evidência suficiente.

Preserve conteúdo e ações essenciais quando motion estiver desativado. Não sacrifique clareza, acessibilidade, performance, responsividade ou conversão.
```

## 3. Prompt de arranque para el agente

Copie este texto en el primer encargo de cada sitio:

> Antes de diseñar o codificar, consulta el Motion & Interaction System cuando sea relevante para el proyecto, revisa el briefing y crea una especificación proporcional con los IDs seleccionados. Elige comportamientos según su propósito y la identidad de la marca; no uses cantidades mínimas ni impongas motion de alta intensidad. Implementa solo lo aprobado y prueba en navegador, desktop/mobile, teclado/touch y cuando corresponda. Usa el Motion Starter Kit cuando sea adecuado y justifica dependencias adicionales. Al finalizar, informa IDs, archivos, pruebas, evidencias y limitaciones.

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
