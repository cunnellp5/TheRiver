<!-- DUMMY PAGE BECAUSE IM USING THE LAYOUT -->
<script lang="ts">
	import Seo from '$lib/components/SEO.svelte';
	import BlogCard from '$lib/components/ui/BlogCard.svelte';
	import type { PageData } from './$types';
	import Hero from './Hero.svelte';

	export let data: PageData;

	let search = '';
	let filteredPosts = data.posts;

	$: {
		filteredPosts = data.posts.filter(
			(post) =>
				post.title.toLowerCase().includes(search.toLowerCase()) ||
				post.description.toLowerCase().includes(search.toLowerCase())
		);
	}
</script>

<Seo
	title={'Insights & Updates from The River - Music, Beauty, & Fashion Blog'}
	description={"Stay updated with The River's insights on music, beauty, and fashion. Explore her blog for the latest trends, tips, and stories that inspire creativity and self-expression."} />

<Hero />

<div class="posts-wrapper app-layout">
	<div class="list-of-posts">
		<nav class="posts-search">
			<input type="search" bind:value={search} placeholder="Search posts..." />
			<p class="posts-count">
				{filteredPosts.length} post{filteredPosts.length > 1 ? 's' : ''}
			</p>
		</nav>
		<section>
			{#if filteredPosts.length > 0}
				<ul>
					{#each filteredPosts as { createdAt, description, slug, tags, title }}
						<li>
							<BlogCard {title} {tags} {createdAt} {slug} {description} />
						</li>
					{/each}
				</ul>
			{:else}
				<ul>
					<li>
						<BlogCard
							title={'No Posts'}
							tags={[]}
							createdAt={new Date()}
							slug={'no-posts'}
							description={''} />
					</li>
				</ul>
			{/if}
		</section>
	</div>
</div>

<style>
	nav {
		border-bottom: 1px solid var(--stone-11);
		padding-block: var(--size-4);
	}
	ul {
		& li {
			margin-inline: var(--size-4);
			margin-block: var(--size-4);
		}
	}
	/* CLASSES */
	.list-of-posts {
		margin-block: var(--size-8);
	}
	.posts-count {
		color: var(--text-2);
		font-size: var(--font-size-0);
	}
	.posts-search {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: var(--size-3);
	}
	/* MEDIA QUERIES */
	@media (max-width: 768px) {
		.posts-wrapper {
			flex-direction: column-reverse;
		}
	}
</style>
