<script lang="ts">
	import Calendar from '$lib/components/ui/Calendar.svelte';

	export let data;
</script>

<h4>Choose a day and time</h4>

<section>
	<div>display booking service up here</div>
	<aside>
		<Calendar />
	</aside>
</section>

<style>
	aside {
		width: 20%;

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
