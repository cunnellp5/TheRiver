<script lang="ts">
  import SkeletonImg from "$lib/components/ui/skeletons/skeleton-img.svelte";
  import SkeletonText from "$lib/components/ui/skeletons/skeleton-text.svelte";

  const { articleImage, articleTitle, author, link, description, buttons } = $props();
</script>

<div class="card">
  <a
    href={link}
    target="_blank"
    rel="noopener">
    <figure>
      <div class="imageContainer">
        {#if articleImage}
          <div class="imgWrapper">
            <img
              height="600px"
              width="600px"
              src={articleImage}
              alt={articleTitle} />
          </div>
          <p class="overlayTitle">{articleTitle}</p>
        {:else}
          <SkeletonImg />
        {/if}
      </div>
    </figure>
    <div class="contentWrapper">
      <div
        data-description
        class="description">
        {#if description}
          <p>{description}</p>
        {:else}
          <SkeletonText />
          <SkeletonText />
        {/if}
      </div>
      <div class="link-wrapper">
        {#if link}
          <p
            data-link
            class="credits">
            {author}
          </p>
        {:else}
          <SkeletonText short={true} />
        {/if}
      </div>
    </div>
    <div>
      {@render buttons?.({ class: "buttons" })}
    </div>
  </a>
</div>

<style>
  /* ELEMENTS */
  a {
    color: var(--link);
    font-size: var(--font-size-0);
    text-decoration: none;
  }
  p {
    margin-block-start: var(--size-3);
    color: var(--text-2);
    font-size: var(--font-size-1);
  }
  figure {
    margin: 0;
    border-radius: var(--radius-2);
    border-bottom-left-radius: 0px;
    padding: 0;
    overflow: hidden;
  }

  /* CLASSES */
  .imgWrapper {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transition: 0.3s ease-in-out;
    transition: 0.3s ease-in-out;
    transition-delay: var(--transition-delay-1);
    aspect-ratio: var(--ratio-square);
    object-fit: cover;
    & > img {
      border-radius: var(--radius-2);
    }
  }
  .imageContainer {
    position: relative;
    width: 100%;
    height: auto;
  }
  .credits {
    color: var(--link);
    font-size: var(--font-size-0);
  }
  .link-wrapper {
    display: flex;
    justify-content: flex-end;
  }
  .card {
    display: flex;
    position: relative;
    flex: 1 1 var(--size-14);
    flex-direction: column;
    gap: var(--size-3);
    transition:
      flex-grow 0.5s ease,
      flex-shrink 0.5s ease;
    box-shadow: var(--shadow-1);
    border-radius: var(--radius-2);
    background: var(--surface-4);
    padding: var(--size-5);
  }
  .card:hover {
    -webkit-transition: 0.3s ease-in-out;
    transition: 0.3s ease-in-out;
    transition-delay: var(--transition-delay-1);
    /* box-shadow: var(--shadow-2); */
    box-shadow: 4px 4px 30px var(--yellow-10);
    & .imgWrapper {
      -webkit-transform: scale(1.05);
      transform: scale(1.05);
    }
  }
  .buttons {
    display: flex;
    flex-direction: column;
  }
  .overlayTitle {
    position: absolute;
    bottom: 0;
    background-color: rgba(181, 81, 81, 0.9);
    padding: var(--size-1);
    color: var(--stone-2);
    font-weight: var(--font-weight-7);
    font-size: var(--size-4);
    line-height: var(--size-5);
  }
  .description {
    line-height: var(--size-4);
  }
</style>
