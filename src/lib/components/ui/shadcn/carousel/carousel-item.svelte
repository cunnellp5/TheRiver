<script lang="ts">
	// import { getEmblaContext } from './context.js';
	// const { orientation } = getEmblaContext('<Carousel.Item/>');
</script>

<div
	role="group"
	aria-roledescription="slide"
	class="min-w-0 shrink-0 grow-0 basis-full embla__slide"
	data-embla-slide=""
	{...$$restProps}>
	<slot />
</div>

<style>
	/* ELEMENTS */
	div {
		/* flex-grow: 0; */
		flex-shrink: 0;
		/* flex-basis: 100%; */
		/* flex-direction: row; */
		flex-direction: column;
		/* padding-top: 1rem; */
		/* padding-left: 1rem; */
		/* min-width: 0; */
		justify-content: center;
	}

	/* CLASSES */
	.embla__slide {
		transition: opacity 0.2s ease-in-out;
	}
	.embla__slide:not(.is-snapped) {
		opacity: 0.16;
		pointer-events: none;
		& .is-snapped-anchor {
			pointer-events: none;
		}
	}
</style>
