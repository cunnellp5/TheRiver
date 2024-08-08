<script lang="ts">
	import ArrowRight from 'lucide-svelte/icons/arrow-right';
	import { getEmblaContext } from './context.js';

	const { canScrollNext, scrollNext, handleKeyDown } = getEmblaContext('<Carousel.Next/>');
</script>

<button
	class="absolute h-8 w-8 touch-manipulation rounded-full"
	disabled={!$canScrollNext}
	on:click={scrollNext}
	on:keydown={handleKeyDown}
	{...$$restProps}>
	<ArrowRight class="h-4 w-4" />
	<span class="sr-only">Next slide</span>
</button>
