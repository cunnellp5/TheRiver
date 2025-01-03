<script lang="ts">
  import Badge from "$lib/components/ui/badge.svelte";
  import formatDate from "$lib/utils/format-date";

  interface Props {
    title: string;
    tags: string[];
    createdAt: Date;
    slug: string;
    description: string;
    link?: string;
    published?: import("svelte").Snippet;
    buttons?: import("svelte").Snippet<[any]>;
  }

  const {
    title,
    tags,
    createdAt,
    slug,
    description,
    link = `/blog/${slug}`,
    published,
    buttons,
  }: Props = $props();
</script>

<a
  class="blogLink"
  href={slug === "void" ? "javascript:void(0)" : link}
  data-sveltekit-noscroll>
  {@render published?.()}

  <h5 class="title">
    {title}
  </h5>

  <date>{formatDate(new Date(createdAt))}</date>

  <p class="description">
    {description}
  </p>

  <aside>
    <div class="badges">
      {#each tags as tag}
        <Badge {tag} />
      {/each}
    </div>
  </aside>

  <div>
    {@render buttons?.({ class: "buttons" })}
  </div>
</a>

<style lang="postcss">
  /* ELEMENTS */
  h5 {
    color: var(--text-1);
    font-size: var(--font-size-5);
    font-family: "Perfectly Nineties Semibold";
  }
  date {
    color: var(--stone-9);
    font-size: var(--font-size-0);
  }
  p {
    color: var(--text-1);
  }
  aside {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  a:hover {
    text-decoration: none;
  }

  /* CLASSES */
  .badges {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--size-2);
  }
  .description {
    margin-block: var(--size-4);
    font-weight: var(--font-weight-2);
    font-size: var(--font-size-1);
    letter-spacing: var(--font-letterspacing-3);
  }
  .blogLink {
    display: block;
  }
  @media (max-width: 768px) {
    .description {
      font-size: var(--font-size-0);
    }
  }
</style>
