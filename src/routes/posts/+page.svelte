<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ posts } = data);
</script>

<main>
	<h1>Posts</h1>

	<p>showing {posts.length} posts.</p>
	{#each posts as { slug, title }}
		<ul>
			<li>
				<a href="/posts/{slug}">{title}</a>
			</li>
		</ul>
	{/each}
</main>
