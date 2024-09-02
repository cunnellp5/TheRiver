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
		Text
	} from 'svelte-email';

	export let token = null;

	// const baseUrl = process.<wbr/>env.VERCEL_URL ? `https://${process.<wbr/>env.VERCEL_URL}` : '';

	// export let authorName = 'Alex';
	// export let authorImage = `${baseUrl}/static/airbnb-review-user.jpg`;
	// export let reviewText = `“Zeno was a great guest! Easy communication, the apartment was left
	// in great condition, very polite, and respectful of all house rules.
	// He’s welcome back anytime and would easily recommend him to any
	// host!”`;

	const previewText = `Password reset link - The River`;

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
		display: 'block'
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

	const address = {
		fontFamily,
		color: '#9ca299',
		fontSize: '14px'
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
			<!-- <Section>
				<Img src={authorImage} width="96" height="96" alt={authorName} style={userImage} />
			</Section> -->
			<Heading style={heading}
				>Here's your reset password link for
				<Link href={WEBSITE_URL}>The River</Link>
			</Heading>
			<!-- <Text style={review}>{reviewText}</Text> -->
			<!-- <Text style={paragraph}>
				Now that the review period is over, we’ve posted {authorName}’s review to your Airbnb
				profile.
			</Text> -->
			<!-- <Text style={paragraph}>
				While it’s too late to write a review of your own, you can send your feedback to {authorName}
				using your Airbnb message thread.
			</Text> -->
			<Section style={{ padding: '16px 0 20px' }}>
				<Button pY={19} style={button} href="http://localhost:5173/reset/{token}">
					Reset Password
				</Button>
			</Section>
			<Hr style={hr} />
			<Text style={{ ...paragraph, fontWeight: '700' }}>Socials</Text>
			<Text>
				<Link href={socialLinks.etsy} style={link}>Merch - Etsy</Link>
			</Text>
			<Text>
				<Link href={socialLinks.instagramSing} style={link}>Instagram [Sing]</Link>
			</Text>
			<Text>
				<Link href={socialLinks.instagramBeauty} style={link}>Instagram [Beauty]</Link>
			</Text>
			<Text>
				<Link href={socialLinks.youtube} style={link}>Music Videos</Link>
			</Text>
			<Hr style={hr} />
			<Text style={footer}>The River</Text>
			<Text style={address}>30 W Bayaud Ave Denver,</Text>
			<Text style={address}>CO 80223</Text>
			<!-- <Link href="https://airbnb.com" style={reportLink}>Report unsafe behavior</Link> -->
		</Container>
	</Section>
</Html>
