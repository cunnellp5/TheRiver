<script>
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
</script>

<h4>Services <span>&rsaquo;</span> time slots</h4>

<Calendar />

<ul>
	{#each timeSlots as timeSlot}
		<li class="surface-4">
			<p>
				start: {formatHours(timeSlot.startTime)}
			</p>
			<p>
				end: {formatHours(timeSlot.endTime)}
			</p>
			<p>
				Availability: {timeSlot.availability}
			</p>
			<p>
				day: {timeSlot.day}
			</p>
			<p>
				ServiceId {timeSlot.serviceId}
			</p>
		</li>
	{/each}
</ul>

<form action="?/add" method="POST" class="form surface-4" use:enhance>
	<div class="form-group">
		<label for="day">Day:</label>
		<input type="date" name="day" id="day" bind:value={day} required />
	</div>
	<div class="form-group">
		<label for="startTime">Start Time:</label>
		<input type="time" name="startTime" id="startTime" bind:value={startTime} step="900" required />
	</div>
	<div class="form-group">
		<label for="endTime">End Time:</label>
		<input type="time" name="endTime" id="endTime" bind:value={endTime} step="900" required />
	</div>
	<div class="form-group available">
		<label for="availability">Availability:</label>
		<select name="availability" id="availability" bind:value={availability} required>
			<option value="AVAILABLE">AVAILABLE</option>
			<option value="PENDING">PENDING</option>
			<option value="UNAVAILABLE">UNAVAILABLE</option>
		</select>
	</div>
	<button type="submit">Add Time Slot</button>
</form>

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
</style>
