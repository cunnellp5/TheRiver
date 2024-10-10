<!-- leaving below just in case i dont want to scroll on nav -->
<!-- data-sveltekit-noscroll -->
<script lang="ts">
	import { page } from '$app/stores';
	import NavButton from '$lib/components/ui/button/NavButton.svelte';
	import type { LayoutData } from './$types';
	import Hero from './Hero.svelte';

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

<main class="grid-container">
	<Hero />
	<!-- {#if about.isShowing}
		<p>
			{about.text}
		</p>
	{/if} -->

	<section class="music-content app-layout">
		<nav class="links">
			<NavButton route="/music" display="tracks" active={includesTracks} borderStyle="horizontal" />
			<NavButton
				route="/music/video"
				display="videos"
				active={includesStems}
				borderStyle="horizontal" />
			<NavButton
				route="/music/stems"
				display="stems"
				active={includesVideos}
				borderStyle="horizontal" />
		</nav>
		<slot></slot>
	</section>
</main>

<style>
	/* ELEMENTS */
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
	.grid-container {
		display: flex;
		flex-direction: column;
		width: 100%;
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
