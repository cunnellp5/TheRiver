<script lang="ts">
	// import Table from '$lib/components/ui/Table.svelte';
	import * as Table from '$lib/components/ui/shadcn/table';
	import { CldImage } from 'svelte-cloudinary';
	import { enhance } from '$app/forms';

	export let data;
	const { services } = data;
	let selectedServices = new Set();
	let selectedServicesInput: string;
	let scroll: number;

	function setSelected(event) {
		if (selectedServices.has(event.detail.id)) {
			selectedServices.delete(event.detail.id);
			selectedServices = selectedServices;
			return;
		}
		selectedServices = selectedServices.add(event.detail.id);
		selectedServicesInput = [...selectedServices].join(',');
	}

	// TODO table mapper function?
	// const remappedServices = services.reduce((acc, service) => {
	// 	if (!acc[service.category]) {
	// 		acc[service.category] = [];
	// 	}
	// 	acc[service.category].push({
	// 		id: service.id,
	// 		Service: service.name,
	// 		Description: service.description,
	// 		Duration: `${service.duration} min`,
	// 		Availability: service.availability,
	// 		Price: `$${service.price}`
	// 	});
	// 	return acc;
	// }, {});
</script>

<svelte:window bind:scrollY={scroll} />

<main class="app-layout">
	<section class="top">
		<h1 style:transform={`translate3d(${scroll / 10}px, 0, 0)`}>THE RIVER BEAUTY</h1>
		<p>Denver based</p>
		<div class="cutoutImg" style:transform={`translate3d(-${scroll / 20}px, ${scroll / 5}px, 0)`}>
			<CldImage
				height="1000"
				width="600"
				sizes="100vw"
				crop="pad"
				src={'/TheRiver/alexisCutout'}
				alt="alexis cutout" />
			<!-- <img
				style:transform={`translate3d(-${scroll / 10}px, ${scroll / 5}px, 0)`}
				src="https://res.cloudinary.com/dswpu3qez/image/upload/v1714083850/TheRiver/alexisArt_fr62uy.png"
				alt="" /> -->
		</div>

		<!-- <div class="page-indicator">1</div> -->
	</section>
	<p class="about">
		Beauty isn't just skin deep. It's an experience that starts with self-love and radiates outward.
		My services are tailored to bring out your natural glow.
	</p>
	<!-- {#each Object.entries(remappedServices) as [category, listOfServices]}
		<section class="service-table">
			<div>
				<h2>{category}</h2>
				<Table data={listOfServices} {selectedServices} on:selectService={setSelected} />
			</div>
		</section>
	{/each} -->
</main>
<main>
	{#each Object.entries(services) as [category, data], id}
		<span class="stupid" id={category}></span>
		<section class="tables">
			<Table.Root>
				<Table.Caption>{data[0].category.description}</Table.Caption>
				<Table.Header>
					<Table.Row>
						<div class="table-row-header">
							<h6>
								{category.toUpperCase()}
							</h6>
						</div>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{#each data as service}
						<Table.Row>
							<Table.Cell>{service.name}</Table.Cell>
							<Table.Cell>
								<div class="price-duration">
									<span class="price">
										${service.price}.00
									</span>
									<span class="time">
										{service.duration} min
									</span>
								</div>
							</Table.Cell>
						</Table.Row>
					{/each}
				</Table.Body>
			</Table.Root>
			<!-- <hr /> -->
		</section>
	{/each}

	{#if selectedServices.size > 0}
		<aside class="surface-3 aside-left">
			<h4>Selected service{selectedServices.size > 1 ? 's' : ''}</h4>
			<ul>
				{#each Array.from(selectedServices) as serviceId}
					<li>{services.find((service) => service.id === serviceId).name}</li>
				{/each}
			</ul>
		</aside>
	{/if}
	<aside class="aside-right surface-3">
		<h4>Categories</h4>
		<ul>
			{#each Object.entries(services) as [category, data]}
				<a href={`#${category}`}>
					<li>{category}</li>
				</a>
			{/each}
		</ul>
	</aside>
	<div class="fakeform">
		<a href="https://lazwicky.glossgenius.com/services" target="_blank">
			<button class="primary"> Book Now </button>
		</a>
	</div>
	<!-- <form method="POST" use:enhance>
		<input
			name="selectedServices"
			id="selectedServices"
			type="hidden"
			bind:value={selectedServicesInput} />
		<button
			class:disabled={selectedServices.size === 0}
			disabled={selectedServices.size === 0}
			class="primary">
			{selectedServices.size === 0 ? 'Pick a service' : 'BOOK NOW'} ({selectedServices.size})
		</button>
	</form> -->
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
	button {
		align-self: end;
		margin: 0 auto;
		width: 100%;
		font-weight: var(--font-weight-8);
	}

	/* CLASSES */
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
	.aside-left {
		position: sticky;
		bottom: var(--size-7);
		box-shadow: var(--shadow-3);
		border-radius: var(--radius-2);
		padding: var(--size-4);
		width: max-content;
	}
	/* Your existing styles */
	.aside-right {
		position: sticky;
		bottom: 70%;
		left: 70%;
		box-shadow: var(--shadow-3);
		border-radius: var(--radius-2);
		padding: var(--size-4);
		width: max-content;
	}
	.about {
		/* width: 100%; */
		display: flex;
		justify-content: center;
		margin: 0 auto;
		margin-block-end: var(--size-12);
		color: var(--text-2);
		/* font-family: sans-serif; */
		text-align: center;
	}
	.fakeform {
		position: sticky;
		bottom: var(--size-7);
		align-self: center;
		width: var(--size-content-2);
	}
	.tables {
		align-items: center;
		align-self: center;
		width: var(--size-content-3);
		& tr {
			font-size: var(--font-size-1);
		}
	}
	.cutoutImg {
		position: absolute;
		top: var(--size-8);
		left: 0;
		z-index: -1;
		clip-path: polygon(0 0, 100% 0, 100% 75%, 0% 100%);
	}
	.top {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: end;
		width: 100%;
		height: 40vh;
	}
	.price-duration {
		display: flex;
		flex-direction: column;
	}
	.time {
		color: var(--text-2);
		font-size: var(--font-size-00);
	}
	.price {
		font-size: var(--font-size-0);
	}
	.table-row-header {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: var(--size-3);
	}
	/* KEEPING BELOW FOR REFERENCE */
	/* .service-table {
		display: flex;
		flex-direction: column;
		justify-content: start;
		align-items: center;
		min-height: 30vh;
	}
	.service-table h2 {
		align-self: flex-start;
	} */
	.stupid {
		/* border: 1px solid red; */
		/* display: none; */
		height: var(--size-10);
	}
</style>
