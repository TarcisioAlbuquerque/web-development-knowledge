# Three.js — capacidade 3D opcional

## Princípio

Three.js é capacidade avançada, não requisito. Usar somente quando visualização espacial, produto, narrativa ou interação 3D melhorar materialmente a experiência.

## Usos adequados

- Configurador/visualizador de produto.
- Cena que comunica atributo difícil de mostrar em 2D.
- Narrativa de marca/portfólio quando a cena for central ao conceito.

## Evitar quando

É decoração sem função; página precisa captação simples/rápida; ativo 3D não existe; custo de produção/manutenção é alto; touch/reduced-motion ficam prejudicados; download/GPU não compensam valor.

## Arquitetura

Carregar dinamicamente após conteúdo crítico/por demanda; otimizar modelos/texturas; controlar pixel ratio, resize e orientação; limitar polígonos, materiais, luzes e pós-processamento; suspender render loop quando invisível/ocioso; não bloquear LCP/CTA.

## Interação e fallback

Definir câmera, controles, limites, foco e affordances. Suportar touch/teclado quando relevante; não depender de hover; oferecer reset e instruções. Em reduced-motion, disponibilizar alternativa estática.

Fornecer imagem/vídeo ou composição 2D que preserve informação e CTA. Não exigir WebGL como única entrada.

## Memória e cleanup

Three.js não libera automaticamente todos os recursos GPU. Ao desmontar cena/componente, liberar geometrias, materiais, texturas, render targets, controles, renderer e listeners conforme ownership. Evitar dispose duplicado de recursos compartilhados.

Referência oficial: https://threejs.org/manual/pages/cleanup.html

## QA

Testar dispositivos móveis modestos, GPU limitada, orientação, tab visibility, teclado/toque, reduced-motion, falha WebGL e rede lenta. Medir peso e inicialização.
