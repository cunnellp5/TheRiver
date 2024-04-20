<script lang="ts">
	import formatDate from '$lib/utils/formatDate';
	import type Quill from 'quill';
	import { onMount } from 'svelte';
	import type { ActionData, PageData } from './$types';
	import EditForm from './EditForm.svelte';

	export let form: ActionData;
	export let data: PageData;
	let quill: Quill | null;
	let isEditing = false;
	let reader: string | HTMLElement;

	function update() {
		isEditing = !isEditing;
	}

	onMount(async () => {
		const { default: Quill } = await import('quill');

		// initialize the Quill reader
		quill = new Quill(reader, {
			modules: { toolbar: null },
			readOnly: true
		});

		let quillData;
		try {
			quillData = JSON.parse(data.post.content);
		} catch (e) {
			quillData = [{ insert: data.post.content }];
		}
		// set the content of the reader with incoming data
		quill.setContents(quillData);
	});
</script>

<input type="checkbox" on:change={update} />
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
	{#if isEditing}
		<EditForm {data} {form} />
	{/if}
</main>

<style>
	@import './post.css';
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
