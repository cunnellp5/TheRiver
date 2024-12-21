<script lang="ts">
  import Seo from "$lib/components/seo.svelte";
  import ServiceButtons from "$lib/components/ui/button/service-buttons.svelte";
  import { onMount } from "svelte";
  import CutoutImg from "./components/cutout-img.svelte";
  import ScrollDots from "./components/scroll-dots.svelte";
  import ServiceTable from "./components/service-table.svelte";

  const { data } = $props();
  const { remappedServices, about } = data;

  let scroll: number = $state(0);
  let activeDotIndex = $state(0);

  onMount(() => {
    const headers = Array.from(document.querySelectorAll("h6")) as HTMLHeadingElement[];
    const options = {
      root: null,
      rootMargin: "-5% 0px -65% 0px",
      threshold: 0.5,
    };
    const intersectionObserverCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          activeDotIndex = headers.indexOf(entry.target as HTMLHeadingElement);
        }
      });
    };
    const observer = new IntersectionObserver(intersectionObserverCallback, options);
    headers.forEach(header => observer.observe(header));
    return () => {
      observer.disconnect();
    };
  });
</script>

<Seo
  title="Beauty Services by The River - Expert Hair & Nails | Alexis"
  description="Transform your look with The River's expert beauty services. From flawless makeup to rejuvenating skincare, embrace your beauty with a touch of artistry and care." />

<svelte:window bind:scrollY={scroll} />

<div
  class="cutoutImg"
  style:transform={`translate3d(0, ${scroll / 5}px, 0)`}>
  <CutoutImg />
</div>

<main>
  <section
    class="top"
    style:background-position={`center ${scroll / 55}%`}>
    <h1>The River Beauty</h1>
    {#if about?.isShowing}
      <p class="about">
        {about?.text}
      </p>
    {/if}
  </section>
</main>

<main class="app-layout container">
  {#each Object.entries(remappedServices) as [category, data]}
    <ServiceTable
      {category}
      {data} />
  {/each}
  <aside class="aside-right">
    <ScrollDots
      {remappedServices}
      {activeDotIndex} />
  </aside>
  <div class="fakeform">
    <div class="serviceButtons">
      <ServiceButtons />
    </div>
  </div>
</main>

<style>
  main {
    display: flex;
    grid-column: 2;
    flex-direction: column;
    margin: 0 auto;
    line-height: var(--font-lineheight-4);
    letter-spacing: var(--font-letterspacing-3);
  }
  .container {
    height: 100%;
  }
  .container:before {
    content: "";
    position: fixed;
    pointer-events: none;
    background-image: radial-gradient(
      circle at 10px 1px,
      hsl(var(--purple-5-hsl) / 50%) 4px,
      transparent 0
    );
    -webkit-mask: linear-gradient(-20deg, transparent 50%, white);
    mask: linear-gradient(-20deg, transparent 50%, white);
    background-size: 1rem 1rem;
    background-repeat: repeat;
    background-position: 0.5rem center;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
  }
  h1 {
    color: var(--gray-7);
    font-style: normal;
    font-variant: small-caps;
    font-size: var(--font-size-8);
    line-height: 1;
    font-family: "Atyp BL Display Medium";
    letter-spacing: 0em;
  }
  .aside-right {
    position: sticky;
    bottom: 70%;
    left: 100%;
    width: max-content;
  }
  .about {
    color: var(--gray-7);
    font-size: var(--font-size-4);
    /* font-family: "Ambit Light"; */
    text-align: center;
  }
  .serviceButtons {
    display: flex;
    flex-direction: row;
    gap: var(--size-3);
  }
  .fakeform {
    position: sticky;
    bottom: var(--size-7);
    align-self: center;
    z-index: var(--layer-4);
  }
  .cutoutImg {
    position: absolute;
    top: var(--size-content-2);
    left: 0;
    z-index: var(--layer-2);
    clip-path: url(#waveClip);
    transition: opacity 2.5s;
  }
  .top {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: var(--size-4);
    z-index: var(--layer-1);
    margin-block-end: var(--size-7);
    background-image: url("https://res.cloudinary.com/dswpu3qez/image/upload/c_fill/backgrounds/service-background-river_ev06lj.webp");
    background-size: cover;
    height: var(--size-content-2);
  }
  @media (max-width: 768px) {
    .top {
      background-size: unset;
      height: 30vh;
    }
    .serviceButtons {
      flex-direction: column;
      align-items: center;
    }
    .fakeform {
      width: 100%;
    }
    .cutoutImg {
      opacity: 0.1;
    }
  }
</style>
