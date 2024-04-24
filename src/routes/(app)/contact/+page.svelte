<script lang="ts">
	import { onMount } from 'svelte';
	import Copy from 'lucide-svelte/icons/copy';
	import Send from 'lucide-svelte/icons/send';

	const email = 'theriverrunsfast@gmail.com';
	let copied = false;

	function copyEmail() {
		navigator.clipboard.writeText(email);
		copied = true;
		setTimeout(() => {
			copied = false;
			return copied;
		}, 2000); // Reset after 2 seconds
	}

	onMount(() => {
		document.title = 'Contact | The River Sings';
	});
</script>

<main>
	<section>
		<h1>Contact</h1>
		<p>theriverrunsfast@gmail.com</p>
		<section class="buttons">
			<button on:click={copyEmail}>
				{#if copied}
					Copied!
				{:else}
					<Copy />
				{/if}
			</button>
			<a href="mailto:{email}">
				<button> <Send /> </button>
			</a>
		</section>
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
	}

	h1 {
		text-transform: uppercase;
	}

	/* div {
		margin-inline: 1rem;
		border-left: 1.8px solid rgb(207, 207, 207);
		height: var(--size-7);
	} */

	p {
		/* font-family: monospace; */
		letter-spacing: var(--font-letterspacing-3);
	}

	.buttons {
		display: flex;
		flex-direction: row;
		gap: var(--size-4);
		margin-block-start: var(--size-2);
	}
</style>
