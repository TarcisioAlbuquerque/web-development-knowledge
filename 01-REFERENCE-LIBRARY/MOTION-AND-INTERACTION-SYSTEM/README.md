# Sistema universal de Motion & Interaction

**Status:** sistema de referência e implementação para projetos web.  
**Escopo:** landing pages, sites institucionais, portfólios, sites de profissionais, marcas, serviços, catálogos e experiências digitais.  
**Referência de origem:** auditoria fornecida pelo usuário do site Ana Marques Nutricionista, incluindo relatório baseado em gravação de navegação.  
**Princípio:** motion e interação fazem parte do produto digital; não são acabamento opcional de última hora.

## Objetivo

Este sistema transforma referências e efeitos em padrões pesquisáveis, especificáveis, implementáveis e testáveis. Consulte-o quando o projeto incluir motion ou interações que exijam especificação e QA. A seleção deve ser adaptada à marca, ao conteúdo, à jornada, ao dispositivo e à conversão.

O catálogo contém:
- padrões de motion observados/relatados na referência Ana Marques;
- técnicas adicionais disponíveis para projetos futuros;
- componentes interativos reutilizáveis;
- orientações de implementação e QA;
- um starter kit sem dependência obrigatória de framework.

**Importante:** registrar um padrão no catálogo não significa que ele foi observado no site de origem nem que deve ser aplicado indiscriminadamente. Consulte a classificação de evidência na ficha de cada referência.

## Uso por projeto
1. Entenda objetivo, público, jornada, conteúdo, direção visual, dispositivos e restrições.
2. Consulte catálogo e componentes apenas para necessidades relevantes.
3. Crie um Motion & Interaction Brief proporcional ao escopo; projetos simples podem usar uma especificação curta.
4. Selecione comportamentos por propósito: orientar, estabelecer hierarquia, narrar, dar feedback, facilitar exploração, explicar ou apoiar conversão.
5. Defina trigger, estados, timing, desktop/mobile, teclado/toque, reduced-motion, fallback e critério de aceite conforme aplicável.
6. Implemente apenas o que foi selecionado e aprovado.
7. Teste os fluxos e dispositivos relevantes; registre evidências e limitações.

**Não existe mínimo universal de efeitos ou interações.** Não force padrões para atingir um número. Uma página pode precisar de várias interações ou de nenhuma além da navegação e do feedback básico. Não entregue uma experiência estática por omissão quando motion/interação fizerem parte do requisito aprovado.

## Mapa dos documentos

| Documento | Conteúdo |
|---|---|
| `PATTERN-CATALOG.md` | Catálogo de animações e técnicas de motion |
| `INTERACTIVE-COMPONENTS.md` | Catálogo de componentes e comportamentos interativos |
| `IMPLEMENTATION-PLAYBOOK.md` | Escolha de tecnologia, arquitetura, receitas e integração |
| `CASE-STUDY-ANA-MARQUES.md` | Padrões relacionados à auditoria Ana Marques e proveniência |
| `MOTION-BRIEF-TEMPLATE.md` | Brief adaptável ao escopo do projeto |
| `PROJECT-BOOTSTRAP-INSTRUCTIONS.md` | Instruções para conectar o sistema a cada repositório de cliente |

Starter kit inicial:
- `06-DEVELOPMENT-STANDARDS/MOTION-STARTER-KIT/README.md`
- `06-DEVELOPMENT-STANDARDS/MOTION-STARTER-KIT/motion.css`
- `06-DEVELOPMENT-STANDARDS/MOTION-STARTER-KIT/motion.js`
- `06-DEVELOPMENT-STANDARDS/MOTION-STARTER-KIT/quiz.js`

## Taxonomia de evidência

Todo padrão usado como referência deve ser classificado:
- **OBSERVADO:** evidência visual direta disponível (gravação/captura acessível).
- **INSPECIONADO NO CÓDIGO:** implementação identificada no código-fonte.
- **RELATADO POR FONTE:** descrito em auditoria ou material de terceiro; ainda não validado independentemente.
- **INFERIDO:** hipótese técnica baseada no comportamento.
- **RECOMENDADO:** padrão proposto para projetos futuros, não atribuído à referência.
- **NÃO VERIFICADO:** ainda sem evidência suficiente.

Não inferir GSAP, Framer Motion, React, IntersectionObserver ou qualquer biblioteca apenas pela aparência do efeito.

## Critérios que nunca podem ser sacrificados

- conteúdo utilizável sem depender da animação;
- respeito a `prefers-reduced-motion`;
- navegação por teclado e foco visível;
- controles claros para mídia/marquee contínuo;
- sem scroll hijacking ou pinning que aprisione o usuário;
- sem autoplay com áudio;
- mobile e toque tratados como primeira classe;
- movimento fora do caminho crítico de renderização sempre que possível;
- dependências justificadas e limitadas;
- teste real antes de declarar concluído.

## Fluxo de uso

Descoberta → estratégia → UX → direção visual → **Motion Brief** → arquitetura técnica → implementação → **Motion QA** → release.

O Motion Designer especifica. O Front-end Engineer implementa. O QA Specialist verifica. O coordenador não encerra uma landing page com motion apenas planejado.
