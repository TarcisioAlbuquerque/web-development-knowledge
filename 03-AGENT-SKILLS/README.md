# Skills e ferramentas

Avalie recursos antes de adotar: origem, mantenedor, documentação, compatibilidade, dependências, permissões, scripts, riscos e ganho concreto. Descobrir uma skill não significa que esteja instalada ou ativa. Não executar scripts desconhecidos nem fornecer segredos a ferramentas de terceiros.


## Fluxo de recomendação por projeto
1. Identificar a tarefa e avaliar se alguma skill oferece benefício real.
2. Consultar a fonte e inspecionar todos os arquivos relevantes antes de confiar nela.
3. Verificar compatibilidade com a versão/host do VS Code e Copilot, localização de instalação, dependências e permissões.
4. Recomendar de forma explícita ou informar que nenhuma skill adicional é necessária.
5. Pedir autorização antes de instalar ou executar scripts de terceiros.
6. Instalar pela via suportada (Marketplace, CLI ou cópia integral da pasta para o diretório suportado).
7. Verificar que o VS Code detecta a skill. Instalação de dependências externas é uma etapa separada.

### Escopos usuais do VS Code / Copilot
- Projeto: `.github/skills/<nome-da-skill>/`
- Pessoal/global: `~/.copilot/skills/<nome-da-skill>/`

A skill deve manter sua pasta completa, incluindo `SKILL.md`, scripts, referências e recursos necessários. Não copiar apenas o `SKILL.md` quando existirem arquivos auxiliares.

### Comunicação com o usuário
Quando uma skill for útil, explicar o benefício e indicar claramente se o passo é automático ou manual. Se o ambiente não permitir a instalação, fornecer o comando/caminho exato e marcar a tarefa como pendente. Nunca alegar instalação ou ativação sem verificação.
