# CAVERNA v0.2 — Login e sincronização

## Configuração do Supabase
1. Crie um projeto em https://supabase.com.
2. Copie o Project URL e a chave anon/public em Project Settings → API (ou Connect).
3. No `index.html`, substitua `COLE_AQUI_A_URL_DO_PROJETO` e `COLE_AQUI_A_CHAVE_ANON_PUBLICA`.
4. Nunca coloque chave `service_role`/secret no site público.
5. No SQL Editor do Supabase, execute `supabase-setup.sql` para criar a tabela e as políticas RLS.
6. Em Authentication → URL Configuration, configure o endereço local e o GitHub Pages como Site URL/Redirect URLs.
7. Teste cadastro, confirmação de e-mail, login, salvar, sair e entrar novamente. Teste também com uma segunda conta.

## Testar localmente
Use um servidor local (por exemplo, Live Server no VS Code). Abrir diretamente por `file://` pode impedir o fluxo de autenticação.

## Publicar no GitHub Pages
1. Crie um repositório.
2. Envie `index.html` para a raiz; mantenha `supabase-setup.sql` e este README para referência.
3. Settings → Pages: publicar pela branch `main`, pasta `/root`.
4. Adicione a URL publicada nas Redirect URLs do Supabase e teste de novo.

## Dados da v0.1
Ao primeiro login sem dados remotos, o aplicativo tenta importar os registros que já estão no `localStorage` deste navegador. Exporte um backup JSON antes de migrar.

## Limitações
- A sincronização usa uma linha JSONB por usuário com políticas RLS.
- O salvamento remoto ocorre com pequeno atraso após uma alteração; aguarde antes de fechar a página.
- Notificações push confiáveis no iPhone não estão incluídas.
