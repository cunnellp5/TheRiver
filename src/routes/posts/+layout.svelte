<script lang="ts">
	import Plus from 'lucide-svelte/icons/plus';

	export let data;
	$: ({ posts, isAdmin } = data);
</script>

<main>
	<aside>
		<nav>
			<ul class="mainNavs">
				<li><a href="/posts">Blog posts</a></li>
				<!-- <li><a href="/posts">Instagram</a></li> -->
				<!-- <li><a href="/posts">Twitter</a></li> -->
			</ul>
			<!-- <div class="divider"></div> -->
			<!-- TODO: maybe only show this when viewing a single item? -->
			<!-- <ul class="blogListSideNav">
				{#each posts as { slug, title }}
					<a href="/posts/{slug}">
						<li class="blogPostSlugNav" {title}>
							<ChevronRight size="12" />{title}
						</li>
					</a>
				{/each}
			</ul> -->
		</nav>
	</aside>

	<section>
		<header>
			<div class="titleWrapper">
				<h1>The River Posts</h1>
				{#if isAdmin}
					<button class="create">
						<a href="/posts/create"><Plus /></a>
					</button>
				{/if}
			</div>

			<p>Showing {posts.length} posts.</p>
		</header>
		<slot />
	</section>
</main>

<style>
	main {
		display: grid;
		grid-template-columns: max-content auto;
		margin-block-start: var(--size-4);
	}
	aside {
		border-inline-end: 1px solid var(--border);
		margin-inline-end: var(--size-4);
	}
	nav {
		margin-inline-end: var(--size-4);
	}
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin: 0 auto;
		width: 100%;
	}
	/* .divider {
		border-bottom: 1px solid var(--border);
		margin-block: var(--size-7);
	} */
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
	/* .blogListSideNav {
		width: var(--size-content-1);
		font-size: var(--font-size-0);
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		& :hover {
			text-decoration: none;
		}
	}
	.blogPostSlugNav {
		display: flex;
		flex-direction: row;
		padding-block: var(--size-2);
		border-bottom: 1px solid var(--border);
	} */
</style>
