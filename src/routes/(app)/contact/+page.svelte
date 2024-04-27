<script lang="ts">
	import Check from 'lucide-svelte/icons/check';
	import Copy from 'lucide-svelte/icons/copy';
	import Send from 'lucide-svelte/icons/send';
	import { onMount } from 'svelte';

	const email = 'theriverrunsfast@gmail.com';
	let copied = false;

	function copyEmail() {
		navigator.clipboard.writeText(email);
		copied = true;
		setTimeout(() => {
			copied = false;
			return copied;
		}, 800); // Reset after 2 seconds
	}

	onMount(() => {
		document.title = 'Contact | The River Sings';
	});
</script>

<main>
	<section class="surface-3">
		<h1>Contact</h1>
		<p>theriverrunsfast@gmail.com</p>
		<aside class="buttons">
			<button on:click={copyEmail}>
				{#if copied}
					<Check />
				{:else}
					<Copy />
				{/if}
			</button>
			<a href="mailto:{email}">
				<button> <Send /> </button>
			</a>
		</aside>
	</section>
</main>

<style>
	main {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		box-shadow: var(--shadow-2);
		border-radius: var(--radius-2);
		padding: var(--size-7);
		width: 30%;
	}

	h1 {
		text-transform: uppercase;
	}

	p {
		letter-spacing: var(--font-letterspacing-3);
	}

	.buttons {
		display: flex;
		flex-direction: row;
		gap: var(--size-4);
		margin-block-start: var(--size-2);
	}
</style>
