<script lang="ts">
	import { fade } from 'svelte/transition';
	// import LogoWhite from '$lib/components/svgs/logos/LogoWhite.svelte';
	import { onMount } from 'svelte';
	import { CldImage } from 'svelte-cloudinary';
	// import Card from '$lib/components/ui/Card.svelte';
	import Socials from './components/footer/Socials.svelte';
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
	<div class="about">
		<h2>About</h2>
		<p>
			Welcome to The River, where beauty meets creativity. I’m a beauty expert, singer, and creator
			passionate about helping you embrace your unique style. Whether it's through my beauty
			services, music, or custom merch, I'm here to inspire and empower. Explore my world, connect,
			and discover the art of being your true self.
		</p>
		<!-- <p>
			Welcome to The River, where <a href="/services">beauty</a>, music, and creativity flow
			together. I'm not just a beauty expert—I'm an artist, a singer, and a creator with a passion
			for expressing the essence of who we are. Whether I'm crafting the perfect look, writing a new
			song, or designing unique <a href="/shop">merch</a>, my goal is to inspire and empower you to
			embrace your own unique style and spirit.
		</p>
		<p>
			At The River, beauty isn't just skin deep. It's an experience that starts with self-love and
			radiates outward. My services are tailored to bring out your natural glow, while my <a
				href="/music">music</a>
			and <a href="/music/video">videos</a> are crafted to uplift and move you. Each piece of
			<a href="/shop">merch</a> is designed with care, reflecting the same creativity and passion that
			I pour into everything I do.
		</p>
		<p>
			This is more than just a brand—it's a journey. Join me on the <a href="/blog">blog</a>, where
			I share tips, stories, and inspiration. Whether you're here for a beauty transformation, a new
			soundtrack, or just to connect, The River is a place where you can be your authentic self.
		</p> -->
		<p>Let’s flow together.</p>
		<div class="socials">
			<Socials />
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
							<CldImage
								height="600px"
								width="600px"
								src={article.img}
								alt={article.articleTitle}
								crop="fill" />
						</GenericCard.Content>
						<!-- <GenericCard.Footer></GenericCard.Footer> -->
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
	/* a { */
	/* color: var(--sand-2); */
	/* } */
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
