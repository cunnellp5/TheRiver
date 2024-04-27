<script lang="ts">
	import Table from '$lib/components/ui/Table.svelte';

	export let data;
	const { services } = data;

	// const listOfServices = services.map((service) => {
	// 	return {
	// 		Service: service.name,
	// 		Description: service.description,
	// 		Availability: service.availability,
	// 		Category: service.category,
	// 		Duration: service.duration,
	// 		Price: service.price
	// 	};
	// });

	const remappedServices = services.reduce((acc, service) => {
		if (!acc[service.category]) {
			acc[service.category] = [];
		}
		acc[service.category].push({
			Service: service.name,
			Description: service.description,
			Availability: service.availability,
			Duration: `${service.duration} min`,
			Price: `$${service.price}`
		});
		return acc;
	}, {});

	const columns = ['Service', 'Description', 'Availability', 'Duration', 'Price'];

	// console.log(services.name);
</script>

<main>
	<section class="top">
		<h1>THE RIVER BEAUTY</h1>
		<p>Denver based beauty</p>
		<img
			src="https://res.cloudinary.com/dswpu3qez/image/upload/v1714083850/TheRiver/alexisArt_fr62uy.png"
			alt="" />

		<!-- <div class="page-indicator">1</div> -->
	</section>
	{#each Object.entries(remappedServices) as [category, listOfServices]}
		<section class="service-table">
			<h2>{category}</h2>
			<Table {columns} data={listOfServices} />
		</section>
	{/each}
</main>

<style>
	main {
		grid-column: 2;
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
		height: 50vh;
	}
	.service-table {
		display: flex;
		flex-direction: column;
		justify-content: center;
		/* margin-block: var(--size-4); */
		width: 100%;
		min-height: 30vh;
	}
</style>
