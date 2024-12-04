<script lang="ts">
  import type { HTMLThAttributes } from "svelte/elements";

  type $$Props = HTMLThAttributes;

  interface Props {
    class?: $$Props["class"];
    children?: import("svelte").Snippet;
    [key: string]: any;
  }

  const { class: className = "", children, ...rest }: Props = $props();
</script>

<th
  class={`${className}`}
  {...rest}>
  {@render children?.()}
</th>

<style>
  th {
    vertical-align: middle;
    background-color: unset;
    /* background-color: hsl(var(--stone-10-hsl) / 0.2); */
    padding-inline: var(--size-3);
    height: var(--size-8);
    color: var(--text-2);
    /* color: var(--link); */
    font-weight: var(--font-weight-0);
    text-align: left;
  }

  /* :global(&:has([role='checkbox'])) {
    padding-right: 0;
  } */
</style>
