<script lang="ts">
  import LogoR from "$lib/components/svgs/logos/LogoR2.svelte";
  import TheRiver from "$lib/components/svgs/logos/TheRiver.svelte";
  import ServiceButtons from "$lib/components/ui/button/ServiceButtons.svelte";
  import { onMount } from "svelte";

  const { videoURL } = $props();
  let scroll: number = $state(0);
  let visible = $state(false);
  onMount(() => {
    visible = true;
  });
</script>

<svelte:window bind:scrollY={scroll} />

<section class="img-video-overlay-wrapper">
  <div id="video-background">
    <!-- {#if visible && videoURL} -->
    <!-- in:fade={{ duration: 400 }} -->
    <video autoplay loop muted style:object-position={`center ${40 + scroll / 25}%`}>
      <source src={videoURL} type="video/mp4" />
      <!-- <track kind="captions" srclang="en" label="English" /> -->
    </video>
    <!-- {/if} -->
    <div id="video-tint"></div>
  </div>

  <div role="img" id="image-container">
    {#if visible}
      <div class="hideMainLogo">
        <TheRiver />
      </div>
      <div class="miniLogo">
        <LogoR />
      </div>
      <div class="beauty-cta">
        <ServiceButtons />
      </div>
    {/if}
  </div>
</section>

<style>
	/* ELEMENTS */
	video {
		filter: grayscale(40%);
		width: 100%;
		height: 100%;
		object-fit: cover; /* Ensure the video covers the entire area */
	}
	/* CLASSES */
	.beauty-cta {
		display: flex;
		position: unset;
		right: 0;
		bottom: 0;
		flex-direction: column;
		align-items: center;
		gap: var(--size-2);
		margin: var(--size-4);
		font-variant: small-caps;
	}
	.img-video-overlay-wrapper {
		position: relative;
		z-index: 1;
		/* height: calc(100vh - var(--nav-height)); */
		height: var(--size-content-3);
	}
	/* IDS */
	#video-background {
		position: relative;
		height: 100%; /* Make the video background take up the full height of the wrapper */
	}
	#image-container {
		display: flex;
		position: absolute;
		top: 0;
		left: 0;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		z-index: 2; /* Ensure it is above the video */
		width: 100%;
		height: 100%;
	}
	#video-tint {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1; /* Ensure it is above the video but below the text */
		background: rgba(0, 0, 0, 0.6); /* Optional: Add a tint over the video */
		width: 100%;
		height: calc(100% + 1px);
	}

	@media (min-width: 768px) {
		.miniLogo {
			display: none;
		}
	}

	@media (max-width: 768px) {
		#image-container {
			gap: var(--size-7);
			height: 100%;
		}
		.img-video-overlay-wrapper {
			height: 65vh;
		}
		.hideMainLogo {
			display: none;
		}
	}
</style>
