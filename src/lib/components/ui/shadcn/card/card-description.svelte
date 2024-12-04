<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";

  type $$Props = HTMLAttributes<HTMLParagraphElement>;

  interface Props {
    class?: $$Props["class"];
    children?: import("svelte").Snippet;
    [key: string]: any;
  }

  const { class: className = "", children, ...rest }: Props = $props();
</script>

<p
  class={className}
  {...rest}>
  {@render children?.()}
</p>

<style>
  p {
    color: var(--text-2);
    font-style: normal;
    font-weight: var(--font-weight-4);
    font-size: var(--font-size-3);
    font-family: "Ambit Regular";
    letter-spacing: 0em;
  }
</style>
