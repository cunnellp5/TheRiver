<script lang="ts">
	import Card from '$lib/components/ui/Card.svelte';
	import Pencil from 'lucide-svelte/icons/pencil';
	import Plus from 'lucide-svelte/icons/plus';
	import Trash from 'lucide-svelte/icons/trash';
	// eslint-disable-next-line import/no-unresolved
	import { enhance } from '$app/forms';

	export let data;

	const STROKE_WIDTH = 1.2;

	const { articles } = data;
</script>

<h2>Articles</h2>

<a href="/admin/homepage/articles/create">
	<button class="create-article-button"> <Plus strokeWidth={3} />Add new article</button>
</a>

<section>
	{#each articles as article}
		<!-- <div>{article.id}</div> -->
		<Card
			author={article.author}
			articleImage={article.img}
			articleTitle={article.articleTitle}
			description={article.description}
			link={article.link}>
			<div class="buttons" slot="buttons">
				<a href={`/admin/homepage/articles/${article.id}/edit`}>
					<button class="edit-article-button"><Pencil strokeWidth={STROKE_WIDTH} />Edit</button>
				</a>
				<!-- TODO make card data dynamic for refreshing, add notification message or toast -->
				<form method="POST" action="?/deleteArticle" use:enhance>
					<input type="hidden" name="articleId" id="articleId" value={article.id} />
					<button class="delete-article-button"><Trash strokeWidth={STROKE_WIDTH} />Delete</button>
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
		gap: var(--size-7);
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
