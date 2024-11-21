<script lang="ts">
	import { run } from 'svelte/legacy';

	import * as Card from '$lib/components/ui/shadcn/card';
	import BlogCard from '$lib/components/ui/BlogCard.svelte';
	import { onMount } from 'svelte';
	import Pencil from 'lucide-svelte/icons/pencil';
	import type { MouseEventHandler } from 'svelte/elements';
	import { page } from '$app/stores';
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
		children?: import('svelte').Snippet;
	}

	let { data, children }: Props = $props();
	let showElement = $state(false);
	let search = $state('');
	const STROKE_WIDTH = 1.2;

	onMount(() => {
		showElement = true;
	});

	const isPostsHome = $page.url.pathname === '/posts';
	let filteredPosts = $state(data.posts);

	run(() => {
		filteredPosts = data.posts.filter(
			(post) =>
				post.title.toLowerCase().includes(search.toLowerCase()) ||
				post.description.toLowerCase().includes(search.toLowerCase())
		);
	});

	function showAllPosts() {
		filteredPosts = data.posts;
		search = '';
	}

	function showPublishedPosts(isPublished: boolean): MouseEventHandler<HTMLButtonElement> {
		return () => {
			filteredPosts = data.posts.filter((post) => post.published === isPublished);
			search = '';
		};
	}
</script>

<div class="adminIntroCardWrapper">
	<Card.Root>
		<Card.Header>
			<Card.Title>
				<a class="title" href="/admin/posts" data-sveltekit-noscroll>Blog posts</a>
			</Card.Title>
			<Card.Description>Create, Edit, or delete your blog posts</Card.Description>
		</Card.Header>
		<Card.Footer>
			<a href="/admin/posts/create" data-sveltekit-noscroll>
				<button class="create-button">Add new post</button>
			</a>
		</Card.Footer>
	</Card.Root>
</div>

<main>
	<section>
		<header>
			{#if isPostsHome}
				<p>Showing {filteredPosts.length} post{filteredPosts.length > 1 ? 's' : ''}.</p>
			{/if}
		</header>
		<div class="posts-wrapper">
			<div class="list-of-posts">
				<nav class="posts-search">
					<div class="search-count-group">
						<input type="search" bind:value={search} placeholder="Search posts..." />
						<p class="posts-count">
							{filteredPosts.length} post{filteredPosts.length > 1 ? 's' : ''}
						</p>
					</div>
					<div class="filter-buttons">
						<a href="/admin/posts" data-sveltekit-noscroll>
							<button onclick={showAllPosts}>all</button>
						</a>
						<a href="/admin/posts" data-sveltekit-noscroll>
							<button onclick={showPublishedPosts(true)}>published</button>
						</a>
						<a href="/admin/posts" data-sveltekit-noscroll>
							<button onclick={showPublishedPosts(false)}>draft</button>
						</a>
					</div>
				</nav>
				<section>
					{#if filteredPosts.length > 0}
						<ul>
							{#each filteredPosts as { createdAt, description, slug, tags, title, published }}
								{#if showElement}
									<li class="card surface-4">
										<BlogCard
											link={`/admin/posts/${slug}`}
											{title}
											{tags}
											{createdAt}
											{slug}
											{description}>
											{#snippet published()}
																						<div
													class="isPublished"
													
													class:published
													class:unpublished={!published}>
													{published ? 'Published' : 'Draft'}
												</div>
											{/snippet}
											{#snippet buttons()}
																						<div class="buttons" >
													<a href={`/admin/posts/${slug}/edit`} data-sveltekit-noscroll>
														<button class="update-button">
															<Pencil strokeWidth={STROKE_WIDTH} />Edit</button>
													</a>
												</div>
											{/snippet}
										</BlogCard>
									</li>
								{/if}
							{/each}
						</ul>
					{:else}
						<ul>
							<li>
								<BlogCard
									title={'No Posts'}
									tags={[]}
									createdAt={new Date()}
									slug={'no-posts'}
									description={''} />
							</li>
						</ul>
					{/if}
				</section>
			</div>

			<div>
				{@render children?.()}
			</div>
		</div>
	</section>
</main>

<style>
	/* ELEMENTS */
	nav {
		border-bottom: 1px solid var(--stone-11);
		padding: var(--size-4);
	}
	ul {
		/* height: 90vh; */
		/* overflow: scroll; */
		& li {
			margin-inline: var(--size-4);
			margin-block: var(--size-4);
		}
	}

	/* CLASSES */
	.title {
		text-decoration: none;
	}
	.posts-search {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}
	.filter-buttons {
		display: flex;
		flex-direction: row;
		gap: var(--size-3);
		margin-block-start: var(--size-3);
		width: 100%;
	}
	.search-count-group {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 100%;
	}
	.buttons {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--size-3);
		margin-block-start: var(--size-6);
		width: 100%;
		font-size: var(--font-size-0);
		& button,
		a,
		form {
			width: 100%;
		}
	}
	.posts-wrapper {
		display: flex;
	}
	.isPublished {
		margin-block: var(--size-2);
		margin-block-end: var(--size-8);
		font-size: var(--font-size-0);
		text-align: center;
	}
	.published {
		box-shadow: 0px var(--size-4) var(--size-15) var(--green-4);
		border: 1px solid var(--green-4);
		border-radius: var(--radius-3);
		color: var(--green-4);
	}
	.unpublished {
		box-shadow: 0px var(--size-4) var(--size-15) var(--yellow-4);
		border: 1px solid var(--yellow-4);
		border-radius: var(--radius-3);
		color: var(--yellow-4);
	}
	.card {
		/* gap: var(--size-2); */
		margin-block: var(--size-6);
		/* box-shadow: var(--shadow-1); */
		border: 1px solid var(--surface-4);
		border-radius: var(--radius-2);
		padding: var(--size-4);
	}
</style>
