# Governance, Decisions & Handoffs

## Decisões aprovadas (2026-11-12)
- A visibilidade do repositório deve ser confirmada nos metadados/configurações atuais do GitHub; não presumir estado privado ou público.
- A metodologia é universal e serve clientes/nichos diversos; AURA é um caso de aplicação.
- O fluxo básico deve funcionar com ferramentas gratuitas; não depender de Claude Code, API paga ou assinatura premium.
- Referências devem ser consultadas transversalmente, por nicho e por padrões transferíveis.
- Materiais já existentes devem ser preservados e mudanças incrementais.
- O sistema integra duas frentes: Web Production e Client & Business Operations.
- Os PDFs “Roteiro Prático do Aluno — Sites com IA do Zero” e “Guia de abordagem de clientes” são fontes complementares, não substituem a metodologia central.

## Decisões pendentes
- Preferência final de modelos por especialidade: decidir após testes reais comparáveis.
- Stack padrão por tipo de projeto: manter seleção contextual, não uma stack única.
- Armazenamento dos PDFs originais: guias Markdown foram versionados; os binários originais permanecem anexados à conversa e não foram copiados para o GitHub nesta atualização.

## Changelog

### 2026-11-15 — Fase 1: simplificação e autoridade documental
- Definido `AGENTS.md` como autoridade operacional única; `MASTER-CONTEXT.md` como fonte de missão/princípios; índice e README limitados à navegação.
- Simplificados README, AGENTS e instruções do Copilot; removidas políticas duplicadas do arquivo específico do Copilot.
- Reduzida redundância em metodologia, workflows, prompt mestre e prompts especializados; mantidas as responsabilidades próprias de cada documento.
- Removidas quotas fixas de motion/interações da documentação operacional, dos padrões, do brief e do QA; substituídas por critérios de propósito, contexto, acessibilidade, performance e conversão.
- Corrigida a afirmação de que o repositório é privado: a visibilidade deve ser confirmada nos metadados atuais do GitHub (que reportam público nesta execução).
- Simplificado o protocolo de handoff para registrar somente contexto, resultado, decisões, verificação, pendências e próximo passo pertinentes.
- Nenhuma pasta ou documento foi excluído; nenhuma nova pasta ou sistema foi criado.

**Arquivos alterados nesta fase:** `README.md`, `AGENTS.md`, `.github/copilot-instructions.md`, `00-CONTEXT-SYSTEM/MASTER-CONTEXT.md`, `00-CONTEXT-SYSTEM/KNOWLEDGE-INDEX.md`, `00-CONTEXT-SYSTEM/GOVERNANCE-DECISIONS-AND-HANDOFFS.md`, `00-METHODOLOGY/MASTER-METHODOLOGY.md`, `00-METHODOLOGY/WEB-AND-CLIENT-OPERATIONS-WORKFLOWS.md`, `01-REFERENCE-LIBRARY/MOTION-AND-INTERACTION-SYSTEM/README.md`, `01-REFERENCE-LIBRARY/MOTION-AND-INTERACTION-SYSTEM/MOTION-BRIEF-TEMPLATE.md`, `01-REFERENCE-LIBRARY/MOTION-AND-INTERACTION-SYSTEM/PROJECT-BOOTSTRAP-INSTRUCTIONS.md`, `04-PROMPTS/MASTER-PROMPT.md`, `04-PROMPTS/SPECIALISTS/MASTER-SPECIALIST-PROMPTS.md`, `06-DEVELOPMENT-STANDARDS/README.md`, `07-QUALITY-CONTROL/ACCEPTANCE-AND-RELEASE-CHECKLIST.md`.

## Changelog inicial — 2026-11-12
Context System, workflows, guias derivados, cadastro de especialistas, prompts especializados, padrões técnicos, QA e template de projeto adicionados; README e AGENTS atualizados. Nenhum arquivo preexistente foi excluído.

## Protocolo de handoff
Cada transferência deve registrar, conforme pertinente: (1) objetivo e estado; (2) arquivos/fontes e branch/commit consultados; (3) resultado e caminhos; (4) decisões aprovadas separadas de propostas/hipóteses; (5) critérios e testes realmente verificados; (6) riscos, pendências e validações não realizadas; (7) próximo passo concreto. Não repetir contexto já disponível nem preencher campos irrelevantes.

Estados: DRAFT, IN_REVIEW, APPROVED, BLOCKED, SUPERSEDED. Nunca marcar como APPROVED por inferência. Não alterar etapa aprovada silenciosamente. Solicitações de mudança precisam indicar impacto.

## Pacotes de contexto
### Base comum
README, AGENTS.md, MASTER-CONTEXT, KNOWLEDGE-INDEX, briefing e decisões aprovadas do projeto.

### Pacotes especializados
- Estratégia: segmento, mercado, oferta, evidências e restrições.
- Briefing: dados do negócio, serviços, público, contatos autorizados, conteúdo e pendências.
- UX: objetivo, público, sitemap, conteúdo e critérios.
- Copy do site: briefing, posicionamento, oferta, arquitetura e tom.
- Copy comercial/prospecção: lead/contexto verificado, oferta, canal, mercado e preferências de contato.
- Direção visual: briefing, copy aprovada, referências e tokens.
- Motion: arquitetura, direção visual, conteúdo, dispositivos e restrições.
- Arquitetura técnica: requisitos, ambiente, orçamento, manutenção e integrações.
- Front-end: specs aprovadas, arquivos, padrões e instruções.
- QA: critérios de aceite, versão/build e dispositivos/navegadores.
- Project Manager/Customer Success: escopo, prazos acordados, responsáveis, aceite, pendências e histórico permitido.

## Regras de atualização
GitHub é fonte canônica; conversas e memórias podem auxiliar, mas não substituem documentação aprovada. Fornecer pacote de contexto se plataforma não conseguir ler repositório privado. Não enviar todos os documentos a todo agente. Não expor segredos ou dados pessoais desnecessários.
