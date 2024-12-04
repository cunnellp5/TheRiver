<script lang="ts">
  import Etsy from "$lib/components/svgs/socials/etsy.svelte";
  import Facebook from "$lib/components/svgs/socials/facebook.svelte";
  import Instagram from "$lib/components/svgs/socials/instagram.svelte";
  import LinkTree from "$lib/components/svgs/socials/link-tree.svelte";
  import Spotify from "$lib/components/svgs/socials/spotify.svelte";
  import Youtube from "$lib/components/svgs/socials/youtube.svelte";
  import socialLinks from "$lib/data/social-links";

  const components = [
    { name: "Facebook", SVGComponent: Facebook, link: socialLinks.facebook },
    { name: "Youtube", SVGComponent: Youtube, link: socialLinks.youtube },
    { name: "Instagram", SVGComponent: Instagram, link: socialLinks.instagramSing },
    { name: "Spotify", SVGComponent: Spotify, link: socialLinks.spotify },
    { name: "Etsy", SVGComponent: Etsy, link: socialLinks.etsy },
    { name: "LinkTree", SVGComponent: LinkTree, link: socialLinks.linkTree },
  ];
</script>

<ul>
  {#each components as { SVGComponent, link }}
    <a
      class="socials"
      href={link}
      target="_blank"
      rel="noopener">
      <li>
        <SVGComponent />
      </li>
    </a>
  {/each}
</ul>

<style>
  /* ELEMENTS */
  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: var(--size-1);
    padding-inline: 0;
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0px solid var(--gray-9);
    aspect-ratio: var(--ratio-square);
    min-width: var(--size-8);
  }
  a:hover {
    cursor: pointer;
  }
  /* CLASSES */
  .socials {
    fill: var(--socials-2);
    transition:
      fill 0.2s ease,
      border 0.2s ease;
  }
  .socials:hover {
    fill: var(--link);
    border: 3px solid var(--link);
  }
</style>
