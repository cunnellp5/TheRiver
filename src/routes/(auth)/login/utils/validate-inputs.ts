import type { LoginInputs } from "../interface/login-inputs";
import type { ValidationResult } from "../interface/validation-result";
import { Argon2id } from "oslo/password";
import { getExistingUser } from "./get-existing-user";
import { handleUserSession } from "./handle-user-session";
import { validateEmailInput } from "./validate-email-input";
import { validatePasswordInput } from "./validate-password-input";

export async function validateInputs({ email, password }: LoginInputs): Promise<ValidationResult> {
  if (validateEmailInput(email)) {
    console.error("Invalid email");
    return { userId: undefined };
  }

  if (validatePasswordInput(password)) {
    console.error("Invalid password");
    return { userId: undefined };
  }

  const user = await getExistingUser(email);
  if (!user) {
    console.error("User not found");
    return { userId: undefined };
  }

  const validPassword = await new Argon2id().verify(user.hashedPassword, password);
  if (!validPassword) {
    console.error("Invalid password");
    return { userId: undefined };
  }

  await handleUserSession(user.sessions);

  return { userId: user.id };
}
