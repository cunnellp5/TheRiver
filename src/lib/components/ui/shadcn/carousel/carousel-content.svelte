<script lang="ts">
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import emblaClassNames from 'embla-carousel-class-names';
	import { getEmblaContext } from './context.js';

	const { options, plugins, onInit } = getEmblaContext('<Carousel.Content/>');
</script>

<div
	class="overflow-hidden"
	use:emblaCarouselSvelte={{
		options: {
			loop: true,
			container: '[data-embla-container]',
			slides: '[data-embla-slide]',
			...$options,
			axis: 'x'
		},
		plugins: [emblaClassNames(), ...$plugins]
	}}
	on:emblaInit={onInit}>
	<div class="flex" data-embla-container="" {...$$restProps}>
		<slot />
	</div>
</div>

<style>
	.overflow-hidden {
		display: flex;
	}
	.flex {
		display: flex;
	}
</style>
