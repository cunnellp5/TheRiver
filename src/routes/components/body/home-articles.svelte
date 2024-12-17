<script lang="ts">
  import Card from "$lib/components/ui/card.svelte";

  const { articles } = $props();
</script>

<section class="article-wrapper">
  <h2>Articles</h2>
  {#each articles as article}
    <Card
      author={article.author}
      articleImage={article.img}
      articleTitle={article.articleTitle}
      description={article.description}
      buttons={null}
      link={article.link}>
    </Card>
  {/each}
</section>

<style>
  h2 {
    float: left;
    transform: rotate(180deg);
    font-size: var(--size-12);
    writing-mode: vertical-lr;
    text-align: end;

    @media (max-width: 768px) {
      font-size: var(--size-9);
      text-align: center;
      transform: unset;
      writing-mode: unset;
    }
  }
</style>
