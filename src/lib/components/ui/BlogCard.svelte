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

	$: selectedHighlight = $page.url.pathname.includes(slug);
</script>

<a class="blogLink" href={link} data-sveltekit-noscroll>
	<div
		class="card surface-4"
		class:selected={selectedHighlight}
		class:unselected={!selectedHighlight && $page.url.pathname.includes('/blog/')}>
		<div>
			<span>
				<slot name="published"></slot>
			</span>
			<h5>
				{title}
			</h5>
			<date>{formatDate(new Date(createdAt))}</date>
		</div>
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
	</div>
</a>

<style>
	/* ELEMENTS */
	h5 {
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
	.card {
		margin: 0 auto;
		box-shadow: var(--shadow-1);
		border: 1px solid var(--surface-4);
		border-radius: var(--radius-2);
		padding: var(--size-4);
	}
	.description {
		margin-block: var(--size-4);
		font-weight: var(--font-weight-2);
		font-size: var(--font-size-1);
		letter-spacing: var(--font-letterspacing-3);
	}
	.blogLink {
		display: flex;
		justify-content: end;
		gap: var(--size-1);
		margin-block: var(--size-2);
		width: 100%;
	}
	.selected {
		display: inline-block;
		opacity: 1;
		border: 1px solid var(--link);
	}
	.unselected {
		opacity: 0.5;
	}

	@media (max-width: 768px) {
		.description {
			font-size: var(--font-size-0);
		}
	}
</style>
