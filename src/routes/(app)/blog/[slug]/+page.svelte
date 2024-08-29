<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import Seo from '$lib/components/SEO.svelte';
	import Badge from '$lib/components/ui/Badge.svelte';
	import { QuillConfigReadonly, quillContentInit } from '$lib/utils/QuillConfig';
	import formatDate from '$lib/utils/formatDate';
	import ChevronLeft from 'lucide-svelte/icons/chevron-left';
	import ChevronRight from 'lucide-svelte/icons/chevron-right';
	import type Quill from 'quill';
	import { onMount } from 'svelte';
	import { fade, slide } from 'svelte/transition';
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
	<div
		in:slide={{ duration: 500, axis: 'x' }}
		out:slide={{ duration: 200, axis: 'x' }}
		class="section surface-4"
		class:error-border={!post}>
		{#key post}
			<div in:fade={{ duration: 1400 }} class="blog-content-wrapper">
				{#if post}
					<div>
						<hgroup>
							<div class="headerAction">
								<h1 id={post.slug}>{post.title}</h1>
							</div>
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
					</div>
				{:else}
					<p>Post not found</p>
				{/if}
			</div>
		{/key}
	</div>
	<div class="prevNext-wrapper">
		{#if post}
			{#if previous}
				<a class="prevNext" href="/blog/{previous.slug}">
					<ChevronLeft size={12} />
					Previous
				</a>
			{:else}
				<span>
					<ChevronLeft size={12} />
					Previous
				</span>
			{/if}
			{#if next}
				<a class="prevNext" href="/blog/{next.slug}">
					Next
					<ChevronRight size={12} />
				</a>
			{:else}
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
	h1 {
		line-height: var(--font-lineheight-0);
	}
	date {
		color: var(--gray-7);
		font-size: var(--font-size-0);
	}
	hgroup {
		margin-block-end: var(--size-6);
	}

	/* CLASSES */
	.tags {
		margin-block-start: var(--size-4);
	}
	.section {
		box-shadow: var(--shadow-1);
		border-radius: var(--radius-2);
		padding: var(--size-7);
		height: fit-content;
	}
	.headerAction {
		display: flex;
		align-items: center;
		& button {
			margin-inline-start: var(--size-2);
		}
	}
	.reader-wrapper {
		width: 100%;
		letter-spacing: var(--font-letterspacing-1);
		& *,
		& *::before,
		& *::placeholder {
			color: var(--text-1);
		}
		& blockquote {
			padding-inline: var(--size-4);
		}
	}
	.prevNext-wrapper {
		display: flex;
		justify-content: space-between;
	}
	.prevNext {
		display: flex;
		position: sticky;
		top: 0;
		justify-content: space-between;
	}
	.blog-content-wrapper {
		display: flex;
	}
	.prevNext {
		display: flex;
		opacity: 0.7;
		margin-block: var(--size-2);
		font-size: var(--font-size-0);
	}
	.error-border {
		border: 1px solid var(--error-text);
	}
</style>
