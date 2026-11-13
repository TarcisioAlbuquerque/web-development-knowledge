> **Atualização:** este documento é um registro introdutório. O sistema canônico e operacional foi ampliado em [Motion & Interaction System](MOTION-AND-INTERACTION-SYSTEM/README.md). Para projetos novos, consulte o catálogo de padrões, componentes, playbook e starter kit listados ali.

# Técnicas de interação e referências visuais

**Status:** registro inicial; aprofundamento e exemplos práticos pendentes.  
**Origem:** itens enviados pelo usuário para integrar a biblioteca reutilizável de referências web.

## Animações e interação vinculadas ao scroll

### Scroll-linked animations
Animações cujo progresso acompanha diretamente a posição do scroll. Investigar aplicações como revelação progressiva de texto, transformação de imagens, desenho de linhas e mudanças de escala, posição ou opacidade. Diferenciar de animações apenas disparadas quando um elemento entra na viewport.

### GSAP ScrollTrigger
Ferramenta do GSAP para disparar, sincronizar, fixar (pin) e controlar timelines conforme posições/progresso do scroll. É uma ferramenta de orquestração, não uma técnica visual isolada. Avaliar custo, necessidade real e alternativas nativas antes de adicionar dependências.

### Parallax
Movimento em velocidades ou direções diferentes entre camadas durante a rolagem, criando percepção de profundidade. Usar com moderação e considerar desempenho, dispositivos móveis e `prefers-reduced-motion`.

### Sticky
Uso de posicionamento persistente durante parte da rolagem, normalmente com CSS `position: sticky`, para manter um elemento visível enquanto o conteúdo adjacente avança. Explorar narrativas por etapas, imagens fixas e blocos de conteúdo sequenciais.

### Horizontal scroll
Seção cujo conteúdo se desloca horizontalmente, muitas vezes vinculada ao scroll vertical da página. Possíveis usos: portfólios, galerias, painéis de serviços e narrativas visuais. Verificar acessibilidade por teclado/toque, comportamento mobile e clareza dos indicadores de continuidade.

## Direção visual

### Glassmorphism
Linguagem visual baseada em superfícies translúcidas, desfoque do fundo, transparência, bordas sutis e camadas sobrepostas. Tratar como recurso pontual, não como padrão obrigatório. Garantir contraste, legibilidade, fallback sem `backdrop-filter` e evitar excesso de cartões com aparência genérica de SaaS.

## Recursos citados — identificação pendente

Os nomes abaixo foram enviados pelo usuário como referências a guardar. Ainda não há URL nem contexto suficiente para afirmar com segurança o que cada item representa. Manter os nomes exatamente como recebidos até identificação:

- **Details Vault** — URL/descrição pendente.
- **Microkit** — URL/descrição pendente.
- **Bencho** — grafia e URL/descrição pendentes.

Quando os links ou capturas forem fornecidos, identificar a natureza de cada recurso e criar fichas específicas, sem presumir que sejam sites, bibliotecas, ferramentas ou componentes.

## Critérios de uso em projetos

- Consultar estas referências transversalmente, independentemente do nicho do cliente.
- Escolher técnicas conforme objetivo narrativo, conteúdo e identidade; não aplicar todas por padrão.
- Priorizar desempenho, acessibilidade, responsividade e conteúdo disponível sem depender da animação.
- Respeitar `prefers-reduced-motion`, oferecer alternativas funcionais e evitar bloquear a navegação com intros longas.
- Registrar exemplos concretos, evidências observadas, limitações e possibilidades de adaptação após inspeção prática.
