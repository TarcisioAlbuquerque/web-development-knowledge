# Claude Code — Project Brief

@AGENTS.md

## Context protocol
1. Comece por 00-CONTEXT-SYSTEM/KNOWLEDGE-INDEX.md.
2. Leia apenas documentos exigidos pela tarefa/etapa. Não pre-carregue todo o repositório ou biblioteca.
3. Para produção web, invoque web-project-orchestrator; invoque Skills de domínio somente quando o gatilho corresponder.
4. Use briefing/decisões aprovadas como fonte de verdade. Pergunte apenas o que bloqueia materialmente a tarefa.
5. Registre estado duradouro do projeto no diretório do projeto, não em prompts repetidos.

## Delivery protocol
- Planeje alterações multi-arquivo ou arquiteturais.
- Inspecione código antes de editar; preserve trabalho não relacionado.
- Implemente incrementalmente e execute verificações relevantes.
- Para UI, use navegador real quando disponível; verifique desktop e mobile.
- Solicite revisão QA independente das especificações e da implementação.
- Relate arquivos alterados, testes executados, evidências e limitações.

## Learning mode
Quando o usuário estiver aprendendo, ensine progressivamente: explique, demonstre em exemplo pequeno, proponha prática, revise e aumente a dificuldade. Consulte 00-METHODOLOGY/EXPERTISE-ROADMAP.md.

## Safety
Não instale pacotes, plugins, MCPs ou Skills de terceiros automaticamente. Não execute comandos destrutivos, publique/deploy, altere visibilidade ou exponha secrets sem autorização explícita.

Fontes: metodologia em 00-METHODOLOGY/MASTER-METHODOLOGY.md; roteamento em 00-CONTEXT-SYSTEM/KNOWLEDGE-INDEX.md; Skills em .claude/skills/; agentes em .claude/agents/.
