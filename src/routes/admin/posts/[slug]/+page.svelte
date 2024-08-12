<script lang="ts">
	import { QuillConfigReadonly, quillContentInit } from '$lib/utils/QuillConfig';
	import formatDate from '$lib/utils/formatDate';
	import type Quill from 'quill';
	import { onMount } from 'svelte';
	import Badge from '$lib/components/ui/Badge.svelte';
	import type { PageData } from './$types';
	import { page } from '$app/stores';
	import EditDeleteActions from '../components/EditDeleteActions.svelte';
	import { browser } from '$app/environment';

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
		} catch (err) {
			// eslint-disable-next-line no-console
			console.error('Failed to set Quill data:', err);
			quillError = 'Failed to load the editor. Please try again later.';
		}
	}

	$: {
		post = findPost($page.params.slug);
		setQuillData();
	}

	onMount(async () => {
		setQuillData();
	});
</script>

<section>
	{#if post}
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

		<div class="reader-wrapper">
			<div bind:this={reader} />
		</div>
		<div class="btnWrapper">
			<EditDeleteActions slug={post?.slug || $page.params.slug} redirect={true} />
		</div>
	{:else if quillError}
		<p>Quill broken try again</p>
	{:else}
		<p>Post not found</p>
	{/if}
</section>

<style>
	date {
		color: var(--gray-7);
		font-size: var(--font-size-0);
	}
	hgroup {
		margin-block-end: var(--size-6);
	}
	section {
		padding-block-start: var(--size-6);
	}

	/* CLASSES */
	.tags {
		margin-block-start: var(--size-4);
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
		& *,
		& *::before,
		& *::placeholder {
			color: var(--text-1);
		}
		& blockquote {
			padding-inline: var(--size-4);
		}
	}
	.btnWrapper {
		display: flex;
		flex-direction: column;
		gap: var(--size-2);
		width: 100%;
		& button {
			width: 100%;
		}
	}
</style>
