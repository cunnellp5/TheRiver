<script lang="ts">
	import { slide } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { quintOut } from 'svelte/easing';
	import BlogCard from '$lib/components/ui/BlogCard.svelte';
	import type { PageData } from './$types';
	// import Page from './+page.svelte';

	export let data: PageData;
	let showElement = false;
	let search = '';

	onMount(() => {
		showElement = true;
	});

	let filteredPosts = data.posts;

	// $: isPostsHome = $page.url.pathname === '/posts';
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
	<section>
		<header></header>
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
						<div class="noPostsWrapper">
							<p>No posts</p>
						</div>
					{/if}
				</section>
			</div>

			<div>
				<section>
					<slot />
				</section>
			</div>
		</div>
	</section>
</main>

<style>
	section {
		min-width: var(--size-12);
	}
	nav {
		border-bottom: 1px solid var(--stone-11);
		padding: var(--size-4);
	}
	ul {
		/* TODO conditionally flex the ul if on the home page so the lay out looks like bricks instead of one column */
		/* display: flex; */
		height: 90vh;
		overflow: scroll;
		& li {
			margin-inline: var(--size-4);
			margin-block: var(--size-4);
		}
	}
	li:nth-child(odd) {
		grid-column: span 2;
	}
	li:nth-child(even) {
		grid-row: span 2;
	}
	h1 {
		text-transform: uppercase;
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
		display: fixed;
		z-index: -1;
		font-size: var(--size-12);
		font-family: var(--font-serif);
	}
	.noPostsWrapper {
		margin: var(--size-content-1);
	}
	.titleWrapper {
		display: flex;
		justify-content: center;
		margin-block: var(--size-7);
		width: 100%;
		user-select: none;
	}
	.posts-wrapper {
		display: grid;
		grid-template-columns: auto 1fr;
		/* border: 1px solid var(--stone-11); */
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
</style>
