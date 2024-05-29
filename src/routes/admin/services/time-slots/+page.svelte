<script lang="ts">
	import { theme } from '$lib/stores/theme';
	import Calendar from '@event-calendar/core';
	import '@event-calendar/core/index.css';
	import DayGrid from '@event-calendar/day-grid';
	import Interaction from '@event-calendar/interaction';
	import List from '@event-calendar/list';
	import TimeGrid from '@event-calendar/time-grid';

	export let data;
	const { timeSlots, blackoutDays } = data;

	let ec;

	function _pad(num) {
		let norm = Math.floor(Math.abs(num));
		return (norm < 10 ? '0' : '') + norm;
	}

	function createEvents() {
		let days = [];
		for (let i = 0; i < 7; ++i) {
			let day = new Date();
			let diff = i - day.getDay();
			day.setDate(day.getDate() + diff);
			days[i] = day.getFullYear() + '-' + _pad(day.getMonth() + 1) + '-' + _pad(day.getDate());
		}

		return [
			{ start: days[0] + ' 00:00', end: days[0] + ' 09:00', resourceId: 1, display: 'background' },
			{ start: days[1] + ' 12:00', end: days[1] + ' 14:00', resourceId: 2, display: 'background' },
			{ start: days[2] + ' 17:00', end: days[2] + ' 24:00', resourceId: 1, display: 'background' },
			{
				start: days[0] + ' 10:00',
				end: days[0] + ' 14:00',
				resourceId: 1,
				title: 'The calendar can display background and regular events',
				color: '#FE6B64'
			},
			{
				start: days[1] + ' 16:00',
				end: days[2] + ' 08:00',
				resourceId: 2,
				title: 'An event may span to another day',
				color: '#B29DD9'
			},
			{
				start: days[2] + ' 09:00',
				end: days[2] + ' 13:00',
				resourceId: 2,
				title:
					'Events can be assigned to resources and the calendar has the resources view built-in',
				color: '#779ECB'
			},
			{
				start: days[3] + ' 14:00',
				end: days[3] + ' 20:00',
				resourceId: 1,
				title: '',
				color: '#FE6B64'
			},
			{
				start: days[3] + ' 15:00',
				end: days[3] + ' 18:00',
				resourceId: 1,
				title: 'Overlapping events are positioned properly',
				color: '#779ECB'
			},
			{
				start: days[5] + ' 10:00',
				end: days[5] + ' 16:00',
				resourceId: 2,
				title: { html: 'You have complete control over the <i><b>display</b></i> of events…' },
				color: '#779ECB'
			},
			{
				start: days[5] + ' 14:00',
				end: days[5] + ' 19:00',
				resourceId: 2,
				title: '…and you can drag and drop the events!',
				color: '#FE6B64'
			},
			{
				start: days[5] + ' 18:00',
				end: days[5] + ' 21:00',
				resourceId: 2,
				title: '',
				color: '#B29DD9'
			},
			{
				start: days[1],
				end: days[3],
				resourceId: 1,
				title: 'All-day events can be displayed at the top',
				color: '#B29DD9',
				allDay: true
			}
		];
	}
	const plugins = [DayGrid, List, TimeGrid, Interaction];
	const options = {
		height: '700px',
		scrollTime: '09:00:00',
		slotMinTime: '05:00:00',
		slotMaxTime: '22:00:00',
		view: 'timeGridWeek',
		nowIndicator: true,
		events: createEvents(),
		// events: [
		// 	{
		// 		allDay: false,
		// 		start: '2024-05-23T13:00:00',
		// 		end: '2024-05-23T11:00:00',
		// 		title: 'test 1'
		// 	},
		// 	{
		// 		allDay: false,
		// 		start: '2024-05-23T09:00:00',
		// 		end: '2024-05-23T10:00:00',
		// 		title: 'test 1'
		// 	},
		// 	{
		// 		allDay: false,
		// 		start: '2024-05-26T22:00:00',
		// 		end: '2024-05-26T23:00:00',
		// 		title: 'test 1'
		// 	}
		// ],
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
		selectBackgroundColor: 'red',
		// pointer: true,
		eventDragStart: function (info) {
			console.log('dragStart');
		},
		eventDragStop: function (info) {
			console.log('dragStop');
		},
		eventDrop: function (info) {
			console.log('drop');
		},
		dateClick: function (info) {
			console.log('dateClick');
		}
	};
</script>

<div class="container" class:ec-dark={$theme === 'dark'} class:ec-light={$theme === 'light'}>
	<h3>Schedule</h3>

	<p>This will create 'availbility' for services</p>

	<pre>
		1 - create available chunks of time on the calendar
		2 - after creating submit, this will generate 15 min slots of available times
		3 - user can book these slots
	</pre>

	<Calendar {plugins} {options} />
	<!-- <form action="?/add" method="POST" class="form" use:enhance></form> -->
</div>

<style>
</style>
