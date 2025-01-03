<script lang="ts">
  import { ServiceStore } from "$lib/stores/booking/service.svelte";
  import { createScrollArea, melt } from "@melt-ui/svelte";

  const { items, title } = $props();

  const {
    elements: { root, content, viewport, corner, scrollbarY, thumbY },
  } = createScrollArea({
    type: "always",
    dir: "ltr",
  });
</script>

<div
  use:melt={$root}
  class="scroll-area-main">
  <div
    use:melt={$viewport}
    class="scroll-area-content">
    <div use:melt={$content}>
      <div class="p-7">
        <h4>{title}</h4>
        {#each items as item}
          <div
            class="item"
            role="button"
            tabindex="0"
            onclick={() => ServiceStore.addItem(item)}
            onkeydown={e => (e.key === "Enter" || e.key === " ") && ServiceStore.addItem(item)}>
            <div>
              <div>
                {item.name}
              </div>
              <div class="small">
                {item.description}
              </div>
            </div>
            <div class="price-duration">
              <div>
                ${item.price}
              </div>
              <div class="small">
                {item.duration} min
              </div>
            </div>
          </div>
          <div
            role="separator"
            class="separator">
          </div>
        {/each}
      </div>
    </div>
  </div>
  <div use:melt={$scrollbarY}>
    <div use:melt={$thumbY}></div>
  </div>
  <div use:melt={$corner}></div>
</div>

<style>
  h4 {
    margin-block-end: var(--size-4);
  }
  .item {
    padding: var(--size-2);
    display: flex;
    justify-content: space-between;
  }
  .item:hover {
    background-color: hsl(var(--red-4-hsl) / 10%);
    cursor: pointer;
  }
  .price-duration {
    display: flex;
    flex-direction: column;
  }
  .small {
    color: var(--stone-8);
    font-size: var(--font-size-0);
    margin-block-start: var(--size-1);
    max-inline-size: var(--size-content-2);
  }
  .scroll-area-main {
    width: 100%;
    /* border: 1px solid red; */
  }
  .scroll-area-content {
    overflow: scroll;
    height: var(--size-xs);
  }
  .separator {
    border-bottom: 1px solid hsl(var(--red-4-hsl) / 30%);
    margin-block: var(--size-1);
  }
</style>
