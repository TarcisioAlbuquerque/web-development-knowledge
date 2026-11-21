# Starter Template Decision Guide

## Objetivo

Reutilizar estrutura técnica/primitives sem repetir aparência, conteúdo ou arquitetura inadequada. Starter é ponto de partida, não template visual.

| Tipo | Base possível | Evitar quando |
|---|---|---|
| Landing page pequena | HTML/CSS/JS ou Astro estático | Build/framework sem benefício |
| Editorial/multipágina | Astro ou CMS | Cliente não precisa gerenciar conteúdo |
| Estado complexo | React/Next ou equivalente | Página estática simples |
| E-commerce | Plataforma estabelecida | Checkout próprio sem requisito/segurança |
| 3D | Web + Three.js sob demanda | 3D só decorativo |
| Motion complexo | Stack existente + GSAP opcional | CSS/API nativa resolve |

## Starter mínimo

Estrutura clara; tokens alinhados à direção; HTML semântico; navegação/CTA real; somente componentes necessários; setup/scripts documentados; SEO básico; acessibilidade/; QA e deploy documentados.

## Não carregar por padrão

Bibliotecas de motion, sliders, UI frameworks, 3D, analytics, trackers, forms de terceiros, CMS ou integrações sem necessidade.

## Configuração

Inspecionar workspace/convenções; confirmar tecnologia/runtime/hosting; reaproveitar componentes aprovados sem copiar identidade; justificar dependências; criar Motion Brief e QA; confirmar conteúdo/destinos antes de produção.

## Handoff

Registrar stack, versão, comandos, dependências, ambiente, hosting, variáveis necessárias sem valores secretos, build/test e limitações.
