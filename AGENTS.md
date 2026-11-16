# Instruções operacionais para agentes

Este arquivo é a **fonte única de autoridade para regras operacionais** neste repositório. Em caso de conflito, siga esta ordem:
1. Instruções explícitas e atuais do usuário.
2. Este `AGENTS.md`.
3. Decisões aprovadas em `00-CONTEXT-SYSTEM/GOVERNANCE-DECISIONS-AND-HANDOFFS.md`.
4. `00-CONTEXT-SYSTEM/MASTER-CONTEXT.md` para propósito e princípios.
5. Guias, workflows, prompts e padrões especializados.

Se documentos especializados divergirem, sinalize o conflito; não invente uma regra nova.

## Antes de trabalhar
- Leia o contexto mestre e o índice; depois carregue somente os documentos relevantes.
- Inspecione o repositório, arquivos e decisões antes de editar.
- Confirme briefing, escopo, restrições, ambiente e estado de aprovação.
- Consulte referências por segmento e por padrão transferível; tente verificar os sites originais e declare limitações de acesso.
- Separe fatos fornecidos, evidências verificadas, hipóteses, recomendações e pendências.

## Execução e qualidade
- Estratégia e objetivo do negócio precedem escolhas visuais ou técnicas.
- Justifique seções, componentes, motion, interações e dependências pela necessidade do usuário, jornada ou conversão.
- Escolha a solução mais simples que atenda aos requisitos; não adicione ferramentas, agentes, abstrações ou documentação sem ganho concreto.
- Mantenha conteúdo e funções essenciais utilizáveis sem animação; respeite acessibilidade, teclado, foco visível, touch, reduced-motion, performance e segurança.
- Não invente fatos, claims, credenciais, provas sociais, endpoints ou resultados.
- Não declare inspeções, instalações, builds, testes ou métricas que não foram realmente verificados.
- Preserve conteúdo e decisões aprovadas. Não publique, altere escopo, execute ação destrutiva ou instale/execute código de terceiros sem autorização adequada.

## Referências e skills
- Use a biblioteca como repertório, não como modelos para copiar.
- Registre referência consultada, padrão aproveitado/descartado e nível de verificação quando relevante.
- Avalie skills e dependências por origem, compatibilidade, licença, permissões, manutenção e benefício concreto. Não instale por padrão; peça autorização antes de executar conteúdo de terceiros.
- Não dependa de modelo pago, API paga ou serviço específico para o fluxo básico.

## Motion & Interaction
Consulte `01-REFERENCE-LIBRARY/MOTION-AND-INTERACTION-SYSTEM/` quando o projeto incluir motion ou interação. Crie um brief proporcional ao escopo e registre decisões relevantes.

Selecione comportamentos por propósito: hierarquia, orientação, narrativa, feedback, exploração, compreensão ou conversão. **Não existe quota universal de efeitos, animações ou interações.** Não force padrões para atingir um número. Uma landing page não deve ser estática por omissão: use movimento e interação quando melhorarem a experiência, e prefira uma solução simples ou nenhuma animação quando isso servir melhor ao conteúdo, público, acessibilidade ou conversão.

Implemente apenas o que foi selecionado e aprovado; teste o comportamento real nos dispositivos e estados relevantes. Registre fallback, reduced-motion e limitações. O sistema especializado detalha as práticas técnicas; este arquivo define a regra operacional.

## Handoffs e governança
- Cada entrega indica resultado, arquivos/fontes consultados, decisões aprovadas versus propostas, critérios verificados, testes realizados, riscos, pendências e próximo passo.
- Registre decisões duradouras somente após aprovação.
- Use estados `DRAFT`, `IN_REVIEW`, `APPROVED`, `BLOCKED` e `SUPERSEDED`; nunca infira aprovação.
- GitHub é a fonte canônica do repositório. Não presuma sincronização de memória entre ferramentas ou agentes.
- Prefira mudanças pequenas em branch e revisão; nunca faça force push.
- Não altere visibilidade, permissões, secrets ou configurações administrativas sem autorização explícita.

## Projetos em repositórios independentes
As instruções deste repositório não são automaticamente herdadas por projetos de clientes. Transporte somente as regras e documentos necessários, seguindo `01-REFERENCE-LIBRARY/MOTION-AND-INTERACTION-SYSTEM/PROJECT-BOOTSTRAP-INSTRUCTIONS.md` quando aplicável. Não copie todo o repositório indiscriminadamente.
