<script lang="ts">
	import BlogCard from '$lib/components/ui/BlogCard.svelte';
	import { onMount } from 'svelte';
	import Pencil from 'lucide-svelte/icons/pencil';
	import Plus from 'lucide-svelte/icons/plus';
	import Trash from 'lucide-svelte/icons/trash';
	// eslint-disable-next-line import/no-unresolved
	import { page } from '$app/stores';
	import type { PageData } from './$types';
	import { enhance } from '$app/forms';

	export let data: PageData;
	let showElement = false;
	let search = '';
	const STROKE_WIDTH = 1.2;

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

<a href="/admin/posts/create">
	<button class="create-post-button"> <Plus strokeWidth={3} />Add new post</button>
</a>

<main>
	<section>
		<header>
			<div class="titleWrapper">
				<a href="/admin/posts">
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
										<BlogCard
											link={`/admin/posts/${slug}`}
											{title}
											{tags}
											{createdAt}
											{slug}
											{description}>
											<div class="buttons" slot="buttons">
												<a href={`/admin/posts/${slug}/edit`}>
													<button class="update-post-button">
														<Pencil strokeWidth={STROKE_WIDTH} />Edit</button>
												</a>
												<form
													method="POST"
													action="?/deletePost"
													use:enhance={({ cancel }) => {
														// eslint-disable-next-line no-alert, no-restricted-globals
														if (confirm('Are you sure you want to delete this post?')) {
															return async ({ update }) => update();
														}
														return cancel();
													}}>
													<input type="hidden" name="postId" id="postId" value={slug} />
													<button class="delete-post-button">
														<Trash strokeWidth={STROKE_WIDTH} />
														Delete
													</button>
												</form>
											</div>
										</BlogCard>
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
				<slot />
			</div>
		</div>
	</section>
</main>

<style>
	ul {
		height: 90vh;
		overflow: scroll;
		& li {
			margin-inline: var(--size-4);
			margin-block: var(--size-4);
		}
	}
	/* CLASSES */
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
	.create-post-button {
		margin-block: var(--size-7);
		background-color: var(--create);
		color: var(--on-crud-text);
		font-weight: var(--font-weight-7);
	}
	.update-post-button {
		background-color: var(--update);
		color: var(--on-crud-text);
		font-weight: var(--font-weight-7);
	}
	.delete-post-button {
		background-color: var(--delete);
		color: var(--on-crud-text);
		font-weight: var(--font-weight-7);
	}
	.posts-wrapper {
		display: flex;
	}
</style>
