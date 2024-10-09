<!-- leaving below just in case i dont want to scroll on nav -->
<!-- data-sveltekit-noscroll -->
<script lang="ts">
	import { page } from '$app/stores';
	import NavButton from '$lib/components/ui/button/NavButton.svelte';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
	const { about } = data;

	let includesTracks: boolean;
	let includesStems: boolean;
	let includesVideos: boolean;

	let scroll: number;

	$: {
		includesTracks = $page.url.pathname === '/music';
		includesStems = $page.url.pathname === '/music/video';
		includesVideos = $page.url.pathname === '/music/stems';
	}
</script>

<svelte:window bind:scrollY={scroll} />

<main class="grid-container gutter">
	<section class="title">
		<div class="text-wrapper overlayText">
			<h1 class="headingReset">The River Sings</h1>
		</div>
		<img
			src="https://res.cloudinary.com/dswpu3qez/image/upload/c_fill,g_auto/v1728513945/backgrounds/outtheMudcollage_ca2zam.webp"
			class="main-image__img"
			alt="The River tracks collage"
			style:object-position={`center ${40 + scroll / 35}%`} />
	</section>
	<!-- {#if about.isShowing}
		<p>
			{about.text}
		</p>
	{/if} -->

	<section class="music-content app-layout">
		<nav class="links">
			<NavButton route="/music" display="tracks" active={includesTracks} borderStyle="horizontal" />
			<!-- <a href="/music" class:current={$page.url.pathname === '/music'}>Tracks</a> -->
			<NavButton
				route="/music/video"
				display="videos"
				active={includesStems}
				borderStyle="horizontal" />
			<!-- <a href="/music/video" class:current={$page.url.pathname === '/music/video'}>Videos</a> -->
			<NavButton
				route="/music/stems"
				display="stems"
				active={includesVideos}
				borderStyle="horizontal" />
			<!-- <a href="/music/stems" class:current={$page.url.pathname === '/music/stems'}>Stems</a> -->
		</nav>
		<slot></slot>
	</section>
</main>

<style>
	/* ELEMENTS */
	p {
		color: var(--text-2);
	}
	h1 {
		font-style: normal;
		font-variant: small-caps;
		font-weight: var(--font-weight-4);
		font-size: var(--font-size-8);
		line-height: 1;
		font-family: 'Atyp BL Display Medium';
		letter-spacing: 0em;
	}
	/* CLASSES */
	.main-image__img {
		width: 100%;
		height: 100%;
		object-fit: cover; /* Ensures the image covers the container without shrinking */
		object-position: center 35%;
	}
	.links {
		display: flex;
		position: sticky;
		top: calc(var(--nav-height) + var(--size-3));
		flex-direction: column;
		align-self: start; /* Ensure it aligns to the start of the container */
		justify-self: start;
		gap: var(--size-3);
		border-radius: var(--radius-2);
		background-color: var(--sand-10);
		padding: var(--size-5);
		color: var(--stone-4);
		list-style: none;
	}
	.music-content {
		display: grid;
		grid-template-columns: 1fr 9fr;
		width: 100%;
	}
	.title {
		display: flex;
		position: relative;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: var(--size-4);
		margin-block: var(--nav-height);
		height: var(--size-content-3);
	}
	.overlayText {
		position: absolute;
		top: -3%;
		left: -2%;
		transform: translate(-50%, -50%);
		transform: rotate(-5deg);
		z-index: 1;
		animation: moveGradient 8s linear infinite;
		border-radius: var(--radius-2);

		background: linear-gradient(
			90deg,
			var(--life) 0%,
			var(--healing) 15%,
			var(--sunlight) 30%,
			var(--nature) 50%,
			var(--serenity) 65%,
			var(--spirit) 80%,
			var(--life) 100%
		);
		background-size: 200%;
		padding: var(--size-1);

		color: var(--stone-4);
	}
	h1 {
		border-radius: var(--radius-2);
		background-color: var(--stone-12);
		padding-inline: var(--size-6);
		padding-block: var(--size-2);
		font-size: var(--size-11);
	}
	.grid-container {
		display: flex;
		flex-direction: column;
		width: 100%;
	}
	.gutter {
		padding-inline: var(--size-7);
	}

	@keyframes moveGradient {
		0% {
			background-position: 0%;
		}
		100% {
			background-position: 200%;
		}
	}
</style>
