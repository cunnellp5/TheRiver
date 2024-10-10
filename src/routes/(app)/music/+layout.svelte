<!-- leaving below just in case i dont want to scroll on nav -->
<!-- data-sveltekit-noscroll -->
<script lang="ts">
	import { page } from '$app/stores';
	import NavButton from '$lib/components/ui/button/NavButton.svelte';
	import type { LayoutData } from './$types';
	import Hero from './Hero.svelte';
	import { ShowHideScroll } from '$lib/utils/classes/ShowHideScroll';
	import Featured from './Featured.svelte';
	import Marquee from '$lib/components/ui/Marquee.svelte';

	export let data: LayoutData;
	const { about } = data;

	const CssScrollToggler = new ShowHideScroll();
	let scroll: number;
	let includesTracks: boolean;
	let includesStems: boolean;
	let includesVideos: boolean;

	$: {
		includesTracks = $page.url.pathname === '/music';
		includesStems = $page.url.pathname === '/music/video';
		includesVideos = $page.url.pathname === '/music/stems';
	}
</script>

<svelte:window bind:scrollY={scroll} />

<main class="grid-container">
	<Hero />

	<Marquee display={'NEW RELEASE - Out The Mud -'} />

	<Featured />
	<!-- {#if about.isShowing}
		<p>
			{about.text}
		</p>
	{/if} -->

	<section class="music-content app-layout">
		<div
			class={`links ${CssScrollToggler.updateClass(scroll)}`}
			use:CssScrollToggler.setTransitionDuration>
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
		top: calc(var(--nav-height));
	}
	.hide {
		top: 2px;
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
