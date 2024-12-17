<script lang="ts">
  import Sparkles from "$lib/components/atoms/sparkles.svelte";

  const {
    buttonText,
    link,
    target = "",
    rel = "",
    rainbow = false,
    sparkles = false,
    class: className = "",
  } = $props();
</script>

<a
  class:rainbowBackground={rainbow}
  class={`${className}`}
  href={link}
  {target}
  {rel}>
  {#if sparkles}
    <Sparkles>
      <button>{buttonText}</button>
    </Sparkles>
  {:else}
    <button>{buttonText}</button>
  {/if}
</a>

<style>
  /* https://ryanmulligan.dev/blog/css-property-new-style/ */
  button {
    animation: spin 2.5s infinite linear paused;
    box-shadow:
      var(--shadow-2),
      0 0px var(--surface-3),
      0 0 0 var(--_highlight-size) var(--_highlight);
    border: 1px solid transparent;
    background-color: unset;
    background:
      linear-gradient(to bottom, #222, #111) padding-box,
      conic-gradient(from var(--bg-angle) in oklch longer hue, oklch(0.85 0.37 0) 0 0) border-box;
    min-width: var(--size-content-1);
    color: var(--stone-1);
    font-weight: var(--font-weight-6);
    &:hover {
      animation-play-state: running;
    }
  }

  .overlay-button {
    position: absolute;
    top: 0%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @property --bg-angle {
    inherits: false;
    initial-value: 0deg;
    syntax: "<angle>";
  }

  @keyframes spin {
    to {
      --bg-angle: 360deg;
    }
  }
</style>
