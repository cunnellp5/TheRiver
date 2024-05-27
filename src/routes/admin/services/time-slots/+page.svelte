<script lang="ts">
	import Calendar from '@event-calendar/core';
	import DayGrid from '@event-calendar/day-grid';
	import List from '@event-calendar/list';
	import TimeGrid from '@event-calendar/time-grid';
	import Interaction from '@event-calendar/interaction';
	import '@event-calendar/core/index.css';
	import { theme } from '$lib/stores/theme';

	$: currentTheme = $theme;

	const plugins = [DayGrid, List, TimeGrid, Interaction];
	const options = {
		events: [
			// your list of events
		],
		// slotDuration: '00:15do:00',
		slotLabelFormat: {
			hour: 'numeric',
			minute: '2-digit',
			meridiem: 'short'
		},
		headerToolbar: {
			start: 'title dayGridMonth,timeGridWeek,timeGridDay listYear,listMonth,listWeek,listDay',
			center: '',
			end: 'today prev,next'
		},
		buttonText: {
			listDay: 'listDay',
			listYear: 'listYear',
			listMonth: 'listMonth',
			listWeek: 'listWeek',
			dayGridMonth: 'month',
			timeGridWeek: 'week',
			timeGridDay: 'day',
			today: 'today'
		}
	};
	// import Calendar from '$lib/components/ui/Calendar.svelte';
	// import { enhance } from '$app/forms';
	// import { onMount } from 'svelte';
	// import { writable } from 'svelte/store';

	const STEP_SIZE = 900; // this is in ms, so 900 is 15 minutes

	export let data;
	const { timeSlots, blackoutDays } = data;

	const days = ['Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat', 'Sun'];
	// let availability = writable([]);

	// function addAvailability(day, startTime, endTime) {
	// 	availability.update((current) => [...current, { day, startTime, endTime }]);
	// }
	// let selectedDates = [];
	// let startOfDay = '09:00';
	// let endOfDay = '18:00';
	// let startTime = '09:00';
	// let endTime = '18:00';

	// function handleDateSelection(dates) {
	// 	selectedDates = dates.map((date) => new Date(date).toLocaleDateString('en-CA'));
	// }

	const availability = days.map((day) => ({
		day,
		startOfDay: '09:00',
		endOfDay: '18:00',
		breaks: [],
		buffer: 15 // default buffer time in minutes
	}));

	const addBreak = (index: number) => {
		availability[index].breaks.push({ start: '', end: '' });
		console.log(availability);
	};

	const removeBreak = (dayIndex: number, breakIndex: number) => {
		availability[dayIndex].breaks.splice(breakIndex, 1);
		console.log(availability);
	};
</script>

<div
	class="container ec-dark"
	class:ec-dark={currentTheme === 'dark'}
	class:ec-light={currentTheme === 'light'}>
	<h4>Schedule</h4>

	<p>This generates time slots on the backend in 15 min chunks</p>

	<pre>
		1 - select a day or many days
		2 - for each of those days, select the start and end time
		3 - add breaks if needed
		4 - add buffer time between each time slot
	</pre>

	<Calendar {plugins} {options} />
	<!-- <form action="?/add" method="POST" class="form" use:enhance></form> -->
</div>

<style>
</style>
