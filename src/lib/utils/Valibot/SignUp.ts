import type { InferOutput } from "valibot";
import { nonEmpty, object, pipe, string } from "valibot";
import { emailValidation } from "./EmailSchema";
import { confirmValidation, passwordValidation } from "./PassSchema";

export const SignUpSchema = object({
  email: emailValidation,
  password: passwordValidation, // TODO test this
  firstName: pipe(
    string("Your first name must be a string."),
    nonEmpty("Please enter your first name."),
  ),
  lastName: pipe(
    string("Your last name must be a string."),
    nonEmpty("Please enter your last name."),
  ),
  confirm: confirmValidation, // TODO test this
});

export type SignUpValidator = InferOutput<typeof SignUpSchema>;
