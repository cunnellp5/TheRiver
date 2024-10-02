<script lang="ts">
	import Badge from '$lib/components/ui/Badge.svelte';
	import formatDate from '$lib/utils/formatDate';
	import { page } from '$app/stores';

	export let title: string;
	export let tags: string[];
	export let createdAt: Date;
	export let slug: string;
	export let description: string;
	export let link: string = `/blog/${slug}`;
</script>

<a class="blogLink" href={slug === 'void' ? 'javascript:void(0)' : link} data-sveltekit-noscroll>
	<slot name="published"></slot>

	<h5 class="headingReset title">
		{title}
	</h5>

	<date>{formatDate(new Date(createdAt))}</date>

	<p class="description">
		{description}
	</p>

	<aside>
		<div class="badges">
			{#each tags as tag}
				<Badge {tag} />
			{/each}
		</div>
	</aside>

	<div>
		<slot class="buttons" name="buttons"></slot>
	</div>
</a>

<style>
	/* ELEMENTS */
	h5 {
		color: var(--text-1);
		font-size: var(--font-size-5);
		font-family: 'Perfectly Nineties Semibold';
		& a {
			color: var(--text-2);
		}
	}
	date {
		color: var(--stone-9);
		font-size: var(--font-size-0);
	}
	p {
		color: var(--text-1);
	}
	aside {
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	a:hover {
		text-decoration: none;
	}

	/* CLASSES */
	.badges {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: var(--size-2);
	}
	.description {
		margin-block: var(--size-4);
		font-weight: var(--font-weight-2);
		font-size: var(--font-size-1);
		letter-spacing: var(--font-letterspacing-3);
	}
	.blogLink {
		display: block;
	}
	@media (max-width: 768px) {
		.description {
			font-size: var(--font-size-0);
		}
	}
</style>
