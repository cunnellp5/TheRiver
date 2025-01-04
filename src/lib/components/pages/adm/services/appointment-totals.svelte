<script lang="ts">
  import Separator from "$lib/components/ui/separators/separator.svelte";
  // import { serviceCart } from "$lib/stores/services/booking-cart.svelte.ts";
  import { ServiceStore } from "$lib/stores/booking/service.svelte.ts";

  // const selectedServices = serviceCart();

  // const serviceTime = $derived({
  //   hours: Math.floor(selectedServices.cartTotals.duration / 60),
  //   minutes: selectedServices.cartTotals.duration % 60,
  // });

  // const [weekDay, month, year, time] = $derived(selectedServices.cartAppointmentDate.formattedDate);
  // const numberedDay = $derived(selectedServices.cartAppointmentDate.day);
  // const numberedMonth = $derived(selectedServices.cartAppointmentDate.month);
  // const numberedYear = $derived(selectedServices.cartAppointmentDate.year);
  // const endTime = $derived(selectedServices.endTime);
</script>

<!-- class:incomplete={!selectedServices.cartAppointmentDate.date} -->
<div class="appointment-totals">
  <p class="appointment__header">
    Totals: {ServiceStore.total.quantity}
    {ServiceStore.total.quantity > 1 ? "Services" : "Service"}
  </p>
  <Separator orientation="horizontal" />
  <div class="service-summary__wrapper">
    <div class="service-summary">
      <div class="service-summary__totals">
        <span>
          ${ServiceStore.total.price}
        </span>
        <span class="service-summary__totals--duration">
          {ServiceStore.duration.hours ? `${ServiceStore.duration.hours}hr` : ""}
          {ServiceStore.duration.minutes ? `${ServiceStore.duration.minutes}min` : ""}
        </span>
      </div>
    </div>
    <!-- {#if selectedServices.cartAppointmentDate.date}
      {#if weekDay && numberedMonth && numberedDay && numberedYear}
        <div>{weekDay}, {numberedMonth}-{numberedDay}-{numberedYear}</div>
      {/if}
      {#if time && endTime}
        <div>{time} - {endTime}</div>
      {:else}
        <p class="errorMessage">Please select a date and time</p>
      {/if}
    {:else}
      <p class="errorMessage">Please select a date and time</p>
    {/if} -->
  </div>
</div>

<style>
  .appointment-totals {
    border: 1px solid var(--green-8);
    background-color: var(--surface-1);
    padding: var(--size-4);
    border-radius: var(--radius-2);
  }
  .appointment__header {
    margin-top: var(--size-2);
  }
  .incomplete {
    border: 1px solid var(--red-8);
  }
  .service-summary__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    min-inline-size: var(--size-sm);
    gap: var(--size-1);
    margin-block-start: var(--size-4);
  }
  .service-summary {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: var(--size-4);
  }
  .service-summary__totals--duration:before {
    content: "•";
    margin-inline: var(--size-2);
  }
  .errorMessage {
    margin: unset;
  }
  @media (max-width: 768px) {
    .service-summary__wrapper {
      flex-direction: column;
      align-items: start;
    }
  }
</style>
