<script lang="ts">
	import BlogMentions from '$lib/components/BlogMentions.svelte';
	import TestVideo from '$lib/components/TestVideo.svelte';
	import LogoWhite from '$lib/components/svgs/logos/LogoWhite.svelte';

	export let data; // gets url from .server
	let isPlaying = true;

	let videoElement: HTMLVideoElement;

	function playVideo() {
		videoElement.play();
		isPlaying = true;
	}
	function pauseVideo() {
		videoElement.pause();
		isPlaying = false;
	}
</script>

<title>The River</title>

<main>
	<div id="video-background">
		<video autoplay loop muted bind:this={videoElement}>
			<source src={data.videoURL} type="video/mp4" />
			<track kind="captions" srclang="en" label="English" />
		</video>
		<div id="video-tint"></div>
	</div>

	<div
		role="img"
		aria-label={isPlaying ? 'Play video' : 'Pause video'}
		id="image-container"
		on:mouseenter={playVideo}
		on:mouseleave={pauseVideo}
	>
		<LogoWhite isHomePage={true} />
	</div>

	<TestVideo />

	<BlogMentions />
</main>

<style>
	#video-background {
		position: absolute;
		right: 0;
		bottom: 0;
		min-width: 100%;
		min-height: 100%;
		width: auto;
		height: auto;
		z-index: -100;
	}

	#video-tint {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5); /* Black tint with 50% opacity */
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
</style>
