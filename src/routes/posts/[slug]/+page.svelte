<script lang="ts">
	import formatDate from '$lib/utils/formatDate';
	import type Quill from 'quill';
	import { onMount } from 'svelte';
	import type { ActionData, PageData } from './$types';
	import { QuillConfigReadonly, quillContentInit } from '$lib/utils/QuillConfig';
	// import EditForm from './EditForm.svelte';

	export let data: PageData;
	let quill: Quill | null;
	let isEditing = false;
	let reader: string | HTMLElement;

	onMount(async () => {
		try {
			const { default: Quill } = await import('quill');

			quill = new Quill(reader, QuillConfigReadonly);

			let quillData = quillContentInit(data.post.content);

			quill.setContents(quillData);
		} catch (error) {
			// TODO: unable to load quill, have a fall back
		}
	});
</script>

<main class:editing={isEditing} class:center={!isEditing}>
	<section>
		<hgroup>
			<h1>{data.post.title}</h1>
			<date>{formatDate(new Date(data.post.createdAt))}</date>
			<div class="tags">
				{#each data.post.tags as tag}
					<span class="badge"># {tag}</span>
				{/each}
			</div>
		</hgroup>

		<div class="reader-wrapper" class:hidden={!quill}>
			<div bind:this={reader} />
		</div>

		<p class="content" class:hidden={quill}>
			{data.post.content}
		</p>
	</section>
</main>

<style>
	@import '../styles/post.css';
	date {
		font-size: var(--font-size-0);
		color: var(--gray-7);
	}
	.hidden {
		display: none;
	}
	.editing {
		margin-block-start: var(--size-9);
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}
	.center {
		margin-block-start: var(--size-9);
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.reader-wrapper {
		width: 100%;
		& *,
		& *::before,
		& *::placeholder {
			/* background-color: var(--yellow-0); */
			color: var(--stone-2);
		}
		& blockquote {
			padding-inline: var(--size-4);
		}
	}
</style>
