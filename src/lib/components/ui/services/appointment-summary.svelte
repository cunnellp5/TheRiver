<script lang="ts">
  import ServiceDialog from "$lib/components/ui/dialogs/service-list-dialog.svelte";
  import { ServiceStore } from "$lib/stores/booking/service.svelte";
  import X from "lucide-svelte/icons/x";

  const { data } = $props();
  const { remappedServices } = data;

  function addToCart(service: App.ServiceItem) {
    ServiceStore.addItem(service);
  }
</script>

<aside>
  <h2>Appointment summary</h2>
  {#each ServiceStore.items as item}
    <div class="service-details row">
      <div class="row">
        <p class="service-details__name">{item?.name}</p>
      </div>
      <div class="service-details__end row">
        <div>
          <p>${item?.price}</p>
          <p class="service-details__duration">{item?.duration} min</p>
        </div>
        {#if ServiceStore.totals.quantity > 1}
          <button
            class="delete-button"
            onclick={() => ServiceStore.removeItem(item.id)}>
            <X></X>
          </button>
        {/if}
      </div>
    </div>
  {/each}

  <ServiceDialog
    {remappedServices}
    {addToCart} />
</aside>

<style>
  aside {
    /* border-inline-start: 2px solid var(--brand); */
    /* padding: 0 0 0 var(--size-2); */
    /* border-radius: var(--radius-2); */
    max-inline-size: var(--size-md);
    width: 100%;
    display: flex;
    gap: var(--size-4);
    flex-direction: column;
  }
  .row {
    display: flex;
    flex-direction: row;
    gap: var(--size-4);
  }
  .service-details {
    border-radius: var(--radius-2);
    padding: var(--size-3);
    justify-content: space-between;
    align-items: center;
    background-color: var(--surface-3);
    /* color: var(--gray-1); */
    /* border: 1px solid var(--gray-9); */
    background: linear-gradient(to right, var(--surface-4), var(--surface-3)) padding-box;
  }
  .service-details__name {
    font-size: var(--font-size-1);
  }
  .service-details__duration {
    font-size: var(--font-size-0);
  }
  .delete-button {
    padding: var(--size-2);
    height: 100%;
    align-self: center;
  }
</style>
