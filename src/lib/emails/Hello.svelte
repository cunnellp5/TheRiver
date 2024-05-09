<script>
	import { Button, Hr, Html, Text, Link } from 'svelte-email';
	import { WEBSITE_URL } from '$lib/data/WEBSITE_URL';

	export let name = 'you are amazing!';
	export let token = null;
</script>

<Html lang="en">
	{#if token}
		<Text>
			Hello, {name}. Here is your <Link href="http://localhost:5173/reset/{token}"
				>password reset link</Link>
		</Text>

		<Text>Expires in 24 hours.</Text>
	{:else}
		<Text>
			Hello, {name}! Something went wrong sending you an email. Please contact support with this id:
			'TRS-420666'</Text>
	{/if}
	<Hr />
	<Button href={WEBSITE_URL}>Visit TheRiver</Button>
</Html>

<!-- TODO make sure https works in prod -->
