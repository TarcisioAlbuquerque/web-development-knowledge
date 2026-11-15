# Instruções globais para agentes

## Entrada obrigatória

1. Leia README.md.
2. Leia 00-CONTEXT-SYSTEM/MASTER-CONTEXT.md e KNOWLEDGE-INDEX.md.
3. Identifique workflow e especialista necessários.
4. Inspecione estado do projeto e decisões aprovadas antes de editar.
5. Para landing pages, consulte 08-LANDING-PAGE-ENGINE/README.md.
6. Consulte referências transversalmente, por segmento e por padrão/experiência.

## Referências

- Leia fichas potencialmente úteis e tente inspecionar os sites originais.
- Avalie padrões segundo briefing, público, marca, objetivo, orçamento e contexto, inclusive entre segmentos.
- Adapte princípios; não copie marca, textos, fotos, depoimentos, código ou ativos proprietários.
- Registre referências consultadas, padrões selecionados/adaptados/descartados e justificativas.
- Se a inspeção direta falhar, diga claramente. Ficha ou screenshot não comprova inspeção completa do site.

## Fontes normativas

Não duplique regras técnicas em prompts e documentos de entrada. Consulte a fonte apropriada:
- Landing pages: 08-LANDING-PAGE-ENGINE/.
- Motion e interações: 01-REFERENCE-LIBRARY/MOTION-AND-INTERACTION-SYSTEM/README.md.
- Requisitos técnicos: 06-DEVELOPMENT-STANDARDS/README.md.
- Critérios de aceite/release: 07-QUALITY-CONTROL/ACCEPTANCE-AND-RELEASE-CHECKLIST.md.
- Skills externas: 03-AGENT-SKILLS/SKILL-ADOPTION-REGISTER.md.

O Motion & Interaction System é a única fonte normativa do baseline de motion/interações. Consulte-a em toda página/site novo e siga seu gate de QA. Não replique contagens e regras completas em prompts locais.

## Skills, ferramentas e dependências

- Consulte primeiro skills e recursos já disponíveis.
- Avalie origem, manutenção, licença, compatibilidade, scripts, permissões, dependências e ganho concreto.
- Não instale skills/bibliotecas nem execute scripts de terceiros sem autorização explícita.
- Descobrir uma skill não significa que está instalada ou ativa.
- Não instale CLI, hooks, MCP servers ou altere configurações de agentes silenciosamente.
- O fluxo básico não pode exigir assinatura ou API paga.

## Segurança e governança

- Não exponha secrets, tokens ou dados pessoais desnecessários.
- Não altere visibilidade, permissões, secrets ou configurações administrativas.
- Não publique, faça deploy ou execute ações destrutivas sem autorização.
- Não sobrescreva trabalho existente sem inspecionar o estado anterior.
- Prefira branch separada, mudanças incrementais e revisão por pull request.
- Não faça force push.
- Não presuma sincronização de contexto entre modelos/plataformas.

## Execução e handoff

- Separe fatos, evidências, hipóteses, recomendações e pendências.
- Não invente dados de clientes, claims, provas sociais, preços ou resultados.
- Use tecnologia proporcional ao problema; não force frameworks.
- Teste o que for possível e declare exatamente o que foi executado.
- Informe resultado, arquivos, fontes, decisões, testes reais, limitações, riscos e próximo passo.
- Registre decisões duradouras apenas após aprovação.
