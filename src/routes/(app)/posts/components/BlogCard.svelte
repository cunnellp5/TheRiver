<script lang="ts">
	import { enhance } from '$app/forms';
	import formatDate from '$lib/utils/formatDate';
	import Pencil from 'lucide-svelte/icons/pencil';
	import SquareArrowOurUpRight from 'lucide-svelte/icons/square-arrow-out-up-right';
	import Trash from 'lucide-svelte/icons/trash';

	export let title: string;
	export let tags: string[];
	export let createdAt: Date;
	export let slug: string;
	export let description: string;
	export let isAdmin: boolean | undefined;
</script>

<div class="card">
	<div>
		<div>
			<h5>
				<a href="/posts/{slug}">
					{title}
				</a>
			</h5>
			<date>{formatDate(new Date(createdAt))}</date>
		</div>
		<p class="description">
			{description}
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
			<a href="/posts/{slug}/edit">
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
</div>

<style>
	date {
		color: var(--stone-9);
		font-size: var(--font-size-0);
	}
	p {
		line-height: var(--font-lineheight-0);
		font-family: var(--font-mono);
		color: var(--text-2);
	}
	a:hover {
		text-decoration: none;
	}

	/* CLASSES */
	.card {
		box-shadow: var(--shadow-2);
		padding: var(--size-4);
	}
	.description {
		margin-block: var(--size-4);
		font-size: var(--font-size-2);
		font-family: var(--font-serif);
		letter-spacing: var(--font-letterspacing-2);
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
	.blogLink {
		display: flex;
		justify-content: end;
		gap: var(--size-1);
		color: var(--link);
		font-size: var(--font-size-0);
		margin-block: var(--size-2);
	}
	.actionsGroup {
		display: flex;
		flex-direction: row;
		gap: var(--size-2);
		justify-content: end;
		align-self: end;
	}
	.delete {
		background-color: hsl(var(--red-5-hsl) / 80%);
	}
</style>
