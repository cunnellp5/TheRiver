<script lang="ts">
	import Table from '$lib/components/ui/Table.svelte';
	// eslint-disable-next-line import/no-unresolved
	import { enhance } from '$app/forms';

	export let data;
	const { services } = data;
	let selectedServices = new Set();
	let scroll;

	function setSelected(event) {
		if (selectedServices.has(event.detail.id)) {
			selectedServices.delete(event.detail.id);
			selectedServices = selectedServices;
			return;
		}
		selectedServices = selectedServices.add(event.detail.id);
	}

	// TODO table mapper function?
	const remappedServices = services.reduce((acc, service) => {
		if (!acc[service.category]) {
			acc[service.category] = [];
		}
		acc[service.category].push({
			id: service.id,
			Service: service.name,
			Description: service.description,
			Duration: `${service.duration} min`,
			Availability: service.availability,
			Price: `$${service.price}`
		});
		return acc;
	}, {});
</script>

<svelte:window bind:scrollY={scroll} />

<main>
	<section class="top">
		<h1 style:transform={`translate3d(${scroll / 3}px, 0, 0)`}>THE RIVER BEAUTY</h1>
		<p
			style:transform={(`translate3d(-${scroll / 10}px, ${scroll / 5}px, 0)`,
			`rotate(${scroll / 18}deg)`)}
			style:letter-spacing={`${scroll / 25}px`}>
			Denver based
		</p>
		<img
			style:transform={`translate3d(-${scroll / 10}px, ${scroll / 5}px, 0)`}
			src="https://res.cloudinary.com/dswpu3qez/image/upload/v1714083850/TheRiver/alexisArt_fr62uy.png"
			alt="" />

		<!-- <div class="page-indicator">1</div> -->
	</section>
	{#each Object.entries(remappedServices) as [category, listOfServices]}
		<section class="service-table">
			<div>
				<h2>{category}</h2>
				<Table data={listOfServices} {selectedServices} on:selectService={setSelected} />
			</div>
		</section>
	{/each}

	{#if selectedServices.size > 0}
		<aside class="surface-3">
			<h4>Selected service{selectedServices.size > 1 ? 's' : ''}</h4>
			<ul>
				{#each Array.from(selectedServices) as serviceId}
					<li>{services.find((service) => service.id === serviceId).name}</li>
				{/each}
			</ul>
		</aside>
	{/if}
	<form method="POST" use:enhance>
		<button
			class:disabled={selectedServices.size === 0}
			disabled={selectedServices.size === 0}
			class="primary">
			{selectedServices.size === 0 ? 'Pick a service' : 'BOOK NOW'} ({selectedServices.size})
		</button>
	</form>
</main>

<style>
	main {
		display: flex;
		grid-column: 2;
		flex-direction: column;
		margin: 0 auto;
		line-height: var(--font-lineheight-4);
		letter-spacing: var(--font-letterspacing-3);
	}
	img {
		position: absolute;
		top: var(--size-8);
		left: 0;
		z-index: -1;
		clip-path: polygon(0 0, 100% 0, 100% 75%, 0% 100%);
	}
	button {
		align-self: end;
		margin: 0 auto;
		width: 100%;
		font-weight: var(--font-weight-8);
	}
	form {
		position: sticky;
		bottom: var(--size-7);
		align-self: center;
		width: var(--size-content-2);
	}

	aside {
		position: sticky;
		bottom: var(--size-7);
		box-shadow: var(--shadow-3);
		border-radius: var(--radius-2);
		padding: var(--size-4);
		width: max-content;
		/* justify-content: end; */
	}
	/* .page-indicator {
		display: flex;
		position: fixed;
		bottom: 0;
		justify-content: center;
		align-items: center;
		margin-bottom: var(--size-4);
		border-right: 1px solid var(--link);
		padding-right: var(--size-2);
		height: var(--size-7);
		color: var(--link);
	} */
	.top {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: end;
		width: 100%;
		height: 40vh;
	}
	.service-table {
		display: flex;
		flex-direction: column;
		justify-content: start;
		align-items: center;
		/* margin-block: var(--size-4); */
		/* width: 100%; */
		min-height: 30vh;
	}
	.service-table h2 {
		align-self: flex-start;
	}
</style>
