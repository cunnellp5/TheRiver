import { minLength, nonEmpty, object, pipe, string } from "valibot";

// VALIDATIONS
export const passwordValidation = pipe(
  string("Your password must be a string."),
  nonEmpty("Please enter your password."),
  minLength(6, "Your password must have 6 characters or more."),
);

export const confirmValidation = pipe(
  string("Your confirmation must be a string."),
  nonEmpty("Please enter your confirmation."),
);

// SCHEMA
export const PasswordSchema = object({
  password: passwordValidation,
  confirm: confirmValidation,
});
