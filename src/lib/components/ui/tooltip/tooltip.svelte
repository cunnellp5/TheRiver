<script lang="ts">
  import { createTooltip, melt } from "@melt-ui/svelte";
  import Plus from "lucide-svelte/icons/plus";
  import { fade } from "svelte/transition";

  interface Props {
    position:
      | "top"
      | "top-start"
      | "top-end"
      | "right"
      | "right-start"
      | "right-end"
      | "bottom"
      | "bottom-start"
      | "bottom-end"
      | "left"
      | "left-start"
      | "left-end"
      | undefined;
    text: string;
    handleClick: () => void;
    class: string;
  }

  const { position = "top", text, handleClick, class: className = "" }: Props = $props();

  const {
    elements: { trigger, content, arrow },
    states: { open },
  } = createTooltip({
    positioning: {
      placement: position,
    },
    openDelay: 0,
    closeDelay: 0,
    closeOnPointerDown: false,
    forceVisible: true,
  });
</script>

<button
  type="button"
  class={`${className} trigger`}
  use:melt={$trigger}
  onclick={handleClick}
  aria-label="Add">
  <Plus
    class="size-4"
    aria-label="plus" />
</button>

{#if $open}
  <div
    use:melt={$content}
    transition:fade={{ duration: 100 }}
    class="z-important rounded-lg bg-white shadow">
    <div use:melt={$arrow}></div>
    <p class="px-4 py-1 text-magnum-700">{text}</p>
  </div>
{/if}

<style lang="postcss">
  /* .trigger {
    @apply inline-flex h-9 w-9 items-center justify-center rounded-full bg-white;
    @apply text-magnum-900 transition-colors hover:bg-white/90;
    @apply focus-visible:ring focus-visible:ring-magnum-400 focus-visible:ring-offset-2;
    @apply p-0 text-sm font-medium;
  } */
  .z-important {
    z-index: var(--layer-important);
  }
  .bg-white {
    background-color: var(--surface-3);
  }
  .shadow {
    box-shadow: var(--shadow-6);
  }
  .rounded-lg {
    border-radius: var(--radius-2);
  }
  .px-4 {
    padding-inline: var(--size-4);
  }
  .py-1 {
    padding-block: var(--size-1);
  }
</style>
