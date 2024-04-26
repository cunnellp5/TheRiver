import { object, string, email, minLength, boolean } from 'valibot';
import type { Output } from 'valibot';

export const SignUpSchema = object({
	email: string('Your email must be a string', [email(), minLength(1)]),
	password: string('Your password must be a string.', [
		minLength(1, 'Please enter your password.'),
		minLength(8, 'Your password must have 8 characters or more.')
	]),
	firstName: string('Your first name must be a string.', [
		minLength(1, 'Please enter your first name.')
	]),
	lastName: string('Your last name must be a string.', [
		minLength(1, 'Please enter your last name.')
	]),
	isSubscribed: boolean('Your subscription must be a boolean.'),
	confirm: string('Your confirmation must be a string.', [
		minLength(1, 'Please enter your confirmation.')
	])
});

export type SignUpValidator = Output<typeof SignUpSchema>;
