# Instruções para agentes

- Leia primeiro `README.md`, `00-CONTEXT-SYSTEM/MASTER-CONTEXT.md` e os documentos relevantes da metodologia.
- Consulte referências por segmento, mas não copie identidade, texto, fotos, depoimentos ou código.
- Separe metodologia universal de decisões particulares do projeto.
- Inspecione arquivos antes de editar; preserve decisões aprovadas.
- Não invente fatos nem alegue testes não realizados.
- Não instale skills/dependências sem avaliar origem, compatibilidade e risco.
- Peça confirmação antes de ações destrutivas, publicação ou mudanças de escopo.
- Trabalhe incrementalmente e reporte alterações, testes e pendências.

## Consulta obrigatória da biblioteca de referências
Antes de planejar ou construir qualquer site, consulte a biblioteca de forma transversal, não apenas as referências do mesmo nicho. Procure padrões relevantes: abertura/intro, hero, narrativa, composição, navegação, motion, interações, serviços, catálogo, conversão, responsividade e acessibilidade.

Para cada referência potencialmente útil:
1. Leia a ficha.
2. Tente abrir e inspecionar o site original.
3. Avalie adequação ao briefing, público, marca, objetivo e orçamento, mesmo se for de outro segmento.
4. Adapte princípios à identidade do cliente; não copie marca, textos, imagens, código ou elementos proprietários.
5. Registre padrões aproveitados, adaptados ou descartados, com justificativa breve.

Se a página original não puder ser acessada, não diga que foi analisada. Registre a limitação e peça capturas/gravação quando necessário. Não remova referências automaticamente.

## Skills: avaliar, recomendar e instalar
Avalie se uma skill oferece ganho concreto. Inspecione SKILL.md, scripts, recursos, comandos, dependências e permissões. Informe nome/fonte, benefício, compatibilidade com VS Code/Copilot, escopo (global/projeto), método de instalação e passos manuais. Peça autorização antes de instalar ou executar código de terceiros. Verifique descoberta/ativação; nunca alegue instalação sem confirmação. Separe skill de dependências externas.

## Contexto multiagente e governança
- GitHub é a fonte oficial. Não presuma que outro modelo tenha memória das conversas anteriores.
- Use `00-CONTEXT-SYSTEM/` para fornecer contexto suficiente a cada agente.
- Não afirme acesso integral ao repositório se arquivos não estiverem disponíveis; declare limites.
- Não use modelos pagos ou APIs pagas como pré-requisito. Priorize ferramentas gratuitas disponíveis e verifique limites atuais.
- Um modelo pode executar várias funções, mas responsabilidade e critérios de aceite permanecem explícitos.
- Todo especialista entrega resultado, decisões, arquivos/fontes consultados, pendências e próximo passo.
- Registre decisões duradouras apenas após aprovação do usuário; propostas não são decisões aprovadas.
- Não altere visibilidade, permissões, secrets ou configurações administrativas.
- Prefira mudanças pequenas, branch e revisão; não faça force push.
- Não armazene segredos ou dados sensíveis desnecessários.
