<script lang="ts">
	import Check from 'lucide-svelte/icons/check';
	import Copy from 'lucide-svelte/icons/copy';
	import Send from 'lucide-svelte/icons/send';
	import MailCheck from 'lucide-svelte/icons/mail-check';

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
</script>

<div class="app-layout">
	<h1>The River</h1>
	<p>Denver, CO</p>
	<div class="main-page-wrapper">
		<!-- TODO put this video in cloudinary -->
		<video autoplay muted loop playsinline class="background-video">
			<source src="water.mp4" type="video/mp4" />
			Your browser does not support HTML5 video.
		</video>
		<section>
			<div>
				<!-- <h3>Hmu</h3> -->
				<p class="email-wrapper">
					theriverrunsfast@gmail.com
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<!-- svelte-ignore a11y-no-static-element-interactions -->
					<span class="copy" on:click={copyEmail} title="Copy email to clipboard">
						{#if copied}
							<Check size="24" />
						{:else}
							<Copy size="24" />
						{/if}
					</span>
					<a href="mailto:{email}">
						<div title="Send email">
							<Send size="24" />
						</div>
					</a>
				</p>
			</div>
		</section>
	</div>
</div>

<style>
	/* ELEMENTS */
	h1 {
		position: absolute;
		z-index: -1;
		font-size: var(--size-15);
		user-select: none;
	}
	h2,
	h3 {
		margin-block: var(--size-2);
	}
	label {
		color: var(--text-2);
	}
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: var(--size-8);
		/* animation: animateBorderRadius 21s infinite linear; */
		margin: 0 auto;
		box-shadow: var(--shadow-5);
		border-radius: var(--radius-2);
		background-color: var(--surface-4);
		padding: var(--size-9);
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
	button {
		width: 100%;
		/* margin-block: var(--size-2); */
	}

	/* CLASSES */
	.copy {
		cursor: pointer;
	}
	.email-wrapper {
		display: flex;
		gap: var(--size-2);
	}
	.buttons-wrapper {
		display: flex;
		flex-direction: column;
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
		flex-direction: column;
		gap: var(--size-2);
		margin-block-start: var(--size-2);
	}
	.app-layout {
		margin-block: var(--size-9);
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
