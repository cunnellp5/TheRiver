<script lang="ts">
  import { createBubbler, run, self, stopPropagation } from "svelte/legacy";

  const bubble = createBubbler();
  import { createEventDispatcher } from "svelte";

  interface Props {
    showModal: boolean;
    overrideButtons?: boolean;
    header?: import("svelte").Snippet;
    children?: import("svelte").Snippet;
    buttons?: import("svelte").Snippet;
  }

  let {
    showModal = $bindable(),
    overrideButtons = false,
    header,
    children,
    buttons,
  }: Props = $props();

  const dispatch = createEventDispatcher();

  let dialog: HTMLDialogElement | null = $state(null);

  run(() => {
    if (dialog && showModal === true) {
      dialog.showModal();
    }
    else if (dialog && showModal === false) {
      dialog.close();
    }
  });
</script>

<!-- eslint-disable-next-line svelte/no-unused-svelte-ignore -->
<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_noninteractive_element_interactions -->
<dialog
  bind:this={dialog}
  onclose={() => {
    showModal = false;
    dispatch("close");
  }}
  onclick={self(() => dialog?.close())}>
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div onclick={stopPropagation(bubble("click"))}>
    {@render header?.()}
    {@render children?.()}
    <hr />
    {#if overrideButtons}
      {@render buttons?.()}
    {/if}
    {#if !overrideButtons}
      <button onclick={() => dialog?.close()}>Close</button>
    {/if}
  </div>
</dialog>

<style>
  hr {
    margin-block: var(--size-8);
  }
  dialog {
    animation: slideUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    margin-top: unset;
    border: none;
    border-radius: 0.2em;
    padding: 0;
    padding-top: var(--size-4);
    width: 100vw;
  }
  dialog::backdrop {
    background: rgba(0, 0, 0, 0.3);
  }
  dialog > div {
    padding: var(--size-3);
  }
  dialog[open] {
    animation: slideDown 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  dialog[open]::backdrop {
    animation: fade 0.2s ease-out;
  }
  @keyframes slideDown {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(0);
    }
  }
  @keyframes slideUp {
    0% {
      display: block;
      transform: translateY(0);
      /* transform: scaleY(1); */
      /* opacity: 1; */
    }

    100% {
      display: none;
      transform: translateY(-100%);
      /* opacity: 0; */
    }
  }
  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  button {
    display: block;
  }
</style>
