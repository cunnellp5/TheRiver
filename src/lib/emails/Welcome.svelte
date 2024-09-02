<script lang="ts">
	import { WEBSITE_URL } from '$lib/data/WEBSITE_URL';
	import { Container, Head, Heading, Hr, Html, Link, Preview, Section, Text } from 'svelte-email';

	import {
		main,
		container,
		heading,
		review,
		hr,
		paragraph,
		postScripts,
		bold
	} from './emailStyles';
	import EmailFooter from './components/EmailFooter.svelte';
	import EmailImg from './components/EmailImg.svelte';

	export let reviewText =
		"Thank you for signing up to explore The River's artistry. Whether you're here for her music, beauty tips, or unique fashion, we're excited to have you with us.";

	const previewText = "Welcome to The River's world! We're excited to have you with us.";
</script>

<Html>
	<Head />
	<Preview preview={previewText} />
	<Section style={main}>
		<Container style={container}>
			<EmailImg />

			<Heading style={heading}>Welcome!</Heading>

			<Text style={{ ...review, fontSize: '14px' }}>{reviewText}</Text>

			<Hr style={hr} />

			<Text style={{ ...paragraph, ...bold }}>Here's a glimpse of what you can dive into:</Text>

			<Text style={paragraph}>
				🎶 <Link style={bold} href={WEBSITE_URL + '/music'}>Music & Videos</Link>: Listen to the
				latest tracks, watch mesmerizing music videos, and explore exclusive stems.
			</Text>

			<Text style={paragraph}>
				💄 <Link style={bold} href={WEBSITE_URL + '/services'}>Beauty Services</Link>: Discover
				personalized beauty services that bring out your natural glow.
			</Text>

			<Text style={paragraph}>
				👗 <Link style={bold} href={WEBSITE_URL + '/shop'}>Fashion & Jewelry</Link>: Shop our unique
				collections of handmade clothes and jewelry on Etsy.
			</Text>

			<Text style={paragraph}>
				📰 <Link style={bold} href={WEBSITE_URL + '/blog'}>Blog</Link>: Stay updated with The
				River's latest thoughts, inspirations, and behind-the-scenes stories.
			</Text>

			<Text style={paragraph}>
				💌 <Link style={bold} href={WEBSITE_URL + '/contact'}>Stay Connected</Link>: Don't forget to
				visit our Contact Page if you have any questions or just want to say hello!
			</Text>

			<Text style={paragraph}>
				We're excited to see you explore all that The River has to offer.
			</Text>

			<Hr style={hr} />

			<Text style={{ ...review, fontSize: '14px' }}>
				Thank you once again for joining our community. We can't wait to share The River's journey
				with you!
				<br />
				<br />
				With creativity and passion,
				<br />
				<br />
				- The River Team
			</Text>

			<!-- <Hr style={hr} />

			<Text style={postScripts}>
				P.S. Follow us on social media to stay updated with all the latest news and exclusive
				content!
			</Text> -->

			<EmailFooter />
		</Container>
	</Section>
</Html>
