<script lang="ts">
	import { onMount } from 'svelte';
	import BlogCard from '$lib/components/ui/BlogCard.svelte';
	// eslint-disable-next-line import/no-unresolved
	import { page } from '$app/stores';
	import type { PageData } from './$types';

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
									<li>
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
				<section>
					<slot />
				</section>
			</div>
		</div>
	</section>
</main>
