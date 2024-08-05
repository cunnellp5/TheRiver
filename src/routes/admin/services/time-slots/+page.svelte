<script lang="ts">
	import * as Card from '$lib/components/ui/shadcn/card';
	import Modal from '$lib/components/ui/Modal.svelte';
	import { theme } from '$lib/stores/theme';
	import Calendar from '@event-calendar/core';
	import '@event-calendar/core/index.css';
	import DayGrid from '@event-calendar/day-grid';
	import Interaction from '@event-calendar/interaction';
	import List from '@event-calendar/list';
	import TimeGrid from '@event-calendar/time-grid';
	import type { Info, Event } from '$lib/types.js';
	// eslint-disable-next-line import/no-unresolved
	import { enhance } from '$app/forms';
	import { configOptions, convertTimeSlots } from './calendarConfig';

	export let data;

	const { timeSlots } = data;

	let eventStart: string = '';
	let eventEnd: string = '';
	let eventTitle: string = 'NEW';
	let allEvents: Event[] = [];
	let eventInfo: { startStr: string; endStr: string };
	let showModal = false;
	let showEvent = false;
	let eventDisplay: Event;
	let ec: Calendar;

	const reset = () => {
		eventStart = '';
		eventEnd = '';
		eventTitle = 'NEW';
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
		select(info: Info) {
			eventStart = info.startStr;
			eventEnd = info.endStr;
			eventInfo = { ...info };
			// render modal
			toggleModal();
			// modal creates title, description, and submit button
		},
		eventDragStart(info: Info) {
			console.log(info, 'eventDragStart');
		},
		eventDragStop(info: Info) {
			console.log(info, 'drageventDragStopStop');
		},
		eventDrop(info: Info) {
			console.log(info, 'eventDrop');
		},
		dateClick(info: Info) {
			console.log(info, 'dateClick');
		},
		eventClick(info: Info) {
			console.log(info, 'eventClick');
			// show a hidden element and populate it with this info
			eventDisplay = { ...info.event };
			// eventDisplay.style = {
			// 	top: info.jsEvent.clientY,
			// 	left: info.jsEvent.clientX
			// };

			const popover = document.querySelector('.event-info') as HTMLElement;

			if (popover) {
				const pageHeight = document.body.scrollHeight;
				const calendarHeight = info.el.parentElement?.offsetParent?.clientHeight || 0;
				const eventHeight = info.el.clientHeight;
				const popoverHeight = popover.clientHeight;

				popover.style.left = `0px`;
				popover.style.top = `${pageHeight - calendarHeight - eventHeight - popoverHeight * 3 + info.el.offsetTop}px`;
				// popover.style.top = `${info.el.style.top - info.el.style.height}`;
			}

			showEvent = true;
			// here we should have an X that deletes the record
		}
		// eventContent(info) {
		// return { html: '<p class="popover">some HTML</p>' };
		// }
	};
</script>

<!-- elements that are hidden/absolutely positioned -->
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

<!-- Actual struture of the page -->
<div class="adminIntroCardWrapper">
	<Card.Root>
		<Card.Header>
			<Card.Title>Scheduler</Card.Title>
			<Card.Description>Create, Edit, or delete your schedule</Card.Description>
		</Card.Header>
		<Card.Content>
			<p>This will create 'availbility' for services</p>

			<p>1 - create available chunks of time on the calendar</p>
			<p>2 - after creating submit, this will generate 15 min slots of available times</p>
			<p>3 - user can book these slots</p>
		</Card.Content>
	</Card.Root>
</div>
<div class="container" class:ec-dark={$theme === 'dark'} class:ec-light={$theme === 'light'}>
	<div class="calendar-wrapper">
		<Calendar bind:this={ec} {plugins} {options} />
		{#if showEvent}
			<div class="event-info">
				<p>{eventDisplay.title}</p>
				<p>{eventDisplay.start}</p>
				<p>{eventDisplay.end}</p>
				<button
					on:click={() => {
						showEvent = false;
					}}>close</button>
				<button>delete</button>
			</div>
		{/if}
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

	.event-info {
		position: absolute;
		z-index: var(--layer-2);
		box-shadow: var(--shadow-3);
		background-color: var(--stone-11);
		padding: 24px;
		height: 240px;
		color: var(--stone-6);
	}
</style>
