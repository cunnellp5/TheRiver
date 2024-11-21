<script lang="ts">
	import { onMount } from 'svelte';
	import Seo from '$lib/components/SEO.svelte';

	export let data;
	const { pages } = data;

	let disabledNext = false;
	let disabledPrevious = true;
	let currentPage = 0;
	$: {
		disabledNext = currentPage === pages.length - 1;
		disabledPrevious = currentPage === 0;
	}
</script>

<Seo
	title={'Listen to the Latest Tracks by The River | Alexis'}
	description={"Dive into the soul of The River's music. Listen to her latest tracks, watch mesmerizing music videos, and experience the artistry that flows through every note."} />
<!-- card stacking effect tut -->
<!-- https://codyhouse.co/tutorials/how-stacking-cards -->
<div class="grid-container">
	<div id="tracks" class="tracks">
		{#each pages[currentPage] as track}
			<iframe
				title={track.title}
				src={track.url}
				width="100%"
				height="300"
				scrolling="no"
				frameborder="no">
			</iframe>
		{/each}
	</div>
	{currentPage + 1} / {pages.length}
	<div class="buttonWrapper">
		<button
			on:click={() => (currentPage = currentPage - 1)}
			disabled={disabledPrevious}
			class:disabled={disabledPrevious}>
			Previous
		</button>
		<button
			on:click={() => (currentPage = currentPage + 1)}
			class:disabled={disabledNext}
			disabled={disabledNext}>
			Next
		</button>
	</div>
</div>

<style>
	/* ELEMENTS */
	iframe {
		/* box-shadow: var(--shadow-1); */
		width: 100%;
		/* min-width: var(--size-content-1); */
		height: var(--size-content-2);
	}

	/* CLASSES */
	.buttonWrapper {
		display: flex;
		justify-content: center;
		gap: var(--size-7);
		margin-block: var(--size-7);
		& button {
			min-width: var(--size-13);
		}
	}
	/* .slider-dot {
		transition: width 0.5s;
		cursor: pointer;
		border: none;
		border-radius: 1rem;
		background-color: black;
		width: 0.75rem;
		height: 0.75rem;
	} */
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
	.disabled {
		opacity: 0.5;
		cursor: not-allowed;
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
			width: 50%;
		}
	}
</style>
