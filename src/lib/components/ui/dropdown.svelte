<script lang="ts">
  interface Props {
    label?: import("svelte").Snippet;
    children?: import("svelte").Snippet;
  }

  const { label, children }: Props = $props();
  let isOpen: boolean = $state(true);

  function toggle(): void {
    isOpen = !isOpen;
  }
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_missing_attribute -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<a
  class="dropdown"
  onclick={toggle}>
  <div class="parent-menu">
    <div class="arrow">{isOpen ? "▼" : "►"}</div>
    {@render label?.()}
  </div>
</a>

{#if isOpen}
  <div class="child-menu">
    {@render children?.()}
  </div>
{/if}

<style>
  a {
    color: var(--gray-7);
    user-select: none;
  }
  .parent-menu {
    display: flex;
    /* justify-content: center; */
    align-items: center;
    /* padding: var(--size-3); */
  }
  .child-menu {
    transition: transform 0.3s ease;
    margin-left: var(--size-3);
  }
  .arrow {
    /* margin-inline: var(--size-2); */
    font-size: var(--size-2);
  }
</style>
