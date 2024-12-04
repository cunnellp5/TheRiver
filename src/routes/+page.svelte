<script lang="ts">
  import Seo from "$lib/components/seo.svelte";
  import Marquee from "$lib/components/ui/marquee.svelte";
  import { onMount } from "svelte";
  import HomeAbout from "./components/body/home-about.svelte";
  import HomeArticles from "./components/body/home-articles.svelte";
  import HomeGallery from "./components/body/home-gallery.svelte";
  import HomeHero from "./components/body/home-hero.svelte";
  import HomeMerchSlice from "./components/body/home-merch-slice.svelte";

  const { data } = $props();
  const { videoURL, articles, about } = data;
  let visible = $state(false);

  onMount(() => {
    visible = true;
  });
</script>

<Seo
  title="Music, Beauty Services, Blog & Fashion - The River | Alexis"
  description="Discover The River: A multifaceted artist offering music, beauty services, fashion, and more. Explore her latest tracks, music videos, blog, and unique handmade jewelry and clothing."
></Seo>

<main>
  <HomeHero {videoURL} />
  <HomeAbout />
  <a
    href="/music"
    class="marquee">
    <Marquee display="NEW RELEASE - Out The Mud -" />
  </a>
  <HomeArticles {articles} />
  <HomeMerchSlice />
  <HomeGallery />
</main>

<style>
  /* ELEMENTS */
  /* CLASSES */
  .marquee:hover {
    text-decoration: none;
  }
</style>
