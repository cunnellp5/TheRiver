<script lang="ts">
  import { createSeparator, type CreateSeparatorProps, melt } from "@melt-ui/svelte";

  export let orientation: CreateSeparatorProps["orientation"] = "vertical";

  const {
    elements: { root: vertical },
  } = createSeparator({
    orientation,
    decorative: true,
  });

  const {
    elements: { root: horizontal },
  } = createSeparator({
    orientation: "horizontal",
    decorative: true,
  });
</script>

{#if orientation === "vertical"}
  <div
    use:melt={$vertical}
    class="separator separator--vertical">
  </div>
{:else}
  <div
    use:melt={$horizontal}
    class="separator separator--horizontal">
  </div>
{/if}

<style>
  .separator {
    background-color: hsl(var(--gray-9-hsl) / 50%);
  }

  .separator--horizontal {
    margin-top: 0.875rem;
    margin-bottom: 0.875rem;
    height: 1px;
    width: 100%;
  }

  .separator--vertical {
    height: 1rem;
    width: 1px;
  }
</style>
