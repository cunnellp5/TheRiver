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

<h1>The River</h1>
<p>Denver, CO</p>
<div class="map-container">
	<!-- <iframe
		title="map"
		height="450"
		style="border:0"
		loading="lazy"
		allowfullscreen
		referrerpolicy="no-referrer-when-downgrade"
		src="https://www.google.com/maps/embed/v1/place?key={env.GOOGLE_MAP_KEY}&q=39.73942555127294,-104.99025636441803">
	</iframe> -->
</div>
<div class="main-page-wrapper">
	<!-- TODO put this video in cloudinary -->
	<video autoplay muted loop playsinline class="background-video">
		<source src="water.mp4" type="video/mp4" />
		Your browser does not support HTML5 video.
	</video>
	<section>
		<div>
			<h2>NEWSLETTER</h2>
			<form action="">
				<label for="email">Sign up to receive emails from The River</label>
				<div class="newsletter-form">
					<input type="email" name="email" placeholder="test@example.com" />
					<button title="Send email">
						<Send />
					</button>
				</div>
			</form>
		</div>
		<div>
			<h3>CONTACT</h3>
			<p>theriverrunsfast@gmail.com</p>
			<aside class="buttons">
				<button on:click={copyEmail} title="Copy email to clipboard">
					{#if copied}
						<Check size="24" />
					{:else}
						<Copy size="24" />
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
	/* ELEMENTS */
	h1 {
		position: absolute;
		z-index: -1;
		font-size: var(--size-15);
		user-select: none;
		/* letter-spacing: var(--size-8); */
	}
	iframe {
		box-shadow: var(--shadow-3);
	}
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: var(--size-8);
		animation: animateBorderRadius 21s infinite linear;
		margin: 0 auto;
		box-shadow: var(--shadow-5);
		border-radius: var(--radius-blob-1);
		background-color: var(--surface-4);
		padding: var(--size-11);
		height: 50%;
	}
	h1,
	h2 {
		text-transform: uppercase;
	}
	p {
		letter-spacing: var(--font-letterspacing-3);
	}
	video {
		z-index: -3 !important;
		animation: animateBorderRadius 24s infinite linear;
		box-shadow: var(--shadow-1);
		border-radius: var(--radius-blob-1);
		user-select: none;
	}
	/* CLASSES */
	.buttons {
		display: flex;
		flex-direction: row;
		gap: var(--size-4);
		margin-block-start: var(--size-2);
	}
	.main-page-wrapper {
		display: flex;
		position: relative;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}
	.background-video {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: -1;
		min-width: var(--size-content-3);
		height: 100%;
		object-fit: cover;
	}
	.newsletter-form {
		display: flex;
		gap: var(--size-2);
		margin-block-start: var(--size-2);
	}
	.map-container > iframe {
		margin-top: var(--size-8);
		margin-bottom: var(--size-12);
		border-radius: var(--radius-2);
		width: 100%;
	}
	/* ANIMATIONS */
	@keyframes animateBorderRadius {
		0% {
			border-radius: var(--radius-blob-1);
		}
		20% {
			border-radius: var(--radius-blob-2);
		}
		40% {
			border-radius: var(--radius-blob-3);
		}
		60% {
			border-radius: var(--radius-blob-4);
		}
		80% {
			border-radius: var(--radius-blob-5);
		}
		100% {
			border-radius: var(--radius-blob-1);
		}
	}
</style>
