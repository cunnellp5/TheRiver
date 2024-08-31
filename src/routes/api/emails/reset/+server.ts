import { error, json, type RequestHandler } from '@sveltejs/kit';
import { render } from 'svelte-email';
import Reset from '$lib/emails/Reset.svelte';
import nodemailer from 'nodemailer';
import { env } from '$env/dynamic/private';

const transporter = nodemailer.createTransport({
	host: 'smtp.gmail.com', // hostname
	secureConnection: false, // TLS requires secureConnection to be false
	port: 587, // port for secure SMTP
	auth: {
		user: env.GMAIL_USER,
		pass: env.GMAIL_PASS
	}
});

export const POST: RequestHandler = async ({ request }): Promise<Response> => {
	let token;

	try {
		({ token } = await request.json());
	} catch (err) {
		console.error('Error parsing request body:', err);
		return error(500, err.message);
	}

	const options = {
		from: 'theriverrunsfast@gmail.com', // TODO figure this out later
		to: 'philip.cunnell@colorado.edu', // TODO this should be the 'email' but hardcoding for testing
		subject: 'The River - Password Reset Request',
		html: render({
			template: Reset,
			props: {
				token
			}
		})
	};

	try {
		await transporter.sendMail(options);
	} catch (err: unknown | Error) {
		error(500, (err as Error).message);
	}

	return json({ status: 200, message: 'Email sent successfully' });
};
