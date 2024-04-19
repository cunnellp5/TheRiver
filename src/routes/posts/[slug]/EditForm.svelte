<script lang="ts">
	import formatDate from '$lib/utils/formatDate';
	import type { EventHandler } from 'svelte/elements';
	import { enhance } from '$app/forms';
	import type { PageData } from './$types';

	export let data: PageData;
	export let form;

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
</script>

<section>
	{#if form?.message}<p class="formMessage">{form?.message}</p>{/if}

	<form method="POST" action="/posts/{data.post.slug}" use:enhance>
		<hgroup>
			<h2>
				<label for="title">Title</label>
				<textarea
					name="title"
					id="title"
					bind:value={title}
					spellcheck
					placeholder={title}
					cols="30" />
			</h2>
			<div class="tags">
				<div class="inputWrapper">
					<label for="tagInput">Tags</label>
					<!-- I WANT TO COLLECT THE TAGS HERE -->
					<input type="hidden" id="tagInput" name="tagInput" bind:value={tagInput} />
					<!-- I WANT TO UPDATE THE TAGS HERE -->
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
		<p class="content">
			<label for="content">Content</label>
			<textarea
				name="content"
				id="content"
				bind:value={content}
				spellcheck
				wrap="soft"
				rows="15"
				cols="60" />
		</p>
		<button class="primary" type="submit">Update Post</button>
	</form>
</section>

<style>
	@import './post.css';

	h2 {
		background: unset;
		-webkit-background-clip: unset;
		-webkit-text-fill-color: unset;
		background-clip: unset;
	}

	hgroup {
		max-width: 80%;
	}

	section {
		width: 50%;
	}

	.deleteBadge {
		color: var(--stone-1);
		padding: unset;
		margin: 0;
		background: unset;
		border: unset;
	}

	.inputWrapper {
		margin-block: var(--size-4);
		& input {
			margin-inline-start: var(--size-3);
		}
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
