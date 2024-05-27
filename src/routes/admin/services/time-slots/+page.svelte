<script lang="ts">
	import Calendar from '@event-calendar/core';
	import DayGrid from '@event-calendar/day-grid';
	import List from '@event-calendar/list';
	import TimeGrid from '@event-calendar/time-grid';
	import Interaction from '@event-calendar/interaction';
	import '@event-calendar/core/index.css';
	import { theme } from '$lib/stores/theme';

	export let data;
	const { timeSlots, blackoutDays } = data;

	let ec;

	const plugins = [DayGrid, List, TimeGrid, Interaction];
	const options = {
		height: '700px',
		scrollTime: '09:00:00',
		slotMinTime: '05:00:00',
		slotMaxTime: '22:00:00',
		view: 'timeGridWeek',
		// views: {
		// 	timeGridWeek: { pointer: true },
		// },
		nowIndicator: true,
		events: [
			{
				allDay: false,
				start: '2024-05-23T13:00:00',
				end: '2024-05-23T11:00:00',
				title: 'test 1'
			},
			{
				allDay: false,
				start: '2024-05-23T09:00:00',
				end: '2024-05-23T10:00:00',
				title: 'test 1'
			},
			{
				allDay: false,
				start: '2024-05-26T22:00:00',
				end: '2024-05-26T23:00:00',
				title: 'test 1'
			}
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
		},
		selectable: true,
		editable: true,
		selectBackgroundColor: 'red'
	};
	// const handleDateClick = (arg) => {
	// 	alert(arg.dateStr);
	// };
</script>

<div class="container" class:ec-dark={$theme === 'dark'} class:ec-light={$theme === 'light'}>
	<h4>Schedule</h4>

	<p>This generates time slots on the backend in 15 min chunks</p>

	<pre>
		1 - select a day or many days
		2 - for each of those days, select the start and end time
		3 - add breaks if needed
		4 - add buffer time between each time slot
	</pre>

	<Calendar bind:this={ec} {plugins} {options} />
	<!-- <form action="?/add" method="POST" class="form" use:enhance></form> -->
</div>

<style>
</style>
