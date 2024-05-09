import type { Output } from 'valibot';
import { boolean, minLength, object, string } from 'valibot';
import { emailValidation } from './EmailSchema';
import { confirmValidation, passwordValidation } from './PassSchema';

export const SignUpSchema = object({
	email: emailValidation,
	password: passwordValidation, // TODO test this
	firstName: string('Your first name must be a string.', [
		minLength(1, 'Please enter your first name.')
	]),
	lastName: string('Your last name must be a string.', [
		minLength(1, 'Please enter your last name.')
	]),
	isSubscribed: boolean('Your subscription must be a boolean.'),
	confirm: confirmValidation // TODO test this
});

export type SignUpValidator = Output<typeof SignUpSchema>;
