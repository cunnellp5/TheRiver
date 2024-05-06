<script lang="ts">
	import { fly, slide } from 'svelte/transition';
	import type { PageData } from './$types';
	import BlogCard from './components/BlogCard.svelte';

	export let data: PageData;
	const { posts } = data;
	let toggleClass = false;

	function toggler() {
		toggleClass = !toggleClass;
		return toggleClass;
	}
</script>

<main>
	<section class:active={toggleClass}>
		{#if posts.length > 0}
			<ul>
				{#each posts as { createdAt, description, slug, tags, title }}
					<a on:click={toggler}>
						<div in:fly={{ y: 20 }} out:slide>
							<BlogCard {title} {tags} {createdAt} {slug} {description} />
						</div>
					</a>
				{/each}
			</ul>
		{:else}
			<div class="noPostsWrapper">
				<p>No posts.</p>
			</div>
		{/if}
	</section>
</main>

<!-- This section should be using the perspective thing to show single posts, and keep the list of posts in another column, so that the single post view is basically emulated with fewer steps: https://hackernoon.com/how-to-build-a-masonry-layout-using-css -->

<style>
	main {
		margin-inline: var(--size-content-1);
	}
	ul {
		display: grid;
		gap: var(--size-4);
	}

	section {
		display: grid;
		transform: perspective(40cm) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
		transform-origin: left;
		transform-style: preserve-3d;
		transition: transform 1s ease-in-out;
	}
	.noPostsWrapper {
		margin-block: var(--size-content-1);
	}

	.active {
		transform: perspective(40cm) rotateX(0deg) rotateY(8deg) rotateZ(0deg);
		transform-origin: left;
		transform-style: preserve-3d;
		transition: transform 1s ease-in-out;
	}

	a:hover {
		background: var(--yellow-3);
	}

	@media (max-width: 768px) {
		main {
			margin-inline: 0;
		}
	}
</style>
