<script>
	import Card from '$lib/components/ui/Card.svelte';
	// eslint-disable-next-line import/no-unresolved
	import { enhance } from '$app/forms';

	$: article = {
		articleImgUrl: '',
		contentMessage: '',
		contentAuthor: '',
		linkUrl: '',
		linkTitle: ''
	};
</script>

<h2>Add article:</h2>

<section>
	<form method="POST" use:enhance>
		<label for="articleImgUrl">Article Image URL:</label>
		<input id="articleImgUrl" type="text" bind:value={article.articleImgUrl} />

		<label for="contentMessage">Content Message:</label>
		<textarea id="contentMessage" bind:value={article.contentMessage}></textarea>

		<label for="contentAuthor">Content Author:</label>
		<input id="contentAuthor" type="text" bind:value={article.contentAuthor} />

		<label for="linkUrl">Link URL:</label>
		<input id="linkUrl" type="text" bind:value={article.linkUrl} />

		<label for="linkTitle">Link Title:</label>
		<input id="linkTitle" type="text" bind:value={article.linkTitle} />

		<button class="primary" type="submit">Submit Article</button>
	</form>

	<div>
		<h4>Example article layout:</h4>
		<Card
			articleImage={'https://place-hold.it/300x300'}
			articleTitle="Link Title goes here"
			message="Content Message goes here"
			link="linkUrl">
		</Card>
	</div>
</section>

<style>
	h2 {
		padding-block-end: var(--size-7);
	}
	form {
		display: flex;
		flex-direction: column;
		gap: var(--size-3);
		min-width: 50%;
	}

	label {
		font-weight: bold;
	}

	input,
	textarea {
		border: 1px solid var(--border);
		border-radius: var(--size-1);
		padding: var(--size-2);
	}

	section {
		display: flex;
		justify-content: space-evenly;
		width: 100%;
		/* grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); */
		/* flex-flow: row wrap; */
		/* gap: var(--size-6); */
	}
</style>
