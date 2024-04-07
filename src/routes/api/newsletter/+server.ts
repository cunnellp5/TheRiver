import type { RequestHandler } from '@sveltejs/kit';

// api/newsletter GET
export const GET: RequestHandler = async (event) => {
	const options: ResponseInit = {
		status: 418,
		headers: {
			poopCity: 'sharting it up'
		}
	};
	return new Response('testing', options);
};

// api/newsletter POST
export const POST: RequestHandler = async (event) => {
	const data = await event.request.formData();
	const email = data.get('email');

	// subscribe the user to the newsletter
	console.log(`Subscribed ${email} to the newsletter`);

	return new Response(JSON.stringify({ success: true }), {
		headers: {
			'Content-Type': 'application/json'
		}
	});
};
