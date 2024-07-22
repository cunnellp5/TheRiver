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

	const data = posts.map((post, i) => ({
		title: post.title,
		content: post.body,
		slug: slugify(post.title),
		tags: post.tags,
		description: `${post.body.slice(0, 100)}...`,
		published: i % 2 === 0
	}));

	await db.post.createMany({ data });

	await db.service.createMany({
		data: [
			{
				name: 'Haircut',
				description: 'Get your hair cut and styled',
				duration: 60,
				availability: 'AVAILABLE',
				category: 'HAIR',
				slug: 'haircut',
				price: 100
			},
			{
				name: 'Gel nails',
				description: 'Get your nails did',
				duration: 90,
				availability: 'LIMITED_AVAILABILITY',
				category: 'NAILS',
				slug: 'gel-nails',
				price: 69
			},
			{
				name: 'Waxing',
				description: 'Wax your booty',
				duration: 30,
				availability: 'COMING_SOON',
				category: 'WAX',
				slug: 'wax',
				price: 35
			},
			{
				name: 'Rainbow extensions',
				description: 'Get fully organic extesions',
				duration: 120,
				availability: 'LIMITED_AVAILABILITY',
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

	await db.timeSlot.create({
		data: {
			startTime: new Date('2024-07-07T13:00:00Z'),
			endTime: new Date('2024-07-07T14:00:00Z'),
			day: new Date('2024-07-07T19:00:00.000Z'),
			available: true,
			serviceId: 1
		}
	});

	await db.article.createMany({
		data: [
			{
				articleTitle: 'The River Delivers Angry Verses On “Hours”',
				author: 'Victória Santiago',
				description:
					'Ever since releasing her first song in June 2021, she has had her foot on the gas.',
				img: 'https://res.cloudinary.com/dswpu3qez/image/upload/v1707412331/sample.jpg',
				link: 'https://ratingsgamemusic.com/2022/01/08/the-river-delivers-angry-verses-on-hours/',
				linkTitle: 'Victória Santiago [Ratings Game Music Blogger]'
			},
			{
				articleTitle: 'The River’s “Hours” digs deep into the dynamics of failed relationships',
				author: 'TAYO ODUTOLA',
				description:
					"On Hours: The production here is sublime and crisp as each instrument stands out with clarity while The River's commanding vocals cut through the mix with ease.",
				img: 'https://res.cloudinary.com/dswpu3qez/image/upload/v1707412341/samples/people/jazz.jpg',
				link: 'https://earmilk.com/2022/01/10/the-rivers-hours-digs-deep-into-the-dynamics-of-failed-relationships/',
				linkTitle: 'Earmilk'
			},
			{
				articleTitle: 'It aint that deep',
				author: 'Alyce Lindberg',
				description:
					"The vocals are confidently delivered, imbued with the effortless coolness that comes with being insanely naturally gifted. Plus, the arrangement and production create the most infectious groove you'll ever hear.",
				img: 'https://res.cloudinary.com/dswpu3qez/image/upload/v1707412345/samples/ecommerce/accessories-bag.jpg',
				link: 'https://musicfashionblog.com/it-aint-that-deep-the-river/',
				linkTitle: 'Read more'
			},
			{
				articleTitle: 'Soulful and introspective track',
				author: 'Kreadiv Kesh',
				description:
					"Somewhere in the lyrics there is peace and truth. The River's latest single “Hours” facing the reality of love, respect, and emotions. Over and acoustic melody the rain pours over the lyrical expressions of facing your feelings.",
				img: 'https://res.cloudinary.com/dswpu3qez/image/upload/v1707412364/samples/man-portrait.jpg',
				link: 'EXPIRED_URL', // https://www.laonlock.com/reviews/1/11/2022/the-river-hours-review
				linkTitle: 'Kreadiv Kesh [LA On Lock Blogger]'
			}
		]
	});
}

main();
