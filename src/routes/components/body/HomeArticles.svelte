<script lang="ts">
  import Card from "$lib/components/ui/Card.svelte";

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
		/* transform: scaleX(-1); */
		transform: rotate(180deg);
		/* margin: 0; */
		font-size: var(--size-12);
		writing-mode: vertical-lr;
		text-align: end;
	}
	/* CLASSES */
	/* .articleLink {
		text-decoration: none;
		& img {
			filter: grayscale(80%);
			-webkit-transition: 0.3s ease-in-out;
			transition: 0.3s ease-in-out;
			transition-delay: var(--transition-delay-1);
		}
	}
	.articleLink:hover {
		& img {
			-webkit-transform: scale(1.05);
			transform: scale(1.05);
			filter: grayscale(0);
		}
	}
	.articleWrapper {
		width: 60%;
	} */
	@media (max-width: 768px) {
		/* .articleWrapper {
			display: flex;
			flex-direction: column !important;
			padding-block-end: var(--size-9);
			width: 100%;
		} */
		h2 {
			font-size: var(--size-9);
			text-align: center;
		}
	}
</style>
