<script lang="ts">
	import { QuillConfigReadonly, quillContentInit } from '$lib/utils/QuillConfig';
	import type Quill from 'quill';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import type { Post } from '@prisma/client';

	export let post: Post;
	let quill: Quill | null;
	let reader: string | HTMLElement;
	let quillError = '';

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
		setQuillData();
	}

	onMount(() => {
		setQuillData();
	});
</script>

<section>
	{#if quillError}
		<p>{quillError}</p>
	{:else}
		<div class="quill-content" bind:this={reader} />
	{/if}
</section>

<style>
	.quill-content {
		& *,
		& *::before,
		& *::placeholder {
			color: var(--text-1);
			line-height: var(--font-lineheight-4);
		}
		& p {
			font-weight: var(--font-weight-2);
			font-size: var(--font-size-2);
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
</style>
