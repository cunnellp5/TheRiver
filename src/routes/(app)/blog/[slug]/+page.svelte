<script lang="ts">
	import Seo from '$lib/components/SEO.svelte';
	import Badge from '$lib/components/ui/Badge.svelte';
	import { QuillConfigReadonly, quillContentInit } from '$lib/utils/QuillConfig';
	import formatDate from '$lib/utils/formatDate';
	import ChevronLeft from 'lucide-svelte/icons/chevron-left';
	import ChevronRight from 'lucide-svelte/icons/chevron-right';
	import type Quill from 'quill';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import type { PageData } from './$types';

	export let data: PageData;
	let quill: Quill | null;
	let reader: string | HTMLElement;
	let quillError = '';

	function findPost(slug: string) {
		return data.posts.find((p) => p.slug === slug) || undefined;
	}

	let post = findPost($page.params.slug); // initial post

	async function setQuillData() {
		if (!browser) return;

		try {
			const { default: Quill } = await import('quill');
			quill = new Quill(reader, QuillConfigReadonly);
			const quillData = await quillContentInit(post ? post.content : 'No content found');
			quill.setContents(quillData);
			quillError = ''; // Reset error message on success
		} catch (err) {
			// eslint-disable-next-line no-console
			console.error('Failed to set Quill data:', err);
			quillError = 'Failed to load the editor. Please try again later.';
		}
	}

	$: {
		post = findPost($page.params.slug); // updates page with selected post data
		setQuillData();
	}
	$: index = data.posts.findIndex((p) => p.slug === $page.params.slug);
	$: next = data.posts[index - 1];
	$: previous = data.posts[index + 1];

	onMount(() => {
		setQuillData();
	});
</script>

<Seo
	title={`${post ? post.title : 'Blog'} - By The River`}
	description={`${post ? post.description : 'Explore The River’s blog for insights on music, beauty, and fashion. Discover expert tips, trends, and stories that inspire creativity and style."'}`} />

<section>
	<div class="section surface-4" class:error-border={!post}>
		{#key post}
			<div class="blog-content-wrapper">
				{#if post}
					<hgroup>
						<h1 class="headingReset" id={post.slug}>{post.title}</h1>
						<date>{formatDate(new Date(post.createdAt))}</date>
						<div class="tags">
							{#each post.tags as tag}
								<Badge {tag} />
							{/each}
						</div>
					</hgroup>
					{#if quillError}
						<p>{quillError}</p>
					{:else}
						<div class="reader-wrapper">
							<div bind:this={reader} />
						</div>
					{/if}
				{:else}
					<p>Post not found</p>
				{/if}
			</div>
		{/key}
	</div>
	<div class="prevNext-wrapper">
		{#if post}
			{#if previous}
				<a class="prevNext" href="/blog/{previous.slug}" data-sveltekit-noscroll>
					<ChevronLeft size={12} />
					Previous
				</a>
			{:else if data.posts.length > 1}
				<span class="prevNext">
					<ChevronLeft size={12} />
					Previous
				</span>
			{/if}
			{#if next}
				<a class="prevNext" href="/blog/{next.slug}" data-sveltekit-noscroll>
					Next
					<ChevronRight size={12} />
				</a>
			{:else if data.posts.length > 1}
				<span class="prevNext">
					Next
					<ChevronRight size={12} />
				</span>
			{/if}
		{/if}
	</div>
</section>

<style>
	/* ELEMENTS */
	section {
		display: flex;
		flex-direction: column;
		margin-block-start: var(--size-content-1);
	}
	h1 {
		margin: 0 auto;
		color: var(--text-1);
		font-size: var(--size-fluid-4);
		line-height: var(--font-lineheight-0);
		font-family: 'Perfectly Nineties Semibold';
	}
	date {
		color: var(--gray-7);
		font-size: var(--font-size-0);
	}
	hgroup {
		margin-block: var(--size-fluid-5);
		text-align: center;
	}

	/* CLASSES */
	.section {
		margin: 0 auto;
		box-shadow: var(--shadow-1);
		border-radius: var(--radius-2);
		padding: var(--size-9);
		height: fit-content;
	}
	.reader-wrapper {
		margin: 0 auto;
		& p {
			font-weight: var(--font-weight-2);
			font-size: var(--font-size-2);
		}
		& *,
		& *::before,
		& *::placeholder {
			color: var(--text-1);
			line-height: var(--font-lineheight-4);
		}
		& blockquote {
			padding-inline: var(--size-4);
		}
		& img {
			width: 100%;
			height: var(--size-fluid-10);
			object-fit: none;
			object-position: center;
		}
		& h1 {
			margin-block: var(--size-2);
			background: unset;
			-webkit-background-clip: unset;
			font-size: var(--size-fluid-3);
			-webkit-text-fill-color: unset;
			background-clip: unset;
		}
	}
	.prevNext-wrapper {
		display: flex;
		position: sticky;
		bottom: 0;
		justify-content: space-between;
		margin-inline: var(--size-15);
	}
	.prevNext {
		display: flex;
		position: sticky;
		top: 0;
		justify-content: space-between;
		opacity: 0.7;
		margin-block: var(--size-2);
		font-size: var(--font-size-0);
	}
	.blog-content-wrapper {
		display: flex;
		flex-direction: column;
	}
	.error-border {
		border: 1px solid var(--error-text);
	}
</style>
