<script>
	import Card from '$lib/components/ui/Card.svelte';
	// eslint-disable-next-line import/no-unresolved
	import { enhance } from '$app/forms';

	$: article = {
		img: '',
		description: '',
		author: '',
		link: '',
		linkTitle: ''
	};
</script>

<h2>Add article:</h2>

<section>
	<form method="POST" use:enhance>
		<!-- TODO refactor this to have an img upload flow for cloudinary, for now lets assume we have a url -->
		<label for="img"> Article Image URL: </label>
		<input id="img" name="img" type="text" bind:value={article.img} />

		<label for="description">Content Message:</label>
		<textarea id="description" name="description" bind:value={article.description} />

		<label for="author">Content Author:</label>
		<input id="author" name="author" type="text" bind:value={article.author} />

		<label for="link">Link URL:</label>
		<input id="link" name="link" type="text" bind:value={article.link} />

		<label for="linkTitle">Title:</label>
		<input id="linkTitle" name="linkTitle" type="text" bind:value={article.linkTitle} />

		<button class="primary" type="submit">Submit Article</button>
	</form>

	<div>
		<h4>Example article:</h4>
		<Card
			author="Author name"
			articleImage={'https://place-hold.it/300x300'}
			articleTitle="Title goes here"
			description="Description goes here"
			link="actual link url">
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
