<script lang="ts">
	import Plus from 'lucide-svelte/icons/plus';
	import type { Post } from '@prisma/client';
	import PostsCard from './components/PostsCard.svelte';
	import type { PageData } from './$types';
	import EditDeleteActions from './components/EditDeleteActions.svelte';

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

<section>
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
</section>

{#if postDataToShow && postDataToShow.length === 0}
	<section>
		<p>No posts.</p>
	</section>
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
	section {
		display: flex;
		justify-content: center;
		margin: auto;
	}
	button {
		margin-inline: var(--size-2);
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
