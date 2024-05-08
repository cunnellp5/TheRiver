import * as valibot from 'valibot';

export const Email = valibot.string([
	valibot.minLength(1, 'Please enter your email.'),
	valibot.email('The email is badly formatted.'),
	valibot.maxLength(30, 'Your email is too long.')
]);
