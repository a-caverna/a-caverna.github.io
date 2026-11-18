# Caverna 2.0 — Foundation

Fundação inicial para a reformulação modular da Caverna, preparada para web e futura distribuição via Capacitor em Android/iOS.

## Status
Este repositório é um scaffold de arquitetura e protótipo visual. Não é a migração completa da aplicação antiga e ainda não está conectado ao Supabase.

## Requisitos
- Node.js 20+
- pnpm 9+

## Executar
```bash
pnpm install
pnpm dev
```

## Build
```bash
pnpm build
```

## Configuração
Copie `.env.example` para `.env` e configure as variáveis públicas do Supabase quando o adapter de autenticação for implementado. Não coloque `service_role`, chaves privadas VAPID ou segredos de IA no frontend.

## Documentação
- `docs/architecture/OVERVIEW.md`
- `docs/migration/LEGACY_AUDIT.md`
- `docs/migration/PLAN.md`
- `docs/database/DATA_MODEL_PROPOSAL.md`

## Importante
Não aplique migrações no projeto Supabase de produção com base nos modelos propostos. Primeiro exporte e revise schema, RLS, Edge Functions e Cron jobs existentes.

## Capacitor
A configuração inicial está em `capacitor.config.ts`. Depois de instalar dependências e gerar o build web, as plataformas nativas poderão ser adicionadas:
```bash
pnpm add @capacitor/android @capacitor/ios
pnpm exec cap add android
pnpm exec cap add ios
pnpm build
pnpm cap:sync
```
A compilação Android/iOS exige os toolchains nativos correspondentes (Android Studio/SDK ou Xcode/macOS).
