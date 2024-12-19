<script lang="ts">
  import { createPopover, createSync, melt } from "@melt-ui/svelte";
  import { Settings2, X } from "lucide-svelte";
  import { fade } from "svelte/transition";
  import ScrollArea from "../scroll-area.svelte";

  let { data, open = false } = $props();

  const {
    elements: { trigger, content, arrow, close },
    states,
  } = createPopover({
    forceVisible: true,
  });

  const sync = createSync(states);
  $effect(() => {
    sync.open(open, v => (open = v));
  });
</script>

<button
  type="button"
  class="trigger"
  use:melt={$trigger}
  aria-label="Update dimensions">
  <Settings2 class="size-4" />
  <span class="sr-only">Open Popover</span>
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
      <X class="size-4" />
    </button>
  </div>
{/if}

<style lang="postcss">
  .input {
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
  }

  .close {
    @apply absolute right-1.5 top-1.5 flex h-7 w-7 items-center justify-center rounded-full;
    @apply text-magnum-900 transition-colors hover:bg-magnum-500/10;
    @apply focus-visible:ring focus-visible:ring-magnum-400 focus-visible:ring-offset-2;
    @apply bg-white p-0 text-sm font-medium;
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
