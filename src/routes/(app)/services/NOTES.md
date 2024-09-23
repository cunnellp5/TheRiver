<!-- JUST KEEPING THIS BECAUSE I FEEEL LIKE THERE WERE GOOD COMMEENTS / NOTES IN HERE -->

<script lang="ts">
	// const selectedServices = new Set();
	// let selectedServicesInput: string;

	// function setSelected(event) {
	// 	if (selectedServices.has(event.detail.id)) {
	// 		selectedServices.delete(event.detail.id);
	// 		selectedServices = selectedServices;
	// 		return;
	// 	}
	// 	selectedServices = selectedServices.add(event.detail.id);
	// 	selectedServicesInput = [...selectedServices].join(',');
	// }

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

<div class="cutoutImg" style:transform={`translate3d(0, ${scroll / 5}px, 0)`}>
	<CutoutImg />
</div>

<main>
	<section class="top" style:background-position={`center ${scroll / 25}%`}>
		<h1 class="headingReset">The River Beauty</h1>
		{#if about?.isShowing}
			<p class="about">
				{about?.text}
			</p>
		{/if}
	</section>
	<!-- {#each Object.entries(remappedServices) as [category, listOfServices]}
		<section class="service-table">
			<div>
				<h2>{category}</h2>
				<Table data={listOfServices} {selectedServices} on:selectService={setSelected} />
			</div>
		</section>
	{/each} -->
</main>
<main class="app-layout">

    <!-- {#if selectedServices.size > 0}
    	<aside class="surface-3 aside-left">
    		<h4>Selected service{selectedServices.size > 1 ? 's' : ''}</h4>
    		<ul>
    			{#each Array.from(selectedServices) as serviceId}
    				<li>{services.find((service) => service.id === serviceId).name}</li>
    			{/each}
    		</ul>
    	</aside>
    {/if} -->
    <aside class="aside-right">
    	<!-- <h4 class="categoryTitle">Categories</h4> -->
    	<ScrollDots {services} />
    </aside>
    <div class="fakeform">
    	<div class="serviceButtons">
    		<ServiceButtons />
    	</div>
    	<!-- <a href="https://lazwicky.glossgenius.com/services" target="_blank" rel="noopener"> -->
    	<!-- <button class="primary"> Book Now </button> -->
    	<!-- </a> -->
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
	/* button {
		align-self: end;
		margin: 0 auto;
		width: 100%;
		font-weight: var(--font-weight-8);
	} */


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
	/* .aside-left {
		position: sticky;
		bottom: var(--size-7);
		box-shadow: var(--shadow-3);
		border-radius: var(--radius-2);
		padding: var(--size-4);
		width: max-content;
	} */
	/* Your existing styles */
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

	/* DOT STYLES */

	@media (max-width: 768px) {
		/* .page-indicator {
			display: none;
		} */
		.top {
			height: 30vh;
		}
		.fakeform {
			width: 100%;
		}
		/* .service-table {
			min-height: 20vh;
		} */
		/* .aside-right { */
		/* bottom: var(--size-10); */
		/* } */
	}
</style>
