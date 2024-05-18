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
	<section>
		<!-- <video autoplay muted loop playsinline class="background-video">
			<source src="water.mp4" type="video/mp4" />
			Your browser does not support HTML5 video.
		</video> -->
		<h1>Contact</h1>
		<p>theriverrunsfast@gmail.com</p>
		<aside class="buttons">
			<button on:click={copyEmail}>
				{#if copied}
					<a>
						<Check size="36" />
					</a>
				{:else}
					<a>
						<Copy size="36" />
					</a>
				{/if}
			</button>
			<button>
				<a href="mailto:{email}">
					<Send size="36" />
				</a>
			</button>
		</aside>
	</section>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		/* justify-content: center; */
		align-items: center;
		margin-block: var(--size-9);
		/* height: 100vh; */
	}

	section {
		display: flex;
		/* position: relative; */
		flex-direction: column;
		/* justify-content: center; */
		/* align-items: center; */
		/* box-shadow: var(--shadow-1); */
		/* padding: var(--size-7); */
	}

	h1 {
		text-transform: uppercase;
	}

	p {
		letter-spacing: var(--font-letterspacing-3);
	}

	.buttons {
		display: flex;
		flex-direction: column;
		gap: var(--size-4);
		margin-block-start: var(--size-6);
	}
	/* 
	.background-video {
		position: relative;
		z-index: -1;
		width: 100%;
		height: 100%;
		object-fit: cover;
	} */
</style>
