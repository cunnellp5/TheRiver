<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";

  type $$Props = HTMLAttributes<HTMLTableSectionElement>;

  interface Props {
    class?: $$Props["class"];
    children?: import("svelte").Snippet;
    [key: string]: any;
  }

  const { class: className = "", children, ...rest }: Props = $props();
</script>

<tbody
  class={`${className}`}
  {...rest}>
  {@render children?.()}
</tbody>

<style>
  tbody {
    font-weight: var(--font-weight-6);
  }
</style>
