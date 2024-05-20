<!-- <script lang="ts">
	import { fly, slide } from 'svelte/transition';
	import type { PageData } from './$types';
	import BlogCard from './components/BlogCard.svelte';

	export let data: PageData;
	const { posts } = data;
</script>

<section>
	{#if posts.length > 0}
		<ul>
			{#each posts as { createdAt, description, slug, tags, title }}
				<li in:fly={{ y: 20 }} out:slide>
					<BlogCard {title} {tags} {createdAt} {slug} {description} />
				</li>
			{/each}
		</ul>
	{:else}
		<div class="noPostsWrapper">
			<p>No posts.</p>
		</div>
	{/if}
</section>

<style>
	ul {
		display: grid;
		grid-template-rows: 1fr auto 1fr;
		grid-template-columns: 1fr 1fr 2fr;
		grid-auto-flow: dense;
		gap: var(--size-4);
	}
	li:nth-child(odd) {
		grid-column: span 2;
	}
	li:nth-child(even) {
		grid-row: span 2;
	}
	.noPostsWrapper {
		margin-block: var(--size-content-1);
	}
	@media (max-width: 768px) {
		section {
			margin-inline: 0;
		}
	}
</style> -->
