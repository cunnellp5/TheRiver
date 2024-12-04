<script lang="ts">
  import type { BlogPost } from "$lib/types";
  import Badge from "$lib/components/ui/Badge.svelte";
  import formatDate from "$lib/utils/formatDate";

  interface Props {
    post: BlogPost;
  }

  const { post }: Props = $props();
</script>

<section class="hero">
  <h1 id={post.slug}>{post.title}</h1>

  <div class="meta">
    <img
      src="https://res.cloudinary.com/dswpu3qez/image/upload/w_100,c_fill,ar_1:1,g_auto/v1724875596/TheRiver/alexisArticle3_tl91an.webp"
      alt="alexis face" />
    <div>
      <p>Alexis Coose</p>
      <date>Posted on {formatDate(new Date(post.createdAt))}</date>
    </div>
  </div>

  <div class="tags">
    {#each post.tags as tag}
      <Badge {tag} />
    {/each}
  </div>
</section>

<style>
	/* ELEMENTS */
	h1 {
		margin: 0 auto;
		color: var(--text-1);
		font-weight: 400;
		font-size: var(--size-fluid-4);
		line-height: var(--font-lineheight-0);
		font-family: 'atyp-bl-variable', sans-serif;
	}
	date {
		color: var(--gray-7);
		font-size: var(--font-size-0);
	}
	img {
		border-radius: 50%;
		height: var(--size-8);
	}
	/* CLASSES */
	.hero {
		display: flex;
		flex-direction: column;
		gap: var(--size-3);
		margin-block-end: var(--size-fluid-5);
		text-align: center;
	}
	.tags {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: var(--size-2);
	}
	.meta {
		display: flex;
		flex-direction: row;
		justify-content: center;
		gap: var(--size-3);
		margin-block: var(--size-3);
		text-align: left;
	}
</style>
