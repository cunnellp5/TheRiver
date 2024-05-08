import { error } from '@sveltejs/kit';
import { render } from 'svelte-email';
import Hello from '$lib/emails/Hello.svelte';
import nodemailer from 'nodemailer';
import { Argon2id } from 'oslo/password';
import { GMAIL_USER, GMAIL_PASS } from '$lib/env';

const transporter = nodemailer.createTransport({
	host: 'smtp.gmail.com', // hostname
	secureConnection: false, // TLS requires secureConnection to be false
	port: 587, // port for secure SMTP
	auth: {
		user: GMAIL_USER,
		pass: GMAIL_PASS
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
		from: 'TheRiverSiings',
		to: email,
		subject:
			'This is the password reset email, attached is a link to reset your password, this link will expire in 24 hours.',
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

	const hashedEmail = Argon2id.hash(email);

	setHeaders({
		Authentication: `Bearer ${hashedEmail}`
	});

	return {
		status: 200,
		body: { message: 'Email sent' }
	};
};
