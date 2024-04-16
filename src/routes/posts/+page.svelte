<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ posts } = data);
</script>

<main>
	<section>
		<header>
			<h1>Posts</h1>

			<p>showing {posts.length} posts.</p>
		</header>

		{#each posts as { slug, title }}
			<ul>
				<li>
					<a href="/posts/{slug}">{title}</a>
				</li>
			</ul>
		{/each}
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
	ul {
		padding-block: var(--size-1);
	}
</style>
