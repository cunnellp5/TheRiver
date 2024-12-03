<script lang="ts">
	import { QuillConfigReadonly, quillContentInit } from '$lib/utils/QuillConfig';
	import type Quill from 'quill';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import type { Post } from '@prisma/client';

	interface Props {
		post: Post;
	}

	let { post }: Props = $props();
	let quill: Quill;
	let reader: null | HTMLDivElement = $state(null);
	let quillError: null | string = $state(null);

	async function setQuillData() {
		quillError = null; // Reset error message

		if (!browser) return;

		try {
			const { default: Quill } = await import('quill');
			// i dont know why this is running twice
			// first time, the reader is null and throws a quill error
			// but then renders because it hydrates immediately after
			if (reader === null) {
				console.log('reader is loading');
			} else {
				quill = await new Quill(reader, QuillConfigReadonly);
				const quillData = quillContentInit(post ? post.content : 'No content found');
				await quill.setContents(quillData);
			}
		} catch (err) {
			// eslint-disable-next-line no-console
			console.error('Failed to set Quill data:', err);
			quillError = 'Failed to load the editor. Please try again later.';
		}
	}

	onMount(() => {
		setQuillData();
	});
</script>

<section>
	{#if quillError}
		<p>{quillError}</p>
	{:else}
		<div class="quill-content" bind:this={reader}></div>
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
