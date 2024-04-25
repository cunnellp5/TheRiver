import { lucia } from '$lib/server/auth';
import { error, fail, redirect } from '@sveltejs/kit';
import { Argon2id } from 'oslo/password';
import db from '$lib/server/database';
import { boolean, email as emailV, minLength, object, parse, string, ValiError } from 'valibot';
import type { Actions, PageServerLoad } from './$types';

// Create login schema with email and password
const SignUpSchema = object({
	email: string('Your email must be a string', [
		emailV('Please enter a valid email.'),
		minLength(1, 'Please enter your email.')
	]),
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

// Infer output TypeScript type of signup schema
type SignUpValidator = Output<typeof SignUpSchema>;

async function validateEmail(email: string) {
	try {
		await db.user.findUnique({
			where: { email: email.toString() }
		});
		return null;
	} catch (err) {
		return fail(400, { message: 'That email is already used' });
	}
}

function validateSignUpForm({
	email,
	password,
	firstName,
	lastName,
	isSubscribed,
	confirm
}: {
	email: string;
	password: string;
	firstName: string;
	lastName: string;
	isSubscribed: string;
	confirm: string;
}) {
	try {
		parse(SignUpSchema, {
			email,
			password,
			firstName,
			lastName,
			isSubscribed: isSubscribed === 'on',
			confirm
		}) as SignUpValidator;
	} catch (err) {
		const errors = err as ValiError;
		throw fail(400, {
			message: errors.message
		});
	}
}

export const load: PageServerLoad = async (event) => {
	if (event.locals.session) redirect(302, '/login');
};

export const actions: Actions = {
	default: async ({ cookies, request }) => {
		const formData = await request.formData();

		const email = formData.get('email') as string;
		const password = formData.get('password') as string;
		const firstName = formData.get('firstName') as string;
		const lastName = formData.get('lastName') as string;
		const isSubscribed = formData.get('isSubscribed') as string;
		const confirm = formData.get('confirm') as string;

		if (
			!email ||
			!password ||
			!firstName ||
			!lastName ||
			!isSubscribed ||
			!confirm ||
			confirm !== password
		)
			return fail(400, { message: 'Please fill out all fields' });

		console.log(formData, 'calling default function in test!');
		// validates with valibot
		await validateSignUpForm({
			email,
			password,
			firstName,
			lastName,
			isSubscribed,
			confirm
		});

		// Check db for existing email
		await validateEmail(email);

		let hashedPassword = null;

		try {
			hashedPassword = await new Argon2id().hash(password);
		} catch (err) {
			error(500, { message: 'Something unexpected occured' });
		}

		let newUser = null;

		try {
			// insert new user
			newUser = await db.user.create({
				data: {
					email: email?.toString() || '',
					firstName: firstName?.toString() || '',
					lastName: lastName?.toString() || '',
					isSubscribed: Boolean(isSubscribed) || false,
					hashedPassword
				}
			});

			// inner set
			try {
				const session = await lucia.createSession(newUser.id, {});
				const sessionCookie = lucia.createSessionCookie(session.id);
				cookies.set(sessionCookie.name, sessionCookie.value, {
					path: '.',
					...sessionCookie.attributes
				});
				throw redirect(302, '/dashboard');
			} catch {
				throw error(500, { message: 'Failed to create session' });
			}
		} catch {
			throw error(500, { message: 'Failed to create user' });
		}
	}
};
