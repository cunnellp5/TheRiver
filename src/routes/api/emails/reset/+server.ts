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
	let email;

	try {
		({ token, email } = await request.json());
	} catch (err) {
		console.error('Error parsing request body:', err);
		return error(500, err.message);
	}

	const options = {
		from: env.GMAIL_USER, // TODO figure this out later
		to: email,
		subject: 'Password Reset Request - The River',
		html: render({
			template: Reset,
			props: {
				token
			}
		})
	};

	try {
		await transporter.sendMail(options, (error, info) => {
			if (error) {
				console.error('❌ Error:', error.message);
			} else {
				console.log('✅ Email sent:', info.response);
			}
		});
	} catch (err: unknown | Error) {
		error(500, (err as Error).message);
	}

	return json({ status: 200, message: 'Email sent successfully' });
};
