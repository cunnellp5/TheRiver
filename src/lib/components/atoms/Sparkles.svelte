<script lang="ts">
  import type { SparkleType } from "$lib/types";
  import Sparkle from "$lib/components/atoms/single-sparkle.svelte";
  import { onDestroy, onMount } from "svelte";

  const random = (min: number, max: number) => Math.floor(Math.random() * (max - min)) + min;

  interface Props {
    color?: "default" | "primary" | "secondary";
    children?: import("svelte").Snippet;
  }

  const { color = "default", children }: Props = $props();

  const colorMapper = {
    default: "var(--yellow-4)",
    primary: "var(--cyan-3)",
    secondary: "var(--indigo-7)",
  };

  const generateSparkle = (): SparkleType => {
    return {
      id: String(random(10000, 99999)),
      createdAt: Date.now(),
      color: colorMapper[color],
      size: random(10, 20),
      style: {
        // Pick a random spot in the available space
        top: `${random(-10, 80)}%`,
        left: `${random(0, 100)}%`,
      },
    };
  };

  let sparkles: SparkleType[] = $state([]);
  let sparklesInterval: ReturnType<typeof setInterval>;

  onMount(() => {
    sparklesInterval = setInterval(() => {
      const now = Date.now();

      // Create a new sparkle
      const sparkle = generateSparkle();

      // Clean up any "expired" sparkles
      const nextSparkles = sparkles.filter((sparkle) => {
        const delta = now - sparkle.createdAt;
        return delta < 1500;
      });

      // Include new sparkle
      nextSparkles.push(sparkle);
      sparkles = nextSparkles;
    }, 400);
  });

  onDestroy(() => {
    clearInterval(sparklesInterval);
  });
</script>

<div class="sparkle-wrapper">
  {#each sparkles as sparkle (sparkle.id)}
    <Sparkle
      color={sparkle.color}
      size={`${sparkle.size}`}
      style={sparkle.style} />
  {/each}
  <span class="slot-wrapper">
    {@render children?.()}
  </span>
</div>

<style>
  .sparkle-wrapper {
    display: inline-block;
    position: relative;

    & > .slot-wrapper {
      position: relative;
      z-index: 1;
    }
  }
</style>
