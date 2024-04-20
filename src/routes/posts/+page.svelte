<script lang="ts">
	import { enhance } from '$app/forms';
	import formatDate from '$lib/utils/formatDate';
	import Check from 'lucide-svelte/icons/check';
	import Pencil from 'lucide-svelte/icons/pencil';
	import SquareArrowOurUpRight from 'lucide-svelte/icons/square-arrow-out-up-right';
	import Trash from 'lucide-svelte/icons/trash';
	import { fly, slide } from 'svelte/transition';
	import type { ActionData, PageData } from './$types';

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
						<div class="card">
							<div>
								<h5>
									<a href="/posts/{slug}">
										{title}
									</a>
								</h5>
								<date>{formatDate(new Date(createdAt))}</date>
							</div>
							<p class="description">
								{`${content?.substring(0, 100)}...`}
							</p>
							<div>
								{#each tags as tag}
									<span class="badge"># {tag}</span>
								{/each}
							</div>
							<a class="blogLink" href="/posts/{slug}">
								read more
								<SquareArrowOurUpRight size="10" />
							</a>
						</div>
						{#if isAdmin}
							<div class="actionsGroup">
								<a href="/posts/{slug}">
									<button class="edit" type="button">
										<Pencil />
									</button>
								</a>
								<form
									method="POST"
									action="?/deletePost"
									use:enhance={({ cancel }) => {
										if (confirm('Are you sure you want to delete this post?')) {
											return async ({ update }) => update();
										}
										cancel();
									}}>
									<input type="hidden" name="slug" id="slug" value={slug} />
									<button class="delete" type="submit">
										<Trash />
									</button>
								</form>
							</div>
						{/if}
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
	main {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	date {
		color: var(--stone-9);
		font-size: var(--font-size-0);
	}
	p {
		line-height: var(--font-lineheight-0);
		font-family: var(--font-mono);
		color: var(--text-2);
	}
	button {
		font-size: var(--font-size-0);
	}
	a:hover {
		text-decoration: none;
	}
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
	.actionsGroup {
		display: flex;
		flex-direction: column;
		gap: var(--size-2);
		justify-content: center;
		align-items: center;
	}
	.description {
		margin-block: var(--size-4);
		font-size: var(--font-size-2);
		font-family: var(--font-serif);
		letter-spacing: var(--font-letterspacing-2);
	}
	.card {
		margin-block: var(--size-4);
		box-shadow: var(--shadow-2);
		padding: var(--size-4);
	}
	.cardWrapper {
		display: grid;
		grid-template-columns: 4fr 0.5fr;
	}
	.blogLink {
		display: flex;
		justify-content: end;
		gap: var(--size-1);
		color: var(--link);
		font-size: var(--font-size-0);
		margin-block: var(--size-2);
	}
	.badge {
		padding-inline: var(--size-2);
		padding-block: var(--size-1);
		background: hsl(var(--gray-8-hsl) / 50%);
		color: hsl(var(--pink-2-hsl) / 50%);
		border-radius: var(--radius-3);
		font-size: var(--font-size-0);
		margin-inline-end: var(--size-1);
	}

	.edit {
		background-color: hsl(var(--brown-3-hsl) / 50%);
	}
	.delete {
		background-color: hsl(var(--red-4-hsl) / 50%);
	}
</style>
