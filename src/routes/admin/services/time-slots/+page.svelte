<script lang="ts">
	import Modal from '$lib/components/ui/Modal.svelte';
	import { theme } from '$lib/stores/theme';
	import Calendar from '@event-calendar/core';
	import '@event-calendar/core/index.css';
	import DayGrid from '@event-calendar/day-grid';
	import Interaction from '@event-calendar/interaction';
	import List from '@event-calendar/list';
	import TimeGrid from '@event-calendar/time-grid';
	import { configOptions } from './calendarConfig';
	import { ViewIcon } from 'lucide-svelte';

	export let data;

	const { timeSlots, blackoutDays } = data;

	let eventStart: string = '';
	let eventEnd: string = '';
	let eventTitle: string = '';

	let eventInfo;

	let showModal = false;
	let ec: Calendar;

	const toggleModal = () => {
		showModal = !showModal;
	};

	function handleClose() {
		showModal = false;

		eventStart = eventInfo.startStr;
		eventEnd = eventInfo.endStr;

		console.log(eventStart, 'test');

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
	}

	const plugins = [DayGrid, List, TimeGrid, Interaction];

	const options = {
		...configOptions,
		select(info) {
			eventStart = info.startStr;
			eventEnd = info.endStr;
			eventInfo = { ...info };
			console.log(info, 'select');
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
	<h2 slot="header">Save availability</h2>

	<div class="form-group">
		<label for="eventTitle">Title</label>
		<input
			placeholder="Title of event"
			name="eventTitle"
			type="text"
			id="eventTitle"
			bind:value={eventTitle} />
	</div>
	<!-- <div>
			<label for="eventStart">Start</label>
			<input type="text" id="eventStart" bind:value={eventStart} />
		</div>

		<div>
			<label for="eventEnd">End</label>
			<input type="text" id="eventEnd" bind:value={eventEnd} />
		</div> -->

	<!-- <div>
			<span>repeat for:</span>
			<div class="weekdays">
				<div class="day">
					<label for="monday">Monday</label>
					<input type="checkbox" id="monday" />
				</div>
				<div class="day">
					<label for="tuesday">Tuesday</label>
					<input type="checkbox" id="tuesday" />
				</div>
				<div class="day">
					<label for="wednesday">Wednesday</label>
					<input type="checkbox" id="wednesday" />
				</div>
				<div class="day">
					<label for="thursday">Thursday</label>
					<input type="checkbox" id="thursday" />
				</div>
				<div class="day">
					<label for="friday">Friday</label>
					<input type="checkbox" id="friday" />
				</div>
				<div class="day">
					<label for="saturday">Saturday</label>
					<input type="checkbox" id="saturday" />
				</div>
				<div class="day">
					<label for="sunday">Sunday</label>
					<input type="checkbox" id="sunday" />
				</div>
			</div>
		</div> -->
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
	<!-- <form action="?/add" method="POST" class="form" use:enhance></form> -->
</div>

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
