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

<h1>Information</h1>
<p>TODO add a map</p>
<div class="main-page-wrapper">
	<!-- TODO put this video in cloudinary -->
	<video autoplay muted loop playsinline class="background-video">
		<source src="water.mp4" type="video/mp4" />
		Your browser does not support HTML5 video.
	</video>
	<section>
		<div>
			<h2>The River</h2>
			<p>Located in Denver, CO</p>
		</div>
		<div>
			<h2>NEWSLETTER</h2>
			<form action="">
				<label for="email">Sign up to receive emails from The River</label>
				<div class="newsletter-form">
					<input type="email" name="email" placeholder="test@example.com" />
					<button title="Send email">
						<a>
							<Send />
						</a>
					</button>
				</div>
			</form>
		</div>
		<div>
			<h2>CONTACT</h2>
			<p>theriverrunsfast@gmail.com</p>
			<aside class="buttons">
				<button on:click={copyEmail} title="Copy email to clipboard">
					{#if copied}
						<a>
							<Check size="24" />
						</a>
					{:else}
						<a>
							<Copy size="24" />
						</a>
					{/if}
				</button>
				<button title="Send email">
					<a href="mailto:{email}">
						<Send size="24" />
					</a>
				</button>
			</aside>
		</div>
	</section>
</div>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		/* align-items: center; */
		gap: var(--size-8);
		margin-inline-start: var(--size-4);
		margin: 0 auto;
		border-radius: var(--radius-1);
		background-color: hsl(var(--cyan-6-hsl) / 85%);
		padding: var(--size-4);
		width: fit-content;
		/* color: black; */
	}
	section > div {
		margin-inline: var(--size-8);
	}
	h1,
	h2 {
		text-transform: uppercase;
	}

	p {
		letter-spacing: var(--font-letterspacing-3);
	}

	video {
		box-shadow: var(--shadow-1);
		border-radius: var(--radius-4);
		/* inline-size: var(--size-5); */
	}
	/* .main-page-wrapper {
		display: flex;
		flex-direction: row-reverse;
		justify-content: center;
	} */
	.buttons {
		display: flex;
		flex-direction: row;
		gap: var(--size-4);
		margin-block-start: var(--size-2);
	}

	/* .background-video {
		position: relative;
		z-index: -1;
		object-fit: cover;
	} */

	.main-page-wrapper {
		position: relative;
	}

	.background-video {
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	section {
		position: relative;
	}

	.newsletter-form {
		display: flex;
		gap: var(--size-2);
		margin-block-start: var(--size-2);
	}
</style>
