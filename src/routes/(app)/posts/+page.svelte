<script lang="ts">
	import { fly, slide } from 'svelte/transition';
	import type { PageData } from './$types';
	import BlogCard from './components/BlogCard.svelte';

	export let data: PageData;
	const { posts } = data;
	let shouldDisplay = false;
</script>

<main>
	<section>
		{#if posts.length > 0}
			<ul>
				{#each posts as { content, createdAt, description, slug, tags, title }}
					<div in:fly={{ y: 20 }} out:slide>
						<BlogCard {title} {tags} {createdAt} {slug} {description} />
					</div>
				{/each}
			</ul>
		{:else}
			<div class="noPostsWrapper">
				<p>No posts.</p>
			</div>
		{/if}
	</section>
</main>

<style>
	main {
		margin-inline: var(--size-content-1);
	}
	ul {
		display: grid;
		gap: var(--size-4);
	}
	.noPostsWrapper {
		margin-block: var(--size-content-1);
	}
	@media (max-width: 768px) {
		main {
			margin-inline: 0;
		}
	}
</style>
