<script lang="ts">
	import { slide } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { quintOut } from 'svelte/easing';
	import BlogCard from '$lib/components/ui/BlogCard.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	let showElement = false;
	let search = '';

	onMount(() => {
		showElement = true;
	});

	let filteredPosts = data.posts;

	$: {
		filteredPosts = data.posts.filter(
			(post) =>
				post.title.toLowerCase().includes(search.toLowerCase()) ||
				post.description.toLowerCase().includes(search.toLowerCase())
		);
	}
</script>

<div class="titleWrapper">
	<a href="/posts">
		<h1 class="jumbo">River Blog</h1>
	</a>
</div>
<main>
	<div class="posts-wrapper">
		<div class="list-of-posts">
			<nav class="posts-search">
				<input type="search" bind:value={search} placeholder="Search posts..." />
				<p class="posts-count">
					{filteredPosts.length} post{filteredPosts.length > 1 ? 's' : ''}
				</p>
			</nav>
			<section>
				{#if filteredPosts.length > 0}
					<ul>
						{#each filteredPosts as { createdAt, description, slug, tags, title }}
							{#if showElement}
								<li transition:slide={{ delay: 150, duration: 900, easing: quintOut }}>
									<BlogCard {title} {tags} {createdAt} {slug} {description} />
								</li>
							{/if}
						{/each}
					</ul>
				{:else}
					<ul>
						{#if showElement}
							<li>
								<BlogCard
									title={'No Posts'}
									tags={[]}
									createdAt={new Date()}
									slug={'no-posts'}
									description={''} />
							</li>
						{/if}
					</ul>
				{/if}
			</section>
		</div>

		<slot />
	</div>
</main>

<style>
	nav {
		border-bottom: 1px solid var(--stone-11);
		padding: var(--size-4);
	}
	ul {
		height: 90vh;
		overflow: scroll;
		& li {
			margin-inline: var(--size-4);
			margin-block: var(--size-4);
		}
	}
	main {
		display: flex;
		justify-content: center;
	}
	a {
		text-decoration: none;
	}

	/* CLASSES */
	.jumbo {
		font-size: var(--size-12);
		line-height: var(--font-lineheight-00);
		font-family: var(--font-serif);
		text-transform: uppercase;
	}
	.titleWrapper {
		display: flex;
		justify-content: center;
		margin-block: var(--size-7);
		width: 100%;
		user-select: none;
	}
	.posts-wrapper {
		display: flex;
	}
	.posts-count {
		color: var(--text-2);
		font-size: var(--font-size-0);
	}
	.posts-search {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	/* MEDIA QUERIES */
	@media (max-width: 768px) {
		.posts-wrapper {
			flex-direction: column-reverse;
		}
	}
</style>
