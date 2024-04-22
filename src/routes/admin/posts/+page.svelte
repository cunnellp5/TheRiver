<script lang="ts">
	import PostsCard from '$lib/components/ui/posts/PostsCard.svelte';
	import type { PageData } from './$types';
	import EditDeleteActions from './EditDeleteActions.svelte';

	export let data: PageData;
	const { posts } = data;
	const publishedPosts = posts.filter((post) => post.published);
	const unpublishedPosts = posts.filter((post) => !post.published);

	let postData = posts;
	let currentFilter: boolean | null = null;

	function updatePosts(published: boolean | null) {
		currentFilter = published;
		if (published === null) {
			postData = posts;
		}
		postData = published ? publishedPosts : unpublishedPosts;
	}
</script>

<button class:current={currentFilter === null} on:click={() => updatePosts(null)}>
	show all posts ({posts.length})
</button>
<button class:current={currentFilter === true} on:click={() => updatePosts(true)}>
	show published Posts ({publishedPosts.length})
</button>
<button class:current={currentFilter === false} on:click={() => updatePosts(false)}>
	show unpublished Posts ({unpublishedPosts.length})
</button>

{#if postData.length === 0}
	<p>No posts.</p>
{:else}
	{#each postData as { title, tags, createdAt, slug, description, published }}
		<section>
			<PostsCard {title} {tags} {createdAt} {slug} {description} allowSlot={true}>
				<div class="actionsGroup">
					<p>published {published}</p>
					<EditDeleteActions {slug} />
				</div>
			</PostsCard>
		</section>
	{/each}
{/if}

<style>
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
</style>
