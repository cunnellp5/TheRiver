<script lang="ts">
	import Modal from '$lib/components/ui/Modal.svelte';
	import CalendarComponent from '$lib/components/ui/Calendar.svelte';
	import Calendar from 'lucide-svelte/icons/calendar';
	import { onMount } from 'svelte';

	let { data } = $props();
	let showModal = $state(false);
	const { services } = data;
	const totalDuration = services.reduce((acc, service) => acc + service?.duration, 0);

	onMount(() => {
		if (services.length === 1) {
			showModal = false;
		} else {
			showModal = true;
		}
	});

	const toggleModal = () => {
		showModal = !showModal;
	};
</script>

<Modal bind:showModal overrideButtons={true}>
	{#snippet header()}
		<h2 >Choose booking style</h2>
	{/snippet}
	<ol class="definition-list">
		{#each services as service, i}
			<div class="service-wrapper">
				<li class="name">
					{i + 1}. {service.name}
				</li>
				<li>
					<em>{service.duration} <small>min</small></em>
				</li>
			</div>
		{/each}
	</ol>
	<ol class="service-total">
		<li class="name">Total</li>
		<li class="totalDuration">
			{totalDuration}
			<em><small>min</small></em>
		</li>
	</ol>
	{#snippet buttons()}
		<div  class="buttons">
			<button onclick={toggleModal}>Combine services into one session</button>
			<button>Book separately</button>
		</div>
	{/snippet}
</Modal>

<h2><Calendar size="36" /> <span>Choose a day and time</span></h2>
<section>
	<div class="service-card-wrapper surface-1">
		{#if services}
			{#each services as service, i}
				<div class="selectedService surface-4">
					<h3>{i + 1} - {service.name}</h3>
					<p>{service.description}</p>
				</div>
			{/each}
		{:else}
			<p>No services available</p>
		{/if}
	</div>
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

	.selectedService {
		display: flex;
		flex-direction: column;
		gap: var(--size-5);
		margin-block: var(--size-6);
		border-radius: var(--radius-2);
		padding: var(--size-4);
	}

	.service-card-wrapper {
		padding: var(--size-4);
	}
	.service-wrapper {
		display: flex;
		justify-content: space-between;
		gap: var(--size-5);
		font-weight: 100;
	}
	.service-total {
		display: flex;
		justify-content: space-between;
		border-bottom: 1px dashed var(--stone-9);
		/* gap: var(--size-5); */
		padding-block-start: var(--size-2);
	}
	.buttons {
		display: flex;
		flex-direction: column;
		gap: var(--size-4);
	}
	.name {
		color: var(--text-2);
	}
	.service-total {
		margin-top: var(--size-4);
		margin-left: var(--size-2);
		font-weight: 500;
	}
</style>
