<script lang="ts">
	import { enhance } from '$app/forms';
	import type Quill from 'quill';
	import 'quill/dist/quill.snow.css';
	import { onMount } from 'svelte';
	import type { ActionData } from '../$types';

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

	let title: string = '';
	let content: string = '';
	let tagInput: string[] = [];

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
	}

	onMount(async () => {
		const { default: Quill } = await import('quill');

		// initialize the Quill editor
		quill = new Quill(editor, {
			modules: {
				toolbar: toolbarOptions
			},
			theme: 'snow',
			placeholder: 'Write your story...'
		});

		// listen for changes in the editor
		quill.on('text-change', () => {
			content = JSON.stringify(quill?.getContents());
		});
	});
</script>

<main>
	<section>
		<h1 class="firstHeader">Create a post</h1>
		{#if form?.message}<p class="formMessage">{form?.message}</p>{/if}

		<form method="POST" action="/posts?/createPost" use:enhance>
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
</main>

<style>
	@import '../styles/post.css';

	.firstHeader {
		margin-block: var(--size-7);
	}

	textarea {
		background: var(--gradient-1) fixed;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		height: auto;
		border: 1px solid var(--stone-9);
	}

	main {
		display: flex;
		justify-content: center;
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
