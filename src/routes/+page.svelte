<script lang="ts">
	import { fade } from 'svelte/transition';
	// import LogoWhite from '$lib/components/svgs/logos/LogoWhite.svelte';
	import { onMount } from 'svelte';
	import { CldImage } from 'svelte-cloudinary';
	// import Card from '$lib/components/ui/Card.svelte';
	import * as GenericCard from '$lib/components/ui/shadcn/card';
	import TestVideo from './components/TestVideo.svelte';
	import TheRiver from './components/TheRiver.svelte';
	import Marquee from '$lib/components/ui/Marquee.svelte';

	export let data;

	const { videoURL, articles } = data;

	let isPlaying = true;

	let visible = false;

	let videoElement: HTMLVideoElement;

	function playVideo() {
		videoElement.play();
		isPlaying = true;
	}

	function pauseVideo() {
		videoElement.pause();
		isPlaying = false;
	}

	onMount(() => {
		visible = true;

		// window.addEventListener('scroll', () => {
		// 	videoElement.style.objectPosition = `0px ${window.pageYOffset * 0.5}px`;
		// });
	});
</script>

<title>The River</title>
<main>
	<div class="img-video-overlay-wrapper">
		<div id="video-background">
			{#if visible}
				<video in:fade={{ duration: 800, delay: 600 }} autoplay loop muted bind:this={videoElement}>
					<source src={videoURL} type="video/mp4" />
					<track kind="captions" srclang="en" label="English" />
				</video>
			{/if}
			<div id="video-tint"></div>
		</div>

		<!-- on:mouseenter={playVideo}
		on:mouseleave={pauseVideo} -->
		<div role="img" aria-label={isPlaying ? 'Play video' : 'Pause video'} id="image-container">
			<!-- <LogoWhite isHomePage={true} /> -->
			{#if visible}
				<!-- <div class="app-layout"> -->
				<TheRiver />
				<!-- </div> -->
			{/if}
		</div>
	</div>
	<Marquee />
	<section class="articlesRoot">
		{#each articles as article, i}
			<!-- <Card
					articleImage={article.img}
					articleTitle={article.articleTitle}
					description={article.description}
					link={article.link}
					author={article.author}>
				</Card> -->

			<GenericCard.Root class={i % 2 === 0 ? 'option1' : 'option2'}>
				<div class="app-layout articleWrapper">
					<GenericCard.Header>
						<GenericCard.Title>
							{article.articleTitle}
						</GenericCard.Title>
						<GenericCard.Description>
							{article.description}
						</GenericCard.Description>
					</GenericCard.Header>
					<GenericCard.Content class="noPadding">
						<CldImage height="450px" width="450px" src={article.img} alt={article.articleTitle} />
					</GenericCard.Content>
					<!-- <GenericCard.Footer></GenericCard.Footer> -->
				</div>
			</GenericCard.Root>
		{/each}
	</section>
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
	.img-video-overlay-wrapper {
		position: relative;
		z-index: 1; /* Ensure it is below the nav */
		height: 100vh; /* Make the wrapper take up the full height of the viewport */
	}
	/* .articlesRoot {
		width: 100%;
	} */
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
