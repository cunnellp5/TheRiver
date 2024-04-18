<script lang="ts">
	import type { PageData } from './$types';
	import SquareArrowOurUpRight from 'lucide-svelte/icons/square-arrow-out-up-right';
	import formatDate from '$lib/utils/formatDate';

	export let data: PageData;

	$: ({ posts, isAdmin } = data);
</script>

<main>
	<section>
		<header>
			<h1>The River Blog</h1>

			<p>Showing {posts.length} posts.</p>
		</header>

		<ul>
			{#each posts as { slug, title, tags, createdAt }}
				<li class="card">
					<div>
						<h5>{title}</h5>
						<date>{formatDate(new Date(createdAt))}</date>
					</div>
					<p class="description">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
						molestias, voluptatum, animi quia suscipit fugiat, consectetur earum
						ex officia laboriosam et inventore tempora sapiente! Eum accusantium
						deserunt iure quis sapiente?
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
					{#if isAdmin}
						<div class="actionsGroup">
							<button type="button">Edit</button>
							<button type="button">Delete</button>
						</div>
					{/if}
				</li>
			{/each}
		</ul>
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
		padding: var(--size-1) var(--size-4);
		font-size: var(--font-size-0);
	}
	.actionsGroup {
		display: flex;
		flex-direction: row;
		gap: var(--size-2);
		justify-content: end;
		margin-block-start: var(--size-4);
	}
	.description {
		margin-block: var(--size-4);
	}
	.card {
		margin-block: var(--size-7);
		box-shadow: var(--shadow-2);
		padding: var(--size-4);
	}
	.blogLink {
		display: flex;
		justify-content: end;
		gap: var(--size-1);
		color: var(--link);
		text-decoration: none;
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
</style>
