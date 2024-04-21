<script lang="ts">
	import { enhance } from '$app/forms';
	import type Quill from 'quill';
	import 'quill/dist/quill.snow.css';
	import { onMount } from 'svelte';
	import type { ActionData, PageData } from './$types';
	import { QuillConfig, quillContentInit } from '$lib/utils/QuillConfig';

	export let data: PageData;
	export let form: ActionData;
	let toolbarOptions = [
		[{ header: 1 }, { header: 2 }, 'blockquote', 'link', 'image', 'video'],
		['bold', 'italic', 'underline', 'strike'],
		[{ list: 'ordered' }, { list: 'bullet' }],
		[{ align: [] }],
		['clean']
	];

	let editor: string | HTMLElement;
	let quill: Quill | null;
	const isEditing = true;
	let { title } = data.post;
	let { content } = data.post;
	let tagInput = data.post.tags;

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
		tagInput = data.post.tags;
		title = data.post.title;
		quill?.setText(data.post.content);
	}

	onMount(async () => {
		try {
			const { default: Quill } = await import('quill');

			// initialize the Quill editor
			quill = new Quill(editor, QuillConfig);

			// get the content of the post
			let quillData = quillContentInit(data.post.content);

			// set the content of the reader with incoming data
			quill.setContents(quillData);

			// listen for changes in the editor
			quill.on('text-change', () => {
				content = JSON.stringify(quill?.getContents());
			});
		} catch (error) {
			// TODO add fallback
		}
	});
</script>

<section>
	{#if form?.message}<p class="formMessage">{form?.message}</p>{/if}

	<form method="POST" action="/posts/{data.post.slug}" use:enhance>
		<hgroup>
			<h1>
				<textarea
					name="title"
					id="title"
					bind:value={title}
					spellcheck
					placeholder={title}
					rows="3" />
			</h1>
			<div class="tags">
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
			<label for="content">📝 Create that blog!</label>
			<div class="editor-wrapper">
				<div id="editor" bind:this={editor} />
				<input type="hidden" id="content" name="content" bind:value={content} />
			</div>
		</div>
		<div class="buttonWrapper">
			<button type="submit">Submit Form</button>
			<button type="reset" id="resetForm" on:click|preventDefault={resetForm}>
				Reset to Initial Data
			</button>
		</div>
	</form>
</section>

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

	h1 {
		background: unset;
		-webkit-background-clip: unset;
		-webkit-text-fill-color: unset;
		background-clip: unset;
	}

	section {
		width: 60%;
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
	#editor {
		min-height: var(--size-content-1);
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

	.formMessage {
		background: var(--pink-6);
		padding: var(--size-3);
		border-radius: var(--size-1);
		margin-block-end: var(--size-4);
		font-size: var(--font-size-5);
	}
</style>
