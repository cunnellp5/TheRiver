<script lang="ts">
	import Seo from '$lib/components/SEO.svelte';
	import Marquee from '$lib/components/ui/Marquee.svelte';
	import Socials from '$lib/components/ui/Socials.svelte';
	import * as GenericCard from '$lib/components/ui/shadcn/card';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import TestVideo from './components/TestVideo.svelte';
	import TheRiver from './components/TheRiver.svelte';

	export let data;
	const { videoURL, articles, about } = data;

	let isPlaying = true;
	let visible = false;

	onMount(() => {
		visible = true;
	});
</script>

<Seo
	title={'Music, Beauty Services, Blog & Fashion - The River | Alexis'}
	description={'Discover The River: A multifaceted artist offering music, beauty services, fashion, and more. Explore her latest tracks, music videos, blog, and unique handmade jewelry and clothing.'} />

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
			{/if}
		</div>
	</div>
	<div class="about app-layout">
		<h2>About</h2>
		<p>
			{about?.text}
		</p>
		<p>Let’s flow together.</p>
		<div class="socials">
			<Socials />
		</div>
	</div>
	<Marquee />
	<section>
		{#each articles as article, i}
			<GenericCard.Root class={i % 2 === 0 ? 'option1' : 'option2'}>
				<a href={article.link} target="_blank" class="articleLink">
					<div class="app-layout articleWrapper">
						<GenericCard.Header>
							<GenericCard.Title>
								{article.articleTitle}
							</GenericCard.Title>
							<GenericCard.Description class="bigger-text">
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
	<div class="beauty">
		<h2>Beauty Appointments</h2>
		<p>Schedule your appointment today.</p>
		<button class="primary">Book</button>
	</div>
	<TestVideo />
</main>

<style>
	/* ELEMENTS */
	video {
		width: 100%;
		height: 100%;
		object-fit: cover; /* Ensure the video covers the entire area */
	}
	/* CLASSES */
	.about,
	.beauty {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--size-5);
		margin-block: var(--size-content-1);
		/* text-align: center; */
		& p {
			font-weight: var(--font-weight-2);
			line-height: var(--font-lineheight-4);
			font-family: 'Roboto', sans-serif;
		}
	}
	.img-video-overlay-wrapper {
		position: relative;
		z-index: 1;
		height: 100vh;
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
		justify-content: center;
		align-items: center;
		z-index: 2; /* Ensure it is above the video */
		backdrop-filter: blur(1px);
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
		height: 100%;
	}
</style>
