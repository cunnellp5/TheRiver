<script lang="ts">
	import Calendar from '@event-calendar/core';
	import TimeGrid from '@event-calendar/time-grid';
	import '@event-calendar/core/index.css';

	let ec;
	const plugins = [TimeGrid];
	const options = {
		view: 'timeGridWeek',
		events: [
			{
				title: 'event 1',
				start: '2024-09-01T'
			},
			{
				title: 'haircut',
				start: '2024-04-29 13',
				end: '2024-04-29 16:30',
				// backgroundColor: 'red',
				// borderColor: 'red',
				extendedProps: {
					description: 'This is a cool event'
				}
			}
		],
		eventSources: [
			{
				events: function () {
					console.log('fetching...');
					return [];
				}
			}
		]
	};

	function invokeMethod() {
		ec.refetchEvents();
	}
	function updateOptions() {
		options.slotDuration = '02:00';
		options.view = 'timeGridDay';
	}
</script>

<h4>Services <span>&rsaquo;</span> bookings</h4>

<button on:click={updateOptions}>Change slot duration</button>
<button on:click={invokeMethod}>Refetch events</button>

<Calendar {plugins} {options} />

<style>
	/* @import '@event-calendar/core/index.css'; */
</style>
