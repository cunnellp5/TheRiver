<script lang="ts">
  const { timeSlots } = $props();
  import { serviceCart } from "$lib/stores/services/booking-cart.svelte.ts";

  const selectedServices = serviceCart();
</script>

<div class="time-slots">
  {#if timeSlots.length === 0}
    <p>No available time slots</p>
  {:else}
    {#each timeSlots as { period, formattedTime, date }}
      <button
        class="time-slot {period === 'AM' ? 'am' : 'pm'}"
        class:selected={selectedServices.cartAppointmentDate.date === date}
        onclick={() => selectedServices.setAppointmentTime(date)}>
        {formattedTime}
        {period}
      </button>
    {/each}
  {/if}
</div>

<style>
  .time-slots {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    /* align-content: start; */
    /* align-items: start; */
    /* align-self: start; */
    place-self: start;
  }
  .time-slot {
    padding: 10px;
    background-color: var(--surface-4);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-1);
    cursor: pointer;
  }
  .time-slot:hover {
    background-color: var(--surface-2);
  }
  .time-slot.am {
    border-block-end: 1px solid hsl(var(--cyan-10-hsl) / 100%);
  }
  .time-slot.pm {
    border-block-end: 1px solid hsl(var(--yellow-10-hsl) / 90%);
  }
  .time-slot.selected {
    background-color: var(--surface-2);
    color: var(--text-1);
  }
</style>
