<script lang="ts">
	import { slide } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { quintOut } from 'svelte/easing';
	// eslint-disable-next-line import/no-unresolved
	import { page } from '$app/stores';
	import type { PageData } from './$types';
	import BlogCard from './components/BlogCard.svelte';
	// import Page from './+page.svelte';

	export let data: PageData;
	let showElement = false;

	onMount(() => {
		showElement = true;
	});

	const isPostsHome = $page.url.pathname === '/posts';
	$: ({ posts } = data);
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
				<p>Showing {posts.length} post{posts.length > 1 ? 's' : ''}.</p>
			{/if}
		</header>
		<hr />
		<div class="posts-wrapper">
			<div>
				<nav>TODO put a search bar here, maybe some sorting action?</nav>
				<section>
					{#if posts.length > 0}
						<ul>
							{#each posts as { createdAt, description, slug, tags, title }}
								{#if showElement}
									<li transition:slide={{ delay: 150, duration: 900, easing: quintOut }}>
										<BlogCard {title} {tags} {createdAt} {slug} {description} />
									</li>
								{/if}
							{/each}
						</ul>
					{:else}
						<div class="noPostsWrapper">
							<p>No posts.</p>
						</div>
					{/if}
				</section>
			</div>

			<div>
				<nav>marketing stuff here?</nav>
				<section>
					<slot />
				</section>
			</div>
		</div>
	</section>
</main>

<style>
	nav {
		border: 1px solid white;
		padding: var(--size-4);
	}
	/* ul {
		display: flex;
		flex-direction: column;
		gap: var(--size-4);
		margin-inline: var(--size-4);
	} */
	ul {
		display: grid;
		grid-template-rows: auto auto auto;
		grid-template-columns: auto auto auto;
		grid-auto-flow: dense;
		gap: var(--size-4);
		margin-inline: var(--size-4);
		height: 80vh;
		overflow: scroll;
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
		grid-template-columns: 1fr 1fr;
		/* gap: var(--size-4); */
	}
</style>
