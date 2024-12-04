<script lang="ts">
  import { onMount } from "svelte";

  interface Props {
    text?: string;
    duration?: number;
  }

  const { text = "", duration = 200 }: Props = $props();

  let displayText = $state("");
  let i = 0;
  let startTime: number;
  let animationFrameId: number;

  function typeCharacter(timestamp: number) {
    if (!startTime)
      startTime = timestamp;
    const elapsed = timestamp - startTime;

    if (elapsed >= duration) {
      if (i < text.length) {
        displayText = text.substring(0, i + 1);
        i++;
        startTime = timestamp; // Reset start time for the next character
      }
      else {
        cancelAnimationFrame(animationFrameId);
        return;
      }
    }

    animationFrameId = requestAnimationFrame(typeCharacter);
  }

  onMount(() => {
    animationFrameId = requestAnimationFrame(typeCharacter);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  });
</script>

<h1 class="jumbo">
  {displayText}
</h1>

<style>
  .jumbo {
    /* background-color: var(--sand-1); */
    backdrop-filter: blur(15px);
    box-shadow: var(--shadow-3);
    border-radius: var(--radius-2);
    padding: var(--size-3);
    color: var(--stone-10);
    font-style: normal;
    font-weight: var(--font-weight-9);
    font-size: var(--font-size-fluid-3);
    line-height: var(--font-lineheight-1);
    font-family: "Atyp BL Display Medium", monospace;
    letter-spacing: 0em;
    text-transform: uppercase;
  }
</style>
