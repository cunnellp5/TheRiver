<script lang="ts">
	import Calendar from '$lib/components/ui/Calendar.svelte';
	import { enhance } from '$app/forms';
	import { onMount } from 'svelte';

	export let data;
	const { timeSlots, blackoutDays } = data;

	let selectedDates = [];
	let startOfDay = '09:00';
	let endOfDay = '18:00';
	let timeSlotInterval = 15;
	let lunchBreakStart = '12:00';
	let lunchBreakEnd = '13:00';
	let otherBreaks = '';
	let timeSlotVisual = [];

	function handleDateSelection(dates) {
		selectedDates = dates.map((date) => new Date(date).toLocaleDateString('en-CA'));
		updateTimeSlots();
	}

	function updateTimeSlots() {
		const startTime = new Date(`1970-01-01T${startOfDay}:00`);
		const endTime = new Date(`1970-01-01T${endOfDay}:00`);

		timeSlotVisual = [];
		for (
			let time = new Date(startTime);
			time < endTime;
			time.setMinutes(time.getMinutes() + timeSlotInterval)
		) {
			const formattedTime = time.toISOString().slice(11, 16);
			const isLunchBreak =
				new Date(`1970-01-01T${lunchBreakStart}:00`) <= time &&
				time < new Date(`1970-01-01T${lunchBreakEnd}:00`);
			const isOtherBreak = otherBreaks.split(',').some((b) => {
				const [start, end] = b
					.trim()
					.split('-')
					.map((t) => new Date(`1970-01-01T${t}:00`));
				return start <= time && time < end;
			});

			if (!isLunchBreak && !isOtherBreak) {
				timeSlotVisual.push(formattedTime);
			}
		}
	}

	onMount(() => {
		enhance(document.querySelector('form'));
		updateTimeSlots();
	});
</script>

<div class="container">
	<h4>Services <span>&rsaquo;</span> Time Slots</h4>

	<Calendar on:select={handleDateSelection} />

	<h2>Existing Time Slots</h2>
	<table>
		<thead>
			<tr>
				<th>Day</th>
				<th>Start Time</th>
				<th>End Time</th>
				<th>Availability</th>
			</tr>
		</thead>
		<tbody>
			{#each timeSlots as slot}
				<tr>
					<td>{new Date(slot.day).toLocaleDateString()}</td>
					<td
						>{new Date(slot.startTime).toLocaleTimeString([], {
							hour: '2-digit',
							minute: '2-digit'
						})}</td>
					<td
						>{new Date(slot.endTime).toLocaleTimeString([], {
							hour: '2-digit',
							minute: '2-digit'
						})}</td>
					<td>{slot.availability ? 'Available' : 'Unavailable'}</td>
				</tr>
			{/each}
		</tbody>
	</table>

	<form action="?/add" method="POST" class="form" use:enhance>
		<div class="form-group">
			<label for="selectedDates">Selected Dates:</label>
			<input type="hidden" name="selectedDates" value={selectedDates.join(',')} />
			<ul>
				{#each selectedDates as date}
					<li>{date}</li>
				{/each}
			</ul>
		</div>
		<div class="form-group">
			<label for="startOfDay">Start of Day:</label>
			<input
				type="time"
				name="startOfDay"
				id="startOfDay"
				bind:value={startOfDay}
				step="900"
				required
				on:change={updateTimeSlots} />
		</div>

		<div class="form-group">
			<label for="endOfDay">End of Day:</label>
			<input
				type="time"
				name="endOfDay"
				id="endOfDay"
				bind:value={endOfDay}
				step="900"
				required
				on:change={updateTimeSlots} />
		</div>

		<div class="form-group">
			<label for="lunchBreakStart">Lunch Break Start:</label>
			<input
				type="time"
				name="lunchBreakStart"
				id="lunchBreakStart"
				bind:value={lunchBreakStart}
				required
				on:change={updateTimeSlots} />
		</div>

		<div class="form-group">
			<label for="lunchBreakEnd">Lunch Break End:</label>
			<input
				type="time"
				name="lunchBreakEnd"
				id="lunchBreakEnd"
				bind:value={lunchBreakEnd}
				required
				on:change={updateTimeSlots} />
		</div>

		<div class="form-group">
			<label for="timeSlotInterval">Time Slot Interval (15 minutes recommended):</label>
			<input
				type="number"
				name="timeSlotInterval"
				id="timeSlotInterval"
				bind:value={timeSlotInterval}
				required
				min="15"
				step="15"
				on:change={updateTimeSlots} />
		</div>

		<div class="form-group">
			<label for="otherBreaks">Other Breaks (comma separated times in HH:mm-HH:mm format):</label>
			<input
				type="text"
				name="otherBreaks"
				id="otherBreaks"
				bind:value={otherBreaks}
				on:change={updateTimeSlots} />
		</div>

		<button type="submit">Generate Time Slots</button>
	</form>

	<div class="time-slot-visual">
		<h3>Time Slot Preview</h3>
		{#each timeSlotVisual as timeSlot (timeSlot)}
			<div class="time-slot">{timeSlot}</div>
		{/each}
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		border-radius: 10px;
		background-color: #1a1a1a;
		padding: 2rem;
		color: #f0f0f0;
	}

	h4 {
		margin-bottom: 1rem;
	}

	table {
		margin-top: 1rem;
		border-collapse: collapse;
		width: 100%;
	}

	th,
	td {
		border: 1px solid #555;
		padding: 0.5rem;
		text-align: left;
	}

	th {
		background-color: #333;
	}

	.time-slot-visual {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-top: 1rem;
	}

	.time-slot {
		border: 1px solid #555;
		border-radius: 5px;
		background-color: #333;
		padding: 0.5rem;
	}

	.form {
		margin-top: 2rem;
		border-radius: 10px;
		background-color: #2a2a2a;
		padding: 1rem;
		width: 100%;
		max-width: 600px;
	}

	.form-group {
		margin-bottom: 1rem;
	}

	.form-group label {
		display: block;
		margin-bottom: 0.5rem;
	}

	.form-group input,
	.form-group select {
		border: 1px solid #555;
		border-radius: 5px;
		background-color: #3a3a3a;
		padding: 0.5rem;
		width: 100%;
		color: #f0f0f0;
	}

	.form-group input[type='time'] {
		display: inline-block;
		margin-right: 1rem;
		width: calc(50% - 1rem);
	}

	.form-group input[type='time']:last-child {
		margin-right: 0;
	}

	.form-group input[type='number'] {
		width: 100%;
	}

	button {
		display: block;
		cursor: pointer;
		border: none;
		border-radius: 5px;
		background-color: #4a90e2;
		padding: 0.75rem;
		width: 100%;
		color: #fff;
		font-size: 1rem;
	}

	button:hover {
		background-color: #357ab8;
	}
</style>
