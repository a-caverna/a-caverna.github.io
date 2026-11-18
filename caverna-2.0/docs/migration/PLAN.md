# Plano de migração segura

## Etapa A — inventário remoto (bloqueador antes de alterar banco)
Solicitar/exportar:
- schema SQL de tabelas, views, enums, triggers e índices;
- políticas RLS;
- funções RPC;
- Edge Functions implantadas e respectivos secrets (somente nomes, nunca valores);
- Cron jobs e schedules;
- amostra anonimizada da estrutura de `caverna_data.payload`;
- versão atual publicada do frontend e backup JSON de dados do usuário.

## Etapa B — fundação frontend
- iniciar o monorepo;
- criar rotas e layout modular;
- extrair tokens e componentes;
- implementar autenticação via adapter;
- preservar exportação/importação do legado.

## Etapa C — compatibilidade de dados
- criar adapter temporário para ler/escrever `caverna_data.payload`;
- validar equivalência de leitura com dados de teste;
- não remover o legado;
- registrar telemetria de falhas de sincronização.

## Etapa D — normalização incremental
- criar tabelas por domínio após revisão do schema;
- backfill idempotente a partir do payload;
- comparar contagens e hashes por usuário;
- executar em ambiente de staging;
- manter rollback documentado;
- só alterar leitura/escrita após validação.

## Etapa E — mobile e API
- estabilizar build web;
- integrar Capacitor e plugins nativos;
- formalizar OpenAPI;
- validar push nativo e offline;
- distribuir builds de teste antes de publicar.

## Critério de segurança
Nenhuma migração destrutiva ou alteração de produção será executada sem schema atual, backup verificado e plano de rollback.
