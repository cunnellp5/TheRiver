<script lang="ts">
	import Modal from '$lib/components/ui/Modal.svelte';
	import { theme } from '$lib/stores/theme';
	import Calendar from '@event-calendar/core';
	import '@event-calendar/core/index.css';
	import DayGrid from '@event-calendar/day-grid';
	import Interaction from '@event-calendar/interaction';
	import List from '@event-calendar/list';
	import TimeGrid from '@event-calendar/time-grid';
	import { createEvents, configOptions } from './calendarConfig';

	export let data;

	const { timeSlots, blackoutDays } = data;

	$: showModal = false;

	const toggleModal = () => {
		showModal = !showModal;
	};

	let ec: Calendar;

	const plugins = [DayGrid, List, TimeGrid, Interaction];

	const options = {
		...configOptions,
		select(info) {
			ec.addEvent({
				start: info.startStr,
				end: info.endStr,
				display: 'auto',
				resourceId: 1,
				title: 'Available',
				editable: true,
				durationEditable: true,
				startEditable: true,
				constraint: 'businessHours',
				extendedProps: {
					availability: true
				}
			});
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

<Modal bind:showModal overrideButtons={true}>
	<h2 slot="header">Modal test</h2>

	<div slot="buttons" class="buttons">
		<button
			on:click={() => {
				showModal = false;
			}}>close</button>
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
	<!-- <form action="?/add" method="POST" class="form" use:enhance></form> -->
</div>

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
</style>
