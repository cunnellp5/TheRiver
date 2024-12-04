<script lang="ts">
  import Seo from "$lib/components/SEO.svelte";
  // control the iframe: https://developers.google.com/youtube/iframe_api_reference
	// carousel: https://www.shadcn-svelte.com/docs/components/carousel
  import VideoCarousel from "./VideoCarousel.svelte";

  const { data } = $props();
  const { videos } = data;
// const YOUTUBE_BASE_EMBED_URL = 'https://www.youtube.com/embed/';
</script>

<!-- TODO make video specific description -->
<Seo
  title="Watch Exclusive Music Videos by The River | Alexis"
  description="Explore The River's captivating music videos. Watch her latest visual masterpieces and experience the fusion of music and artistry." />

<!-- Why separate this at all? -->
<h3 id="videos">Videos</h3>
<VideoCarousel {videos} />
