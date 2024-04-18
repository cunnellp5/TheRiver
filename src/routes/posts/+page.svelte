<script lang="ts">
	import { enhance } from '$app/forms';
	import formatDate from '$lib/utils/formatDate';
	import Pencil from 'lucide-svelte/icons/pencil';
	import Check from 'lucide-svelte/icons/check';
	import Plus from 'lucide-svelte/icons/plus';
	import SquareArrowOurUpRight from 'lucide-svelte/icons/square-arrow-out-up-right';
	import Trash from 'lucide-svelte/icons/trash';
	import type { PageData, SubmitFunction } from './$types';

	export let form;
	export let data: PageData;
	let deleteFrom: HTMLFormElement;
	let hideSuccessMessage = false;

	function rmNote() {
		hideSuccessMessage = true;
	}

	$: ({ posts, isAdmin } = data);
	$: console.log(form);
</script>

<main>
	<section>
		{#if posts.length > 0}
			<header>
				<div class="titleWrapper">
					<h1>The River Blog</h1>
					{#if isAdmin}
						<button class="create">
							<a href="/posts/new"><Plus /></a>
						</button>
					{/if}
				</div>

				<p>Showing {posts.length} posts.</p>

				{#if form?.success}
					<div class="card" class:hidden={hideSuccessMessage}>
						<div class="titleWrapper-sub">
							<h5>{form.deletedTitle}</h5>
							<button class="delete block" on:click={rmNote}><Trash /></button>
						</div>
						<p class="success-form-message"><Check />{form.message}</p>
					</div>
				{/if}
			</header>
			<ul>
				{#each posts as { slug, title, tags, createdAt, content }}
					<li class="cardWrapper">
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
								{content?.substring(0, 100) + ' ...'}
							</p>
							<div class="tags">
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
								<button class="edit" type="button"><Pencil /></button>
								<form
									method="POST"
									action="?/deletePost"
									use:enhance={({ cancel }) => {
										if (confirm('Are you sure you want to delete this post?')) {
											return async ({ update }) => {
												return update();
											};
										} else {
											cancel();
										}
									}}
								>
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
				<h1>The River Blog</h1>
				<p>No posts found.</p>
			</div>
		{/if}
	</section>
</main>

<style>
	header {
		margin-block: var(--size-7);
	}
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
	ul {
		padding-block: var(--size-1);
	}
	h5 {
		line-height: var(--font-lineheight-2);
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
	.hidden {
		display: none;
	}
	.success-form-message {
		display: flex;
		gap: var(--size-2);
		color: var(--green-4);
	}
	.noPostsWrapper {
		/* height: 100vh; */
		margin-block: var(--size-content-1);
	}
	.titleWrapper {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: var(--size-4);
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
	}
	.card {
		margin-block: var(--size-7);
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

	.create {
		background-color: hsl(var(--purple-4-hsl) / 50%);
	}
	.edit {
		background-color: hsl(var(--brown-3-hsl) / 50%);
	}
	.delete {
		background-color: hsl(var(--red-4-hsl) / 50%);
	}
</style>
