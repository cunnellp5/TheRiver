import { string, minLength, object } from 'valibot';

// VALIDATIONS
export const passwordValidation = string('Your password must be a string.', [
	minLength(1, 'Please enter your password.'),
	minLength(8, 'Your password must have 8 characters or more.')
]);

export const confirmValidation = string('Your confirmation must be a string.', [
	minLength(1, 'Please enter your confirmation.')
]);

// SCHEMA
export const PasswordSchema = object({
	password: passwordValidation,
	confirm: confirmValidation
});
