<script lang="ts">
	import Calendar from '$lib/components/ui/Calendar.svelte';
	import formatHours from '$lib/utils/formatHours';
	// eslint-disable-next-line import/no-unresolved
	import { enhance } from '$app/forms';

	export let data;
	const { timeSlots } = data;

	let day = new Date().toLocaleDateString('en-CA');
	let startTime = '09:00';
	let endTime = '10:00';
	let availability = 'AVAILABLE';

	let startOfDay = '09:00';
	let endOfDay = '18:00';
	let timeSlotInterval = 15;
	let lunchBreakEnd = '13:00';
	let lunchBreakStart = '12:00';
	let timeSlotVisual: string[];

	$: {
		const start = startOfDay;
		const end = endOfDay;
		const interval = timeSlotInterval;

		const startTimeV = new Date(`1970-01-01T${start}:00`);
		const endTimeV = new Date(`1970-01-01T${end}:00`);

		timeSlotVisual = [];

		for (let time = startTimeV; time <= endTimeV; time.setMinutes(time.getMinutes() + interval)) {
			timeSlotVisual.push(time.toISOString().slice(11, 16));
		}
	}
</script>

<h4>Services <span>&rsaquo;</span> time slots</h4>

<Calendar />

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
				<td>{new Date(slot.startTime).toLocaleTimeString()}</td>
				<td>{new Date(slot.endTime).toLocaleTimeString()}</td>
				<td>{slot.availability ? 'Available' : 'Unavailable'}</td>
			</tr>
		{/each}
	</tbody>
</table>

<form action="?/add" method="POST" class="form surface-4" use:enhance>
	<div class="form-group">
		<label for="day">Day:</label>
		<input type="date" name="day" id="day" bind:value={day} required />
	</div>
	<div class="form-group">
		<label for="startOfDay">Start of Day:</label>
		<input
			type="time"
			name="startOfDay"
			id="startOfDay"
			bind:value={startOfDay}
			step="900"
			required />
	</div>

	<div class="form-group">
		<label for="endOfDay">End of Day:</label>
		<input type="time" name="endOfDay" id="endOfDay" bind:value={endOfDay} step="900" required />
	</div>

	<div class="lunchWrapper">
		<div class="form-group">
			<label for="lunchBreakStart">Lunch Break Start:</label>
			<input
				type="time"
				name="lunchBreakStart"
				id="lunchBreakStart"
				bind:value={lunchBreakStart}
				required />
		</div>

		<div class="form-group">
			<label for="lunchBreakEnd">Lunch Break End:</label>
			<input
				type="time"
				name="lunchBreakEnd"
				id="lunchBreakEnd"
				bind:value={lunchBreakEnd}
				required />
		</div>
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
			step="15" />
	</div>

	<div class="form-group">
		<label for="otherBreaks">Other Breaks (comma separated times in HH:mm-HH:mm format):</label>
		<input type="text" name="otherBreaks" id="otherBreaks" />
	</div>

	<button type="submit">Generate Time Slots</button>
</form>

<div class="time-slot-visual">
	{#each timeSlotVisual as timeSlot (timeSlot)}
		<div class="time-slot">{timeSlot}</div>
	{/each}
</div>

<style>
	.form {
		margin: 0 auto;
		border-radius: 5px;
		padding: var(--size-4);
		width: 100%;
		max-width: 600px;
	}

	.form-group {
		margin-bottom: var(--size-4);
	}

	.form-group label {
		display: block;
		margin-bottom: var(--size-2);
	}

	.form-group input {
		border: 1px solid var(--stone-10);
		border-radius: 5px;
		padding: var(--size-2);
		width: 100%;
	}

	.lunchWrapper {
		display: flex;
		justify-content: space-evenly;
	}
</style>
