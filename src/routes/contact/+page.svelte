<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		document.title = 'Contact | The River Sings';
	});
</script>

<main>
	<section>
		<h1>Contact</h1>
		<p>theriverrunsfast@gmail.com</p>
	</section>
</main>

<style>
	main {
		display: flex;
		align-items: center;
		flex-direction: row;
		justify-content: center;
		height: 100vh;
	}

	h1 {
		text-transform: uppercase;
	}

	div {
		margin-inline: 1rem;
		border-left: 1.8px solid rgb(207, 207, 207);
		height: var(--size-7);
	}

	p {
		font-family: monospace;
		font-size: var(--size-4);
		letter-spacing: var(--font-letterspacing-3);
	}
</style>
