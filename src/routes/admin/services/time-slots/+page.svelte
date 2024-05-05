<script>
	import Calendar from '$lib/components/ui/Calendar.svelte';
	import formatHours from '$lib/utils/formatHours';

	export let data;
	const { timeSlots } = data;
</script>

<h4>Services <span>&rsaquo;</span> time slots</h4>

<Calendar {timeSlots} />

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

<style>
</style>
