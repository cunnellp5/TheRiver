<script lang="ts">
	import { onMount } from 'svelte';
	import TheRiver from '$lib/components/svgs/logos/TheRiver.svelte';
	import LogoR from '$lib/components/svgs/logos/LogoR2.svelte';
	import ServiceButtons from '$lib/components/ui/button/ServiceButtons.svelte';

	let { videoURL } = $props();
	let scroll: number = $state(0);
	let visible = $state(false);
	onMount(() => {
		visible = true;
	});
</script>

<svelte:window bind:scrollY={scroll} />

<section class="img-video-overlay-wrapper">
	<!-- <img
		src="https://images.unsplash.com/photo-1492931307820-62fa5a68e0df?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTU2Njk3MDN8&ixlib=rb-4.0.3&q=85"
		alt=""
		class="object-cover scale-105"
		style:object-position={`center ${40 + scroll / 35}%`}
		style="filter: url(#filter);" />

    <svg viewBox="0 0 0 0" fill="none" class="size-0">
    	<defs>
    		<filter id="filter">
    			<feTurbulence
    				id="turbulence-filter"
    				type="fractalNoise"
    				baseFrequency=".03"
    				numOctaves="1"
    				result="noise" />
    			<feDisplacementMap
    				in="SourceGraphic"
    				in2="noise"
    				scale="20"
    				xChannelSelector="B"
    				yChannelSelector="G" />
    		</filter>

    		<animate
    			id="anim1"
    			xlink:href="#turbulence-filter"
    			attributeName="baseFrequency"
    			from=".03"
    			to=".033"
    			dur="3s"
    			begin="0s; anim2.end"
    			fill="freeze" />
    		<animate
    			id="anim2"
    			xlink:href="#turbulence-filter"
    			attributeName="baseFrequency"
    			from=".033"
    			to=".03"
    			dur="3s"
    			begin="anim1.end"
    			fill="freeze" />
    	</defs>
    </svg> -->
    <div role="img" id="image-container">
    	{#if visible}
    		<div class="hideMainLogo">
    			<TheRiver />
    		</div>
    		<div class="miniLogo">
    			<LogoR />
    		</div>
    		<div class="beauty-cta">
    			<ServiceButtons />
    		</div>
    	{/if}
    </div>

</section>

<style>
	/* ELEMENTS */
	/* video, */
	img {
		/* filter: grayscale(80%); */
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	/* CLASSES */
	.beauty-cta {
		display: flex;
		position: unset;
		right: 0;
		bottom: 0;
		flex-direction: column;
		align-items: center;
		gap: var(--size-2);
		margin: var(--size-4);
		font-variant: small-caps;
	}
	.img-video-overlay-wrapper {
		position: relative;
		z-index: 1;
		/* height: calc(100vh - var(--nav-height)); */
		height: var(--size-content-3);
	}
	/* IDS */
	/* #video-background {
		position: relative;
		height: 100%;
	} */
	#image-container {
		display: flex;
		position: absolute;
		top: 0;
		left: 0;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		z-index: 2; /* Ensure it is above the video */
		width: 100%;
		height: 100%;
	}
	/* #video-tint {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
		background: rgba(0, 0, 0, 0.6);
		width: 100%;
		height: calc(100% + 1px);
	} */

	@media (min-width: 768px) {
		.miniLogo {
			display: none;
		}
	}

	@media (max-width: 768px) {
		#image-container {
			gap: var(--size-7);
			height: 100%;
		}
		.img-video-overlay-wrapper {
			height: 65vh;
		}
		.hideMainLogo {
			display: none;
		}
	}
</style>
