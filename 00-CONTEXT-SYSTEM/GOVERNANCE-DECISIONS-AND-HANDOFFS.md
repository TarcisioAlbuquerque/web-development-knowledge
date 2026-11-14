# Governance, Decisions & Handoffs

## Decisões aprovadas — metodologia 2026-11-14
- Web Production possui seis etapas canônicas: Strategic Diagnosis; Experience & Creative Blueprint; Technical Planning; Development & Integration; Validation, QA & Release; Delivery & Evolution.
- Um Master Orchestrator é responsável pelo projeto de ponta a ponta e assume especialidades conforme necessário. Agentes paralelos não são o padrão.
- Motion não tem quotas artificiais de quantidade ou complexidade. Selecionar técnicas por coerência, objetivo, acessibilidade, performance, compatibilidade e manutenção.
- Priorizar excelência visual/técnica/funcional, respostas concisas, recuperação seletiva e mínima repetição.
- Usar modalidades Compact, Standard e Advanced sem reduzir critérios críticos de qualidade.
- Manter quatro artefatos centrais quando a complexidade justificar: Strategic Brief, Experience Blueprint, Technical Blueprint e Project State; projetos Compact podem combinar documentos.
- A metodologia é universal; AURA é uma aplicação.
- A biblioteca deve ser pesquisada transversalmente, sob demanda, por nicho e por padrão.
- O repositório permanece privado; a migração é feita em branch, sem alterar main automaticamente.

## Decisões aprovadas anteriormente — 2026-11-12
- O fluxo básico deve funcionar sem depender de assinatura paga/API específica.
- Referências devem ser consultadas transversalmente, por nicho e por padrões transferíveis.
- Materiais existentes devem ser preservados; mudanças são incrementais.
- O sistema integra Web Production e Client & Business Operations.
- PDFs e guias complementares não substituem a metodologia canônica.

## Decisões pendentes
- Preferência final de ferramentas/modelos por tarefa: decidir após testes comparáveis.
- Stack padrão por tipo de projeto: manter seleção contextual, não uma stack única.
- Acesso direto a referências que continuam pendentes: revisar quando houver disponibilidade.

## Changelog
- **2026-11-12:** Context System, workflows, guias, prompts, padrões técnicos e QA adicionados.
- **2026-11-14:** metodologia consolidada em seis etapas; instruções globais e prompt mestre simplificados; roteador de contexto atualizado; motion sem quotas; adaptadores por ferramenta adicionados; referências e observações do usuário atualizadas; branch de migração criada para revisão.

## Protocolo de handoff
Cada etapa registra apenas:
1. objetivo/etapa e modalidade;
2. contexto e fontes relevantes consultadas;
3. resultado e caminhos dos entregáveis;
4. decisões aprovadas, hipóteses e pendências;
5. testes/evidências realmente obtidos;
6. riscos e próximo passo.

Estados: DRAFT, IN_REVIEW, APPROVED, BLOCKED, SUPERSEDED. Nunca marcar APPROVED por inferência. Não alterar decisões aprovadas silenciosamente.

## Contexto e estado do projeto
Os artefatos centrais e o `PROJECT-STATE.md` devem guardar a versão vigente, não um histórico integral. GitHub é a fonte canônica. Conversas e memórias auxiliam, mas não substituem documentação aprovada.

## Regras de atualização
Não enviar todos os documentos a todo agente. Não duplicar regras entre arquivos; cada regra tem uma fonte canônica e os adaptadores apontam para ela. Não expor segredos ou dados pessoais desnecessários.
