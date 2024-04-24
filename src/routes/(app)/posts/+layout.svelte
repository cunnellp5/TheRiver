<script lang="ts">
	// eslint-disable-next-line import/no-unresolved
	import { page } from '$app/stores';

	export let data;
	const isPostsHome = $page.url.pathname === '/posts';
	$: ({ posts } = data);
</script>

<main>
	<section>
		<header>
			<div class="titleWrapper">
				<a href="/posts">
					<h1>The River Posts</h1>
				</a>
			</div>

			{#if isPostsHome}
				<p>Showing {posts.length} posts.</p>
			{/if}
		</header>
		<hr />
		<slot />
	</section>
</main>

<style>
	main {
		/* display: grid; */
		/* grid-template-columns: max-content auto; */
		margin-block-start: var(--size-7);
	}
	a:hover {
		text-decoration: none;
	}
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin: 0 auto;
		width: 100%;
	}

	.titleWrapper {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		gap: var(--size-4);
		& button {
			flex-grow: 0;
			flex-shrink: 0;
		}
	}
</style>
