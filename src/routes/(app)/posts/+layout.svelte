<script lang="ts">
	// eslint-disable-next-line import/no-unresolved
	import { fly, slide } from 'svelte/transition';
	import { page } from '$app/stores';
	import type { PageData } from './$types';
	import BlogCard from './components/BlogCard.svelte';

	export let data: PageData;

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

			<slot />
		</div>
	</section>
</main>

<style>
	ul {
		display: flex;
		flex-direction: column;
		gap: var(--size-4);
		margin-inline: var(--size-4);
		height: 80vh;
		overflow: scroll;
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
