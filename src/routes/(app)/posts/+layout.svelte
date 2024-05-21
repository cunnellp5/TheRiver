<script lang="ts">
	import { slide, fly, fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { quintOut } from 'svelte/easing';
	// eslint-disable-next-line import/no-unresolved
	import { page } from '$app/stores';
	import type { PageData } from './$types';
	import BlogCard from './components/BlogCard.svelte';
	// import Page from './+page.svelte';

	export let data: PageData;
	let showElement = false;

	let search = '';

	onMount(() => {
		showElement = true;
	});

	const isPostsHome = $page.url.pathname === '/posts';
	let filteredPosts = data.posts;

	$: {
		filteredPosts = data.posts.filter(
			(post) =>
				post.title.toLowerCase().includes(search.toLowerCase()) ||
				post.description.toLowerCase().includes(search.toLowerCase())
		);
	}
</script>

<main>
	<section>
		<header>
			<div class="titleWrapper">
				<a href="/posts">
					<h1>The River Posts</h1>
				</a>
			</div>

			{#if isPostsHome}
				<p>Showing {filteredPosts.length} post{filteredPosts.length > 1 ? 's' : ''}.</p>
			{/if}
		</header>
		<div class="posts-wrapper">
			<div class="list-of-posts">
				<nav>
					<input type="search" bind:value={search} placeholder="Search posts..." />
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
				<nav class="hide">
					<div class="size-same-as-input"></div>
				</nav>
				<!-- TODO bubble up click events to trigger these animations, make them cooler too -->
				<section in:fly={{ x: -200, duration: 800, delay: 500 }} out:fade>
					<slot />
				</section>
			</div>
		</div>
	</section>
</main>

<style>
	nav {
		position: relative;
		z-index: 1; /* Add this line */
		box-shadow: var(--shadow-1);
		border-bottom: 1px solid var(--stone-11);
		padding: var(--size-4);
	}
	/* ul {
		display: flex;
		flex-direction: column;
		gap: var(--size-4);
		margin-inline: var(--size-4);
	} */
	ul {
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
	.noPostsWrapper {
		margin: var(--size-content-1);
	}
	@media (max-width: 768px) {
		section {
			margin-inline: 0;
		}
	}
	h1 {
		text-transform: uppercase;
	}
	main {
		/* display: grid; */
		/* grid-template-columns: max-content auto; */
		margin-block-start: var(--size-7);
	}
	a:hover {
		text-decoration: none;
	}
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin: 0 auto;
		width: 100%;
	}

	.titleWrapper {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		gap: var(--size-4);
		& button {
			flex-grow: 0;
			flex-shrink: 0;
		}
	}

	.posts-wrapper {
		display: grid;
		grid-template-columns: auto 1fr;
		border: 1px solid var(--stone-11);
		/* gap: var(--size-4); */
	}

	.list-of-posts {
		/* border-right: 1px solid var(--stone-10); */
	}

	.hide {
		display: hidden;
	}
	.size-same-as-input {
		height: var(--size-7);
	}
</style>
