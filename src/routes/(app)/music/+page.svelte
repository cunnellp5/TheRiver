<script lang="ts">
	import { onMount } from 'svelte';
	import Seo from '$lib/components/SEO.svelte';
	import tracks from './TRACKS';
	import { IFrameLoader } from '$lib/utils/classes/IFrameLoader';

	onMount(() => {
		const iframes = document.querySelectorAll('iframe');
		new IFrameLoader().loadIframesInChunks(iframes, 0);
	});
</script>

<Seo
	title={'Listen to the Latest Tracks by The River | Alexis'}
	description={"Dive into the soul of The River's music. Listen to her latest tracks, watch mesmerizing music videos, and experience the artistry that flows through every note."} />
<!-- card stacking effect tut -->
<!-- https://codyhouse.co/tutorials/how-stacking-cards -->
<div class="grid-container">
	<div id="tracks" class="tracks">
		{#each tracks as track}
			<iframe
				title={track.title}
				data-src={track.url}
				width="100%"
				height="300"
				scrolling="no"
				frameborder="no"
				loading="lazy">
			</iframe>
		{/each}
	</div>
</div>

<style>
	/* ELEMENTS */
	iframe {
		box-shadow: var(--shadow-1);
		width: 100%;
		min-width: var(--size-content-1);
		height: var(--size-content-2);
	}

	/* CLASSES */
	.grid-container {
		display: grid;
		/* margin-block: var(--size-7); */
	}
	.tracks {
		display: grid;
		grid-template-columns: repeat(3, 1fr); /* 3 columns */
		grid-auto-rows: minmax(100px, auto); /* Set a base row height */
		gap: var(--size-7);
	}

	/* MEDIA QUERIES */
	@media (max-width: 1440px) {
		.tracks {
			grid-template-columns: repeat(2, 1fr); /* 2 columns */
		}
	}
	@media (max-width: 768px) {
		.tracks {
			grid-template-columns: repeat(1, 1fr); /* 1 column */
		}
	}
</style>
