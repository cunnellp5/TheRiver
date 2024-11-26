<script lang="ts">
	import Seo from '$lib/components/SEO.svelte';
	import Marquee from '$lib/components/ui/Marquee.svelte';
	import Socials from '$lib/components/ui/Socials.svelte';
	import * as GenericCard from '$lib/components/ui/shadcn/card';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import HomeGallery from './components/body/HomeGallery.svelte';
	import TheRiver from '$lib/components/svgs/logos/TheRiver.svelte';
	import ServiceButtons from '$lib/components/ui/button/ServiceButtons.svelte';

	let { data } = $props();

	// let scroll: number;

	const { videoURL, articles, about } = data;

	// const isPlaying = true;
	let visible = $state(false);

	// const syncPointer = ({ x, y }: { x: number; y: number }) => {
	// 	document.documentElement.style.setProperty('--x', x.toFixed(2));
	// 	document.documentElement.style.setProperty('--xp', (x / window.innerWidth).toFixed(2));
	// 	document.documentElement.style.setProperty('--y', y.toFixed(2));
	// 	document.documentElement.style.setProperty('--yp', (y / window.innerHeight).toFixed(2));
	// };

	onMount(() => {
		// document.body.addEventListener('pointermove', syncPointer);

		// Cleanup event listener on component destroy
		// onDestroy(() => {
		// 	document.body.removeEventListener('pointermove', syncPointer);
		// });
		visible = true;
	});
</script>

<!-- <svelte:window bind:scrollY={scroll} /> -->

<Seo
	title={'Music, Beauty Services, Blog & Fashion - The River | Alexis'}
	description={'Discover The River: A multifaceted artist offering music, beauty services, fashion, and more. Explore her latest tracks, music videos, blog, and unique handmade jewelry and clothing.'}
></Seo>
<!-- style:transform={`translateY(${scroll}px)`} -->
<main>
	<div class="img-video-overlay-wrapper">
		<div id="video-background">
			{#if visible && videoURL}
				<!-- in:fade={{ duration: 400 }} -->
				<video autoplay loop muted>
					<source src={videoURL} type="video/mp4" />
					<track kind="captions" srclang="en" label="English" />
				</video>
			{/if}
			<div id="video-tint"></div>
		</div>

		<div role="img" id="image-container">
			{#if visible}
				<TheRiver />
				<div class="beauty-cta tab-radius">
					<ServiceButtons />
				</div>
			{/if}
		</div>
	</div>
	<div class="about app-layout">
		<h2 class="descriptionHeader gradientHeaders">Music Art Hair Nails</h2>
		<p>Let's <span class="lobster">flow</span> together.</p>
		<div class="socials">
			<Socials />
		</div>
	</div>
	<a href="/music" class="marquee">
		<Marquee display={'NEW RELEASE - Out The Mud -'} />
	</a>
	<!-- <main>
		<article class="glower" data-glow>
			<div data-glow></div>
		</article>
		<article class="glower" data-glow>
			<div data-glow></div>
		</article>
	</main> -->
	<section>
		{#each articles as article, i}
			<GenericCard.Root class={i % 2 === 0 ? 'option1' : 'option2'}>
				<a href={article.link} target="_blank" class="articleLink" rel="noopener">
					<div
						class="app-layout articleWrapper"
						style="display: flex; flex-direction: {i % 2 === 0
							? 'row'
							: 'row-reverse'}; justify-content: space-between; align-items: center;">
						<GenericCard.Header class="mobilePad">
							<GenericCard.Title class="funText">
								{article.articleTitle}
							</GenericCard.Title>
							<GenericCard.Description>
								{article.description}
							</GenericCard.Description>
						</GenericCard.Header>
						<GenericCard.Content class="noPadding">
							<img
								class="crop"
								height="600px"
								width="600px"
								loading="lazy"
								src={article.img}
								alt={article.articleTitle} />
						</GenericCard.Content>
					</div>
				</a>
			</GenericCard.Root>
		{/each}
	</section>
	<div class="beauty app-layout">
		<h2 class="descriptionHeader gradientHeaders">Merch</h2>
		<p>Get some.</p>
		<a
			class="hairLink"
			href="https://www.etsy.com/shop/TheRiverDesign"
			target="_blank"
			rel="noopener">
			<button class="primary">Etsy</button>
		</a>
	</div>
	<HomeGallery />
</main>

<style>
	/* ELEMENTS */
	video {
		width: 100%;
		height: 100%;
		object-fit: cover; /* Ensure the video covers the entire area */
	}
	/* CLASSES */
	.marquee:hover {
		text-decoration: none;
	}
	.lobster {
		color: var(--link);
		font-family: 'Lobster', cursive;
	}
	.about,
	.beauty {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--size-5);
		margin-block: var(--size-content-1);
		& p {
			font-style: normal;
			font-weight: 400;
			font-size: var(--font-size-3);
			line-height: var(--font-lineheight-4);
			font-family: 'Ambit Light';
			text-align: center;
			text-transform: none;
		}
		& button {
			min-width: var(--size-content-1);
		}
	}
	.beauty-cta {
		display: flex;
		position: absolute;
		right: 0;
		bottom: 0;
		flex-direction: column;
		align-items: center;
		gap: var(--size-2);
		margin: var(--size-2);
		font-variant: small-caps;
	}
	.img-video-overlay-wrapper {
		position: relative;
		z-index: 1;
		height: calc(100vh - var(--nav-height));
	}
	.articleLink {
		text-decoration: none;
		& img {
			-webkit-transition: 0.3s ease-in-out;
			transition: 0.3s ease-in-out;
			transition-delay: var(--transition-delay-1);
		}
	}
	.articleLink:hover {
		& img {
			-webkit-transform: scale(1.05);
			transform: scale(1.05);
		}
	}
	.socials {
		margin-block-start: var(--size-4);
	}
	/* IDS */
	#video-background {
		position: relative;
		height: 100%; /* Make the video background take up the full height of the wrapper */
	}
	#image-container {
		display: flex;
		position: absolute;
		top: 0;
		left: 0;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		z-index: 2; /* Ensure it is above the video */
		width: 100%;
		height: 100%;
	}
	#video-tint {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1; /* Ensure it is above the video but below the text */
		background: rgba(0, 0, 0, 0.5); /* Optional: Add a tint over the video */
		width: 100%;
		height: calc(100% + 1px);
	}
	@media (max-width: 768px) {
		.articleWrapper {
			display: flex;
			flex-direction: column !important;
			padding-block-end: var(--size-9);
		}
		#image-container {
			gap: var(--size-7);
			height: 100%;
		}
		.img-video-overlay-wrapper {
			height: 65vh;
		}
		.about,
		.beauty {
			margin-block: var(--size-9);
		}
		.beauty-cta {
			position: unset;
			flex-direction: column;
		}
		.descriptionHeader {
			font-size: var(--size-9);
		}
	}

	/* **** GLOW HSIZZ */
	/* :root {
		--backdrop: hsl(0 0% 60% / 0.12);
		--radius: 14;
		--border: 3;
		--backup-border: var(--backdrop);
		--size: 200;
	}

	.glower:first-of-type {
		--base: 80;
		--spread: 500;
		--outer: 1;
	}
	.glower:last-of-type {
		--outer: 1;
		--base: 220;
		--spread: 200;
	}

	.glower {
		display: grid;
		position: relative;
		grid-template-rows: 1fr auto;
		gap: 1rem;
		backdrop-filter: blur(calc(var(--cardblur, 5) * 1px));
		box-shadow: 0 1rem 2rem -1rem black;
		border-radius: calc(var(--radius) * 1px);
		padding: 1rem;
		aspect-ratio: 3 / 4;
		width: 260px;
	}
	[data-glow] {
		--border-size: calc(var(--border, 2) * 1px);
		--spotlight-size: calc(var(--size, 150) * 1px);
		--hue: calc(var(--base) + (var(--xp, 0) * var(--spread, 0)));
		position: relative;
		border: var(--border-size) solid var(--backup-border);
		background-image: radial-gradient(
			var(--spotlight-size) var(--spotlight-size) at calc(var(--x, 0) * 1px) calc(var(--y, 0) * 1px),
			hsl(
				var(--hue, 210) calc(var(--saturation, 100) * 1%) calc(var(--lightness, 70) * 1%) /
					var(--bg-spot-opacity, 0.1)
			),
			transparent
		);
		background-position: 50% 50%;
		background-size: calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)));
		background-attachment: fixed;
		background-color: var(--backdrop, transparent);
		touch-action: none;
	}

	[data-glow]::before,
	[data-glow]::after {
		position: absolute;
		mask: linear-gradient(transparent, transparent), linear-gradient(white, white);
		mask-clip: padding-box, border-box;
		mask-composite: intersect;
		inset: calc(var(--border-size) * -1);
		border: var(--border-size) solid transparent;
		border-radius: calc(var(--radius) * 1px);
		background-position: 50% 50%;
		background-size: calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)));
		background-repeat: no-repeat;
		background-attachment: fixed;
		pointer-events: none;
		content: '';
	}
	[data-glow]::before {
		filter: brightness(2);
		background-image: radial-gradient(
			calc(var(--spotlight-size) * 0.75) calc(var(--spotlight-size) * 0.75) at
				calc(var(--x, 0) * 1px) calc(var(--y, 0) * 1px),
			hsl(
				var(--hue, 210) calc(var(--saturation, 100) * 1%) calc(var(--lightness, 50) * 1%) /
					var(--border-spot-opacity, 1)
			),
			transparent 100%
		);
	}
	[data-glow]::after {
		background-image: radial-gradient(
			calc(var(--spotlight-size) * 0.5) calc(var(--spotlight-size) * 0.5) at calc(var(--x, 0) * 1px)
				calc(var(--y, 0) * 1px),
			hsl(0 100% 100% / var(--border-light-opacity, 1)),
			transparent 100%
		);
	}
	[data-glow] [data-glow] {
		position: absolute;
		opacity: var(--outer, 1);
		will-change: filter;
		inset: 0;
	}
	[data-glow] > [data-glow] {
		filter: blur(calc(var(--border-size) * 10));
		border-width: calc(var(--border-size) * 20);
		border-radius: calc(var(--radius) * 1px);
		background: none;
		pointer-events: none;
	}
	[data-glow] > [data-glow]::before {
		inset: -10px;
		border-width: 10px;
	}
	[data-glow] [data-glow] {
		border: none;
	}
	[data-glow] :is(:global(a, button)) {
		border: var(--border-size) solid transparent;
		border-radius: calc(var(--radius) * 1px);
	}
	[data-glow] :is(:global(a, button)) [data-glow] {
		background: none;
	}
	[data-glow] :is(:global(a, button)) [data-glow]::before {
		inset: calc(var(--border-size) * -1);
		border-width: calc(var(--border-size) * 1);
	} */
</style>
