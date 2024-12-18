<script lang="ts">
  import type { BlogPost } from "$lib/types";
  import type { PageData } from "./$types";
  import { page } from "$app/stores";
  import Seo from "$lib/components/seo.svelte";
  import Content from "./content.svelte";
  import Header from "./header.svelte";
  import NextPrev from "./next-prev.svelte";

  interface Props {
    data: PageData;
  }

  const { data }: Props = $props();
  let index: number = $state(0);
  let next: BlogPost | undefined = $state(undefined);
  let previous: BlogPost | undefined = $state(undefined);

  function findPost(slug: string): BlogPost | undefined {
    return data.posts.find(p => p.slug === slug) || undefined;
  }

  let post: BlogPost | undefined = $state(findPost($page.params.slug)); // initial post

  $effect(() => {
    post = findPost($page.params.slug); // updates page with selected post data
    index = data.posts.findIndex(p => p.slug === $page.params.slug);
    next = data.posts[index - 1];
    previous = data.posts[index + 1];
  });
</script>

<Seo
  title={`${post ? post.title : "Blog"} - By The River`}
  description={`${post ? post.description : 'Explore The River’s blog for insights on music, beauty, and fashion. Discover expert tips, trends, and stories that inspire creativity and style."'}`} />

<section>
  <article class="app-layout">
    {#if data.posts.length > 1}
      <NextPrev
        pointLeft={true}
        {next}
        {previous} />
    {/if}

    {#key post}
      <div
        class="blog-content-wrapper"
        class:error-border={!post}>
        {#if post}
          <Header {post} />
          <Content {post} />
        {:else}
          <p>Post not found</p>
        {/if}
      </div>
    {/key}

    {#if data.posts.length > 1}
      <NextPrev
        pointRight={true}
        {next}
        {previous} />
    {/if}
  </article>
</section>

<style>
  /* ELEMENTS */
  section {
    background: radial-gradient(ellipse at center, hsla(7, 80%, 25%, 0.109), transparent 60%);
    /* background-image: radial-gradient(
        ellipse at 100%,
        hsla(7, 80%, 25%, 0.109),
        hsla(0, 0%, 0%, 0)
      ),
      var(--noise-4); */
  }

  section::before {
    --size: var(--size-8);
    --line: color-mix(in lch, canvasText, transparent 70%);
    position: fixed;
    top: 0;
    transform-style: flat;
    z-index: -1;
    -webkit-mask: linear-gradient(-20deg, transparent 50%, white);
    mask: linear-gradient(-20deg, transparent 50%, white);
    background:
      linear-gradient(90deg, var(--line) 1px, transparent 1px var(--size)) 50% 50% / var(--size)
        var(--size),
      linear-gradient(var(--line) 1px, transparent 1px var(--size)) 50% 50% / var(--size)
        var(--size);
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    content: "";
  }
  article {
    display: grid;
    grid-template-columns: 1fr var(--size-content-3) 1fr;
    padding-block: var(--size-content-1);
  }

  /* CLASSES */
  .blog-content-wrapper {
    grid-column: 2;
    justify-self: center;
    max-width: var(--size-content-3);
  }
  .error-border {
    border: 1px solid var(--error-text);
  }

  @media (max-width: 768px) {
    article {
      display: flex;
    }
  }
</style>
