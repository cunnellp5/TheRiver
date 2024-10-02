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

	export let data;

	// let scroll: number;

	const { videoURL, articles, about } = data;

	// const isPlaying = true;
	let visible = false;

	onMount(() => {
		visible = true;
	});
</script>

<!-- <svelte:window bind:scrollY={scroll} /> -->

<Seo
	title={'Music, Beauty Services, Blog & Fashion - The River | Alexis'}
	description={'Discover The River: A multifaceted artist offering music, beauty services, fashion, and more. Explore her latest tracks, music videos, blog, and unique handmade jewelry and clothing.'} />
<!-- style:transform={`translateY(${scroll}px)`} -->
<main>
	<div class="img-video-overlay-wrapper">
		<div id="video-background">
			{#if visible && videoURL}
				<video in:fade={{ duration: 800, delay: 600 }} autoplay loop muted>
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
		<h2 class="descriptionHeader">Music Art Hair Nails</h2>
		<p>Let's <span class="lobster">flow</span> together.</p>
		<div class="socials">
			<Socials />
		</div>
	</div>
	<Marquee />
	<section>
		{#each articles as article, i}
			<GenericCard.Root class={i % 2 === 0 ? 'option1' : 'option2'}>
				<a href={article.link} target="_blank" class="articleLink" rel="noopener">
					<div class="app-layout articleWrapper">
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
								src={article.img}
								alt={article.articleTitle} />
						</GenericCard.Content>
					</div>
				</a>
			</GenericCard.Root>
		{/each}
	</section>
	<div class="beauty app-layout">
		<h2 class="descriptionHeader">Merch</h2>
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
</style>
