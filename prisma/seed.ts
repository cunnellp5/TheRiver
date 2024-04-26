import { PrismaClient } from '@prisma/client';
import { Argon2id } from 'oslo/password';

const db = new PrismaClient();

type DummyPost = {
	title: string;
	body: string;
	tags: string[];
	slug: string;
};

async function getPosts() {
	const response = await fetch('https://dummyjson.com/posts/');
	const { posts } = await response.json();

	return posts as DummyPost[];
}

function slugify(text: string) {
	return text
		.toLowerCase()
		.replace(/\s/g, '-')
		.replace(/[^a-zA-Z0-9-]/g, '');
}

async function main() {
	const posts = await getPosts();

	const data = posts.map((post) => ({
		title: post.title,
		content: post.body,
		slug: slugify(post.title),
		tags: post.tags,
		description: `${post.body.slice(0, 100)}...`
	}));

	await db.post.createMany({ data });

	await db.service.createMany({
		data: [
			{
				name: 'Haircut',
				description: 'Get your hair cut and styled',
				duration: 60,
				availability: 'AVAILABLE', // 'AVAILABLE' | 'UNAVAILABLE' | 'COMING_SOON
				category: 'HAIR',
				slug: 'haircut',
				price: 100
			},
			{
				name: 'Gel nails',
				description: 'Get your nails did',
				duration: 90,
				availability: 'LIMITED_AVAILABILITY', // 'AVAILABLE' | 'UNAVAILABLE' | 'COMING_SOON
				category: 'NAILS',
				slug: 'gel-nails',
				price: 69
			},
			{
				name: 'Waxing',
				description: 'Wax your booty',
				duration: 30,
				availability: 'COMING_SOON', // 'AVAILABLE' | 'UNAVAILABLE' | 'COMING_SOON
				category: 'WAX',
				slug: 'wax',
				price: 35
			},
			{
				name: 'Rainbow extensions',
				description: 'Get fully organic extesions',
				duration: 120,
				availability: 'LIMITED_AVAILABILITY', // 'AVAILABLE' | 'UNAVAILABLE' | 'COMING_SOON
				category: 'HAIR',
				slug: 'rainbow-extensions',
				price: 35
			}
		]
	});

	const hashedPassword = await new Argon2id().hash('12345678');

	await db.user.create({
		data: {
			email: 'test@example.com',
			firstName: 'philly',
			lastName: 'phil',
			isSubscribed: true,
			hashedPassword,
			isAdmin: true
		}
	});
}

main();
