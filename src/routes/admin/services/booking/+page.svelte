<script lang="ts">
	import Calendar from '$lib/components/ui/Calendar.svelte';
	// import Calendar from '@event-calendar/core';
	// import TimeGrid from '@event-calendar/time-grid';

	const today = new Date();
</script>

<!-- <button on:click={updateOptions}>Change slot duration</button> -->
<!-- <button on:click={invokeMethod}>Refetch events</button> -->

<div class="">
	<Calendar {today} month={today.getMonth()} year={today.getFullYear()} />
</div>

<style>
	/* .surface-4 {
		box-shadow: var(--shadow-1);
		padding: var(--size-4);
	} */
</style>
