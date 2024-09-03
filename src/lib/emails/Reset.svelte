<script lang="ts">
	import { Button, Container, Head, Heading, Html, Preview, Section, Text } from 'svelte-email';

	import { main, container, heading, button, unsubscribe } from './emailStyles';
	import EmailFooter from './components/EmailFooter.svelte';
	import EmailImg from './components/EmailImg.svelte';

	export let token = null;

	const previewText = `Password reset link - The River`;
</script>

<Html>
	<Head>
		<title>Reset Email</title>
		<meta name="description" content="Reset Email link for The River" />
	</Head>
	<Preview preview={previewText} />
	<Section style={main}>
		<Container style={container}>
			<EmailImg />

			<Heading style={heading}>Click to reset your password</Heading>

			<Text style={unsubscribe}>Expires in 24 hours</Text>

			<Button pY={19} style={button} href="https://the-river-five.vercel.app/reset/{token}">
				Reset Password
			</Button>

			<EmailFooter />
		</Container>
	</Section>
</Html>
