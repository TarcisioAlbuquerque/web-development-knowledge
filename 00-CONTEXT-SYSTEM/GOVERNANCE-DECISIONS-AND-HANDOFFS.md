# Governance, Decisions & Handoffs

## Decisões aprovadas (2026-11-12)
- O repositório `TarcisioAlbuquerque/web-development-knowledge` permanece privado.
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

## Changelog inicial — 2026-11-12
Context System, workflows, guias derivados, cadastro de especialistas, prompts especializados, padrões técnicos, QA e template de projeto adicionados; README e AGENTS atualizados. Nenhum arquivo preexistente foi excluído.

## Protocolo de handoff
Cada especialista encerra com:
1. Projeto/etapa e objetivo recebido.
2. Contexto consultado (caminhos, fontes e commit quando possível).
3. Resultado e caminhos dos entregáveis.
4. Decisões aprovadas, propostas e hipóteses separadas.
5. Critérios atendidos e evidências.
6. Pendências, riscos e validações não realizadas.
7. Próximo especialista recomendado e tarefa.

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
