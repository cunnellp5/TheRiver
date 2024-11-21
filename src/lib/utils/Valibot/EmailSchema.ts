import { email, string, minLength, maxLength, object, nonEmpty, pipe } from 'valibot';

export const emailValidation = pipe(
	string('Your email must be a string.'),
	nonEmpty('Please enter your email.'),
	email('The email is badly formatted.'),
	minLength(5, 'Your email is too short.'),
	maxLength(60, 'Your email is too long.')
);

// want to put into the 'object' method to run validations
export const EmailSchema = object({
	email: emailValidation
});
