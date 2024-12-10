export function validatePasswordInput(password: string): boolean {
  return typeof password !== "string" || password.length < 6 || password.length > 255;
}
