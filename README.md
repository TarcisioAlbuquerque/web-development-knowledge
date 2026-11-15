# Web Development Knowledge

Sistema de conhecimento e operação para criar, vender, entregar e evoluir experiências web profissionais. A metodologia é universal; AURA Creativa é uma aplicação.

## Comece por aqui
1. Leia AGENTS.md e 00-CONTEXT-SYSTEM/KNOWLEDGE-INDEX.md.
2. Para Claude Code, consulte CLAUDE.md (curto por design).
3. Classifique a tarefa: Web Production, Client Operations ou Learning.
4. Carregue somente as Skills e documentos necessários à etapa atual.
5. Use o projeto/brief aprovado como fonte de fatos; registre hipóteses e decisões.
6. Verifique o trabalho antes de declarar concluído.

## Arquitetura
- 00-CONTEXT-SYSTEM/ — princípios, índice, governança e handoffs.
- 00-METHODOLOGY/ — workflows e trilha do zero ao avançado.
- 01-REFERENCE-LIBRARY/ — referências, guias e Motion & Interaction.
- 02-DESIGN-LIBRARY/ — padrões visuais reutilizáveis.
- 03-AGENT-SKILLS/ — registro, avaliação e governança das Skills.
- .claude/skills/ — Skills executáveis no Claude Code.
- .claude/agents/ — especialistas delegáveis.
- 04-PROMPTS/ — brief de tarefa; não duplicar o conteúdo das Skills.
- 05-PROJECTS/ — contexto específico de cada cliente.
- 06-DEVELOPMENT-STANDARDS/ — padrões de engenharia e starter kits.
- 07-QUALITY-CONTROL/ — critérios de aceite e release.

## Economia de contexto
Claude carrega o núcleo curto, consulta o índice e invoca somente Skills relevantes. Não deve ler toda a biblioteca por padrão. Documentos longos são fontes sob demanda; Skills contêm o processo, não cópias integrais da biblioteca.

## Dois fluxos
Web Production: descoberta → estratégia → arquitetura/UX → conteúdo → direção visual → motion → arquitetura técnica → implementação → QA → entrega/evolução.
Client Operations: oferta/nicho → pesquisa de leads → abordagem → diagnóstico → proposta → onboarding → gestão → entrega → pós-venda.

## Invariantes
Fatos verificáveis; nenhuma invenção de prova social/credenciais/resultados; nenhuma cópia de propriedade intelectual; segurança, acessibilidade, desempenho e responsividade desde o início; nenhuma publicação, ação destrutiva ou instalação de terceiros sem autorização; relatar somente verificações realmente executadas.

## Segurança do repositório
A intenção documentada é manter esta base privada. Na auditoria de 15/11/2026, a API do GitHub reportou visibility: public. Confirme/corrija a visibilidade em GitHub Settings antes de adicionar informações comerciais confidenciais ou dados de clientes. Não armazene credenciais, tokens ou arquivos .env.
