<script lang="ts">
	import type { PageData } from './$types';
	import SquareArrowOurUpRight from 'lucide-svelte/icons/square-arrow-out-up-right';
	import formatDate from '$lib/utils/formatDate';

	export let data: PageData;

	$: ({ posts } = data);
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
					<div class="header">
						<h5>{title}</h5>
						<date>{formatDate(new Date(createdAt))}</date>
					</div>
					<p class="description">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
						molestias, voluptatum, animi quia suscipit fugiat, consectetur earum
						ex officia laboriosam et inventore tempora sapiente! Eum accusantium
						deserunt iure quis sapiente?
					</p>
					<a class="blogLink" href="/posts/{slug}">
						read more
						<SquareArrowOurUpRight size="10" />
					</a>
					<div class="tags">
						{#each tags as tag}
							<span class="badge">#{tag} test</span>
						{/each}
					</div>
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
		gap: var(--size-1);
		color: var(--link);
		text-decoration: none;
		font-size: var(--font-size-0);
		margin-block: var(--size-2);
	}
	.badge {
		padding-inline: var(--size-2);
		padding-block: var(--size-1);

		border-width: var(--border-size-1);
		border-color: hsl(var(--pink-6-hsl) / 50%);
		color: hsl(var(--pink-2-hsl) / 50%);
		border-radius: var(--radius-round);

		font-size: var(--font-size-00);
		/* font-family: var(--font-serif); */
		text-transform: uppercase;
	}
</style>
