<script lang="ts">
	import { container, heading, button, unsubscribe } from '../emailStyles';
	import EmailFooter from '../components/EmailFooter.svelte';
	import EmailImg from '../components/EmailImg.svelte';
	import Button from '../components/ui/Button.svelte';
	import Container from '../components/ui/Container.svelte';
	import Heading from '../components/ui/Heading.svelte';
	import Preview from '../components/ui/Preview.svelte';
	import Section from '../components/ui/Section.svelte';
	import Text from '../components/ui/Text.svelte';

	export let token = null;
	const previewText =
		'Password reset link - Expires in 24 hours - click the button to reset your password';
</script>

<html lang="en">
	<head>
		<title>Reset Email</title>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		<meta name="description" content="Reset Email link for The River" />
	</head>
	<Preview preview={previewText} />
	<Section>
		<Container style={container}>
			<EmailImg />

			<Heading style={heading}>Click to reset your password</Heading>

			<Text style={unsubscribe}>Expires in 24 hours</Text>

			<Button pY={19} style={button} href="https://theriversings.com/reset/{token}">
				Reset Password
			</Button>

			<EmailFooter />
		</Container>
	</Section>
</html>
