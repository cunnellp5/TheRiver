<script lang="ts">
	import { preventDefault } from 'svelte/legacy';

	import SliderToggle from '$lib/components/ui/SliderToggle.svelte';
	import { onMount } from 'svelte';
	import { QuillConfig, quillContentInit } from '$lib/utils/QuillConfig';
	import { error } from '@sveltejs/kit';
	import type Quill from 'quill';
	import Badge from '$lib/components/ui/Badge.svelte';
	import { enhance } from '$app/forms';
	import 'quill/dist/quill.snow.css';

	
	interface Props {
		// PROPS / form data
		title?: string;
		content?: string;
		description?: string;
		tagInput?: string[];
		published?: boolean;
	}

	let {
		title = $bindable(''),
		content = $bindable(''),
		description = $bindable(''),
		tagInput = $bindable([]),
		published = $bindable(false)
	}: Props = $props();

	const initialData = {
		title,
		content,
		description,
		tagInput,
		published
	};

	// CONFIG
	let editor: string | HTMLElement = $state();
	let quill: Quill;

	onMount(async () => {
		try {
			const { default: Quill } = await import('quill');

			// initialize the Quill editor
			quill = new Quill(editor, QuillConfig);

			if (content) {
				// get the content of the post
				const quillData = quillContentInit(content);
				// set the content of the reader with incoming data
				quill.setContents(quillData);
			}

			// listen for changes in the editor
			quill.on('text-change', () => {
				content = JSON.stringify(quill?.getContents());
				description = quill.getText(); // get the text from the editor
			});
		} catch (err) {
			error(500, 'Error loading quill the text editor');
		}
	});

	function handleKeyDown(event: KeyboardEvent) {
		if (event.key === 'Enter') {
			event.preventDefault();
			const newTag = (event.target as HTMLInputElement).value.trim();
			if (newTag && !tagInput.includes(newTag)) {
				tagInput = [...tagInput, newTag];
			}
			(event.target as HTMLInputElement).value = '';
		}
	}

	function handleRemoveTag(tag: string) {
		if (tag) {
			tagInput = tagInput.filter((t: string) => t !== tag);
		}
	}

	function resetForm() {
		tagInput = initialData.tagInput;
		title = initialData.title;
		quill?.setText(initialData.content);
		published = initialData.published;
	}

	function handleToggle(event: CustomEvent<boolean>) {
		published = event.detail;
		// published = !event.detail;
	}
</script>

<form method="POST" use:enhance>
	👋 Dont forget to publish
	<div class="banner" class:published class:not-published={!published}>
		{published ? 'PUBLISH' : 'UNPUBLISH'}
		<SliderToggle checked={published} on:change={handleToggle} id="published" name="published" />
	</div>
	<br />
	<br />
	<hgroup>
		<label for="title">📣 Title</label>
		<h1 class="marginalize">
			<textarea
				name="title"
				id="title"
				bind:value={title}
				spellcheck
				placeholder="Add title here..."
				rows="3"></textarea>
		</h1>
		<div class="tags">
			<label for="tags">🔖 Tags</label>
			<div class="inputWrapper">
				<input type="hidden" id="tagInput" name="tagInput" bind:value={tagInput} />
				<input class="marginalize" type="text" placeholder="Add tags" onkeydown={handleKeyDown} />
			</div>
			<div class="badgesWrapper">
				{#each tagInput as tag}
					<Badge {tag}>
						<button class="deleteBadge" onclick={preventDefault(() => handleRemoveTag(tag))}>
							X
						</button>
					</Badge>
				{/each}
			</div>
		</div>
	</hgroup>
	<br />
	<div class="form-group">
		<label for="content">📝 Content</label>
		<div class="editor-wrapper marginalize">
			<div id="editor" bind:this={editor}></div>
			<input type="hidden" id="content" name="content" bind:value={content} />
			<input type="hidden" id="description" name="description" bind:value={description} />
		</div>
	</div>
	<div class="buttonWrapper">
		<button class="primary">Save</button>
		<button
			type="reset"
			id="resetForm"
			onclick={preventDefault(() => {
				// eslint-disable-next-line no-alert, no-restricted-globals
				if (confirm('Are you sure you want to reset the form?')) resetForm();
			})}>
			Reset to Initial Data
		</button>
	</div>
</form>

<style>
	hgroup {
		margin-block-end: var(--size-6);
	}
	textarea {
		background: var(--gradient-1) fixed;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		border: 1px solid var(--stone-9);
		background-clip: text;
		height: auto;
	}

	/* CLASSES */
	.tags {
		margin-block-start: var(--size-4);
	}
	.banner {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-block: var(--size-4);
		border-radius: var(--size-1);
		padding: var(--size-3);
		&.published {
			background: hsl(var(--green-5-hsl) / 30%);
		}
		&.not-published {
			background: hsl(var(--yellow-5-hsl) / 30%);
		}
	}
	.editor-wrapper {
		width: 100%;
		& *,
		& *::before,
		& *::placeholder {
			color: var(--text-1);
		}
		& button {
			box-shadow: none;
		}
	}
	.buttonWrapper {
		margin-block-start: var(--size-4);
		& button {
			margin-inline-end: var(--size-2);
		}
	}
	.deleteBadge,
	.deleteBadge:hover {
		margin: 0;
		box-shadow: unset;
		border: unset;
		background: unset;
		padding: unset;
		color: var(--stone-1);
	}
	.inputWrapper {
		margin-block: var(--size-1);
	}
	.badgesWrapper {
		display: flex;
		flex-flow: row wrap;
	}
	.marginalize {
		margin-block: var(--size-3);
	}
	button {
		text-shadow: none;
	}
</style>
