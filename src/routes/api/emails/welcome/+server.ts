import { error, json, type RequestHandler } from '@sveltejs/kit';
import { render } from 'svelte-email';
import Welcome from '$lib/emails/Welcome.svelte';
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
	const { subject, email } = await request.json();

	const options = {
		from: env.GMAIL_USER, // TODO figure this out later
		to: email, // TODO this should be the 'email' but hardcoding for testing
		subject,
		html: render({
			template: Welcome,
			props: {
				// token
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
