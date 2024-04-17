import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';

import db from '$lib/server/database';

export const GET: RequestHandler = async (event) => {
	event.setHeaders({
		'Cache-Control': 'public, max-age=60, s-maxage=60'
	});

	const socialLinks = await db.socialLinks.findMany();

	if (!socialLinks) {
		return json({ error: 'No links found' }, { status: 404 });
	}

	return json(socialLinks);
};
