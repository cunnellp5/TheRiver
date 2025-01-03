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
</style>
