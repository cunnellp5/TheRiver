<script lang="ts">
	import * as Card from '$lib/components/ui/shadcn/card';
	import Calendar from '$lib/components/ui/Calendar.svelte';
	// import Calendar from '@event-calendar/core';
	// import TimeGrid from '@event-calendar/time-grid';
	import { addToast } from '$lib/stores/toast';
	import Modal from '$lib/components/ui/Modal.svelte';

	const today = new Date();
	let showModal = false;
</script>

<div class="adminIntroCardWrapper">
	<Card.Root>
		<Card.Header>
			<Card.Title>Existing bookings</Card.Title>
			<Card.Description>View currently booked appointments</Card.Description>
		</Card.Header>
		<Card.Footer>🚧 Under Construction</Card.Footer>
	</Card.Root>
</div>

<Modal bind:showModal>
	<h2 slot="header">
		modal
		<small><em>adjective</em> mod·al \ˈmō-dəl\</small>
	</h2>

	<ol class="definition-list">
		<li>of or relating to modality in logic</li>
		<li>
			containing provisions as to the mode of procedure or the manner of taking effect —used of a
			contract or legacy
		</li>
		<li>of or relating to a musical mode</li>
		<li>of or relating to structure as opposed to substance</li>
		<li>
			of, relating to, or constituting a grammatical form or category characteristically indicating
			predication
		</li>
		<li>of or relating to a statistical mode</li>
	</ol>

	<a href="https://www.merriam-webster.com/dictionary/modal">merriam-webster.com</a>
</Modal>
<!-- <button on:click={updateOptions}>Change slot duration</button> -->
<!-- <button on:click={invokeMethod}>Refetch events</button> -->
<button on:click={() => (showModal = true)}> show modal </button>

<button
	on:click={() => addToast({ message: 'hello', type: 'info', dismissible: true, timeout: 5000 })}>
	Add toast
</button>
<div class="clanedar-wrapper">
	<Calendar {today} month={today.getMonth()} year={today.getFullYear()} />
</div>

<style>
	/* .surface-4 {
	box-shadow: var(--shadow-1);
		padding: var(--size-4);
	} */
	/* .clanedar-wrapper {
		height: var(--size-12);
	} */
</style>
