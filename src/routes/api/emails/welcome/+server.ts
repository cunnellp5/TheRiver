import { env } from '$env/dynamic/private';
import type { SvelteComponent } from 'svelte';
import Welcome from '$lib/emails/templates/Welcome.svelte';
import transporter from '$lib/utils/transporter';
import { error, json, type RequestHandler } from '@sveltejs/kit';
import { render } from '../render';

export const POST: RequestHandler = async ({ request }): Promise<Response> => {
	const { subject, email } = await request.json();

	const options = {
		from: env.EMAIL_USER,
		to: email,
		html: render({ template: Welcome as unknown as typeof SvelteComponent })
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
