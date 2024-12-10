import type { LoginInputs } from "../interface/login-inputs";

export async function getFormData(request: Request): Promise<LoginInputs> {
  const formData = await request.formData();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  return { email, password };
}
