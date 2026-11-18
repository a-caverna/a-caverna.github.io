# Modelo de dados proposto (não aplicar ainda)

Domínios e entidades candidatas:
- identity: profiles, user_preferences, devices
- routine: habits, habit_schedules, habit_logs, tasks
- training: workout_programs, workout_days, exercises, workout_sessions, workout_sets
- library: books, reading_sessions, notes
- gratitude: gratitude_entries
- physical: body_measurements, body_photos
- finance: financial_accounts, transactions, debts, budgets, goals
- goals: personal_goals, milestones
- context: user_contexts, context_rules, context_approvals, context_events
- accountability: accountability_rules, daily_obligations, daily_closures, accountability_events
- progress: progress_profiles, progress_events, xp_transactions, achievements, user_achievements, progress_snapshots, personal_milestones, memory_highlights
- showcase: showcase_exports
- mentor: mentor_conversations, mentor_messages, mentor_briefings

Todos os registros pessoais devem conter `user_id` e políticas RLS correspondentes. O modelo final deve ser ajustado após comparar com o schema de produção e os formatos existentes no payload.
