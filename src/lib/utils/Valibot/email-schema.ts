import { email, maxLength, minLength, nonEmpty, object, pipe, string } from "valibot";

export const emailValidation = pipe(
  string("Your email must be a string."),
  nonEmpty("Please enter your email."),
  email("The email is badly formatted."),
  minLength(5, "Your email is too short."),
  maxLength(254, "Your email is too long."),
);

// want to put into the 'object' method to run validations
export const EmailSchema = object({
  email: emailValidation,
});
