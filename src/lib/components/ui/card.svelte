<script lang="ts">
  import SkeletonImg from "$lib/components/ui/skeletons/skeleton-img.svelte";
  import SkeletonText from "$lib/components/ui/skeletons/skeleton-text.svelte";

  const { articleImage, articleTitle, author, link, description, buttons } = $props();
</script>

<div class="card pattern3 linear-mask">
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
    color: var(--brand);
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
    padding: var(--size-5);
  }
  .card:before {
    position: absolute;
    content: "";
    background-size: var(--s) var(--s);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
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
  .card:hover img {
    -webkit-mask: unset;
    mask: unset;
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

  .linear-mask::before {
    -webkit-mask: linear-gradient(-15deg, transparent 25%, white);
    mask: linear-gradient(-15deg, transparent 25%, white);
  }
  .pattern1::before {
    --s: 30px; /* control the size*/
    --c1: #8c2318;
    --c2: #f2c45a;

    background:
      conic-gradient(at 60% 60%, var(--c1) 75%, #0000 0) 0 0 / calc(5 * var(--s) / 2)
        calc(5 * var(--s) / 2),
      repeating-conic-gradient(var(--c1) 0 25%, #0000 0 50%) 0 0 / calc(5 * var(--s))
        calc(5 * var(--s)),
      repeating-conic-gradient(var(--c2) 0 25%, var(--c1) 0 50%) 0 0 / var(--s) var(--s);
  }
  .pattern2::before {
    --s: 60px; /* control the size*/
    --c1: #ffdc56;
    --c2: #fe6601;
    --c3: #803201;

    --_s: calc(2 * var(--s)) calc(2 * var(--s));
    --_g1: var(--_s) conic-gradient(at calc(500% / 6) 50%, var(--c3) 25%, #0000 0);
    --_g2: var(--_s) conic-gradient(at calc(200% / 3) 50%, var(--c2) 25%, #0000 0);
    background:
      var(--s) var(--s) / var(--_g1),
      0 0 / var(--_g1),
      var(--s) var(--s) / var(--_g2),
      0 0 / var(--_g2),
      repeating-conic-gradient(var(--c1) 0 25%, #0000 0 50%) 0 0 / var(--_s),
      linear-gradient(var(--c1) calc(100% / 3), var(--c2) 0 calc(200% / 3), var(--c3) 0) 0 0 /
        var(--s) var(--s);
  }
  .pattern3::before {
    --s: 30px; /* control the size*/
    --c1: #e5fcc2;
    --c2: #45ada8;

    --_s: 37.5% 12.5% at 62.5%;
    --_g: 34% 99%, #0000 101%;
    --g1: radial-gradient(var(--_s) 100%, #0000 32%, var(--c1) var(--_g));
    --g2: radial-gradient(var(--_s) 0, #0000 32%, var(--c1) var(--_g));
    --g3: radial-gradient(var(--_s) 100%, #0000 32%, var(--c2) var(--_g));
    --g4: radial-gradient(var(--_s) 0, #0000 32%, var(--c2) var(--_g));
    background:
      var(--g1),
      var(--g2) 0 calc(3 * var(--s)),
      var(--g3) var(--s) calc(3 * var(--s)),
      var(--g4) var(--s) calc(6 * var(--s)),
      var(--g1) calc(2 * var(--s)) calc(6 * var(--s)),
      var(--g2) calc(2 * var(--s)) calc(9 * var(--s)),
      var(--g3) calc(3 * var(--s)) calc(9 * var(--s)),
      var(--g4) calc(3 * var(--s)) 0,
      repeating-linear-gradient(var(--c1) 0 25%, var(--c2) 0 50%);
    background-size: calc(4 * var(--s)) calc(12 * var(--s));

    border-radius: var(--radius-2);
  }
</style>
