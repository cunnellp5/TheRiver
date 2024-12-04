<!-- leaving below just in case i dont want to scroll on nav -->
<script lang="ts">
  import type { LayoutData } from "./$types";

  import { page } from "$app/stores";
  import NavButton from "$lib/components/ui/button/nav-button.svelte";
  import { ShowHideScroll } from "$lib/utils/classes/show-hide-scroll";
  import { run } from "svelte/legacy";
  import Featured from "./featured.svelte";
  import Hero from "./hero.svelte";
  // import Marquee from '$lib/components/ui/Marquee.svelte';

  interface Props {
    data: LayoutData;
    children?: import("svelte").Snippet;
  }

  const { data, children }: Props = $props();
  const { about } = data;

  const CssScrollToggler = new ShowHideScroll();
  let scroll: number = $state(0);
  let includesTracks: boolean = $state(false);
  let includesStems: boolean = $state(false);
  let includesVideos: boolean = $state(false);

  run(() => {
    includesTracks = $page.url.pathname === "/music";
    includesStems = $page.url.pathname === "/music/video";
    includesVideos = $page.url.pathname === "/music/stems";
  });
</script>

<svelte:window bind:scrollY={scroll} />

<main class="grid-container">
  <div
    class={`links ${CssScrollToggler.updateClass(scroll)}`}
    use:CssScrollToggler.setTransitionDuration>
    <NavButton
      route="/music#tracks"
      display="tracks"
      active={includesTracks} />
    <NavButton
      route="/music/video#videos"
      display="videos"
      active={includesStems} />
    <NavButton
      route="/music/stems#stems"
      display="stems"
      active={includesVideos} />

    <!-- <div class="social-links"> -->

    <!-- <span>Featured: </span> -->
    <!-- <NavButton
      route="https://distrokid.com/hyperfollow/theriver2/out-the-mud-volume-2"
      display="Distrokid" />
    <NavButton route="https://open.spotify.com/album/46TmH8hxWDYdl28vTSXmEC" display="Spotify" />
    <NavButton
      route="https://www.youtube.com/watch?v=z-OJ9WmDnDE&list=OLAK5uy_kopLOOpL784D1d8KLy-G2gjm9Nkdc7bzY"
      display="YouTube" /> -->
    <!-- <a href="" target="_blank" rel="noopener"> Distrokid </a> -->
    <!-- <a
        href="https://open.spotify.com/album/46TmH8hxWDYdl28vTSXmEC"
        target="_blank"
        rel="noopener">
        Spotify
      </a>
      <a
        href="https://www.youtube.com/watch?v=z-OJ9WmDnDE&list=OLAK5uy_kopLOOpL784D1d8KLy-G2gjm9Nkdc7bzY"
        target="_blank"
        rel="noopener">
        YouTube
      </a> -->
    <!-- </div> -->
  </div>
  <Hero />

  <Featured />
  <!-- {#if about.isShowing}
    <p>
      {about.text}
    </p>
  {/if} -->

  <section class="music-content app-layout">
    {@render children?.()}
  </section>
</main>

<style>
  /* ELEMENTS */
  .links {
    display: flex;
    position: sticky;
    justify-content: center;
    align-self: start; /* Ensure it aligns to the start of the container */
    gap: var(--size-4);
    z-index: var(--layer-important);
    backdrop-filter: blur(20px);
    margin-bottom: var(--size-4);
    /* border-bottom: 1px solid var(--stone-11); */
    padding: var(--size-5);
    width: 100%;
    color: var(--stone-4);
    list-style: none;
  }
  .music-content {
    width: 100%;
  }
  .grid-container {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .show {
    top: calc(var(--nav-height));
  }
  .hide {
    top: 2px;
  }

  @keyframes moveGradient {
    0% {
      background-position: 0%;
    }
    100% {
      background-position: 200%;
    }
  }
</style>
