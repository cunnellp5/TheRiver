import { error, json, type RequestHandler } from '@sveltejs/kit';
import { render } from 'svelte-email';
import Hello from '$lib/emails/Hello.svelte';
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
	// host: 'smtp.ethereal.email',
	// port: 587,
	// secure: false,
	// auth: {
	// 	user: 'my_user',
	// 	pass: 'my_password'
	// }
});

// const options = {
// 	from: 'TheRiverSiings',
// 	to: 'philip.cunnell@colorado.edu',
// 	subject: 'hello world',
// 	html: emailHtml
// };

export const POST: RequestHandler = async ({ request }): Promise<Response> => {
	let email, token;

	try {
		({ email, token } = await request.json());
	} catch (error) {
		return { status: 400, body: 'Invalid request body' };
	}

	const options = {
		from: 'TheRiverSings - Alexis', // TODO figure this out later
		to: 'philip.cunnell@colorado.edu', // TODO this should be the 'email' but hardcoding for testing
		subject:
			'Sent from TheRiver website - This is the password reset email. Click the link to reset your password.',
		html: render({
			template: Hello,
			props: {
				name: 'Svelte worlf odf ppoo',
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
