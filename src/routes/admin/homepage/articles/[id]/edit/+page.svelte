<script lang="ts">
	import Card from '$lib/components/ui/Card.svelte';
	// eslint-disable-next-line import/no-unresolved
	import { enhance } from '$app/forms';

	export let data;

	const { article } = data;
</script>

<h4>EDIT</h4>

<div class="form-and-preview">
	<form method="POST" use:enhance>
		<label for="img">Article Image URL</label>
		<input type="text" name="img" id="img" value={article.img} />

		<label for="description">Content Message</label>
		<textarea name="description" id="description" value={article.description} rows="4" />

		<label for="author">Content Author</label>
		<input type="text" name="author" id="author" value={article.author} />

		<label for="linkTitle">Link Title</label>
		<input type="text" name="linkTitle" id="linkTitle" value={article.linkTitle} />

		<label for="link">Link URL</label>
		<input type="text" name="link" id="link" value={article.link} />

		<button>Submit</button>
	</form>

	<section>
		<Card
			author={article.author}
			articleImage={article.img}
			articleTitle={article.articleTitle}
			description={article.description}
			link={article.link}>
		</Card>
	</section>
</div>

<style>
	section {
		display: flex;
		justify-content: center;
	}
	form {
		display: flex;
		flex-direction: column;
		gap: var(--size-3);
		border: 1px solid white;
		padding: var(--size-7);
		min-width: 50%;
	}
	/* TODO Consider lifting label styles to global scope */
	label {
		margin-block: var(--size-1);
		color: var(--link);
		font-weight: bold;
		font-size: var(--font-size-0);
	}
	input {
		border: 1px solid var(--color-gray-300);
		border-radius: var(--size-1);
		padding: var(--size-2);
	}
	.form-and-preview {
		display: flex;
		width: 100%;
	}
</style>
