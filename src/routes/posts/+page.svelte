<script lang="ts">
	import Check from 'lucide-svelte/icons/check';
	import Trash from 'lucide-svelte/icons/trash';
	import { fly, slide } from 'svelte/transition';
	import type { ActionData, PageData } from './$types';
	import BlogCard from './components/BlogCard.svelte';

	export let form: ActionData;
	export let data: PageData;
	let shouldDisplay = false;

	function removeElement() {
		shouldDisplay = false;
	}

	$: ({ posts, isAdmin } = data);
	$: if (form?.success) {
		shouldDisplay = true;
	}
</script>

<main>
	<section>
		{#if posts.length > 0}
			{#if form && shouldDisplay}
				<div in:fly={{ y: 20 }} out:slide class="card">
					<div class="titleWrapper-sub">
						<h5>{form.deletedTitle}</h5>
						<button on:click={removeElement} class="delete block"><Trash /></button>
					</div>
					<p class="success-form-message"><Check />{form?.message}</p>
				</div>
			{/if}
			<ul>
				{#each posts as { slug, title, tags, createdAt, content }}
					<li in:fly={{ y: 20 }} out:slide class="cardWrapper">
						<BlogCard {title} {tags} {content} {createdAt} {slug} {isAdmin} />
					</li>
				{/each}
			</ul>
		{:else}
			<div class="noPostsWrapper">
				<p>No posts.</p>
			</div>
		{/if}
	</section>
</main>

<style>
	ul {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
		/* grid-template-columns: repeat(auto-fill); */
		/* gap: 20px; */
	}
	/* ul li:nth-child(odd) {
		grid-row: span 2;
	} */
	/* CLASSES */
	.success-form-message {
		display: flex;
		gap: var(--size-2);
		color: var(--green-4);
	}
	.noPostsWrapper {
		margin-block: var(--size-content-1);
	}
	.titleWrapper-sub {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.titleWrapper-sub button {
		flex-grow: 0;
		flex-shrink: 0;
	}
	.card {
		margin-block: var(--size-4);
		box-shadow: var(--shadow-2);
		padding: var(--size-4);
	}
</style>
