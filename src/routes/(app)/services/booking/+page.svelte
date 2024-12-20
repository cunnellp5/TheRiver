<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import BaseCalendar from "$lib/components/ui/calendar/base-calendar.svelte";
  import ServiceDialog from "$lib/components/ui/dialogs/service-list-dialog.svelte";
  import Popover from "$lib/components/ui/popovers/service-list-pop.svelte";
  import ScrollArea from "$lib/components/ui/scroll-area.svelte";
  import { serviceCart } from "$lib/stores/services/booking-cart.svelte.ts";
  import { parseDuration } from "@internationalized/date";
  import { Dot } from "lucide-svelte";
  import X from "lucide-svelte/icons/x";
  import { onMount } from "svelte";

  const selectedServices = serviceCart();
  const { data } = $props();
  const { services, remappedServices } = data;
  console.log(data, "hloo");
  const pageId = Number($page.params.id);
  const service = services.find(service => service.id === pageId);

  const serviceTime = $derived({
    hours: Math.floor(selectedServices.cartTotals.duration / 60),
    minutes: selectedServices.cartTotals.duration % 60,
  });

  onMount(() => {
    if (!selectedServices.cartItems.length) {
      goto("/services");
    }
  });

  function addToCart(service) {
    selectedServices.addToCart(service);
  }
</script>

<main>
  <h1 class="">Select date and time</h1>
  <section>
    <BaseCalendar />
    <aside>
      <h4>Appointment summary</h4>
      <!-- <Popover data={services} /> -->
      <ServiceDialog
        {remappedServices}
        {addToCart} />
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
      {#each selectedServices.cartItems as item}
        <div class="service-details row">
          <div class="row">
            <!-- <Dot /> -->
            <p class="service-details__name">{item?.name}</p>
          </div>
          <!-- <p>description: {item?.description}</p> -->
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
      <!-- <button
        class="rounded"
        title="Add another service">+</button> -->
    </aside>
    <!-- <aside class="service-list">
      <ScrollArea
        items={services}
        title="Add A Service" />
    </aside> -->
  </section>
  <button>NEXT</button>
</main>

<style>
  main {
    background-color: hsl(var(--choco-2-hsl) / 10%);
    display: grid;
    /* justify-content: center; */
    /* align-items: center; */
    height: 100vh;
  }
  section:before {
    position: absolute;
    content: "";
    background-image: radial-gradient(
      circle at 1px 1px,
      hsl(var(--yellow-5-hsl) / 50%) 1px,
      transparent 0
    );
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-size: 1rem 1rem;
    background-repeat: repeat;
    background-position: 0.5rem center;
    z-index: -1;
  }
  section {
    position: relative;
    display: grid;
    z-index: var(--layer-1);
    /* grid-template-columns: 1fr 1fr; */
    grid-template-columns: repeat(auto-fill, minmax(var(--size-content-3), 1fr));
    align-items: start;
    padding: var(--size-10);
  }
  aside {
    box-shadow: var(--shadow-4);
    background-color: var(--surface-4);
    padding: var(--size-4);
    border-radius: var(--radius-2);
    display: flex;
    gap: var(--size-4);
    flex-direction: column;
    margin-inline: var(--size-4);
    /* border: 1px solid var(--red-2); */
  }
  h1 {
    z-index: var(--layer-1);
    font-size: 2rem;
    align-self: center;
    /* margin-block: var(--size-8); */
  }
  .service-summary {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: var(--size-4);
    border-bottom: 1px solid hsl(var(--teal-2-hsl) / 20%);
  }
  .row {
    display: flex;
    flex-direction: row;
    gap: var(--size-4);
  }
  .service-details {
    /* gap: var(--size-4); */
    border-radius: var(--radius-2);
    padding: var(--size-3);
    justify-content: space-between;
    align-items: center;
    background-color: var(--surface-3);
  }
  /* .service-list {
    justify-items: end;
    align-items: end;
  } */
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
  .service-details__end button {
    /* margin-inline-start: var(--size-4); */
  }
  .delete-button {
    padding: var(--size-2);
    height: 100%;
    align-self: center;
  }
  /* .service-buttons {
    display: grid;
    grid-template-columns: auto 2fr;
    gap: var(--size-4);
    width: 100%;
  } */
</style>
