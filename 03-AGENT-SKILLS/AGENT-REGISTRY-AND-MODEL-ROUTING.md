# Agent Registry & Model Routing

## Como interpretar
Especialistas são funções operacionais, não nomes fixos de produtos. Um mesmo modelo pode executar várias funções. Escolher executor conforme tarefa, contexto disponível, limite gratuito e resultado testado.

## Cadastro de especialistas

### Coordenação
- **Master Coordinator / Orchestrator:** entende tarefa, escolhe workflow, distribui funções, mantém decisões e consolida.
- **Project Manager:** organiza escopo, dependências, status, feedback, riscos e entrega.

### Client & Business Operations
- **Business Strategist:** nicho, mercado, oferta, posicionamento e adequação da solução.
- **Lead Researcher:** pesquisa e qualificação de negócios com fonte e evidências.
- **Prospecting Specialist:** primeira abordagem, mensagens personalizadas, cadência e follow-up.
- **Commercial Copywriter:** mensagens, propostas, objeções e negociação.
- **Client Onboarding / Briefing Specialist:** coleta de conteúdo e alinhamento de escopo.
- **Customer Success:** entrega, aceite, suporte, pós-venda e indicação.

### Web Production
- **Web Strategist:** público, proposta de valor, concorrência e conversão.
- **UX Architect / Information Architect:** sitemap, seções, navegação, jornada e wireframe.
- **Website Copywriter / UX Writer:** copy por seção, CTAs e microcopy.
- **Creative Director / Visual Designer:** conceito, tipografia, cores, imagens e componentes.
- **Motion Designer:** intenção, roteiro, timing, gatilhos, easing, acessibilidade e viabilidade.
- **Technical Architect:** stack, arquitetura, integrações, custo e manutenção.
- **Front-end Engineer:** implementação, responsividade e integração.
- **QA / Web Auditor:** testes funcionais, visuais, responsive, SEO, acessibilidade e performance.

## Responsável principal por atividade
- Briefing: Briefing Specialist.
- Copy do site: Website Copywriter.
- Copy comercial: Commercial Copywriter.
- Estrutura: UX Architect.
- Animações: Motion Designer, com validação técnica.
- Código/HTML final: Front-end Engineer.
- Auditoria: QA Specialist.
- Coordenação: Master Coordinator.

## Ferramentas informadas pelo usuário (12/11/2026)
- ChatGPT Free: ambiente principal atual de contexto e coordenação.
- Gemini Free: apoio de pesquisa, análise e referências.
- GitHub Copilot Free: execução de código no VS Code conforme recursos/limites atuais.
- Claude Free via navegador: alternativa de escrita e revisão quando disponível.

Não assumir que planos, quotas, nomes de modelos ou funções permanecerão iguais. Verificar no momento do uso. O fluxo básico não pode depender de assinatura paga ou API paga.

## Roteamento inicial — hipótese, não ranking
| Tarefa | Executor inicial sugerido | Alternativa/revisão |
|---|---|---|
| Coordenação/continuidade | ChatGPT | Gemini |
| Pesquisa/leitura comparativa | ChatGPT ou Gemini | outro modelo disponível |
| Briefing/estratégia | ChatGPT | Gemini ou Claude |
| Copy do website | ChatGPT ou Claude | Gemini |
| UX/arquitetura | ChatGPT | Gemini |
| Direção visual com imagens | Gemini ou ChatGPT | revisão humana |
| Direção de motion | ChatGPT/Gemini para plano | Claude ou especialista humano |
| Implementação em arquivos | Copilot Free no VS Code | revisão cruzada e teste real |
| Auditoria independente | Gemini ou ChatGPT | outro modelo disponível |

Essas são escolhas práticas iniciais, não afirmações de superioridade absoluta.

## Como avaliar
Teste a mesma tarefa com o mesmo pacote de contexto e critérios. Pontue de 1 a 5:
- Aderência a requisitos (25%).
- Precisão/fundamentação (20%).
- Qualidade profissional (20%).
- Completude/estrutura (15%).
- Uso correto do contexto/restrições (10%).
- Facilidade de revisão/economia de quota (10%).

Adaptar critérios: copy (voz, clareza, especificidade, claims); código (testes, legibilidade, acessibilidade, segurança, manutenção); motion (intenção, viabilidade, performance, reduced-motion).

## Fallback
Ao atingir quota, usar alternativa ou reduzir escopo. Não pedir assinatura como requisito. Se o agente não acessar GitHub privado, fornecer pacote de contexto selecionado. Não enviar dados confidenciais a terceiros sem autorização. Distinguir modelo, aplicativo, agente, extensão, skill e runtime.
