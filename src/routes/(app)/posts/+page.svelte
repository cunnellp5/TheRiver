<script lang="ts">
	import { fly, slide } from 'svelte/transition';
	import type { PageData } from './$types';
	import BlogCard from './components/BlogCard.svelte';

	export let data: PageData;
	const { posts } = data;
	// let toggleClass = false;

	// function toggler() {
	// 	toggleClass = !toggleClass;
	// 	return toggleClass;
	// }
</script>

<main>
	<section>
		{#if posts.length > 0}
			<ul>
				{#each posts as { createdAt, description, slug, tags, title }}
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
	<!-- {#if toggleClass} -->
	<!-- <div class:showMe={toggleClass} class="single">test</div> -->
	<!-- {/if} -->
</main>

<!-- This section should be using the perspective thing to show single posts, and keep the list of posts in another column, so that the single post view is basically emulated with fewer steps: https://hackernoon.com/how-to-build-a-masonry-layout-using-css -->

<style>
	ul {
		display: flex;
		flex-direction: column;
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
