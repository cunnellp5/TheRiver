export function validateEmailInput(email: string): boolean {
  return typeof email !== "string" || email.length < 3;
}
