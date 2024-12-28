<script lang="ts">
  import ServiceDetailRow from "$lib/components/ui/services/detail-row.svelte";
  import { createDialog, melt } from "@melt-ui/svelte";
  import X from "lucide-svelte/icons/x";
  import { fade, fly } from "svelte/transition";

  const { remappedServices, addToCart } = $props();

  const {
    elements: { trigger, overlay, content, title, description, close, portalled },
    states: { open },
  } = createDialog({
    forceVisible: true,
  });

  function handleAddService(service: App.ServiceItem) {
    open.set(false);
    addToCart(service);
  }
</script>

<button
  use:melt={$trigger}
  class="trigger">
  Add Service
</button>
{#if $open}
  <div use:melt={$portalled}>
    <div
      use:melt={$overlay}
      class="overlay"
      transition:fade={{ duration: 150 }}>
    </div>
    <div
      use:melt={$content}
      class="content"
      transition:fly={{
        x: 350,
        duration: 300,
        opacity: 1,
      }}>
      <button
        use:melt={$close}
        aria-label="Close"
        class="close">
        <X />
      </button>
      <h2
        use:melt={$title}
        class="title">
        Add a service to your cart
      </h2>
      <p
        use:melt={$description}
        class="description">
        Check out your latest updates.
      </p>
      <section>
        <div class="invitation">
          {#each Object.entries(remappedServices) as [category, data]}
            <section class="tables">
              <h6 class="gradientHeaders">
                {category.toUpperCase()}
              </h6>
              {#each data as service}
                <ServiceDetailRow
                  {service}
                  {handleAddService} />
              {/each}
            </section>
          {/each}
        </div>
      </section>
    </div>
  </div>
{/if}

<style>
  :root {
    --color-inherit: inherit;
    --color-current: currentColor;
    --color-transparent: transparent;
    --color-black: 0 0 0;
    --color-white: 255 255 255;
    --color-neutral-50: 250 250 250;
    --color-neutral-100: 245 245 245;
    --color-neutral-200: 229 229 229;
    --color-neutral-300: 212 212 212;
    --color-neutral-400: 163 163 163;
    --color-neutral-500: 115 115 115;
    --color-neutral-600: 82 82 82;
    --color-neutral-700: 64 64 64;
    --color-neutral-800: 38 38 38;
    --color-neutral-900: 23 23 23;
    --color-magnum-50: 255 249 237;
    --color-magnum-100: 254 242 214;
    --color-magnum-200: 252 224 172;
    --color-magnum-300: 249 201 120;
    --color-magnum-400: 247 177 85;
    --color-magnum-500: 243 141 28;
    --color-magnum-600: 228 115 18;
    --color-magnum-700: 189 87 17;
    --color-magnum-800: 150 69 22;
    --color-magnum-900: 121 58 21;
    --color-magnum-950: 65 28 9;
    --color-zinc-50: 250 250 250;
    --color-zinc-100: 244 244 245;
    --color-zinc-200: 228 228 231;
    --color-zinc-300: 212 212 216;
    --color-zinc-400: 161 161 170;
    --color-zinc-500: 113 113 122;
    --color-zinc-600: 82 82 91;
    --color-zinc-700: 63 63 70;
    --color-zinc-800: 39 38 42;
    --color-zinc-900: 24 24 27;
    --color-gray-50: 249 250 251;
    --color-gray-100: 243 244 246;
    --color-gray-200: 228 231 235;
    --color-gray-300: 209 213 219;
    --color-gray-400: 156 163 175;
    --color-gray-500: 107 114 128;
    --color-gray-600: 75 85 99;
    --color-gray-700: 55 65 81;
    --color-gray-800: 31 41 55;
    --color-gray-900: 17 24 39;

    --font-family-sans: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    --font-family-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
      "Courier New", monospace;
  }

  .trigger {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    padding: 0.5rem 1rem;

    border-radius: 0.375rem;

    background-color: rgb(var(--color-white) / 1);

    font-weight: 500;
    line-height: 1;

    color: rgb(var(--color-magnum-700) / 1);

    box-shadow:
      0 10px 15px -3px rgb(var(--color-black) / 0.1),
      0 4px 6px -4px rgb(var(--color-black) / 0.1);
  }

  .trigger:hover {
    opacity: 0.75;
  }

  .overlay {
    position: fixed;
    inset: 0;
    z-index: 50;

    background-color: rgb(var(--color-black) / 0.5);
  }

  .content {
    position: fixed;
    right: 0;
    top: 0;

    z-index: var(--layer-important);

    height: 100vh;
    max-width: 500px;

    width: 100%;

    padding: 1.5rem;

    background-color: rgb(var(--color-white) / 1);

    box-shadow:
      0 10px 15px -3px rgb(var(--color-black) / 0.1),
      0 4px 6px -4px rgb(var(--color-black) / 0.1);
  }

  .content:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }

  .close {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    right: 10px;
    top: 10px;

    appearance: none;

    /* height: 1.5rem; */
    /* width: 1.5rem; */

    border-radius: 9999px;

    color: rgb(var(--color-magnum-800) / 1);
    background-color: unset;
  }

  .close:hover {
    background-color: rgb(var(--color-magnum-100) / 1);
  }

  .close:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;

    box-shadow: 0px 0px 0px 3px rgb(var(--color-magnum-400) / 1);
  }

  .title {
    margin: 0;

    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 500;

    color: rgb(var(--color-black) / 1);
  }

  .description {
    margin-bottom: 1.25rem;
    margin-top: 0.5rem;

    line-height: 1.5;

    color: rgb(var(--color-zinc-600) / 1);
  }

  .invitation {
    overflow: scroll;
    height: 85vh;
    padding: var(--size-4);
    border-radius: 0.375rem;
    background-color: rgb(var(--color-grey-100) / 0.8);

    color: rgb(var(--color-zinc-800) / 1);

    box-shadow:
      0 1px 3px 0 rgb(0 0 0 / 0.1),
      0 1px 2px -1px rgb(0 0 0 / 0.1);
  }

  .invitation h3 {
    margin-bottom: 0.75rem;

    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 600;
  }

  .invitation p {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  .actions {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;

    margin-top: 1.5rem;
  }

  .actions button {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    height: 2rem;

    border-radius: 0.25rem;

    padding: 0 1rem;

    font-weight: 500;
    line-height: 1;
  }

  .actions button.secondary {
    background-color: rgb(var(--color-zinc-100) / 1);

    color: rgb(var(--color-zinc-600) / 1);
  }

  .actions button.primary {
    background-color: rgb(var(--color-magnum-100) / 1);

    color: rgb(var(--color-magnum-900) / 1);
  }

  .gradientHeaders {
    margin-block: var(--size-4);
  }
</style>
