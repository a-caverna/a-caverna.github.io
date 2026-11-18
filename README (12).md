# Caverna — pacote completo (legado + Caverna 2.0)

Este pacote reúne a versão antiga da Caverna e a fundação inicial da Caverna 2.0, sem sobrescrever nem misturar os arquivos originais.

## Estrutura

- `legacy/` — arquivos originais da Caverna antiga, preservados: `index.html`, `README.md`, `LEIA-ME.txt`, `manifest.webmanifest` e `service-worker.js`.
- `caverna-2.0/` — fundação inicial modular em React + TypeScript + Vite, com pacotes compartilhados, documentação e configuração inicial do Capacitor.

## Como enviar ao GitHub

1. Extraia este ZIP.
2. Abra o repositório GitHub de destino.
3. Envie o conteúdo da pasta `caverna-completa-github` (as pastas `legacy` e `caverna-2.0`, além deste README) usando **Add file → Upload files**.
4. Faça o commit.

## Importante sobre publicação

Este pacote é um arquivo de preservação e transição. A versão antiga está em `legacy/` e a fundação nova está em `caverna-2.0/`. Portanto, o `index.html` antigo não fica na raiz do repositório e o GitHub Pages não passa a publicar automaticamente nenhuma das duas versões a partir da raiz.

A Caverna 2.0 ainda é apenas a fundação técnica/protótipo visual: não substitui todas as funções da antiga, não está conectada ao Supabase e não contém migração de banco. Não aplique migrações no projeto Supabase de produção antes de revisar o schema atual, backups e plano de rollback.

## Integridade

Os arquivos dentro de `legacy/` foram extraídos do ZIP original fornecido para esta migração, sem edição de conteúdo.
