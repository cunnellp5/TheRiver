<script lang="ts">
	import { addToast } from '$lib/stores/toast';
	import Card from '$lib/components/ui/Card.svelte';
	import Pencil from 'lucide-svelte/icons/pencil';
	import Plus from 'lucide-svelte/icons/plus';
	import Trash from 'lucide-svelte/icons/trash';
	// eslint-disable-next-line import/no-unresolved
	import { enhance } from '$app/forms';

	export let data;
	export let form;

	const STROKE_WIDTH = 1.2;

	function showToast() {
		addToast({ message: 'Article deleted', type: 'info', dismissible: true, timeout: 5000 });
	}

	$: articles = data.articles;
	$: if (form?.deleteSuccess) {
		showToast();
	}
</script>

<h2>Articles</h2>

<a href="/admin/homepage/articles/create">
	<button class="create-article-button"> <Plus strokeWidth={3} />Add new article</button>
</a>

{#if articles.length === 0}
	<p>No articles found</p>
{/if}

<section>
	{#each articles as article}
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
				<form
					method="POST"
					action="?/deleteArticle"
					use:enhance={({ cancel }) => {
						// eslint-disable-next-line no-alert, no-restricted-globals
						if (confirm('Are you sure you want to delete this article?')) {
							return async ({ update }) => update();
						}
						return cancel();
					}}>
					<input type="hidden" name="articleId" id="articleId" value={article.id} />
					<button class="delete-article-button"><Trash strokeWidth={STROKE_WIDTH} />Delete</button>
				</form>
			</div>
		</Card>
	{/each}
</section>

<style>
	/* ELEMENTS */
	section {
		display: flex;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		flex-flow: row wrap;
		gap: var(--size-7);
	}
	/* CLASSES */
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
