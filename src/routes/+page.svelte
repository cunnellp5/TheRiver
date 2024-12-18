<script lang="ts">
  import Subscribe from "$lib/components/forms/subscribe.svelte";
  import Seo from "$lib/components/seo.svelte";
  import Marquee from "$lib/components/ui/marquee.svelte";
  import HomeAbout from "./components/body/about/home-about.svelte";
  import HomeArticles from "./components/body/home-articles.svelte";
  import HomeHero from "./components/body/home-hero.svelte";
  // import HomeMerchSlice from "./components/body/home-merch-slice.svelte";

  const { data } = $props();
  const { articles } = data;
</script>

<Seo
  title="Music, Beauty Services, Blog & Fashion - The River | Alexis"
  description="Discover The River: A multifaceted artist offering music, beauty services, fashion, and more. Explore her latest tracks, music videos, blog, and unique handmade jewelry and clothing.">
</Seo>

<main>
  <HomeHero />
  <HomeAbout />
  <a
    href="/music"
    class="marquee">
    <Marquee display="NEW RELEASE - Out The Mud -" />
  </a>
  <HomeArticles {articles} />
  <Subscribe />
</main>

<style>
  .marquee:hover {
    text-decoration: none;
  }
</style>
