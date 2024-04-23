<script lang="ts">
	import PostsCard from '$lib/components/ui/posts/PostsCard.svelte';
	import Plus from 'lucide-svelte/icons/plus';
	import type { PageData } from './$types';
	import EditDeleteActions from './EditDeleteActions.svelte';
	import type { Post } from '@prisma/client';

	export let data: PageData;
	let posts: Post[];
	let publishedPosts: Post[];
	let unpublishedPosts: Post[];
	let postDataToShow: Post[];
	let currentFilter: boolean | null = null;

	$: {
		posts = data.posts;
		publishedPosts = posts.filter((post) => post.published);
		unpublishedPosts = posts.filter((post) => !post.published);
		postDataToShow = posts;
	}

	function updatePosts(published: boolean | null) {
		currentFilter = published;
		if (published === null) {
			postDataToShow = posts;
		}
		postDataToShow = published ? publishedPosts : unpublishedPosts;
	}
</script>

<button class:current={currentFilter === null} on:click={() => updatePosts(null)}>
	All posts ({posts.length})
</button>
<button class:current={currentFilter === true} on:click={() => updatePosts(true)}>
	Published ({publishedPosts.length})
</button>
<button class:current={currentFilter === false} on:click={() => updatePosts(false)}>
	Unpublished ({unpublishedPosts.length})
</button>
<button class="create">
	<a href="/admin/posts/create"><Plus /></a>
</button>

{#if postDataToShow && postDataToShow.length === 0}
	<p>No posts.</p>
{:else}
	{#each postDataToShow as { title, tags, createdAt, slug, description, published }}
		<section>
			<PostsCard
				{title}
				{tags}
				{createdAt}
				{slug}
				{description}
				allowSlot={true}
				link={`/admin/posts/${slug}`}>
				<div class="actionsGroup">
					<p>published {published}</p>
					<EditDeleteActions {slug} />
				</div>
			</PostsCard>
		</section>
	{/each}
{/if}

<style>
	button {
		font-weight: var(--font-weight-1);
	}
	.actionsGroup {
		display: flex;
		justify-content: end;
		align-items: center;
		gap: var(--size-2);
	}
	.current {
		background-color: var(--gray-9);
		color: var(--gray-1);
	}
	.create {
		background-color: hsl(var(--purple-4-hsl) / 50%);
	}
</style>
