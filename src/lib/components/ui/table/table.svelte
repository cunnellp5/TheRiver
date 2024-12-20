<script lang="ts">
  import type { HTMLTableAttributes } from "svelte/elements";

  type $$Props = HTMLTableAttributes;

  interface Props {
    captionLocation?: string;
    class?: $$Props["class"];
    children?: import("svelte").Snippet;
    [key: string]: any;
  }

  const { captionLocation = "bottom", class: className = "", children, ...rest }: Props = $props();
</script>

<div class="relative w-full overflow-auto">
  <table
    class:caption-bottom={captionLocation === "bottom"}
    class:caption-top={captionLocation === "top"}
    class={`w-full text ${className}`}
    {...rest}>
    {@render children?.()}
  </table>
</div>

<style>
  table {
    border: unset;
    border-radius: unset;
    border-collapse: collapse;
    background-color: unset;
    font-family: var(--font-rounded-sans);
    /* font-weight: var(--font-weight-0); */
    & :where(:global(table:not(:has(tfoot)) tr:last-child td:first-child)),
    :where(:global(table:not(:has(tfoot)) tr:last-child td:last-child)),
    :where(:global(table thead tr:first-child th:first-child)),
    :where(:global(table thead tr:first-child th:last-child)) {
      border-radius: unset;
    }
    & td {
      background-color: unset;
    }
    & :where(:global(tr:not(:last-child))),
    :where(:global(table thead tr:first-child)) {
      border-bottom: 1px solid var(--stone-8);
    }
  }

  /* colors each row */
  :where(:global(tbody tr)) {
    background-color: var(--surface-3);
  }

  .relative {
    position: relative;
  }
  .overflow-auto {
    overflow: auto;
  }
  .w-full {
    width: 100%;
  }
  .caption-bottom {
    caption-side: bottom;
  }
  .text {
    font-size: var(--font-size-0);
  }
</style>
