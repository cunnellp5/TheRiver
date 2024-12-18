<script lang="ts">
  import { enhance } from "$app/forms";

  import Card from "$lib/components/ui/card.svelte";
  import * as GenericCard from "$lib/components/ui/card/index.js";
  import { addToast } from "$lib/stores/toast";
  import Pencil from "lucide-svelte/icons/pencil";
  import Trash from "lucide-svelte/icons/trash";
  import { run } from "svelte/legacy";

  const { data, form } = $props();

  const STROKE_WIDTH = 1.2;

  function showToast() {
    addToast({
      message: "Article deleted",
      type: "message",
      iconType: "warning",
      dismissible: true,
      timeout: 5000,
    });
  }

  const articles = $derived(data.articles);
  run(() => {
    if (form?.deleteSuccess) {
      showToast();
    }
  });
</script>

<div class="adminIntroCardWrapper">
  <GenericCard.Root>
    <GenericCard.Header>
      <GenericCard.Title>Articles</GenericCard.Title>
      <GenericCard.Description
        >Create, Edit, or Delete articles found on the home page</GenericCard.Description>
    </GenericCard.Header>
    <GenericCard.Footer>
      <a href="/admin/homepage/articles/create">
        <button class="create-button">Add article</button>
      </a>
    </GenericCard.Footer>
  </GenericCard.Root>
</div>

{#if articles.length === 0}
  <p>No articles found</p>
{/if}

<section class="article-wrapper">
  {#each articles as article}
    <Card
      author={article.author}
      articleImage={article.img}
      articleTitle={article.articleTitle}
      description={article.description}
      link={article.link}>
      {#snippet buttons()}
        <div class="buttons">
          <a href={`/admin/homepage/articles/${article.id}/edit`}>
            <button class="update-button"><Pencil strokeWidth={STROKE_WIDTH} />Edit</button>
          </a>
          <form
            method="POST"
            action="?/deleteArticle"
            use:enhance={({ cancel }) => {
              // eslint-disable-next-line no-alert
              if (confirm("Are you sure you want to delete this article?")) {
                return async ({ update }) => update();
              }
              return cancel();
            }}>
            <input
              type="hidden"
              name="articleId"
              id="articleId"
              value={article.id} />
            <button class="delete-button"><Trash strokeWidth={STROKE_WIDTH} />Delete</button>
          </form>
        </div>
      {/snippet}
    </Card>
  {/each}
</section>

<style>
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
</style>
