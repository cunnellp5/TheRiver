<script lang="ts">
	import { slide } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { quintOut } from 'svelte/easing';
	import BlogCard from '$lib/components/ui/BlogCard.svelte';
	import type { PageData } from './$types';
	import { goto } from '$app/navigation';
	// import { setItemWithExpiry, getItemWithExpiry } from '$lib/utils/localSorage';

	export let data: PageData;
	let showElement = false;
	let search = '';

	onMount(() => {
		showElement = true;

		// Check if the block has been executed before
		// const hasExecutedBlogInit = getItemWithExpiry('hasExecutedBlogInit');
		if (data.posts && data.posts[0]) {
			goto(`/blog/${data.posts[0].slug}`);
			// Set the flag in local storage with a TTL of 1 hour
			// setItemWithExpiry('hasExecutedBlogInit', true, 3600000); // 1 hour in milliseconds
		}
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

<div class="titleWrapper app-layout">
	<a href="/blog">
		<h1 class="jumbo">The River Blogs</h1>
	</a>
</div>
<main class="app-layout">
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
			margin-block: var(--size-8);
		}
	}
	a {
		text-decoration: none;
	}

	/* CLASSES */
	.list-of-posts {
		margin-block: var(--size-10);
	}
	.jumbo {
		background: unset;
		-webkit-background-clip: unset;
		-webkit-text-fill-color: unset;
		background-clip: unset;
		color: var(--link);
		font-style: normal;
		font-weight: var(--font-weight-4);
		font-size: var(--font-size-8);
		line-height: 1;
		font-family: 'Atyp BL Display Medium', monospace;
		letter-spacing: 0em;
		text-transform: uppercase;
	}
	.titleWrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: var(--size-content-2);
		user-select: none;
	}
	.posts-wrapper {
		display: flex;
		justify-content: center;
	}
	.posts-count {
		color: var(--text-2);
		font-size: var(--font-size-0);
	}
	.posts-search {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: var(--size-3);
	}

	/* MEDIA QUERIES */
	@media (max-width: 768px) {
		.posts-wrapper {
			flex-direction: column-reverse;
		}
	}
</style>
