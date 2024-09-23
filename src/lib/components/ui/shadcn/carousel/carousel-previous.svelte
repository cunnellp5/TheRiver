<script lang="ts">
	import ArrowLeft from 'lucide-svelte/icons/arrow-left';
	import { getEmblaContext } from './context.js';

	const { canScrollPrev, scrollPrev, handleKeyDown } = getEmblaContext('<Carousel.Previous/>');
</script>

<button
	class="absolute h-8 w-8 touch-manipulation rounded-full"
	disabled={!$canScrollPrev}
	on:click={scrollPrev}
	on:keydown={handleKeyDown}
	{...$$restProps}>
	<ArrowLeft class="h-4 w-4" />
</button>

<style>
	button {
		min-width: var(--size-10);
	}
</style>
