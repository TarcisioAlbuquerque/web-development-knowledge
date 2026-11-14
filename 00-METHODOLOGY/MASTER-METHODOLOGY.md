# Master Methodology — Universal Web Production

**Status:** metodologia canônica aprovada.  
**Escopo:** sites, landing pages, portfolios, catálogos, experiências digitais e aplicações web de clientes de qualquer nicho.  
**Prioridade:** excelência visual, técnica, funcional e estratégica; eficiência sem perda de qualidade.

## Modelo operacional

Um único **Master Orchestrator** conduz o projeto de ponta a ponta e assume as especialidades necessárias. Não ativa agentes paralelos por padrão. A metodologia tem seis etapas, mas é iterativa: pesquisa, validação e ajustes podem retornar a etapas anteriores sem duplicar o trabalho.

### 1. Strategic Diagnosis
Integra Discovery + Research + Strategy.

**Objetivo:** entender o negócio e decidir qual solução digital resolve o problema prioritário.
- Modelo de negócio, oferta, público, contexto e mercado.
- Problemas, necessidades, objeções, concorrentes e oportunidades.
- Evidências, diferenciais reais e restrições.
- Objetivo comercial, conversão, jornada e ação desejada.
- Proposta de valor, mensagem central, escopo inicial e indicadores relevantes.

**Saída:** `STRATEGIC-BRIEF.md`. Separar fatos, observações, hipóteses e perguntas pendentes. Perguntar em blocos curtos; não repetir informações já fornecidas.

**Gate G1:** estratégia, objetivo e escopo inicial compreendidos e aprovados antes de detalhar a experiência.

### 2. Experience & Creative Blueprint
Integra Architecture + UX + Content + Creative Direction + Motion & Interaction.

**Objetivo:** definir a experiência completa antes da implementação, com iteração entre estrutura, conteúdo e direção visual.

Ordem de trabalho recomendada:
1. Sitemap, arquitetura da informação e jornada do usuário.
2. Fluxos, tarefas, navegação, estados e funcionalidades.
3. Copy e conteúdo alinhados à oferta, ao público e ao idioma do mercado.
4. Wireframes e hierarquia de conteúdo.
5. Exploração de referências e conceito visual.
6. Direção de arte: cores, tipografia, grid, imagem, vídeo, composição e linguagem de marca.
7. Design System e componentes necessários.
8. Motion & Interaction: intenção, ritmo, triggers, estados, acessibilidade e comportamento por dispositivo.

As atividades podem se influenciar e voltar umas às outras. Não criar aprovações artificiais para cada microdecisão. Fazer checkpoints quando uma decisão mudar significativamente escopo, conversão, conteúdo ou identidade.

**Saída:** `EXPERIENCE-BLUEPRINT.md`, incluindo arquitetura, UX, copy/estrutura de conteúdo, direção visual, design system e seção de Motion & Interaction. Um Motion Brief separado é opcional quando a complexidade justificar.

**Gate G2:** experiência, conteúdo essencial e direção visual aprovados antes da implementação completa.

### 3. Technical Planning
**Objetivo:** transformar o blueprint em um plano técnico viável e sustentável.
- Avaliar requisitos, integrações, dados, autenticação e fluxos.
- Escolher stack, frameworks, bibliotecas e serviços pela necessidade real.
- Definir arquitetura, componentes, estrutura de pastas e estratégia de assets.
- Considerar performance, SEO técnico, segurança, privacidade, acessibilidade e manutenção.
- Verificar custos, licenças, compatibilidade, hosting, deploy e riscos.
- Planejar ordem de implementação e testes.

A viabilidade deve ser considerada desde G1/G2; esta etapa consolida decisões técnicas com a experiência suficientemente definida. Não escolher tecnologia por moda nem por hábito.

**Saída:** `TECHNICAL-BLUEPRINT.md`.

**Gate G3:** stack, arquitetura, dependências, integrações e riscos compreendidos e aprovados.

### 4. Development & Integration
**Objetivo:** construir a experiência aprovada, com implementação incremental.
- Inspecionar o projeto e seguir padrões existentes.
- Implementar estrutura, componentes, conteúdo, responsividade e estados.
- Implementar motion e interações especificados; controles devem ter função real.
- Integrar serviços, dados, formulários e CTAs com destinos confirmados.
- Testar cada componente e fluxo durante a construção.
- Revisar visualmente em desktop e mobile; corrigir antes de acumular defeitos.
- Registrar divergências, decisões e alterações de escopo.

Não tratar código gerado como concluído sem executar e verificar. Não substituir decisões aprovadas silenciosamente.

**Saída:** website funcional e candidato a release; `PROJECT-STATE.md` atualizado.

**Gate G4:** escopo implementado ou desvios e limitações explicitamente registrados; fluxos principais funcionais antes do QA final.

### 5. Validation, QA & Release
**Objetivo:** verificar o produto real contra os requisitos aprovados.
- Visual: identidade, hierarquia, espaçamento, tipografia, mídia e consistência.
- UX/funcionalidade: navegação, formulários, CTAs, integrações e estados.
- Responsive: dispositivos e larguras relevantes, toque e orientação.
- Motion: coerência, fluidez, reduced-motion, sem bloqueio de conteúdo ou navegação.
- Acessibilidade: teclado, foco, semântica, labels, contraste e textos alternativos.
- Performance: imagens, scripts, fontes, Core Web Vitals quando mensurável.
- Segurança/privacidade: HTTPS, permissões, dados e serviços externos.
- Conteúdo/SEO: precisão, idioma, metadados e indexação técnica.
- Build, console e testes automatizados disponíveis.

Corrigir bloqueadores e registrar limitações reais. Deploy só após aprovação/autorização. Testar fluxos críticos no ambiente publicado quando possível.

**Saída:** QA/release report proporcional à complexidade, evidências e URL publicada.

**Gate G5:** critérios críticos atendidos, limitações aceitas e publicação autorizada.

### 6. Delivery & Evolution
**Objetivo:** entregar o que foi contratado e preservar continuidade.
- Entregar URL, documentação, acessos por canal seguro e instruções de uso.
- Esclarecer escopo, limites de suporte, manutenção e responsabilidades.
- Registrar pendências conhecidas e integrações externas.
- Definir backlog de melhorias, analytics e acompanhamento quando contratados.
- Aprender com resultados e atualizar a biblioteca apenas com conhecimento reutilizável e confirmado.

**Saída:** handover e próximo plano de evolução, quando aplicável.

## Modos de produção

O Orchestrator escolhe a modalidade durante Strategic Diagnosis:

- **Compact:** solução simples, escopo enxuto e poucas integrações. Combinar documentos e checkpoints sem omitir decisões ou QA.
- **Standard:** site ou landing page personalizada, múltiplas seções, motion, interações ou integrações usuais. Usar os quatro artefatos centrais.
- **Advanced:** sistema complexo, múltiplas jornadas, dados, contas, pagamentos, e-commerce, reservas ou integrações críticas. Especificação, segurança, testes e documentação adicionais.

A modalidade determina profundidade documental e de teste, nunca o padrão de qualidade.

## Artefatos e estado

Núcleo recomendado por projeto:
- `STRATEGIC-BRIEF.md`
- `EXPERIENCE-BLUEPRINT.md`
- `TECHNICAL-BLUEPRINT.md`
- `PROJECT-STATE.md`

O estado do projeto deve ser curto e atualizado: fase, modalidade, aprovações, decisões vigentes, pendências, riscos, links para artefatos e próximo passo. Não copiar o histórico inteiro.

Use DRAFT, IN_REVIEW, APPROVED, BLOCKED e SUPERSEDED. Não inferir aprovação.

## Motion & Interaction — sem quotas artificiais

Motion e interações são parte da experiência, da direção criativa e da implementação. Não existe número mínimo/máximo universal de efeitos, animações, bibliotecas ou interações. O projeto pode usar soluções simples ou avançadas conforme a intenção, inclusive ferramentas como CSS, Web Animations API, GSAP/ScrollTrigger, Framer Motion/Motion, Lenis, SVG ou 3D quando justificadas.

O critério é adequação: propósito narrativo/funcional, coerência de marca, fluidez, legibilidade, responsividade, acessibilidade, performance, compatibilidade, manutenção e custo. Não adicionar efeito só para preencher uma quantidade nem evitar uma técnica útil por um limite arbitrário.

Documentar a seleção no Experience Blueprint. Criar um Motion Brief separado quando a experiência for complexa, houver muitas sequências, múltiplos breakpoints ou handoff especializado. Testar efeitos e interações reais; reduced-motion e fallback não podem remover conteúdo ou função.

## Qualidade transversal

Estratégia, UX, direção visual, acessibilidade, performance, segurança, responsividade, honestidade do conteúdo e manutenção acompanham todas as etapas. QA final não é o primeiro momento de verificar qualidade.

## Pesquisa e biblioteca de referências

Pesquisar por dois eixos: nicho e padrão/experiência. A biblioteca é transversal, mas não deve ser lida integralmente. Buscar candidatas por necessidade; inspecionar somente as relevantes; registrar fonte, status da verificação, observações do usuário e padrões transferíveis separadamente. Adaptar princípios sem copiar ativos ou propriedade intelectual.

## Eficiência operacional

- Consultar o Knowledge Index e carregar contexto progressivamente.
- Reutilizar decisões e evidências atuais; não repetir pesquisas sem motivo.
- Perguntar apenas o que altera estratégia, escopo, risco ou resultado.
- Consolidar dúvidas em blocos curtos.
- Produzir respostas, planos e handoffs concisos, sem perder informação decisiva.
- Evitar documentação sem uso; combinar arquivos em projetos Compact.
- Um único Orchestrator executa e verifica; delegação é exceção, não padrão.
- Medir tokens, tempo, retrabalho e defeitos para validar ganhos de eficiência.

## Client & Business Operations

É um workflow conectado, mas separado da produção web: prospecção, qualificação, abordagem, reunião, proposta, fechamento, onboarding, gestão do cliente, entrega comercial e pós-venda. Só transferir para Web Production as informações aprovadas e necessárias.
