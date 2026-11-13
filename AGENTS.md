# Instruções para agentes

- Leia primeiro `README.md` e os documentos relevantes da metodologia.
- Consulte referências por segmento, mas não copie identidade, texto, fotos, depoimentos ou código.
- Separe metodologia universal de decisões particulares do projeto.
- Inspecione arquivos antes de editar; preserve decisões aprovadas.
- Não invente fatos nem alegue testes não realizados.
- Não instale skills/dependências sem avaliar origem, compatibilidade e risco.
- Peça confirmação antes de ações destrutivas, publicação ou mudanças de escopo.
- Trabalhe incrementalmente e reporte alterações, testes e pendências.


## Consulta obrigatória da biblioteca de referências
Antes de planejar ou construir qualquer site, consulte a biblioteca inteira de forma transversal, não apenas as referências do mesmo nicho. Procure padrões relevantes por função e qualidade: abertura/intro, hero, narrativa, composição, navegação, motion, interações, apresentação de serviços, catálogo, conversão, responsividade e acessibilidade.

Para cada referência potencialmente útil:
1. Leia a ficha no repositório.
2. Tente abrir e inspecionar o site original para validar o padrão e entender seu contexto.
3. Avalie se o padrão serve ao briefing, público, marca, objetivo e orçamento do projeto atual, mesmo quando a referência for de outro segmento.
4. Adapte o princípio à identidade do cliente; nunca copie marca, textos, imagens, código ou elementos proprietários.
5. Registre quais referências foram consultadas e quais padrões foram selecionados, adaptados ou descartados, com justificativa breve.

Não limite a pesquisa ao nicho. Uma abertura de um escritório de advocacia, por exemplo, pode inspirar a introdução de um site de nutrição se a experiência fizer sentido para a marca e o objetivo.

### Acesso e transparência
Tente acessar o endereço original usando os recursos de navegação disponíveis. Se o acesso automatizado falhar, for bloqueado ou não permitir visualizar a experiência necessária:
- não diga que o site foi analisado;
- registre o nome/URL e o motivo observado, se conhecido;
- informe a pendência claramente no relatório final;
- peça ao usuário, quando necessário, capturas, gravação ou autorização para uma alternativa de inspeção;
- não remova a referência da biblioteca automaticamente.

## Skills: avaliar, recomendar e instalar
Durante cada projeto, avaliar se uma skill existente oferece ganho concreto para a tarefa. Consultar primeiro a biblioteca de skills e os recursos já disponíveis no ambiente. Não instalar por padrão nem acumular skills redundantes.

Quando uma skill for recomendada, informar ao usuário:
- nome e fonte;
- benefício concreto para o projeto atual;
- compatibilidade com VS Code/GitHub Copilot e escopo (global ou projeto);
- se a instalação pode ser feita pelo Marketplace/CLI ou exige cópia/configuração manual;
- dependências externas e eventuais passos manuais.

Antes de instalar, inspecionar a skill completa (SKILL.md, scripts, recursos, comandos, dependências e permissões) e explicar riscos relevantes. Solicitar confirmação do usuário antes de instalar ou executar código de terceiros. Nunca afirmar que está instalada até verificar sua presença e reconhecimento pelo agente.

Se o agente puder executar a instalação com segurança e autorização, pode fazê-lo; caso contrário, fornecer instruções manuais exatas e avisar claramente que o usuário precisa realizar esse passo. Após instalar, verificar descoberta/ativação no VS Code e separar a instalação da skill da instalação de dependências externas.

## Contexto multiagente e governança
- GitHub é a fonte oficial. Não presuma que outro modelo tenha memória das conversas anteriores.
- Use `00-CONTEXT-SYSTEM/` para fornecer contexto suficiente a cada agente.
- Não afirme acesso integral ao repositório se arquivos não estiverem disponíveis; declare limites.
- Não use modelos pagos ou APIs pagas como pré-requisito. Priorize ferramentas gratuitas disponíveis e verifique limites atuais.
- Um modelo pode executar várias funções, mas responsabilidade e critérios de aceite permanecem explícitos.
- Todo especialista entrega resultado, decisões, arquivos/fontes consultados, pendências e próximo passo.
- Registre decisões duradouras apenas após aprovação do usuário; propostas e hipóteses não são decisões aprovadas.
- Não altere visibilidade, permissões, secrets ou configurações administrativas.
- Prefira mudanças pequenas, branch e revisão; não faça force push.
- Não armazene segredos ou dados sensíveis desnecessários.


## Motion & Interaction — requisito não negociável para Web Production

Para toda landing page e novo site, consulte `01-REFERENCE-LIBRARY/MOTION-AND-INTERACTION-SYSTEM/` antes de planejar layout ou implementar. O sistema contém catálogo universal de motion, componentes interativos, playbook, case study e Motion Brief Template.

Não entregue páginas estáticas por omissão. Em landing pages, implemente no mínimo 6 tratamentos distintos de motion e 3 padrões de interação úteis (faixa recomendada: 6–10 e 3–5); o baseline inclui hero entrance, reveals em múltiplas seções, movimento/revelação de mídia, feedback de hover/focus/active e pelo menos uma interação contextual.

Motion Designer especifica; Front-end Engineer implementa; QA verifica. Efeitos listados no brief precisam existir e funcionar no navegador. Um plano, comentário TODO, placeholder ou botão sem ação não conta como implementação.

Se um efeito não servir ao projeto, documente a razão e uma alternativa no Motion Brief. Não force todos os padrões em todos os sites. Acessibilidade, reduced-motion, responsividade, performance e clareza permanecem obrigatórias. Consultar também `06-DEVELOPMENT-STANDARDS/MOTION-STARTER-KIT/` para primitives reutilizáveis.


## Bootstrap em repositórios de clientes
As instruções deste repositório não são carregadas automaticamente em outros repositórios. Ao iniciar um projeto de cliente, siga `01-REFERENCE-LIBRARY/MOTION-AND-INTERACTION-SYSTEM/PROJECT-BOOTSTRAP-INSTRUCTIONS.md`: disponibilize o sistema ao agente, adicione o gate ao AGENTS.md/Copilot Instructions do projeto cliente e crie `docs/MOTION-BRIEF.md`. Não presuma que Gemini, ChatGPT e Copilot compartilham memória ou contexto automaticamente.
