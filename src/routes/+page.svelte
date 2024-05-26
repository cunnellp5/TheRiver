<script lang="ts">
	import { fade } from 'svelte/transition';
	// import LogoWhite from '$lib/components/svgs/logos/LogoWhite.svelte';
	import { onMount } from 'svelte';
	import BlogMentions from './components/BlogMentions.svelte';
	import TestVideo from './components/TestVideo.svelte';
	import TheRiver from './components/TheRiver.svelte';

	export let data;
	const { videoURL } = data;

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
	});
</script>

<title>The River</title>

<main>
	<div id="video-background">
		{#if visible}
			<video
				class="zoom"
				in:fade={{ duration: 800, delay: 600 }}
				autoplay
				loop
				muted
				bind:this={videoElement}>
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
			<TheRiver />
		{/if}
	</div>

	<TestVideo />

	<BlogMentions />
</main>

<style>
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
		backdrop-filter: blur(3px);
		background: rgba(0, 0, 0, 0.6); /* Black tint with 50% opacity */
		width: 100%;
		height: 100%;
	}

	#image-container {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	video {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.zoom {
		animation: zoom 20s 1;
	}

	@keyframes zoom {
		0% {
			transform: scale(1);
		}
		100% {
			transform: scale(1.1);
		}
	}
	/* 
	@keyframes psychedelic {
		from {
			filter: hue-rotate(0deg);
		}
		to {
			filter: hue-rotate(360deg);
		}
	} */
</style>
