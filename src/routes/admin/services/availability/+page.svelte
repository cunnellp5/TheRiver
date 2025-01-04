<script lang="ts">
  import { applyAction, enhance } from "$app/forms";
  import * as Card from "$lib/components/ui/card/index";
  import Info from "lucide-svelte/icons/info";

  const { data, form } = $props();
  const availability = $state([...data.availability]);
</script>

<div class="adminIntroCardWrapper">
  <Card.Root>
    <Card.Header>
      <Card.Title>Availability</Card.Title>
    </Card.Header>
  </Card.Root>
</div>

{#if form && form?.message}
  <div class="form-message">
    <p class="flex items-center gap-2">
      <Info size={18} />
      {form.message}
    </p>
  </div>
{/if}

<form
  method="POST"
  action="?/saveAvailability"
  use:enhance={({ formData }) => {
    formData.set("availability", JSON.stringify(availability));
    return async ({ result }) => {
      await applyAction(result);
    };
  }}>
  <div class="week-grid">
    {#each availability as day}
      <div class="day-row">
        <label for={`day-${day.dayOfTheWeek}`}>
          {day.dayName}
        </label>

        <input
          type="checkbox"
          id={`day-${day.dayOfTheWeek}`}
          bind:checked={day.enabled} />

        <input
          type="time"
          bind:value={day.startTime}
          disabled={!day.enabled} />

        <input
          type="time"
          bind:value={day.endTime}
          disabled={!day.enabled} />
      </div>
    {/each}
  </div>
  <button type="submit">Save Availability</button>
</form>

<style>
  form {
    max-inline-size: var(--size-content-3);
  }
  label {
    margin-right: 8px;
    font-weight: bold;
  }
  input[type="time"]:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
  button {
    margin-top: 16px;
    padding: 8px 16px;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  button:hover {
    background: #0056b3;
  }
  .week-grid {
    display: grid;
    grid-template-columns: auto auto 1fr 1fr;
    gap: 8px;
    align-items: center;
  }
  .day-row {
    display: contents;
  }
  .flex {
    display: flex;
    align-items: center;
  }
  .gap-2 {
    gap: var(--size-2);
  }
  .form-message {
    margin-block: var(--size-5);
    color: var(--brand);
  }
</style>
