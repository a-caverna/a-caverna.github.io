# Caverna — Neon Noir (Dashboard atualizado)

Esta publicação mantém a aplicação legada na raiz para o GitHub Pages continuar abrindo `index.html`. A camada visual Neon Noir foi aplicada ao dashboard sem reescrever os scripts, IDs, autenticação ou integração Supabase existentes.

## Publicação pelo GitHub

Envie **o conteúdo desta pasta** para a raiz da branch publicada (`main` / `/ (root)`). O arquivo `index.html` precisa ficar diretamente na raiz.

## Pastas
- `index.html`: aplicação web publicada, com dashboard visual atualizado.
- `manifest.webmanifest` e `service-worker.js`: suporte PWA e notificações da aplicação antiga.
- `caverna-2.0/`: fundação técnica modular para a evolução futura.

## Importante
- Não aplique migrações SQL desta fundação ao Supabase de produção.
- Os módulos e operações existentes continuam usando a estrutura legada atual.
- A fundação `caverna-2.0/` ainda não está conectada ao banco e não substitui as funcionalidades legadas.
- Faça backup/exportação dos dados antes de qualquer mudança futura no banco.
