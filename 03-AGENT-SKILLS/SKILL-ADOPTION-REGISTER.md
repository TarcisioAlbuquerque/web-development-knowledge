# Registro de avaliação de skills externas

**Data:** 2026-11-15  
**Escopo:** leitura de documentação/metadados e arquivos de instalação das fontes. Nenhuma skill foi instalada, script executado ou benchmark realizado neste repositório.

## Resumo

| Recurso | Uso recomendado | Licença verificada | Decisão |
|---|---|---|---|
| Anthropic Frontend Design | Direção criativa, tipografia, originalidade e autocrítica | Apache-2.0 | Complemento opcional |
| UI UX Pro Max | Busca pontual de estilos, paletas, fontes e guidelines | MIT | Consulta opcional |
| Vercel Web Design Guidelines | Auditoria de UI contra regras atualizadas | Não confirmada na árvore consultada | Link externo; não redistribuir até esclarecer |
| Vercel React Best Practices | Performance React/Next.js | Não confirmada na árvore consultada | Condicional a projetos React/Next |
| Caveman | Compressão de linguagem/token em agentes | MIT | Não integrar sem benchmark |

## Anthropic Frontend Design

- Fonte: https://github.com/anthropics/skills/tree/main/skills/frontend-design
- Inspecionados: SKILL.md e LICENSE.txt.
- Propósito: escolhas visuais específicas ao briefing, planejamento de tokens/layout e autocrítica para evitar páginas genéricas.
- Ganho: complementa direção visual existente; usar como lente de revisão, não como fonte normativa duplicada.
- Licença da skill: Apache-2.0.
- Compatibilidade: formato SKILL.md; confirmar suporte no agente/gerenciador. Não declarar suporte oficial ao Copilot sem validação.
- Instalação não realizada.

## UI UX Pro Max

- Fonte: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill
- Inspecionados: README, SKILL.md e package.json do CLI.
- Pesquisa estilos, paletas, fontes, guidelines UX, ícones, presets GSAP e stacks.
- README declara suporte a GitHub Copilot. SKILL.md descreve busca local com Python 3; CLI separado declara dependências npm (chalk, commander, ora, prompts).
- Licença: MIT.
- Uso: depois de definir briefing/direção no Engine, realizar buscas específicas. Não impor Tailwind, React ou estilo sugerido automaticamente.
- Instalação não realizada; revisar versão, CLI, scripts e permissões antes.

## Vercel Web Design Guidelines

- Fonte: https://github.com/vercel-labs/agent-skills/tree/main/skills/web-design-guidelines
- Inspecionado SKILL.md.
- Revisa arquivos de UI; orienta buscar guidelines atualizadas a cada auditoria em https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md.
- Licença não confirmada na árvore consultada; não copiar/redistribuir material até esclarecer.
- Complementa, mas não substitui QA e acessibilidade do projeto.

## Vercel React Best Practices

- Fonte: https://github.com/vercel-labs/agent-skills/tree/main/skills/react-best-practices
- Inspecionados README e SKILL.md; regras para waterfalls, bundle, server/client fetching, rerender, rendering e JS.
- Usar somente em projetos React/Next.js. Não aplicar regras React a HTML/CSS/JS puro ou outra stack sem avaliar equivalência.
- Licença não confirmada na árvore consultada.
- O projeto de origem possui regras por arquivo e scripts de build/validação; não copiar parcialmente como pacote independente.

## Caveman

- Fonte canônica identificada: https://github.com/JuliusBrussee/caveman
- Inspecionados README, licença MIT, SKILL.md e trecho inicial de install.sh.
- Alegações de economia de tokens são afirmações do projeto; não foram reproduzidas nesta base.
- Instalador pode configurar plugins/skills, hooks, statusline, MCP shrink e arquivos por repositório.
- Risco: mudar estilo de resposta e configuração do ambiente sem benefício provado nesta tarefa.
- Decisão: não instalar, não adicionar como dependência nem escrever regras Caveman permanentes.
- Para reconsiderar: teste isolado e reversível com mesmas tarefas; medir tokens, precisão, completude, nuance, erros e esforço de revisão.

## Política de atualização

Revalidar fonte, versão, licença, compatibilidade, scripts e instalação antes de cada adoção. Separar estados avaliada, recomendada, instalada e ativa. Não executar instaladores remotos sem inspeção e autorização. Nenhuma skill externa é requisito para produzir sites profissionais.
