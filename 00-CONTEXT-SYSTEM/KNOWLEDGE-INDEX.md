# Knowledge Index — Context Router

Use este índice para buscar o mínimo de contexto suficiente. Não leia todos os documentos por padrão. Confirme se os caminhos existem antes de depender deles.

## Inicialização
- Regras: `/AGENTS.md`.
- Contexto do sistema: `MASTER-CONTEXT.md` (somente ao iniciar novo trabalho ou quando faltar contexto).
- Metodologia: `../00-METHODOLOGY/MASTER-METHODOLOGY.md` (novo projeto, planejamento ou dúvida de processo).
- Estado do cliente: `../05-PROJECTS/<cliente>/PROJECT-STATE.md`, quando existir.

## Roteamento por etapa

| Etapa | Contexto principal | Consultar somente quando necessário |
|---|---|---|
| 1. Strategic Diagnosis | Master Methodology + briefing atual | fichas do nicho, pesquisa de mercado, playbook comercial |
| 2. Experience & Creative Blueprint | Strategic Brief + metodologia | fichas de referência selecionadas, Design Library, Motion System, prompts de UX/copy |
| 3. Technical Planning | Experience Blueprint + Development Standards | documentação atual da stack, integrações, segurança, hosting |
| 4. Development & Integration | Technical Blueprint + instruções do projeto | padrões técnicos, skill relevante, receita do Starter Kit |
| 5. Validation, QA & Release | Acceptance & Release Checklist + requisitos aprovados | ferramentas de teste específicas e documentação de deploy |
| 6. Delivery & Evolution | escopo, QA final e estado do projeto | handover, manutenção e analytics contratados |

## Bibliotecas
- Referências web: `../01-REFERENCE-LIBRARY/README.md` → abrir apenas fichas candidatas.
- Design: `../02-DESIGN-LIBRARY/` → consultar padrões usados no projeto.
- Motion: `../01-REFERENCE-LIBRARY/MOTION-AND-INTERACTION-SYSTEM/README.md` → catálogo/playbook/receita específica; não ler todos os padrões.
- Skills: `../03-AGENT-SKILLS/` → avaliar apenas a tarefa atual.
- Desenvolvimento: `../06-DEVELOPMENT-STANDARDS/` → selecionar padrão compatível.
- QA: `../07-QUALITY-CONTROL/ACCEPTANCE-AND-RELEASE-CHECKLIST.md`.

## Artefatos centrais por projeto
- `STRATEGIC-BRIEF.md` — negócio, público, problema, proposta de valor, conversão, restrições e evidências.
- `EXPERIENCE-BLUEPRINT.md` — arquitetura, jornada, UX, conteúdo, direção visual, design system e motion/interações.
- `TECHNICAL-BLUEPRINT.md` — stack, arquitetura, integrações, segurança, performance e plano técnico.
- `PROJECT-STATE.md` — fase, decisões, pendências, aprovações e próximo passo.

Esses quatro arquivos são o núcleo, não uma burocracia. Em projetos Compact, seções podem ser combinadas em menos arquivos desde que as decisões continuem claras. QA report, handover e especificações adicionais são criados quando a complexidade ou o contrato exigir.

## Outros workflows
Client & Business Operations continua separado da produção web. Consulte os documentos comerciais existentes por busca de nome/assunto; não use caminhos antigos sem verificar que ainda existem. Não confunda copy de prospecção com copy de site.

## Ferramentas e agentes
- Claude Code: `/CLAUDE.md`.
- Gemini CLI: `/GEMINI.md`.
- GitHub Copilot: `/.github/copilot-instructions.md`.
Os adaptadores apontam para as mesmas regras; não devem duplicar a metodologia.

## Regra de expansão
Quando um documento não for encontrado, procure pelo nome/assunto na árvore real do repositório; não invente uma rota nem substitua silenciosamente por um arquivo parecido. Registre rotas corrigidas nesta fonte canônica.
