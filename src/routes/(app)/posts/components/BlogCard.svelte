<script lang="ts">
	import Badge from '$lib/components/ui/Badge.svelte';
	import formatDate from '$lib/utils/formatDate';
	import SquareArrowOurUpRight from 'lucide-svelte/icons/square-arrow-out-up-right';

	export let title: string;
	export let tags: string[];
	export let createdAt: Date;
	export let slug: string;
	export let description: string;
</script>

<div class="card surface-4">
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
				<Badge {tag} prefix={'#'} />
			{/each}
		</div>
		<a class="blogLink" href="/posts/{slug}">
			<SquareArrowOurUpRight size="10" />
			Read more
		</a>
	</div>
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
	.card {
		margin: 0 auto;
		box-shadow: var(--shadow-2);
		border-radius: var(--radius-2);
		padding: var(--size-4);
		width: 50%;
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
