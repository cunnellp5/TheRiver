<script lang="ts">
	import Plus from 'lucide-svelte/icons/plus';
	import { page } from '$app/stores';

	export let data;
	let isPostsHome = $page.url.pathname === '/posts';
	$: ({ posts, isAdmin } = data);
</script>

<main>
	<section>
		<header>
			<div class="titleWrapper">
				<a href="/posts">
					<h1>The River Posts</h1>
				</a>
				{#if isAdmin}
					<button class="create">
						<a href="/posts/create"><Plus /></a>
					</button>
				{/if}
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
	.create {
		background-color: hsl(var(--purple-4-hsl) / 50%);
	}
</style>
