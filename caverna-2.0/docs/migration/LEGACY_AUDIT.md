# Auditoria inicial do pacote legado

Fonte examinada: `a-caverna.github.io-main.zip`.

## Conteúdo do ZIP
- `index.html` (~625 KB)
- `README.md`
- `LEIA-ME.txt`
- `manifest.webmanifest`
- `service-worker.js`

Não foram encontrados no ZIP: arquivo SQL de subscriptions mencionado no LEIA-ME, ícones referenciados pelo service worker, package.json ou estrutura de módulos separada.

## Funcionalidades identificadas no HTML
- Hábitos e acompanhamento diário
- Água
- Evolução física e medidas
- Treinos, fichas, sessões, séries e cargas
- Biblioteca e sessões de leitura
- Gratidão
- Registro de falhas
- Mentor
- Finanças, dívidas, metas, cartões e projetos
- Configurações, exportação/importação de dados e administração

## Integrações referenciadas no frontend
Tabelas Supabase chamadas pelo HTML:
- `caverna_data`
- `caverna_push_subscriptions`
- `caverna_admins`
- `mentor_messages`

Edge Functions invocadas pelo HTML:
- `caverna-push-reminders`
- `caverna-mentor`
- `caverna_admins`

O HTML inicializa o cliente Supabase no navegador usando URL do projeto e chave publicável/anon. Nenhuma chave service_role deve ser colocada no cliente.

## Persistência observada
- Chave local: `cavernaData` no localStorage.
- Dados remotos: `caverna_data.payload` por usuário.
- `save()` grava localmente e agenda upsert do payload remoto com debounce aproximado de 500 ms.
- No login, o frontend carrega `payload`; se não houver registro remoto, tenta inicializar a partir do localStorage.

## Riscos de migração
1. O payload agregado pode gerar sobrescrita entre dispositivos se houver edições concorrentes.
2. Não há evidência no pacote de uma fila offline transacional ou resolução de conflitos.
3. Regras de negócio e UI estão acopladas no HTML e em handlers inline.
4. O README e o LEIA-ME divergem quanto ao estágio do push; confirmar cron, função e segredos no Supabase.
5. O service worker referencia `icon-192.png`, ausente no ZIP.
6. O LEIA-ME menciona `SQL_subscriptions.sql`, ausente no ZIP.

## Não verificado
O pacote não permite confirmar schema completo, RLS, triggers, cron jobs, código implantado das Edge Functions, backups ou estado atual dos dados em produção. É necessário exportar essas informações do Supabase antes de desenhar migrações.
