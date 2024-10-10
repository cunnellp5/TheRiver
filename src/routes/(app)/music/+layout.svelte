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

	let duration = '300ms';
	let offset = 50;
	let tolerance = 5;
	let headerClass = 'show';
	let lastY = 0;

	function deriveClass(y: number, dy: number) {
		if (y < offset) {
			return 'show';
		}
		if (Math.abs(dy) <= tolerance) {
			return headerClass;
		}
		if (dy > 0) {
			return 'show';
		}
		return 'hide';
	}

	function updateClass(y: number) {
		const dy = lastY - y;
		lastY = y;
		return deriveClass(y, dy);
	}

	function setTransitionDuration(node: HTMLDivElement) {
		node.style.transitionDuration = duration;
	}

	$: {
		headerClass = updateClass(scroll);
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
		<!-- class:show={headerClass === 'show'} class:hide={headerClass === 'hide'} -->
		<div class={`links ${headerClass}`} use:setTransitionDuration>
			<NavButton route="/music" display="tracks" active={includesTracks} />
			<NavButton route="/music/video" display="videos" active={includesStems} />
			<NavButton route="/music/stems" display="stems" active={includesVideos} />
		</div>
		<slot></slot>
	</section>
</main>

<style>
	/* ELEMENTS */
	.links {
		display: flex;
		position: sticky;
		align-self: start; /* Ensure it aligns to the start of the container */
		gap: var(--size-4);
		z-index: var(--layer-important);
		backdrop-filter: blur(20px);
		margin-bottom: var(--size-4);
		border-bottom: 1px solid var(--stone-11);
		/* border-radius: var(--radius-2); */
		padding: var(--size-5);
		color: var(--stone-4);
		list-style: none;
	}
	.music-content {
		width: 100%;
	}
	.grid-container {
		display: flex;
		flex-direction: column;
		width: 100%;
	}

	.show {
		/* position: sticky; */
		top: calc(var(--nav-height));
		/* transform: translateY(0%); */
	}
	.hide {
		/* transform: translateY(100%); */
		top: 2px;
		/* position: sticky; */
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
