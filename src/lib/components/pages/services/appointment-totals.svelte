<script lang="ts">
  import { serviceCart } from "$lib/stores/services/booking-cart.svelte.ts";
  import Separator from "../separators/separator.svelte";

  const selectedServices = serviceCart();

  const serviceTime = $derived({
    hours: Math.floor(selectedServices.cartTotals.duration / 60),
    minutes: selectedServices.cartTotals.duration % 60,
  });

  const [weekDay, month, year, time] = $derived(selectedServices.cartAppointmentDate.formattedDate);
  const numberedDay = $derived(selectedServices.cartAppointmentDate.day);
  const numberedMonth = $derived(selectedServices.cartAppointmentDate.month);
  const numberedYear = $derived(selectedServices.cartAppointmentDate.year);
  const endTime = $derived(selectedServices.endTime);
</script>

<div
  class="appointment-totals"
  class:incomplete={!selectedServices.cartAppointmentDate.date}>
  <p class="appointment__header">
    Totals: {selectedServices.cartTotals.quantity}
    {selectedServices.cartTotals.quantity > 1 ? "Services" : "Service"}
  </p>
  <Separator orientation="horizontal" />
  <div class="service-summary__wrapper">
    <div class="service-summary">
      <!-- <p>{selectedServices.cartTotals.quantity} Services</p> -->
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
    {#if selectedServices.cartAppointmentDate.date}
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
    {/if}
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
