<script lang="ts">
	import ChevronLeft from 'lucide-svelte/icons/chevron-left';
	import ChevronRight from 'lucide-svelte/icons/chevron-right';
	import type { BlogPost } from '$lib/types';

	interface Props {
		next: BlogPost | undefined;
		previous: BlogPost | undefined;
		pointRight?: boolean;
		pointLeft?: boolean;
	}

	let {
		next,
		previous,
		pointRight = false,
		pointLeft = false
	}: Props = $props();
</script>

<aside class="prevNext-wrapper">
	{#if pointLeft}
		<a
			class="nextArticle prev"
			class:disabled={!previous}
			href={previous ? `/blog/${previous.slug}` : 'javascript:void(0)'}
			data-sveltekit-noscroll>
			<ChevronLeft size={36} />
		</a>
	{/if}

	{#if pointRight}
		<a
			class="nextArticle next"
			class:disabled={!next}
			href={next ? `/blog/${next.slug}` : 'javascript:void(0)'}
			data-sveltekit-noscroll>
			<ChevronRight size={36} />
		</a>
	{/if}
</aside>

<style>
	.prevNext-wrapper {
		display: grid;
		align-items: center;
	}
	.nextArticle {
		position: sticky;
		top: calc(50% - var(--nav-height));
		opacity: 0.7;
		padding-block: var(--size-7);
	}

	.prev {
		justify-self: start;
	}
	.next {
		justify-self: end;
	}

	.nextArticle:hover:not(.disabled) {
		opacity: 1;
		box-shadow: var(--shadow-4);
	}
	.disabled {
		pointer-events: none;
	}

	@media (max-width: 768px) {
		.nextArticle {
			display: none;
		}
	}
</style>
