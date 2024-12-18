<script>
  import { onMount } from "svelte";
  import { daysOfWeek, DEFAULT_DAYS, DEFAULT_END_TIMES, DEFAULT_START_TIMES } from "./utils";

  let enabledDays = [...DEFAULT_DAYS];
  const startTimes = { ...DEFAULT_START_TIMES };
  const endTimes = { ...DEFAULT_END_TIMES };

  onMount(() => {
    // Populate the fields if existing availability exists
  });

  async function saveAvailability() {
    const availability = enabledDays.map(day => ({
      dayOfTheWeek: day,
      startTime: startTimes[day] || null,
      endTime: endTimes[day] || null,
    }));

    if (availability.some(a => a.startTime >= a.endTime)) {
      // eslint-disable-next-line no-alert
      alert("Start time must be earlier than end time!");
      return;
    }

    if (availability.length === 0) {
      // eslint-disable-next-line no-alert
      alert("Please select at least one day with availability.");
      return;
    }

    const response = await fetch("/api/services/availability", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ availability }),
    });

    if (response.ok) {
      // eslint-disable-next-line no-alert
      alert("Availability saved!");
    } else {
      // eslint-disable-next-line no-alert
      alert("Failed to save availability.");
    }
  }
</script>

<form on:submit={saveAvailability}>
  <div class="week-grid">
    <!-- Loop through days of the week -->
    {#each daysOfWeek as { day, value }}
      <div class="day-row">
        <!-- Day label -->
        <label>{day}</label>

        <!-- Availability toggle -->
        <input
          type="checkbox"
          bind:group={enabledDays}
          {value} />

        <!-- Start Time -->
        <input
          type="time"
          step="900"
          bind:value={startTimes[value]}
          disabled={!enabledDays.includes(value)} />

        <!-- End Time -->
        <input
          type="time"
          step="900"
          bind:value={endTimes[value]}
          disabled={!enabledDays.includes(value)} />
      </div>
    {/each}
  </div>

  <!-- Save button -->
  <button type="submit">Save Availability</button>
</form>

<style>
  form {
    max-inline-size: var(--size-content-3);
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
</style>
