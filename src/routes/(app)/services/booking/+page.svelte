<script lang="ts">
  import { goto } from "$app/navigation";
  import AppointmentSummary from "$lib/components/pages/services/appointment-summary.svelte";
  import AppointmentTotals from "$lib/components/pages/services/appointment-totals.svelte";
  import CustomerInfo from "$lib/components/pages/services/customer-info-form.svelte";
  import BaseCalendar from "$lib/components/ui/calendar/base-calendar.svelte";
  import TimeSlots from "$lib/components/ui/calendar/time-slots.svelte";
  import Separator from "$lib/components/ui/separators/separator.svelte";
  import { ServiceStore } from "$lib/stores/booking/service.svelte.ts";
  import { serviceCart } from "$lib/stores/services/booking-cart.svelte.ts";
  import { CalendarDate, getLocalTimeZone } from "@internationalized/date";
  import { createTabs, melt } from "@melt-ui/svelte";
  import { onMount } from "svelte";
  import { cubicInOut } from "svelte/easing";
  import { crossfade } from "svelte/transition";
  import { getAvailableTimeSlots } from "./generate-time-slots.ts";

  const {
    elements: { root, list, content, trigger },
    states: { value },
  } = createTabs({
    defaultValue: "tab-1",
  });

  const triggers = [
    { id: "tab-1", title: "1. Time and Date" },
    { id: "tab-2", title: "2. Info" },
    { id: "tab-3", title: "3. Payment" },
  ];

  const [send, receive] = crossfade({
    duration: 250,
    easing: cubicInOut,
  });

  const selectedServices = serviceCart();
  const { data } = $props();
  let timeSlots = $state<{ formattedTime: string; period: string; date: Date }[] | undefined>([]);

  async function handleDayClicked(date: CalendarDate) {
    // this is breaking stuff
    selectedServices.setAppointmentMonth(date.month);
    selectedServices.setAppointmentDay(date.day);
    selectedServices.setAppointmentYear(date.year);
    selectedServices.resetAppointmentTime();
    if (!date) return;

    timeSlots = await getAvailableTimeSlots(
      date.toDate(getLocalTimeZone()),
      selectedServices.cartTotals.duration
    );
  }

  onMount(() => {
    if (!ServiceStore.items.length) {
      goto("/services");
    }
  });
</script>

<main>
  <aside class="card card--totals">
    <AppointmentTotals />
  </aside>
  <div
    use:melt={$root}
    class="melt-tabs">
    <div
      use:melt={$list}
      class="center trigger-wrapper shrink-0 overflow-x-auto bg-neutral-100
        data-[orientation=vertical]:flex-col data-[orientation=vertical]:border-r"
      aria-label="Manage your account">
      {#each triggers as triggerItem}
        <button
          use:melt={$trigger(triggerItem.id)}
          class="trigger relative">
          {triggerItem.title}
          {#if $value === triggerItem.id}
            <div
              in:send={{ key: "trigger" }}
              out:receive={{ key: "trigger" }}
              class="littleThing">
            </div>
          {/if}
        </button>
      {/each}
    </div>
    <div
      use:melt={$content("tab-1")}
      class="grow bg-white p-5">
      <p class="mb-5 leading-normal text-neutral-900 m0-auto center">
        Select a date and time for the service selected
      </p>
      <!-- <fieldset class="mb-4 flex w-full flex-col justify-start">
        <label
          class="mb-2.5 block text-sm leading-none text-neutral-900"
          for="name">
          Name
        </label>
        <input
          id="name"
          value="Thomas G. Lopes" />
      </fieldset> -->

      <!-- <h1 class="gradientHeaders">Select date and time</h1> -->
      <section>
        <AppointmentSummary {data} />
        <Separator orientation="horizontal"></Separator>
        <BaseCalendar {handleDayClicked} />
        <Separator orientation="horizontal"></Separator>
        <div class="available-time-slots">
          <h4>Available Time Slots</h4>
          <TimeSlots {timeSlots} />
        </div>
      </section>
      <!-- <a href="booking/info">
        <button>NEXT</button>
      </a> -->

      <div class="mt-5 flex justify-center">
        <button
          class="save"
          onclick={() => ($value = "tab-3")}>Next</button>
      </div>
    </div>
    <div
      use:melt={$content("tab-2")}
      class="grow bg-white p-5">
      <p class="mb-5 leading-normal text-neutral-900 m0-auto center">Add contact information</p>
      <!-- <fieldset class="mb-4 flex w-full flex-col justify-start">
        <label
          class="mb-2.5 block text-sm leading-none text-neutral-900"
          for="newPassword">
          New password
        </label>
        <input
          id="newPassword"
          type="password" />
      </fieldset> -->
      <CustomerInfo />
      <div class="mt-5 flex justify-center">
        <button class="save">Next</button>
      </div>
    </div>
    <div
      use:melt={$content("tab-3")}
      class="grow bg-white p-5">
      <p class="mb-5 leading-normal text-neutral-900 m0-auto center">
        Change your settings here. Click save when you're done.
      </p>

      <fieldset class="mb-4 flex w-full flex-col justify-start">
        <label
          class="mb-2.5 block text-sm leading-none text-neutral-900"
          for="newEmail">
          New email
        </label>
        <input
          id="newEmail"
          type="email" />
      </fieldset>
      <div class="mt-5 flex justify-center">
        <button class="save">Next</button>
      </div>
    </div>
  </div>
</main>

<!-- <main>
  <h1 class="gradientHeaders">Select date and time</h1>
  <section>
    <BaseCalendar {handleDayClicked} />
    <AppointmentSummary {data} />
    <div class="available-time-slots">
      <h4>Available Time Slots</h4>
      <TimeSlots {timeSlots} />
    </div>
  </section>
  <a href="booking/info">
    <button>NEXT</button>
  </a>
</main> -->

<style>
  :root {
    --padding-services: var(--size-8);
  }
  main {
    max-inline-size: var(--size-xl);
    margin: var(--size-4) auto;
    position: relative;
    z-index: var(--layer-1);
    padding: var(--padding-services);
  }
  main:before {
    position: absolute;
    content: "";
    -webkit-mask: linear-gradient(110deg, transparent 20%, white);
    mask: linear-gradient(110deg, transparent 20%, white);
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
  /* main { */
  /* display: grid; */
  /* grid-template-columns: repeat(auto-fill, minmax(var(--size-content-3), 1fr)); */
  /* align-items: start; */
  /* padding: var(--padding-services); */
  /* } */
  section {
    padding: var(--padding-services);

    border-width: 1px;
    border-color: hsl(var(--gray-9-hsl) / 100%);

    margin: 0 auto;
    max-inline-size: var(--size-md);
    border-radius: var(--radius-2);
    backdrop-filter: blur(4px);

    display: flex;
    flex-direction: column;
    gap: var(--size-8);
    align-items: center;
  }
  /* section:first-child {
    justify-items: center;
    justify-self: center;
    justify-content: center;
    margin: 0 auto;
  } */
  h1 {
    z-index: var(--layer-1);
    font-size: 2rem;
    align-self: center;
    text-align: center;
    margin-block: var(--size-8);
  }
  .available-time-slots {
    width: 100%;
    max-inline-size: var(--size-md);
    & h4 {
      margin-block-end: var(--size-4);
    }
  }

  /* TABS */
  .melt-tabs {
    /* margin-block: var(--size-4); */
  }
  .littleThing {
    position: absolute;
    bottom: 0.25rem;
    left: 50%;
    height: 0.25rem;
    width: 1rem;
    border-radius: var(--radius-round);
    background-color: var(--brand);
    --tw-translate-x: -50%;
    transform: translate(var(--tw-translate-x), 0) rotate(0) skew(0) skewY(0) scaleX(1) scaleY(1);
  }
  [data-state="active"] {
    /* background-color: var(--yellow-12); */
  }
  button {
    position: relative;
    margin-inline-end: var(--size-4);
  }
  /* .trigger-wrapper { */
  /* position: fixed; */
  /* z-index: var(--layer-1); */
  /* } */
  button.trigger {
    /* display: inline-block; */
    padding-block: var(--size-4);
    padding-inline: var(--size-8);
    font-size: var(--font-size-1);
    font-weight: 500;
    color: var(--neutral-900);
    background-color: var(--surface-1);
    /* backdrop-filter: blur(4px); */
    border-radius: var(--radius-2);
    /* border: 1px solid hsl(var(--gray-9-hsl) / 20%); */
    transition: background-color 0.2s;
  }
  .grow {
    flex-grow: 1;
  }
  .mb-5 {
    padding-block: var(--size-5);
  }
  .center {
    text-align: center;
  }
  .m0-auto {
    margin: 0 auto;
  }
  .justify-center {
    justify-content: center;
  }
  .mt-5 {
    padding-block: var(--size-8);
  }
  .flex {
    display: flex;
  }
  .text-neutral-900 {
    color: var(--stone-8);
  }
  .card {
    /* backdrop-filter: blur(14px); */
    position: fixed;
    right: 0%;
    top: 10%;
    z-index: var(--layer-2);
  }
</style>
