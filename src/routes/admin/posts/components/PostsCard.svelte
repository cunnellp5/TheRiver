<script lang="ts">
  import Badge from "$lib/components/ui/Badge.svelte";
  import formatDate from "$lib/utils/formatDate";
  import SquareArrowOurUpRight from "lucide-svelte/icons/square-arrow-out-up-right";

  interface Props {
    title: string;
    tags: string[];
    createdAt: Date;
    slug: string;
    description: string;
    allowSlot?: boolean;
    link?: string;
    children?: import("svelte").Snippet;
  }

  const {
    title,
    tags,
    createdAt,
    slug,
    description,
    allowSlot = false,
    link = `/posts/${slug}`,
    children,
  }: Props = $props();
</script>

<div class="card surface-4">
  <div>
    <h5>
      <a href={link} data-sveltekit-noscroll>
        {title}
      </a>
    </h5>
    <date>{formatDate(new Date(createdAt))}</date>
  </div>
  <p class="description">
    {description}
  </p>
  <div class="tags">
    {#each tags as tag}
      <Badge {tag} />
    {/each}
  </div>
  <a class="blogLink" href={link}>
    <SquareArrowOurUpRight size="10" />
    Read more
  </a>
  {#if allowSlot}
    {@render children?.()}
  {/if}
</div>

<style>
	date {
		color: var(--stone-9);
		font-size: var(--font-size-0);
	}
	p {
		color: var(--text-2);
		line-height: var(--font-lineheight-0);
		font-family: var(--font-mono);
	}
	a:hover {
		text-decoration: none;
	}

	/* CLASSES */
	.tags {
		width: 100%;
	}
	.card {
		box-shadow: var(--shadow-2);
		padding: var(--size-3);
	}
	.description {
		margin-block: var(--size-4);
		font-size: var(--font-size-2);
		font-family: var(--font-serif);
		letter-spacing: var(--font-letterspacing-2);
	}
	.blogLink {
		display: flex;
		justify-content: end;
		gap: var(--size-1);
		margin-block: var(--size-2);
		font-weight: var(--font-weight-7);
		font-size: var(--font-size-0);
	}
</style>
