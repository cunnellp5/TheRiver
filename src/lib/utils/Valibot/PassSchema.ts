import { string, minLength, object, pipe, nonEmpty } from 'valibot';

// VALIDATIONS
export const passwordValidation = pipe(
	string('Your password must be a string.'),
	nonEmpty('Please enter your password.'),
	minLength(8, 'Your password must have 8 characters or more.')
);

export const confirmValidation = pipe(
	string('Your confirmation must be a string.'),
	nonEmpty('Please enter your confirmation.')
);

// SCHEMA
export const PasswordSchema = object({
	password: passwordValidation,
	confirm: confirmValidation
});
