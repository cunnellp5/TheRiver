<script lang="ts">
	import formatDate from '$lib/utils/formatDate';
	import SquareArrowOurUpRight from 'lucide-svelte/icons/square-arrow-out-up-right';

	export let title: string;
	export let tags: string[];
	export let createdAt: Date;
	export let slug: string;
	export let description: string;
	export let allowSlot: boolean = false;
	export let link: string = `/posts/${slug}`;
</script>

<div class="card">
	<div>
		<h5>
			<a href={link}>
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
	<a class="blogLink" href={link}>
		read more
		<SquareArrowOurUpRight size="10" />
	</a>
	{#if allowSlot}
		<slot />
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
</style>
