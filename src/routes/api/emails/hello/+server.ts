import { error } from '@sveltejs/kit';
import { render } from 'svelte-email';
import Hello from '$lib/emails/Hello.svelte';
import nodemailer from 'nodemailer';
import { Argon2id } from 'oslo/password';
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

const emailHtml = render({
	template: Hello,
	props: {
		name: 'Svelte worlf odf ppoo'
	}
});

// const options = {
// 	from: 'TheRiverSiings',
// 	to: 'philip.cunnell@colorado.edu',
// 	subject: 'hello world',
// 	html: emailHtml
// };

// THIS API ROUTE STAYS SO WE CAN DO FILTERING / SORTING / PAGINATION ?????
export const POST: RequestHandler = async ({
	url,
	locals,
	setHeaders,
	request
}): Promise<Response> => {
	// const sort: string | null = url.searchParams?.get('sort') || 'updatedAt';
	// const order: string | null = url.searchParams?.get('order') || 'desc';
	// const published: string | null = url.searchParams?.get('published');

	const { email } = await request.json();

	const options = {
		from: 'TheRiverSings - Alexis',
		to: 'philip.cunnell@colorado.edu',
		subject:
			'Sent from TheRiver website - This is the password reset email. Click the link to reset your password.',
		html: emailHtml
	};

	try {
		await transporter.sendMail(options);
		// posts = await db.post.findMany({
		// 	where: shouldFilter(published, locals?.user?.isAdmin),
		// 	orderBy: [{ [sort as string]: order }]
		// });
	} catch (err: unknown | Error) {
		console.log(err, 'error');
		error(500, (err as Error).message);
	}

	const hashedEmail = await new Argon2id().hash(email);

	setHeaders({
		Authorization: `Bearer ${hashedEmail}`
	});

	return {
		status: 200,
		body: { message: 'Email sent' }
	};
};
