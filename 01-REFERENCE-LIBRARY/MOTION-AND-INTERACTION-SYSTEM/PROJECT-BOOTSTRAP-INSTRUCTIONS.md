# Bootstrap — Motion & Interaction em projetos de clientes

Use somente ao iniciar um novo repositório de cliente. O sistema central é a fonte de conhecimento; o projeto do cliente recebe apenas o contexto necessário.

## 1. Disponibilizar o conhecimento
1. Identifique os padrões de motion/interação relevantes ao briefing.
2. Se o agente não tiver acesso ao repositório central, forneça apenas os documentos selecionados: trecho do catálogo, componente e receita aplicáveis.
3. Não copie a biblioteca inteira nem o Starter Kit completo por padrão.
4. Integre o planejamento na seção Motion & Interaction do `EXPERIENCE-BLUEPRINT.md`.
5. Crie `docs/MOTION-BRIEF.md` separado somente quando a complexidade justificar: sequências coordenadas, várias páginas/breakpoints, motion avançado ou handoff dedicado.

## 2. Instrução compacta para o projeto cliente

Adapte este bloco ao `AGENTS.md` do projeto. Os arquivos de contexto específicos de Claude/Gemini/Copilot devem apontar para estas regras sem duplicar o conteúdo.

```md
## Motion & Interaction
- Planeje motion e interações como parte da experiência e da direção criativa.
- Consulte seletivamente o Motion & Interaction System compartilhado, por necessidade e objetivo.
- Não há quotas de efeitos. Escolha soluções coerentes com marca, conteúdo, jornada e conversão.
- Considere CSS, APIs nativas, GSAP/ScrollTrigger, Motion/Framer, Lenis, SVG, WebGL/3D ou outras ferramentas quando fizerem sentido e forem compatíveis.
- Registre intenção, triggers, estados, comportamento mobile e reduced-motion no Experience Blueprint ou Motion Brief.
- Implemente os comportamentos selecionados de verdade; não deixe placeholders nem controles sem ação.
- Teste no navegador: desktop/mobile, teclado/toque, foco, reduced-motion, performance e fallback.
- Nunca sacrifique clareza, acessibilidade, responsividade, segurança ou desempenho por efeitos visuais.
```

## 3. Execução pelo Orchestrator
- Inspecione o briefing e a arquitetura antes de selecionar efeitos.
- Busque referências por padrão e nicho, mas abra somente candidatas relevantes.
- Selecione a ferramenta mais simples que atenda ao resultado; escale quando o projeto justificar.
- Não assuma que uma referência usa determinada biblioteca pela aparência.
- Não presuma sincronização de memória entre ChatGPT, Claude, Gemini e Copilot.
- Não delegue por padrão; mantenha o Orchestrator como responsável pelo handoff.

## 4. Definition of Done
- O blueprint explica por que cada comportamento foi selecionado.
- Os efeitos e componentes previstos estão implementados e funcionais.
- Os controles têm estados, feedback e semântica adequados.
- Reduced-motion e fallback preservam conteúdo e função.
- Mobile, teclado e toque foram verificados quando aplicáveis.
- QA registra testes reais, limitações e pendências.
- O resultado é coerente com a identidade e melhora a experiência; não depende de cumprir uma quantidade de efeitos.

## 5. Handoff
Registrar brevemente: padrões selecionados/implementados, arquivos afetados, tecnologia usada (quando confirmada), testes executados, limitações e próximo passo. O Motion Brief é transportado entre sessões somente quando existir como documento separado.
