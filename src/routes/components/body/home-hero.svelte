<script lang="ts">
  import LogoR from "$lib/components/svgs/logos/logo-r2.svelte";
  import TheRiver from "$lib/components/svgs/logos/the-river.svelte";
  // import ServiceButtons from "$lib/components/ui/button/service-buttons.svelte";
  import { onMount } from "svelte";
  import HomeGallery from "./home-gallery.svelte";

  let scroll: number = $state(0);
  let visible = $state(false);

  onMount(() => {
    visible = true;
  });
</script>

<svelte:window bind:scrollY={scroll} />

<section>
  <div>
    {#if visible}
      <div
        class="hideMainLogo"
        title="Welcome to The River Sings, a showcase of musical talent, fashion, and beauty services.">
        <TheRiver />
      </div>
      <div class="miniLogo">
        <LogoR />
      </div>
      <p
        class="cta-text"
        style={`opacity: ${1 - Math.min(1, scroll / 300)}`}>
        Welcome to The River Sings, a showcase of musical talent, fashion, and beauty services.
      </p>
    {/if}
  </div>
  <HomeGallery />
</section>

<style>
  section {
    height: calc(100vh - var(--nav-height));
    /* background-image: var(--gradient-8); */
  }
  section div .miniLogo {
    place-items: center;
    margin-block: var(--size-7);
  }
  .cta-text {
    position: fixed;
    font-size: var(--font-size-3);
    font-weight: var(--font-weight-1);
    color: var(--text-2);
    bottom: 0%;
    z-index: 1;
    max-inline-size: unset;
    padding: var(--size-7);
    border-radius: var(--radius-1);
    background-color: var(--surface-4);
  }

  @media (min-width: 768px) {
    .miniLogo {
      display: none;
    }
  }
  @media (max-width: 768px) {
    .hideMainLogo {
      display: none;
    }
    .cta-text {
      font-size: var(--font-size-2);
      backdrop-filter: unset;
    }
  }
</style>
