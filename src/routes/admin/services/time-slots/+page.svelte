<script lang="ts">
	import Modal from '$lib/components/ui/Modal.svelte';
	import { theme } from '$lib/stores/theme';
	import Calendar from '@event-calendar/core';
	import '@event-calendar/core/index.css';
	import DayGrid from '@event-calendar/day-grid';
	import Interaction from '@event-calendar/interaction';
	import List from '@event-calendar/list';
	// eslint-disable-next-line import/no-unresolved
	import { enhance } from '$app/forms';
	import TimeGrid from '@event-calendar/time-grid';
	import { configOptions, convertTimeSlots } from './calendarConfig';

	export let data;

	const { timeSlots, blackoutDays } = data;

	let eventStart: string = '';
	let eventEnd: string = '';
	let eventTitle: string = 'Available';

	let allEvents = [];

	let eventInfo;

	let showModal = false;
	let ec: Calendar;

	const reset = () => {
		eventStart = '';
		eventEnd = '';
		eventTitle = 'Available';
	};

	const toggleModal = () => {
		showModal = !showModal;
	};

	function handleClose() {
		showModal = false;

		eventStart = eventInfo.startStr; // save me in the DB
		eventEnd = eventInfo.endStr; // save me in the DB

		// adds event to calendar, vars are being updated from modal inputs
		ec.addEvent({
			start: eventStart,
			end: eventEnd,
			display: 'auto',
			resourceId: 1,
			title: eventTitle,
			editable: true,
			durationEditable: true,
			startEditable: true,
			constraint: 'businessHours',
			extendedProps: {
				availability: true
			}
		});

		allEvents = [...ec.getEvents()];
		reset();
	}

	const plugins = [DayGrid, List, TimeGrid, Interaction];

	const options = {
		...configOptions,
		events: convertTimeSlots(timeSlots) || [],
		select(info) {
			eventStart = info.startStr;
			eventEnd = info.endStr;
			eventInfo = { ...info };
			// render modal
			toggleModal();
			// modal creates title, description, and submit button
		},
		eventDragStart(info) {
			console.log('eventDragStart');
		},
		eventDragStop(info) {
			console.log('drageventDragStopStop');
		},
		eventDrop(info) {
			console.log('eventDrop');
		},
		dateClick(info) {
			console.log(info, 'dateClick');
		},
		eventClick(info) {
			console.log(info, 'eventClick');
		}
	};
</script>

<Modal bind:showModal on:close={handleClose} buttonText="Save">
	<h2 slot="header">Schedule</h2>

	<div class="form-group">
		<label for="eventTitle">Title</label>
		<input
			placeholder="Title of event"
			name="eventTitle"
			type="text"
			id="eventTitle"
			bind:value={eventTitle} />

		<div>
			<label for="eventStart">Start</label>
			<input type="text" id="eventStart" bind:value={eventStart} />
		</div>

		<div>
			<label for="eventEnd">End</label>
			<input type="text" id="eventEnd" bind:value={eventEnd} />
		</div>
	</div>
</Modal>

<div class="container" class:ec-dark={$theme === 'dark'} class:ec-light={$theme === 'light'}>
	<h3>Schedule</h3>

	<p>This will create 'availbility' for services</p>

	<pre>
		1 - create available chunks of time on the calendar
		2 - after creating submit, this will generate 15 min slots of available times
		3 - user can book these slots
	</pre>

	<div class="calendar-wrapper">
		<Calendar bind:this={ec} {plugins} {options} />
	</div>
</div>
<form action="?/add" method="POST" class="form" use:enhance>
	<input type="hidden" name="events" value={JSON.stringify(allEvents)} />
	<button type="submit">Save</button>
</form>

<!-- TODO put the form down here with a save button that then collects all the time-slots from the calendar -->
<!-- deleting https://github.com/vkurko/calendar/discussions/91 -->

<style>
	.calendar-wrapper {
		max-width: 70vw;
		& h4 {
			background: unset;
			-webkit-background-clip: unset;
			-webkit-text-fill-color: unset;
			background-clip: unset;
			color: var(--text-1);
			font-size: var(--font-size-1);
		}
	}

	.form-group {
		display: flex;
		flex-direction: column;
		& label {
			margin-bottom: var(--size-1);
		}
	}
</style>
