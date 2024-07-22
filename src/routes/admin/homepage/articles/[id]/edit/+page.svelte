<script lang="ts">
	import Card from '$lib/components/ui/Card.svelte';
	import { addToast } from '$lib/stores/toast';
	// eslint-disable-next-line import/no-unresolved
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	type ArticleForm = {
		dbError?: undefined;
		success?: undefined;
		fail: boolean;
		message: string;
		error: {
			articleTitle: [string, ...string[]] | undefined;
			author: [string, ...string[]] | undefined;
			description: [string, ...string[]] | undefined;
			img: [string, ...string[]] | undefined;
			link: [string, ...string[]] | undefined;
		};
	};

	export let data;
	export let form: ActionData & ArticleForm; // This isn't ideal and i dont like how redundant this is, but TS isnt recognizing the inferred nested ActionData types below, and If i just go with the explicitly typed form object, it causes issues with the form object in the script tag

	const { article } = data; // by pulling a reference to the data obj, we can use that to init the form fields and then use the data obj to refresh with the latest data

	function showToast(msg: string, type: string) {
		addToast({ message: msg, type, dismissible: true, timeout: 5000 });
	}

	$: articlePreview = {
		author: article.author,
		img: article.img,
		title: article.articleTitle,
		description: article.description,
		link: article.link
	};

	$: if (form?.success) {
		// Reset article fields with latest data
		articlePreview = {
			author: data.article.author,
			img: data.article.img,
			title: data.article.articleTitle,
			description: data.article.description,
			link: data.article.link
		};

		// Show success toast
		showToast(form.message, 'success');

		// Reset the form object (if i dont this was causing issues)
		form = { ...form, success: undefined, message: '' };
	}

	function resetForm() {
		// eslint-disable-next-line no-alert, no-restricted-globals
		if (confirm('Are you sure you want to reset the form?')) {
			articlePreview = {
				author: article.author,
				img: article.img,
				title: article.articleTitle,
				description: article.description,
				link: article.link
			};
		}
	}

	$: disabled =
		article.articleTitle === articlePreview.title &&
		article.author === articlePreview.author &&
		article.description === articlePreview.description &&
		article.img === articlePreview.img &&
		article.link === articlePreview.link;
</script>

<div class="form-and-preview">
	<form method="POST" use:enhance>
		<div class="input-group">
			<label for="articleTitle">Title</label>
			<input
				class:error={form?.fail && form?.error?.articleTitle}
				type="text"
				name="articleTitle"
				id="articleTitle"
				bind:value={articlePreview.title} />
			<p class="error-text">
				{#if form?.error?.articleTitle}
					{form?.error?.articleTitle[0]}
				{/if}
			</p>
		</div>

		<div class="input-group">
			<label for="img">Article img</label>
			<input
				class:error={form?.fail && form?.error?.img}
				type="text"
				name="img"
				id="img"
				bind:value={articlePreview.img} />
			<p class="error-text">
				{#if form?.error?.img}
					{form?.error?.img[0]}
				{/if}
			</p>
		</div>

		<div class="input-group">
			<label for="description">Description</label>
			<textarea
				class:error={form?.fail && form?.error?.description}
				name="description"
				id="description"
				bind:value={articlePreview.description}
				rows="4" />
			<p class="error-text">
				{#if form?.error?.description}
					{form?.error?.description[0]}
				{/if}
			</p>
		</div>

		<div class="input-group">
			<label for="author">Author</label>
			<input
				class:error={form?.fail && form?.error?.author}
				type="text"
				name="author"
				id="author"
				bind:value={articlePreview.author} />
			<p class="error-text">
				{#if form?.error?.author}
					{form?.error?.author[0]}
				{/if}
			</p>
		</div>

		<div class="input-group">
			<label for="link">Link URL</label>
			<input
				class:error={form?.fail && form?.error?.link}
				type="text"
				name="link"
				id="link"
				bind:value={articlePreview.link} />
			<p class="error-text">
				{#if form?.error?.link}
					{form?.error?.link[0]}
				{/if}
			</p>
		</div>

		<div class="button-group">
			<button class="reset-article-button" type="button" on:click={resetForm}> Reset Form </button>
			<button class:disabled {disabled} class="update-article-button">Update</button>
		</div>
	</form>

	<section>
		<h4>Live preview</h4>
		<Card
			author={articlePreview.author}
			articleImage={articlePreview.img}
			articleTitle={articlePreview.title}
			description={articlePreview.description}
			link={articlePreview.link}>
		</Card>
	</section>
</div>

<style>
	/* ELEMENTS */
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	form {
		display: flex;
		flex-direction: column;
		/* border: 1px solid white; */
		padding-inline: var(--size-7);
		min-width: 50%;
	}
	label {
		color: var(--link);
		font-weight: bold;
	}
	input {
		border: 1px solid var(--color-gray-300);
		border-radius: var(--size-1);
		padding: var(--size-2);
	}
	/* CLASSES */
	.button-group {
		display: flex;
		flex-direction: column;
		gap: var(--size-2);
		margin-block-start: var(--size-8);
	}
	.form-and-preview {
		display: flex;
		margin-block-start: var(--size-8);
		width: 100%;
	}
	.input-group {
		display: flex;
		flex-direction: column;
		gap: var(--size-2);
		margin-block-end: var(--size-4);
	}
	.update-article-button {
		background-color: var(--update);
		color: var(--on-crud-text);
		font-weight: var(--font-weight-7);
	}
	.error-text {
		display: block;
		min-height: var(--size-4);
		color: var(--error-text);
		font-size: var(--font-size-0);
	}
	.error {
		border: 1px solid var(--error-text);
	}
</style>
