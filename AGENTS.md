# Regras essenciais para agentes

Este arquivo é o núcleo universal. O fluxo detalhado vive nas Skills e documentos referenciados.

## Antes de agir
1. Inspecione repositório, estado atual e decisões aprovadas.
2. Leia 00-CONTEXT-SYSTEM/KNOWLEDGE-INDEX.md e selecione apenas o contexto necessário.
3. Classifique a tarefa e invoque Skills relevantes em .claude/skills/.
4. Não presuma memória, acesso a outros repositórios ou sincronização entre modelos.

## Regras
- Preserve decisões aprovadas; apresente impacto antes de mudar escopo.
- Separe fato fornecido, evidência com fonte/data, hipótese, recomendação e pendência.
- Consulte referências por nicho e por padrão transferível; confirme acesso ao original antes de dizer que o inspecionou.
- Não copie identidade, código, textos, imagens, depoimentos ou assets protegidos.
- Não invente informações de cliente, claims, métricas, credenciais ou resultados.
- Escolha tecnologia proporcional a requisito, capacidade de manutenção, custo e ambiente.
- Acessibilidade, segurança, desempenho, mobile e manutenção são requisitos desde o início.
- Inspecione origem, licença, permissões, scripts e dependências antes de executar conteúdo de terceiros.
- Não exponha secrets, dados pessoais ou conteúdo confidencial.
- Não publique, altere permissões/visibilidade, destrua dados ou faça ações irreversíveis sem autorização explícita.
- Use branch e mudanças pequenas; nunca faça force-push.
- Não afirme que algo funciona sem executar a verificação correspondente.

## Handoff compacto
STATUS · OBJECTIVE · DECISIONS · CHANGED FILES · TESTS/EVIDENCE · RISKS/BLOCKERS · NEXT OWNER/ACTION.

Detalhes em 00-CONTEXT-SYSTEM/GOVERNANCE-DECISIONS-AND-HANDOFFS.md.
