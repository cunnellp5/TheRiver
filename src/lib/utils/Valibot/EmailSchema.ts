import { email, string, minLength, maxLength, object } from 'valibot';

export const emailValidation = string('Your email must be a string.', [
	minLength(1, 'Please enter your email.'),
	email('The email is badly formatted.'),
	maxLength(30, 'Your email is too long.')
]);

// want to put into the 'object' method to run validations
export const EmailSchema = object({
	email: emailValidation
});
