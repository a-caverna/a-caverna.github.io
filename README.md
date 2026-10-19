# 🕯️ CAVERNA — Organizador de Hábitos e Rotina

O **CAVERNA** é uma aplicação web para organização de hábitos e compromissos pessoais. Seu objetivo é ajudar o usuário a construir uma rotina consistente, acompanhar suas atividades diárias e receber lembretes nos horários programados.

🌐 **Acesse:** https://acaverna.github.io

---

## 📋 Funcionalidades

### 1. Cadastro e organização de hábitos

O CAVERNA permite organizar hábitos pessoais por categoria, frequência e horário.

Cada hábito pode conter:

- **Nome:** identificação da atividade.
- **Categoria:** agrupamento do hábito, como Casa, Saúde, Leitura ou Espiritualidade.
- **Frequência:** diária ou semanal.
- **Dias da semana:** seleção dos dias em que o hábito deve aparecer, quando a frequência é semanal.
- **Horário:** horário programado para o lembrete.
- **Meta ou objetivo:** descrição complementar, como "10 páginas".

Exemplos de hábitos:

| Hábito | Categoria | Frequência |
|---|---|---|
| Arrumar a cama | Casa | Diário |
| Higiene pessoal | Rotina | Diário |
| Treinar | Saúde | Semanal |
| Ler 10 páginas | Leitura | Diário |
| Orar | Espiritualidade | Diário |
| Caderno de gratidão | Espiritualidade | Diário |

### 2. Hábitos diários e semanais

O sistema diferencia hábitos diários e semanais.

- **Diários:** aparecem todos os dias, desde que estejam ativos.
- **Semanais:** aparecem somente nos dias da semana selecionados.

A seleção dos dias utiliza a seguinte referência:

| Dia | Valor |
|---|---:|
| Domingo | 0 |
| Segunda-feira | 1 |
| Terça-feira | 2 |
| Quarta-feira | 3 |
| Quinta-feira | 4 |
| Sexta-feira | 5 |
| Sábado | 6 |

### 3. Acompanhamento diário

Na tela de hábitos do dia, o usuário pode:

- Visualizar os hábitos programados para hoje.
- Marcar um hábito como concluído.
- Desmarcar um hábito, caso necessário.
- Acompanhar a quantidade de hábitos concluídos.
- Visualizar o total de hábitos do dia.
- Acompanhar o percentual de conclusão da rotina.

O progresso é calculado com base nos hábitos programados para aquele dia.

### 4. Salvamento dos dados

O CAVERNA utiliza o armazenamento local do navegador (`localStorage`) para manter os dados disponíveis no dispositivo.

Quando há um usuário autenticado, o aplicativo também envia os dados para o Supabase, permitindo que as informações sejam armazenadas na conta.

O salvamento dos dados é realizado automaticamente após alterações, com um pequeno intervalo para agrupar atualizações.

### 5. Notificações push

O CAVERNA possui integração com notificações push da web.

O usuário pode cadastrar seu dispositivo para receber notificações de hábitos programados.

Os lembretes são enviados pela infraestrutura do Supabase, sem depender de o site estar aberto no navegador.

**Dispositivos testados:**
- PC com Windows e navegador Edge.
- iPhone com suporte a notificações web.

O funcionamento das notificações depende da permissão concedida pelo usuário e do cadastro do dispositivo.

### 6. Lembretes automáticos pelo Supabase

O sistema utiliza uma Edge Function chamada `caverna-push-reminders`, responsável por:

1. Consultar os hábitos armazenados.
2. Verificar os hábitos ativos.
3. Conferir a frequência e os dias selecionados.
4. Comparar o horário do hábito com o horário atual.
5. Verificar se o hábito já foi concluído no dia.
6. Enviar a notificação para os dispositivos cadastrados.
7. Registrar os lembretes processados para evitar envios duplicados.

O agendamento é realizado pelo Cron do Supabase, configurado para executar a função a cada minuto.

### 7. Registro de lembretes

O sistema utiliza a tabela `caverna_push_reminder_log` para registrar os lembretes processados.

Esse registro ajuda a evitar que o mesmo hábito gere notificações repetidas no mesmo dia e horário.

---

## 🛠️ Tecnologias utilizadas

- HTML
- CSS
- JavaScript
- GitHub Pages
- Supabase
- Supabase Auth
- Supabase Edge Functions
- Supabase Cron
- Web Push
- Service Worker

---

## 🗄️ Estrutura de dados

O projeto utiliza as seguintes tabelas do Supabase:

| Tabela | Finalidade |
|---|---|
| `caverna_data` | Armazenar os dados do usuário e seus hábitos |
| `caverna_push_subscriptions` | Armazenar as inscrições de notificações dos dispositivos |
| `caverna_push_reminder_log` | Registrar lembretes processados e enviados |

---

## 📱 Compatibilidade

O CAVERNA é uma aplicação web e pode ser acessado por navegadores compatíveis.

As notificações push foram testadas no PC com Edge e no iPhone.

O suporte a notificações no Android ainda precisa ser validado.

---

## 🚀 Próximas melhorias

- Testar notificações push no Android.
- Melhorar o histórico de hábitos concluídos.
- Expandir os relatórios de progresso.
- Aprimorar a experiência de uso em dispositivos móveis.
- Adicionar novas opções de organização e acompanhamento de rotina.

---

## 📌 Status do projeto

O CAVERNA possui cadastro de hábitos, acompanhamento diário, armazenamento de dados e lembretes automáticos configurados.

O sistema de notificações foi validado no PC e no iPhone, com execução automática pelo Supabase Cron.
