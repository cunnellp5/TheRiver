<script lang="ts">
  import { CalendarDate, getLocalTimeZone, isWeekend, today } from "@internationalized/date";
  import { createCalendar, melt } from "@melt-ui/svelte";
  import { ChevronLeft, ChevronRight } from "lucide-svelte";

  const localDate = today(getLocalTimeZone());
  const maxDate = localDate.add({ months: 2 });

  const {
    elements: { calendar, heading, grid, cell, prevButton, nextButton },
    states: { months, headingValue, weekdays, value },
    helpers: { isDateDisabled, isDateUnavailable },
  } = createCalendar({
    defaultValue: new CalendarDate(localDate.year, localDate.month, localDate.day),
    fixedWeeks: true,
    preventDeselect: true,
    minValue: new CalendarDate(localDate.year, localDate.month, localDate.day),
    maxValue: new CalendarDate(maxDate.year, maxDate.month, maxDate.day),
    isDateUnavailable: date => {
      return isWeekend(date, "en");
    },
  });
</script>

<section>
  <div use:melt={$calendar}>
    <header>
      <button
        class="hover:bg-orange-2"
        use:melt={$prevButton}>
        <ChevronLeft />
      </button>
      <div
        use:melt={$heading}
        class="calendar--header-text">
        {$headingValue}
      </div>
      <button
        class="hover:bg-orange-2"
        use:melt={$nextButton}>
        <ChevronRight /></button>
    </header>
    {#each $months as month}
      <table use:melt={$grid}>
        <thead aria-hidden="true">
          <tr>
            {#each $weekdays as day}
              <th>{day}</th>
            {/each}
          </tr>
        </thead>
        <tbody>
          {#each month.weeks as weekDates}
            <tr>
              {#each weekDates as date}
                <td
                  role="gridcell"
                  aria-disabled={$isDateDisabled(date) || $isDateUnavailable(date)}>
                  <div
                    use:melt={$cell(date, month.value)}
                    class="hover:bg-orange-2">
                    {date.day}
                  </div>
                </td>
              {/each}
            </tr>
          {/each}
        </tbody>
      </table>
    {/each}
  </div>
</section>
<span>Selected: {$value?.toString()}</span>

<style>
  :root {
    --calendar-radius: var(--radius-2);
    --calendar-selected-color: hsl(var(--orange-4-hsl) / 90%);
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    color: var(--text-1);
    box-shadow: none;
  }
  section {
    background-color: var(--surface-4);
    margin: 0 auto;
    border-radius: var(--calendar-radius);
  }
  .calendar--header-text {
    font-size: var(--font-size-3);
    font-weight: var(--font-weight-8);
  }

  [data-disabled] {
    pointer-events: none;
    cursor: default;
    opacity: 0.2;
  }
  /* resets the open props normalized version of the table */
  [data-melt-calendar] :where(td, th) {
    padding: unset;
    border: none;
    background-color: unset;
  }
  [data-melt-calendar] :where(table) {
    --nice-inner-radius: unset;
    border: unset;
    border-radius: 0 0 var(--calendar-radius) var(--calendar-radius);
  }

  [data-melt-calendar] {
    width: 100%;
    color: var(--text-1);
  }
  [data-melt-calendar] > header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--size-2);
  }
  [data-melt-calendar-cell] {
    display: flex;
    height: var(--size-7);
    width: var(--size-7);
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    align-items: center;
    justify-content: center;
    border-radius: var(--calendar-radius);
    padding: var(--size-fluid-3);
  }
  [data-melt-calendar-cell][data-outside-month] {
    pointer-events: none;
    cursor: default;
    opacity: 0;
  }
  [data-melt-calendar-cell][data-selected] {
    background-color: var(--calendar-selected-color);
    color: hsl(var(--stone-10-hsl) / 100%);
  }
  [data-melt-calendar-cell][data-unavailable] {
    color: hsl(var(--red-4-hsl) / 80%);
    text-decoration-line: line-through;
    pointer-events: unset;
  }

  [data-melt-calendar-cell]:focus {
    box-shadow: 0 0 0px var(--size-1) var(--calendar-selected-color);
  }

  .hover\:bg-orange-2:hover:not([data-selected]) {
    background-color: hsl(var(--orange-4-hsl) / 20%);
  }
</style>
