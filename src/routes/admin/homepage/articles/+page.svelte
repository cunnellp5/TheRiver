<script lang="ts">
	import Card from '$lib/components/ui/Card.svelte';
	// eslint-disable-next-line import/no-unresolved
	import { enhance } from '$app/forms';

	export let data;

	const { articles } = data;
</script>

<pre>this page CRUDs homepage articles</pre>

<a href="/admin/homepage/articles/create">
	<button>Add</button>
</a>

<section>
	{#each articles as article}
		<Card
			articleImage={article.articleImgUrl}
			articleTitle={article.linkTitle}
			message={article.contentMessage}
			link={article.linkUrl}>
			<div slot="buttons">
				<a href="/admin/homepage/articles/update">
					<button>edit</button>
				</a>
				<!-- TODO make card data dynamic for refreshing, add notification message or toast -->
				<form method="POST" action="?/deleteArticle" use:enhance>
					<input type="hidden" name="articleId" id="articleId" value={article.id} />
					<button>delete</button>
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
</style>
