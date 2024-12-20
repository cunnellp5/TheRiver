<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";

  type $$Props = HTMLAttributes<HTMLTableRowElement> & {
    "data-state"?: unknown;
  };

  interface Props {
    class?: $$Props["class"];
    children?: import("svelte").Snippet;
    [key: string]: any;
  }

  const { class: className = "", children, handleClick, ...rest }: Props = $props();
</script>

<tr
  class={`data-[state=selected]:bg-muted border-b transition-colors ${className}`}
  {...rest}
  onclick={handleClick}>
  {@render children?.()}
</tr>
<br />

<style>
  :where(:global(tbody tr)):hover {
    cursor: pointer;
  }

  /* :where(:global(tbody tr)):hover {
    background-color: hsl(var(--stone-2-hsl) / 0.2);
  } */

  /* todo figure out selected states */
  /* [data-\[state='selected\]'] {
    background-color: var(--text-1);
  } */

  /* TODO add transitions */
  /* .transition-colors {
    transition-duration: var(--transition-duration-0);
    transition-property: background-color;
  } */
</style>
