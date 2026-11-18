# Supabase backend

O projeto atual usa Supabase Auth, PostgreSQL, Edge Functions e Web Push. Não aplique migrações novas até receber e revisar o schema real do projeto.

## Funções identificadas no frontend legado
- `caverna-push-reminders`
- `caverna-mentor`
- `caverna_admins`

## Tabelas referenciadas no frontend legado
- `caverna_data`
- `caverna_push_subscriptions`
- `caverna_admins`
- `mentor_messages`

As referências acima foram observadas no HTML enviado. A existência, estrutura, políticas RLS e versão implantada precisam ser confirmadas no Supabase.
