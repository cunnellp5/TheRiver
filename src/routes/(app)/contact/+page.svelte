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

<h1>Contact</h1>
<p>TODO add a map</p>
<div class="main-page-wrapper">
	<!-- TODO put this video in cloudinary -->
	<video autoplay muted loop playsinline class="background-video">
		<source src="water.mp4" type="video/mp4" />
		Your browser does not support HTML5 video.
	</video>
	<section>
		<div>
			<h1>The River</h1>
			<p>Located in Denver, CO</p>
		</div>
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
			<h2>CONTACT</h2>
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
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: var(--size-8);
		animation: animateBorderRadius 12s infinite linear;
		margin: 0 auto;
		box-shadow: var(--shadow-4);
		border-radius: var(--radius-blob-1);
		background-color: var(--surface-4);
		padding: var(--size-11);
		width: fit-content;
	}
	h1,
	h2 {
		text-transform: uppercase;
	}
	p {
		letter-spacing: var(--font-letterspacing-3);
	}
	video {
		animation: animateBorderRadius 12s infinite linear;
		box-shadow: var(--shadow-1);
		border-radius: var(--radius-blob-1);
	}
	/* CLASSES */
	.buttons {
		display: flex;
		flex-direction: row;
		gap: var(--size-4);
		margin-block-start: var(--size-2);
	}
	.main-page-wrapper {
		position: relative;
	}
	.background-video {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		opacity: 0.9;
		z-index: -1;
		min-width: var(--size-content-3);
		height: 120%;
		object-fit: cover;
	}
	.newsletter-form {
		display: flex;
		gap: var(--size-2);
		margin-block-start: var(--size-2);
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
