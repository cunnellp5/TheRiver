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
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}

	section {
		left: 50%; /* Center the section horizontally */
		top: 200px;
		height: var(--size-15);
		width: var(--size-15);
		position: fixed;
		z-index: -1;
		background-image: var(--gradient-22), var(--noise-3);
		background-size: 100%;
		border-radius: var(--radius-blob-1);
		transform: translateX(-50%);
		opacity: 0.4;
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
