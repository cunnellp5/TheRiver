<script lang="ts">
	import Calendar from '$lib/components/ui/Calendar.svelte';
	import { enhance } from '$app/forms';
	import { onMount } from 'svelte';

	export let data;
	const { timeSlots, blackoutDays } = data;

	let selectedDates = [];
	let startOfDay = '09:00';
	let endOfDay = '18:00';

	function handleDateSelection(dates) {
		selectedDates = dates.map((date) => new Date(date).toLocaleDateString('en-CA'));
	}
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
				required />
		</div>

		<div class="form-group">
			<label for="endOfDay">End of Day:</label>
			<input type="time" name="endOfDay" id="endOfDay" bind:value={endOfDay} step="900" required />
		</div>

		<button type="submit">Generate Time Slots</button>
	</form>
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
		flex-direction: column;
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
