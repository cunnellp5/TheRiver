<script lang="ts">
  // import SuccessIcon from './SuccessIcon.svelte';
  import CircleAlert from "lucide-svelte/icons/circle-alert";
  import CircleCheck from "lucide-svelte/icons/circle-check";
  import X from "lucide-svelte/icons/x";
  import { createEventDispatcher } from "svelte";
  import { fade } from "svelte/transition";
  // import InfoIcon from './InfoIcon.svelte';
  // import CloseIcon from './CloseIcon.svelte';

  const dispatch = createEventDispatcher();

  interface Props {
    iconType: string;
    type?: string;
    dismissible?: boolean;
    children?: import("svelte").Snippet;
  }

  const { iconType, type = "message", dismissible = true, children }: Props = $props();
</script>

<article
  class={type}
  role="alert"
  transition:fade>
  <!-- {#if type === 'success'} -->
  <!-- <SuccessIcon width="1.1em" /> -->
  <!-- {:else if type === 'error'} -->
  <!-- {:else} -->
  <!-- <InfoIcon width="1.1em" /> -->
  <!-- {/if} -->
  <!-- {#if type === 'warning'} -->
  <!-- {/if} -->

  <div class="text">
    {#if iconType === "warning"}
      <CircleAlert color="#ff6c6c" />
    {:else if iconType === "check"}
      <CircleCheck color="#6cffa6" />
    {/if}
    {@render children?.()}
  </div>

  {#if dismissible}
    <button
      class="close"
      onclick={() => dispatch("dismiss")}>
      <X />
    </button>
  {/if}
</article>

<style lang="postcss">
  article {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto 0.5rem auto;
    border-radius: 0.2rem;
    padding-inline: var(--size-2);
    padding-block: var(--size-4);
    min-width: var(--size-14);
    /* color: var(--stone-1); */
  }
  .error {
    background: IndianRed;
  }
  .success {
    background: MediumSeaGreen;
  }
  .info {
    background: var(--cyan-7);
  }
  .message {
    background: var(--surface-4);
  }
  .text {
    display: flex;
    gap: var(--size-2);
    margin-left: 1rem;
    user-select: none;
  }
  button {
    margin-inline: var(--size-3);
    box-shadow: none;
    border: 0 none;
    background: transparent;
    padding: 0;
    /* color: var(--stone-1); */
    font-size: 1rem;
    line-height: 1;
  }
</style>
