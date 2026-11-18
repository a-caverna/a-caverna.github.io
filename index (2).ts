/** Regras puras de domínio. Não acessar DOM, Supabase ou APIs de plataforma aqui. */
export function isObligationApplicable(input: { enabled: boolean; contextAllows: boolean; userApprovedException: boolean }): boolean {
  if (!input.enabled) return false;
  if (input.userApprovedException) return false;
  return input.contextAllows;
}

export function calculateCompletionRate(input: { completed: number; applicable: number }): number | null {
  if (input.applicable <= 0) return null;
  return Math.round((input.completed / input.applicable) * 100);
}
