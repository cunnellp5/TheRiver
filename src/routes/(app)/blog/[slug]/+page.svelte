<script lang="ts">
	import { page } from '$app/stores';
	import Seo from '$lib/components/SEO.svelte';
	import type { BlogPost } from '$lib/types';
	import type { PageData } from './$types';
	import Content from './Content.svelte';
	import Header from './Header.svelte';
	import NextPrev from './NextPrev.svelte';

	export let data: PageData;
	let index: number;
	let next: BlogPost;
	let previous: BlogPost;

	function findPost(slug: string): BlogPost | undefined {
		return data.posts.find((p) => p.slug === slug) || undefined;
	}

	let post: BlogPost | undefined = findPost($page.params.slug); // initial post

	$: {
		post = findPost($page.params.slug); // updates page with selected post data
		index = data.posts.findIndex((p) => p.slug === $page.params.slug);
		next = data.posts[index - 1];
		previous = data.posts[index + 1];
	}
</script>

<Seo
	title={`${post ? post.title : 'Blog'} - By The River`}
	description={`${post ? post.description : 'Explore The River’s blog for insights on music, beauty, and fashion. Discover expert tips, trends, and stories that inspire creativity and style."'}`} />

<article class="app-layout">
	{#if data.posts.length > 1}
		<NextPrev pointLeft={true} {next} {previous} />
	{/if}

	{#key post}
		<div class="blog-content-wrapper" class:error-border={!post}>
			{#if post}
				<Header {post} />
				<Content {post} />
			{:else}
				<p>Post not found</p>
			{/if}
		</div>
	{/key}

	{#if data.posts.length > 1}
		<NextPrev pointRight={true} {next} {previous} />
	{/if}
</article>

<style>
	/* ELEMENTS */
	article {
		display: grid;
		grid-template-columns: 1fr var(--size-content-3) 1fr;
		margin-top: var(--size-content-1);
	}

	/* CLASSES */
	.blog-content-wrapper {
		grid-column: 2;
		justify-self: center;
		max-width: var(--size-content-3);
	}
	.error-border {
		border: 1px solid var(--error-text);
	}

	@media (max-width: 768px) {
		article {
			display: flex;
		}
	}
</style>
