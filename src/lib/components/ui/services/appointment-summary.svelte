<script lang="ts">
  import ServiceDialog from "$lib/components/ui/dialogs/service-list-dialog.svelte";
  import { serviceCart } from "$lib/stores/services/booking-cart.svelte.ts";
  import X from "lucide-svelte/icons/x";

  const selectedServices = serviceCart();
  const { data } = $props();
  const { remappedServices } = data;
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };

  const serviceTime = $derived({
    hours: Math.floor(selectedServices.cartTotals.duration / 60),
    minutes: selectedServices.cartTotals.duration % 60,
  });

  function addToCart(service: App.ServiceItem) {
    selectedServices.addToCart(service);
  }
</script>

<aside>
  <h2>Appointment summary</h2>
  <ServiceDialog
    {remappedServices}
    {addToCart} />
  <div class="service-summary__wrapper">
    <div class="service-summary">
      <p>{selectedServices.cartTotals.quantity} Services</p>
      <div class="service-summary__totals">
        <span>
          ${selectedServices.cartTotals.price}
        </span>
        <span class="service-summary__totals--duration">
          {serviceTime.hours ? `${serviceTime.hours}hr` : ""}
          {serviceTime.minutes}min
        </span>
      </div>
    </div>
    <div>
      {selectedServices.cartAppointmentDate.date?.toLocaleDateString("en-US", options)}
    </div>
  </div>
  {#each selectedServices.cartItems as item}
    <div class="service-details row">
      <div class="row">
        <p class="service-details__name">{item?.name}</p>
      </div>
      <div class="service-details__end row">
        <div>
          <p>${item?.price}</p>
          <p class="service-details__duration">{item?.duration} min</p>
        </div>
        {#if selectedServices.cartTotals.quantity > 1}
          <button
            class="delete-button"
            onclick={() => selectedServices.removeFromCart(item.id)}>
            <X></X>
          </button>
        {/if}
      </div>
    </div>
  {/each}
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
  .service-summary__wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid hsl(var(--teal-2-hsl) / 20%);
    align-items: center;
  }
  .service-summary {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: var(--size-4);
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
  .service-summary__totals--duration:before {
    content: "•";
    margin-inline: var(--size-2);
  }
  .delete-button {
    padding: var(--size-2);
    height: 100%;
    align-self: center;
  }
</style>
