<script lang="ts">
  import { dismissToast, toasts } from "../../stores/toast";
  import Toast from "./Toast.svelte";
</script>

{#if $toasts}
  <section>
    {#each $toasts as toast (toast.id)}
      <Toast
        type={toast.type}
        dismissible={toast.dismissible}
        iconType={toast.iconType || "none"}
        on:dismiss={() => dismissToast(toast?.id ?? 0)}>{toast.message}</Toast>
    {/each}
  </section>
{/if}

<style lang="postcss">
	section {
		display: flex;
		position: fixed;
		top: 0;
		right: 0;
		flex-direction: column;
		justify-content: center;
		z-index: var(--layer-important);
		margin-top: var(--size-4);
		margin-right: var(--size-4);
	}
</style>
