<script lang="ts">
	import { WEBSITE_URL } from '$lib/data/WEBSITE_URL';
	import socialLinks from '$lib/data/socialLinks';
	import {
		Button,
		Container,
		Head,
		Heading,
		Hr,
		Html,
		Img,
		Link,
		Preview,
		Section,
		Column,
		Text
	} from 'svelte-email';

	// const baseUrl = process.<wbr/>env.VERCEL_URL ? `https://${process.<wbr/>env.VERCEL_URL}` : '';

	// export let authorName = 'Alex';
	// export let authorImage = `${baseUrl}/static/airbnb-review-user.jpg`;
	export let reviewText = `"Thank you for signing up to explore The River's artistry. Whether you're here for her music, beauty tips, or unique fashion, we're excited to have you with us."`;

	const previewText = `Welcome to The River's world! Dive into music, beauty, and fashion. We're excited to have you with us.`;

	const fontFamily =
		'-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif';

	const main = {
		backgroundColor: '#ffffff'
	};

	const container = {
		margin: '0 auto',
		padding: '20px 0 48px',
		width: '580px'
	};

	const userImage = {
		margin: '0 auto',
		marginBottom: '16px',
		borderRadius: '50%'
	};

	const logoImage = {
		margin: '0 auto',
		marginBottom: '16px',
		width: '100%'
	};

	const heading = {
		fontFamily,
		fontSize: '32px',
		lineHeight: '1.3',
		fontWeight: '700',
		color: '#484848'
	};

	const paragraph = {
		fontFamily,
		fontSize: '18px',
		lineHeight: '1.4',
		color: '#484848'
	};

	const review = {
		...paragraph,
		padding: '24px',
		backgroundColor: '#f2f3f3',
		borderRadius: '4px'
	};

	const button = {
		fontFamily,
		backgroundColor: '#ca485c',
		borderRadius: '3px',
		color: '#fff',
		fontSize: '18px',
		textDecoration: 'none',
		textAlign: 'center' as const,
		display: 'block',
		width: '100%'
	};

	const link = {
		...paragraph,
		color: '#ca485c',
		marginInline: '10px',
		fontSize: '14px'
		// display: 'block'
	};

	const reportLink = {
		fontFamily,
		fontSize: '14px',
		color: '#9ca299',
		textDecoration: 'underline'
	};

	const hr = {
		borderColor: '#cccccc',
		margin: '20px 0'
	};

	const footer = {
		fontFamily,
		color: '#9ca299',
		fontSize: '14px',
		marginBottom: '10px'
	};

	const unsubscribe = {
		fontFamily,
		color: '#9ca299',
		fontSize: '12px'
	};
	const fullWidth = {
		textAlign: 'center' as const,
		display: 'block',
		width: '100%'
	};
	const address = {
		fontFamily,
		color: '#9ca299',
		fontSize: '12px',
		margin: '0',
		lineHeight: '16px'
	};
</script>

<Html>
	<Head />
	<Preview preview={previewText} />
	<Section style={main}>
		<Container style={container}>
			<Img
				src={'https://res.cloudinary.com/dswpu3qez/image/upload/v1725066467/g11_ava4lg.webp'}
				width="580"
				height="172"
				style={logoImage}
				alt="TheRiver" />
			<Heading style={heading}>Welcome!</Heading>
			<Text style={review}>{reviewText}</Text>
			<Hr style={hr} />
			<Text style={paragraph}>Here's a glimpse of what you can dive into:</Text>
			<Text style={paragraph}>
				🎶 <Link href={WEBSITE_URL + '/music'}>Music & Videos</Link>: Listen to the latest tracks,
				watch mesmerizing music videos, and explore exclusive stems.
			</Text>
			<Text style={paragraph}>
				💄 <Link href={WEBSITE_URL + '/services'}>Beauty Services</Link>: Discover personalized
				beauty services that bring out your natural glow.
			</Text>
			<Text style={paragraph}>
				👗 <Link href={WEBSITE_URL + '/shop'}>Fashion & Jewelry</Link>: Shop our unique collections
				of handmade clothes and jewelry on Etsy.
			</Text>
			<Text style={paragraph}>
				📰 <Link href={WEBSITE_URL + '/blog'}>Blog</Link>: Stay updated with The River's latest
				thoughts, inspirations, and behind-the-scenes stories.
			</Text>
			<Text style={paragraph}>
				💌 <Link href={WEBSITE_URL + '/contact'}>Stay Connected</Link>: Don't forget to visit our
				Contact Page if you have any questions or just want to say hello!
			</Text>
			<Text style={paragraph}>
				We're excited to see you explore all that The River has to offer.
			</Text>
			<Hr style={hr} />
			<Text style={paragraph}>
				Thank you once again for joining our community. We can't wait to share The River's journey
				with you!
			</Text>
			<Text style={paragraph}>With creativity and passion,</Text>
			<Text style={paragraph}>- The River Team</Text>
			<Hr style={hr} />
			<Text style={paragraph}>
				P.S. Follow us on social media to stay updated with all the latest news and exclusive
				content!
			</Text>
			<Hr style={hr} />
			<!-- content -->
			<Text style={{ ...paragraph, fontWeight: '700', fontSize: '16px' }}>Socials</Text>
			<Text>
				<Link href={socialLinks.facebook} style={link}>FaceBook</Link>&nbsp;|
				<Link href={socialLinks.instagramSing} style={link}>Insta[Sing]</Link>&nbsp;|
				<Link href={socialLinks.instagramBeauty} style={link}>Insta[Beauty]</Link>&nbsp;|
				<Link href={socialLinks.x} style={link}>Twitter</Link>&nbsp;|
				<Link href={socialLinks.tiktok} style={link}>TikTok</Link>
			</Text>
			<!-- content -->
			<Text style={{ ...paragraph, fontWeight: '700', fontSize: '16px' }}>Other Links</Text>
			<Text>
				<Link href={socialLinks.etsy} style={link}>Etsy</Link>&nbsp;|
				<Link href={socialLinks.soundCloud} style={link}>SoundCloud</Link>&nbsp;|
				<Link href={socialLinks.spotify} style={link}>Spotify</Link>&nbsp;|
				<Link href={socialLinks.youtube} style={link}>Music Videos</Link>&nbsp;|
				<Link href={socialLinks.linkTree} style={link}>LinkTree</Link>
			</Text>
			<Hr style={hr} />
			<Text style={address}>The River, Inc.,</Text>
			<Text style={address}>30 W Bayaud Ave</Text>
			<Text style={address}>Denver, CO 80223</Text>
			<!-- <Link href="https://airbnb.com" style={reportLink}>Report unsafe behavior</Link> -->
			<!-- <Hr style={hr} /> -->
			<Text>
				<Link href={WEBSITE_URL + '/unsubscribe'} style={unsubscribe}>Unsubscribe</Link>
			</Text>
		</Container>
	</Section>
</Html>
