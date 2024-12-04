<script lang="ts">
  import type { PageData } from "./$types";
  import Seo from "$lib/components/seo.svelte";
  import BlogCard from "$lib/components/ui/blog-card.svelte";
  import Hero from "./Hero.svelte";

  interface Props {
    data: PageData;
  }

  const { data }: Props = $props();

  let search = $state("");
  let filteredPosts = $state(data.posts);

  // @deprecated — Use this only as a temporary solution to migrate your component code to Svelte 5.
  $effect(() => {
    filteredPosts = data.posts.filter(
      (post) =>
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.description.toLowerCase().includes(search.toLowerCase())
    );
  });
</script>

<Seo
  title="Insights & Updates from The River - Music, Beauty, & Fashion Blog"
  description="Stay updated with The River's insights on music, beauty, and fashion. Explore her blog for the latest trends, tips, and stories that inspire creativity and self-expression." />

<Hero />

<div class="posts-wrapper app-layout list-of-posts">
  <nav class="posts-search">
    <input
      type="search"
      bind:value={search}
      placeholder="Search posts..." />
    <p class="posts-count">
      {filteredPosts.length} post{filteredPosts.length > 1 ? "s" : ""}
    </p>
  </nav>
  <section>
    {#if filteredPosts.length > 0}
      <ul class="grid-container">
        {#each filteredPosts as { createdAt, description, slug, tags, title }}
          <div class="cardWrapper grid-item">
            <BlogCard
              {title}
              {tags}
              {createdAt}
              {slug}
              {description} />
          </div>
        {/each}
      </ul>
    {:else}
      <ul>
        <li>
          <BlogCard
            title="No Posts"
            tags={[]}
            createdAt={new Date()}
            slug="void"
            description="" />
        </li>
      </ul>
    {/if}
  </section>
</div>

<style>
  /* ELEMENTS */
  nav {
    padding-block: var(--size-4);
  }
  /* CLASSES */
  .grid-container {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: var(--size-3);
  }
  .grid-container > .grid-item {
    grid-column: span 6;
  }
  .grid-item {
    border-radius: var(--radius-2);
    background-color: var(--surface-4);
    padding: var(--size-4);
  }
  .list-of-posts {
    margin-block: var(--size-8);
  }
  .posts-count {
    color: var(--text-2);
    font-size: var(--font-size-0);
  }
  .posts-search {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .cardWrapper {
    transition: box-shadow 0.3s ease-in-out; /* Add transition for box-shadow */
  }
  .cardWrapper:nth-child(1n):hover {
    box-shadow: 0px 0px var(--size-9) calc(-1 * var(--size-7)) var(--life);
  }
  .cardWrapper:nth-child(2n):hover {
    box-shadow: 0px 0px var(--size-9) calc(-1 * var(--size-7)) var(--healing);
  }
  .cardWrapper:nth-child(3n):hover {
    box-shadow: 0px 0px var(--size-9) calc(-1 * var(--size-7)) var(--sunlight);
  }
  .cardWrapper:nth-child(4n):hover {
    box-shadow: 0px 0px var(--size-9) calc(-1 * var(--size-7)) var(--nature);
  }
  .cardWrapper:nth-child(5n):hover {
    box-shadow: 0px 0px var(--size-9) calc(-1 * var(--size-7)) var(--serenity);
  }
  .cardWrapper:nth-child(6n):hover {
    box-shadow: 0px 0px var(--size-9) calc(-1 * var(--size-7)) var(--spirit);
  }

  /* MEDIA QUERIES */
  @media (min-width: 768px) {
    /* Select every 6 elements, starting from position 1, and make it take up 6 columns */
    .grid-container > .grid-item:nth-child(6n + 1) {
      grid-column: span 6;
    }
    /* Select every 6 elements, starting from position 2, and make it take up 3 columns */
    .grid-container > .grid-item:nth-child(6n + 2) {
      grid-column: span 3;
    }
    /* Select every 6 elements, starting from position 3, and make it take up 3 columns */
    .grid-container > .grid-item:nth-child(6n + 3) {
      grid-column: span 3;
    }
    /* Select every 6 elements, starting from position 4, 5, and 6, and make them take up 2 columns each */
    .grid-container > .grid-item:nth-child(6n + 4),
    .grid-container > .grid-item:nth-child(6n + 5),
    .grid-container > .grid-item:nth-child(6n + 6) {
      grid-column: span 2;
    }
  }
</style>
