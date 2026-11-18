# Caverna 2.0 — Arquitetura proposta

## Decisão
- Frontend: React + TypeScript + Vite.
- Aplicativos móveis: Capacitor envolvendo a aplicação web compilada.
- Dados e autenticação: Supabase.
- Backend inicial: Supabase Edge Functions, com contratos REST versionados em `/api/v1`.
- Banco: PostgreSQL relacional, com migração incremental a partir do legado.
- Design: Neon Noir, tokens compartilhados.

## Princípios
1. Módulos independentes por domínio.
2. Regras de negócio fora dos componentes visuais.
3. Acesso a dados por serviços/adapters, não espalhado pelos componentes.
4. O backend é a autoridade para fechamento diário, XP e permissões.
5. RLS em todos os dados pessoais.
6. Chaves privilegiadas nunca chegam ao cliente.
7. Operações offline devem ter fila, idempotência e resolução de conflito.

## Monorepo
- `apps/web`: aplicação React responsiva.
- `packages/shared-types`: contratos e tipos compartilhados.
- `packages/domain`: regras puras de domínio.
- `packages/api-client`: cliente HTTP versionado.
- `packages/design-system`: tokens visuais.
- `backend/supabase`: funções e migrações.

## Mobile
Capacitor será adicionado depois que a aplicação web tiver build estável. Android/iOS devem compartilhar a mesma UI e consumir os mesmos contratos. Recursos nativos serão encapsulados em adapters de plataforma.

## API
A API deve expor contratos documentados em OpenAPI. Inicialmente, Edge Functions podem implementar endpoints; um servidor dedicado só será considerado quando houver necessidade comprovada.
