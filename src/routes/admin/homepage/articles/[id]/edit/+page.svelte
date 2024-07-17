<script lang="ts">
	// eslint-disable-next-line import/no-unresolved
	import { enhance } from '$app/forms';
	import Card from '$lib/components/ui/Card.svelte';

	export let data;

	const { article } = data;
</script>

<h4>EDIT</h4>

<div class="form-and-preview">
	<form action="POST" use:enhance>
		<label for="articleImgUrl">Article Image URL</label>
		<input type="text" name="articleImgUrl" id="articleImgUrl" value={article.articleImgUrl} />

		<label for="linkTitle">Link Title</label>
		<input type="text" name="linkTitle" id="linkTitle" value={article.linkTitle} />

		<label for="contentMessage">Content Message</label>
		<textarea
			type="text"
			name="contentMessage"
			id="contentMessage"
			value={article.contentMessage} />

		<label for="linkUrl">Link URL</label>
		<input type="text" name="linkUrl" id="linkUrl" value={article.linkUrl} />

		<button>Submit</button>
	</form>

	<section>
		<Card
			articleImage={article.articleImgUrl}
			articleTitle={article.linkTitle}
			message={article.contentMessage}
			link={article.linkUrl}>
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
		/* max-width: 50%; */
		border: 1px solid white;
		padding: var(--size-7);
		min-width: 50%;
	}
	label {
		font-weight: bold;
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
