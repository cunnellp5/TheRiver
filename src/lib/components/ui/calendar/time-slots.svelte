<script lang="ts">
  import { AppointmentStore } from "$lib/stores/booking/appointment.svelte.ts";

  const { timeSlots } = $props();

  const sections = $derived([
    { title: "Morning", slots: timeSlots.filter(s => s.period === "morning") },
    { title: "Afternoon", slots: timeSlots.filter(s => s.period === "afternoon") },
    { title: "Evening", slots: timeSlots.filter(s => s.period === "evening") },
  ]);
</script>

<div class="time-slots">
  {#if timeSlots.length === 0}
    <p>No available time slots</p>
  {:else}
    <div class="time-slots-container">
      {#each sections as { title, slots }}
        {#if slots.length > 0}
          <section>
            <h5>{title}</h5>
            <div class="slot-grid">
              {#each slots as { time, formatted }}
                <button
                  class="time-slot"
                  onclick={() => AppointmentStore.setAppointmentTime(time)}>
                  {formatted}
                </button>
              {/each}
            </div>
          </section>
        {/if}
      {/each}
    </div>
  {/if}
</div>

<style>
  h5 {
    font-weight: var(--font-weight-0);
    font-size: var(--font-size-2);
    margin-block-start: var(--size-3);
  }
  .time-slots-container,
  section {
    display: flex;
    flex-direction: column;
    gap: var(--size-3);
  }
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
  .slot-grid {
    display: flex;
    flex-direction: rows;
    gap: var(--size-3);
    flex-wrap: wrap;
  }
  /* .time-slot.am {
    border-block-end: 1px solid hsl(var(--cyan-10-hsl) / 100%);
  }
  .time-slot.pm {
    border-block-end: 1px solid hsl(var(--yellow-10-hsl) / 90%);
  }
  .time-slot.selected {
    background-color: var(--surface-2);
    color: var(--text-1);
  } */
</style>
