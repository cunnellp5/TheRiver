<script lang="ts">
	import { enhance } from '$app/forms';
	import 'quill/dist/quill.snow.css';
	import { onMount } from 'svelte';
	import { error } from '@sveltejs/kit';
	import type { ActionData } from '../$types';
	import SliderToggle from '$lib/components/ui/SliderToggle.svelte';
	import type Quill from 'quill';
	import QuillConfig from '$lib/utils/QuillConfig';

	// PROPS
	export let form: ActionData;

	// CONFIG
	let editor: string | HTMLElement;
	let quill: Quill;

	// Form data
	let title: string = '';
	let content: string = '';
	let description: string = '';
	let tagInput: string[] = [];
	let published: boolean = false;

	onMount(async () => {
		try {
			const { default: Quill } = await import('quill');
			// initialize the Quill editor
			quill = new Quill(editor, QuillConfig);

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

	function handleRemoveTag(event: MouseEvent) {
		const tag = (event.target as HTMLElement).previousElementSibling?.textContent;
		if (tag) {
			tagInput = tagInput.filter((t: string) => t !== tag);
		}
	}

	function resetForm() {
		tagInput = [];
		title = '';
		quill?.setText('');
		published = false;
	}

	function handleToggle(event: CustomEvent<boolean>) {
		console.log(event, 'uhhhh');
		published = event.detail;
		// published = !event.detail;
	}
</script>

<form method="POST" use:enhance>
	<div class="banner" class:published class:not-published={!published}>
		{published ? 'PUBLISH' : 'UNPUBLISH'}
		<SliderToggle checked={published} on:toggle={handleToggle} id="published" name="published" />
		<!-- <input type="hidden" id="published" name="published" bind:value={published} /> -->
	</div>

	<hgroup>
		<label for="title">📣 Title</label>
		<h1>
			<textarea
				name="title"
				id="title"
				bind:value={title}
				spellcheck
				placeholder="Add title here..."
				rows="3" />
		</h1>
		<div class="tags">
			<label for="tags">🔖 Tags</label>
			<div class="inputWrapper">
				<input type="hidden" id="tagInput" name="tagInput" bind:value={tagInput} />
				<input type="text" placeholder="Add tags" on:keydown={handleKeyDown} />
			</div>
			<div class="badgesWrapper">
				{#each tagInput as tag}
					<div class="badge">
						<div>{tag}</div>
						<button class="deleteBadge" on:click|preventDefault={handleRemoveTag}>X</button>
					</div>
				{/each}
			</div>
		</div>
	</hgroup>
	<div class="form-group">
		<label for="content">📝 Content</label>
		<div class="editor-wrapper">
			<div id="editor" bind:this={editor}></div>
			<input type="hidden" id="content" name="content" bind:value={content} />
			<input type="hidden" id="description" name="description" bind:value={description} />
		</div>
	</div>
	<div class="buttonWrapper">
		<button>Submit Form</button>
		<button
			type="reset"
			id="resetForm"
			on:click|preventDefault={() => {
				if (confirm('Are you sure you want to reset the form?')) resetForm();
			}}>
			Reset to Initial Data
		</button>
	</div>
</form>

<style>
	@import '../styles/post.css';

	textarea {
		background: var(--gradient-1) fixed;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		height: auto;
		border: 1px solid var(--stone-9);
	}

	.banner {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: var(--size-3);
		border-radius: var(--size-1);
		margin-block: var(--size-4);
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
			color: var(--stone-2);
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

	.deleteBadge {
		color: var(--stone-1);
		padding: unset;
		margin: 0;
		background: unset;
		border: unset;
	}

	.inputWrapper {
		margin-block: var(--size-1);
	}

	.badgesWrapper {
		display: flex;
		flex-flow: row wrap;
	}

	.badge {
		width: fit-content;
		display: flex;
		flex-direction: row;
		gap: var(--size-2);
		margin-block: var(--size-1);
	}
</style>
