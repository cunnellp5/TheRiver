<script lang="ts">
	import Badge from '$lib/components/ui/Badge.svelte';
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

<div class="card surface-4">
	<div>
		<h5>
			<a href={link} data-sveltekit-noscroll>
				{title}
			</a>
		</h5>
		<date>{formatDate(new Date(createdAt))}</date>
	</div>
	<p class="description">
		{description}
	</p>
	<div class="tags">
		{#each tags as tag}
			<Badge {tag} />
		{/each}
	</div>
	<a class="blogLink" href={link}>
		<SquareArrowOurUpRight size="10" />
		Read more
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
		color: var(--text-2);
		line-height: var(--font-lineheight-0);
		font-family: var(--font-mono);
	}
	a:hover {
		text-decoration: none;
	}

	/* CLASSES */
	.tags {
		width: 100%;
	}
	.card {
		box-shadow: var(--shadow-2);
		padding: var(--size-3);
	}
	.description {
		margin-block: var(--size-4);
		font-size: var(--font-size-2);
		font-family: var(--font-serif);
		letter-spacing: var(--font-letterspacing-2);
	}
	.blogLink {
		display: flex;
		justify-content: end;
		gap: var(--size-1);
		margin-block: var(--size-2);
		font-weight: var(--font-weight-7);
		font-size: var(--font-size-0);
	}
</style>
