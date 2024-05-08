<script>
	import { Button, Hr, Html, Text } from 'svelte-email';
	import { WEBSITE_URL } from '$lib/data/WEBSITE_URL';

	export let name = 'you are amazing!';
</script>

<Html lang="en">
	<Text>
		Hello, {name}!
	</Text>
	<Hr />
	<Button href={WEBSITE_URL}>Visit TheRiver</Button>
</Html>
