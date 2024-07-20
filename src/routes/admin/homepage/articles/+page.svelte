<script lang="ts">
	import Pencil from 'lucide-svelte/icons/pencil';
	import Trash from 'lucide-svelte/icons/trash';
	import Card from '$lib/components/ui/Card.svelte';
	// eslint-disable-next-line import/no-unresolved
	import { enhance } from '$app/forms';

	export let data;

	const { articles } = data;
</script>

<h2>Articles</h2>

<a href="/admin/homepage/articles/create">
	<button class="create-article-button">Add new article</button>
</a>

<section>
	{#each articles as article}
		<div>{article.id}</div>
		<Card
			articleImage={article.articleImgUrl}
			articleTitle={article.linkTitle}
			message={article.contentMessage}
			link={article.linkUrl}>
			<div class="buttons" slot="buttons">
				<a href={`/admin/homepage/articles/${article.id}/edit`}>
					<button class="edit-article-button"><Pencil strokeWidth={1.2} />Edit</button>
				</a>
				<!-- TODO make card data dynamic for refreshing, add notification message or toast -->
				<form method="POST" action="?/deleteArticle" use:enhance>
					<input type="hidden" name="articleId" id="articleId" value={article.id} />
					<button class="delete-article-button"><Trash strokeWidth={1.2} />Delete</button>
				</form>
			</div>
		</Card>
	{/each}
</section>

<style>
	section {
		display: flex;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		flex-flow: row wrap;
	}
	.buttons {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--size-3);
		width: 100%;
		& button,
		a,
		form {
			width: 100%;
		}
	}
	.create-article-button {
		margin-block: var(--size-7);
		background-color: var(--create);
		width: var(--size-12);
		color: var(--on-crud-text);
		font-weight: var(--font-weight-7);
	}
	.edit-article-button {
		background-color: var(--update);
		color: var(--on-crud-text);
		font-weight: var(--font-weight-7);
	}
	.delete-article-button {
		background-color: var(--delete);
		color: var(--on-crud-text);
		font-weight: var(--font-weight-7);
	}
</style>
