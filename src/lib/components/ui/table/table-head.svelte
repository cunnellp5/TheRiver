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
    padding-inline: var(--size-3);
    height: var(--size-8);
    color: var(--text-2);
    font-weight: var(--font-weight-0);
    text-align: left;
  }
</style>
