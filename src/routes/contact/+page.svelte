<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		document.title = 'Contact | The River Sings';
	});
</script>

<main>
	<h1>Contact</h1>
	<div></div>
	<p>theriverrunsfast@gmail.com</p>
</main>

<section></section>

<style>
	main {
		display: flex;
		align-items: center;
		flex-direction: row;
		justify-content: center;
		height: 100%;
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
		font-weight: 800;
		font-size: var(--size-4);
	}
</style>
