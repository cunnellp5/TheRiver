<script lang="ts">
	import BlogMentions from '$lib/components/BlogMentions.svelte';
	import TestVideo from '$lib/components/TestVideo.svelte';
	import { fade, draw, fly } from 'svelte/transition';
	// import LogoWhite from '$lib/components/svgs/logos/LogoWhite.svelte';
	import { onMount } from 'svelte';

	export let data; // gets url from .server

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
				in:fade={{ duration: 800, delay: 600 }}
				autoplay
				loop
				muted
				bind:this={videoElement}
			>
				<source src={data.videoURL} type="video/mp4" />
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
		on:mouseleave={pauseVideo}
	>
		<!-- <LogoWhite isHomePage={true} /> -->
		{#if visible}
			<svg
				width="306.91666mm"
				height="94.191666mm"
				viewBox="0 0 306.91666 94.191666"
				version="1.1"
				id="svg1"
				xmlns="http://www.w3.org/2000/svg"
				class="shadow homePage"
			>
				<g id="layer1" transform="translate(38.893751,-126.47083)">
					<g
						id="g6"
						transform="matrix(0.26458333,0,0,0.26458333,-150.01875,50.270833)"
					>
						<!-- T -->
						<polygon
							in:fly|once={{ duration: 700, x: -400 }}
							class="shadow homePage"
							points="655.8,362 655.9,361 547.5,361 544.2,392 544.3,392 544.2,393 577.9,393 559.2,570 559.3,570 559.2,571 601,571 619.7,393 652.8,393 655.9,362 "
							id="T"
						/>
						<!-- HE -->
						<polygon
							in:fly|once={{ duration: 700, x: -400, delay: 70 }}
							class="shadow homePage"
							points="772.6,571 782.5,477 813.4,477 803.6,570 803.7,570 803.6,571 894.7,571 897.7,543 897.5,543 897.7,542 848.5,542 855.3,477 884,477 893.3,477 896.2,448 896.2,448 896.3,447 858.5,447 864.3,391 912.9,391 916,362 915.9,362 916,361 825.6,361 816.5,448 785.6,448 794.6,362 794.5,362 794.6,361 752.8,361 743.9,447 706,447 714.8,362 714.7,362 714.8,361 673.1,361 651.1,570 651.2,570 651.1,571 692.8,571 702.7,478 740.7,478 730.9,570 731,570 730.9,571 "
							id="HE"
						/>
						<!-- R -->
						<path
							in:fly|once={{ duration: 700, x: 400 }}
							class="shadow homePage"
							d="m 953,467 h 33.3 l 30.7,103 h 19.4 L 1004,463.2 c 19.4,-4 29.1,-20.4 29.1,-49.3 0,-17.3 -4,-30.5 -12,-39.4 -8,-9 -21.3,-13.5 -39.9,-13.5 H 934 v 209 h 19 z m 0,-91 h 27.7 c 12.7,0 21.4,2.9 26.1,8.9 4.7,6 7.1,15.7 7.1,29.1 0,13.6 -2.5,23.5 -7.4,29.7 -5,6.2 -13.8,9.3 -26.4,9.3 H 953 Z"
							id="R"
						/>
						<!-- I -->
						<polygon
							in:fly|once={{ duration: 700, x: 400, delay: 70 }}
							class="shadow homePage"
							points="1097.3,362 1077.7,362 1055.9,571 1075.5,571 "
							id="I"
						/>
						<!-- V -->
						<polygon
							in:fly|once={{ duration: 700, x: 400, delay: 140 }}
							class="shadow homePage"
							points="1225.5,361 1206.9,361 1169.7,534.1 1130.2,361 1111.4,361 1160.4,570 1178.3,570 "
							id="V"
						/>
						<!-- E -->
						<polygon
							in:fly|once={{ duration: 700, x: 400, delay: 210 }}
							class="shadow homePage"
							points="1325,361 1250,361 1250,570 1326,570 1326,556 1270,556 1270,469 1315,469 1315,455 1270,455 1270,376 1325,376 "
							id="E"
						/>
						<!-- R -->
						<path
							in:fly|once={{ duration: 700, x: 400, delay: 280 }}
							class="shadow homePage"
							d="m 1372.5,570 30.7,-103 h 32.8 v 103 h 20 V 361 h -47.8 c -18.6,0 -31.9,4.5 -39.9,13.5 -8,9 -12,22.1 -12,39.5 0,28.9 9.7,45.2 29.1,49.2 L 1353.1,570 Z M 1383,443.7 c -5,-6.2 -7.4,-16.1 -7.4,-29.7 0,-13.5 2.4,-23.1 7.1,-29.1 4.7,-6 13.4,-8.9 26.1,-8.9 h 27.3 v 77 h -26.7 c -12.7,0 -21.5,-3.1 -26.4,-9.3 z"
							id="R"
						/>
						<!-- OUTLINE -->
						<path
							in:draw={{ duration: 1400 }}
							style="stroke:#ffffff; fill: none"
							class="shadow homePage"
							d="M 420,288 V 644 H 1580 V 288 Z M 1560,624 H 440 V 308 h 1120 z"
							id="OUTLINE"
						/>
						<path
							in:fade={{ duration: 1400, delay: 700 }}
							style="stroke:#ffffff; fill: white"
							class="shadow homePage"
							d="M 420,288 V 644 H 1580 V 288 Z M 1560,624 H 440 V 308 h 1120 z"
							id="OUTLINE"
						/>
					</g>
				</g>
			</svg>
		{/if}
	</div>

	<TestVideo />

	<BlogMentions />
</main>

<style>
	.homePage {
		fill: white;
	}

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
		background: rgba(0, 0, 0, 0.6); /* Black tint with 50% opacity */
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
