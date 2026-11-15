# Form & Integration Playbook

## Fluxo

Definir resultado: contato, orçamento, reserva, consulta, cadastro ou pagamento. Preferir canal direto se formulário não beneficiar visitante/operação.

## UX

Solicitar apenas dados necessários; agrupar campos por tarefa; usar labels visíveis; escolher type/autocomplete/inputmode adequados; informar campos opcionais e finalidade; evitar multi-step sem reduzir complexidade; preservar valores em erros; não pedir dados sensíveis sem necessidade/revisão.

## Estados e validação

Definir idle, submitting, success, validation error, server error e disabled. Associar mensagens aos campos; foco/resumo de erro quando apropriado; não depender só de cor. Validação do browser melhora UX, mas backend deve validar novamente.

## Integração

Documentar endpoint/serviço aprovado, método/formato, campos, auth, limites/rate limiting, spam, timeout/retry, duplicados, logs sem PII, confirmação e responsável. Não inventar endpoint. Nunca expor tokens/chaves/credenciais no frontend.

## Segurança

Usar proteções proporcionais: validação server-side, honeypot, rate limiting, CAPTCHA/alternativa acessível, verificação de origem e filtros. Rever XSS/CSRF quando aplicável. Não confiar em conteúdo enviado pelo cliente.

## WhatsApp e terceiros

Número, mensagem e fluxo aprovados; URL encoded; destino externo claro; fallback se app não existir; simulações identificadas como ilustrativas.

## Privacidade e testes

Adaptar aviso/consentimento, política, cookies e retenção à jurisdição/finalidade. Testar sucesso, erro, invalidez, duplicidade, timeout, teclado, mobile e leitor de tela. Não disparar mensagens/transações reais sem autorização.
