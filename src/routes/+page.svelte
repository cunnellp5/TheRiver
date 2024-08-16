<script lang="ts">
	import { fade } from 'svelte/transition';
	// import LogoWhite from '$lib/components/svgs/logos/LogoWhite.svelte';
	import { onMount } from 'svelte';
	import Card from '$lib/components/ui/Card.svelte';
	import TestVideo from './components/TestVideo.svelte';
	import TheRiver from './components/TheRiver.svelte';
	// import Marquee from '$lib/components/ui/Marquee.svelte';

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

		window.addEventListener('scroll', () => {
			videoElement.style.objectPosition = `0px ${window.pageYOffset * 0.5}px`;
		});
	});
</script>

<title>The River</title>
<main>
	<div id="video-background">
		{#if visible}
			<video in:fade={{ duration: 800, delay: 600 }} autoplay loop muted bind:this={videoElement}>
				<source src={videoURL} type="video/mp4" />
				<track kind="captions" srclang="en" label="English" />
			</video>
		{/if}
		<div id="video-tint"></div>
	</div>

	<div
		role="img"
		aria-label={isPlaying ? 'Play video' : 'Pause video'}
		id="image-container"
		on:mouseenter={playVideo}
		on:mouseleave={pauseVideo}>
		<!-- <LogoWhite isHomePage={true} /> -->
		{#if visible}
			<!-- <div class="app-layout"> -->
			<TheRiver />
			<!-- </div> -->
		{/if}
	</div>
	<TestVideo />

	<div class="app-layout">
		<section class="article-wrapper">
			{#each articles as article}
				<Card
					articleImage={article.img}
					articleTitle={article.articleTitle}
					description={article.description}
					link={article.link}
					author={article.author}>
				</Card>
			{/each}
		</section>
	</div>
	<!-- <Marquee /> -->
</main>

<style>
	video {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	#video-background {
		position: absolute;
		right: 0;
		bottom: 0;
		z-index: -100;
		width: auto;
		min-width: 100%;
		height: auto;
		min-height: 100%;
		overflow: hidden;
	}

	#video-tint {
		position: absolute;
		top: 0;
		left: 0;
		/* backdrop-filter: blur(3px); keeping here in case i do want to blur the background */
		background: rgba(0, 0, 0, 0.6);
		width: 100%;
		height: 100%;
	}

	#image-container {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 93.5vh;
	}

	/* 
	.zoom {
		animation: zoom 20s;
		animation-fill-mode: forwards;
	} */
	/* 
	@keyframes zoom {
		from {
			transform: scale(1);
		}
		to {
			transform: scale(1.1);
		}
	} */

	/* @keyframes psychedelic {
		from {
			filter: hue-rotate(0deg);
		}
		to {
			filter: hue-rotate(360deg);
		}
	} */
</style>
