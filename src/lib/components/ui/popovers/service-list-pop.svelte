<script lang="ts">
  import { createPopover, createSync, melt } from "@melt-ui/svelte";
  import Plus from "lucide-svelte/icons/plus";
  // import Settings2 from "lucide-svelte/icons/settings-2";
  import X from "lucide-svelte/icons/x";
  import { fade } from "svelte/transition";
  import ScrollArea from "../scroll-area.svelte";

  let { data, open = false } = $props();

  const {
    elements: { trigger, content, arrow, close },
    states,
  } = createPopover({
    forceVisible: true,
    // positioning: { placement: "left" },
  });

  const sync = createSync(states);
  $effect(() => {
    sync.open(open, v => (open = v));
  });
</script>

<button
  type="button"
  class="create-button"
  use:melt={$trigger}
  aria-label="Update dimensions">
  <Plus />
  <span class="sr-only">Add Service</span>
</button>

{#if open}
  <div
    use:melt={$content}
    transition:fade={{ duration: 100 }}
    class="content">
    <div use:melt={$arrow}></div>
    <div class="flex flex-col gap-2.5">
      <p class="scroll-title gradientHeaders">Add service to your cart</p>
      <ScrollArea
        items={data}
        title="" />
    </div>
    <button
      class="close"
      use:melt={$close}>
      <X color="#fa5252" />
    </button>
  </div>
{/if}

<style lang="postcss">
  /* .input {
    @apply flex h-8 w-full rounded-md border border-magnum-800 bg-transparent px-2.5 text-sm;
    @apply ring-offset-magnum-300 focus-visible:ring;
    @apply focus-visible:ring-magnum-400 focus-visible:ring-offset-1;
    @apply flex-1 items-center justify-center;
    @apply px-2.5 text-sm leading-none text-magnum-700;
  }

  .trigger {
    @apply inline-flex h-9 w-9 items-center justify-center rounded-full bg-white p-0;
    @apply text-sm font-medium text-magnum-900 transition-colors hover:bg-white/90;
    @apply focus-visible:ring focus-visible:ring-magnum-400 focus-visible:ring-offset-2;
  } */
  .close-icon {
    height: var(--size-4);
  }
  .close {
    position: absolute;
    right: var(--size-2);
    top: var(--size-2);
    /* display: flex; */
    /* aspect-ratio: 1/1; */
    border-radius: var(--radius-round);
    background-color: unset;

    box-shadow:
      var(--shadow-2),
      0 0px var(--surface-3),
      0 0 0 var(--_highlight-size) var(--_highlight);

    /* @apply absolute right-1.5 top-1.5 flex h-7 w-7 items-center justify-center rounded-full; */
    /* @apply text-magnum-900 transition-colors hover:bg-magnum-500/10; */
    /* @apply focus-visible:ring focus-visible:ring-magnum-400 focus-visible:ring-offset-2; */
    /* @apply bg-white p-0 text-sm font-medium; */
  }

  .scroll-title {
    border-bottom: 1px solid var(--border);
  }

  .content {
    z-index: var(--layer-3);
    background-color: var(--surface-1);
    padding: var(--size-5);
    box-shadow: var(--shadow-4);
    border-radius: var(--radius-2);
    /* @apply z-10 w-60 rounded-[4px] bg-white p-5 shadow-sm; */
  }
</style>
