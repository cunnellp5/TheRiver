<script lang="ts">
	import Plus from 'lucide-svelte/icons/plus';
	import type { Post } from '@prisma/client';
	import Check from 'lucide-svelte/icons/check';
	import X from 'lucide-svelte/icons/x';
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
	<a href="/admin/posts/create">
		<button class="create">
			<Plus />
		</button>
	</a>
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
					<p class="isPublished" class:published class:unpublished={!published}>
						{#if published}
							<Check />&nbsp;Published
						{:else}
							<X />&nbsp;Unpublished
						{/if}
					</p>
					<div>
						<EditDeleteActions {slug} />
					</div>
				</div>
			</PostsCard>
		</section>
	{/each}
{/if}

<style>
	section {
		display: flex;
		justify-content: center;
		margin: auto;
		margin-block-end: var(--size-4);
	}
	button {
		margin-inline: var(--size-2);
		font-weight: var(--font-weight-1);
	}
	a {
		display: inline-block;
		align-self: center;
		min-width: max-content;
	}
	.actionsGroup {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: var(--size-2);
		& > div {
			display: flex;
			flex-direction: row;
			gap: var(--size-2);
		}
	}
	.current {
		background-color: var(--button-active);
		/* color: var(--gray-1); */
	}
	.isPublished {
		display: flex;
		justify-content: center;
		padding-inline: var(--size-4);
		/* background: var(--yellow-9); */
		width: max-content;
	}
	.published {
		background: var(--gradient-8);
	}
	.unpublished {
		background: var(--gradient-20);
	}
</style>
