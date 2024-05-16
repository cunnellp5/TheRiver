<script lang="ts">
	import CalendarComponent from '$lib/components/ui/Calendar.svelte';
	import Calendar from 'lucide-svelte/icons/calendar';

	export let data;
</script>

<h2><Calendar size="36" /> <span>Choose a day and time</span></h2>
<section>
	<div class="selectedService"></div>
	<aside>
		<CalendarComponent />
	</aside>
</section>

<style>
	h2 {
		display: inline-flex;
		margin-block: var(--size-10);
		& span {
			margin-left: var(--size-2);
		}
	}

	aside {
		/* & .month {
			width: 20%;
		} */
		/* height: var(--size-4); */
		/* display: grid; */
		/* grid-template-columns: 1fr 0.1fr; */
		/* width: 50vw; */
		/* height: 20vh; */
	}
</style>
