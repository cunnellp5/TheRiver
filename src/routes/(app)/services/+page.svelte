<script lang="ts">
	import Seo from '$lib/components/SEO.svelte';
	import * as Table from '$lib/components/ui/shadcn/table';
	// import { enhance } from '$app/forms';

	export let data;
	const { services, about } = data;
	// const selectedServices = new Set();
	// let selectedServicesInput: string;
	let scroll: number;
	let activeIndex: number | null = null;

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

<Seo
	title={'Beauty Services by The River - Expert Hair & Nails | Alexis'}
	description={'Transform your look with The River’s expert beauty services. From flawless makeup to rejuvenating skincare, embrace your beauty with a touch of artistry and care.'} />

<svelte:window bind:scrollY={scroll} />

<main class="app-layout">
	<section class="top">
		<!-- style:transform={`translate3d(${scroll / 10}px, 0, 0)`} -->
		<h1 class="overflow-hidden">THE RIVER BEAUTY</h1>
		<p>Denver based</p>
		<div
			class="cutoutImg overflow-hidden"
			style:transform={`translate3d(-${scroll / 20}px, ${scroll / 5}px, 0)`}>
			<img
				src="https://res.cloudinary.com/dswpu3qez/image/upload/f_auto/q_auto/v1714083850/TheRiver/alexisCutout.png"
				alt="alexis cutout" />
			<!-- <img
				style:transform={`translate3d(-${scroll / 10}px, ${scroll / 5}px, 0)`}
				src="https://res.cloudinary.com/dswpu3qez/image/upload/v1714083850/TheRiver/alexisArt_fr62uy.png"
				alt="" /> -->
		</div>

		<!-- <div class="page-indicator">1</div> -->
	</section>
	{#if about?.isShowing}
		<p class="about">
			{about?.text}
		</p>
	{/if}
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
	{#each Object.entries(services) as [category, data]}
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
							<Table.Cell>
								<p class="serviceName">
									{service.name}
								</p>
							</Table.Cell>
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
		<ul class="dots">
			{#each Object.entries(services) as [category], index}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
				<li
					class:active={index === activeIndex}
					on:click={() => (activeIndex = index)}
					title={category}>
					<a href={`#${category}`}>
						{category}
					</a>
				</li>
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

	.serviceName {
		font-size: var(--font-size-1);
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
	/* .aside-left {
		position: sticky;
		bottom: var(--size-7);
		box-shadow: var(--shadow-3);
		border-radius: var(--radius-2);
		padding: var(--size-4);
		width: max-content;
	} */
	/* Your existing styles */
	.aside-right {
		position: sticky;
		bottom: 70%;
		left: 100%;
		/* transform: rotate(90deg); */
		/* box-shadow: var(--shadow-3); */
		/* border-radius: var(--radius-2); */
		/* padding: var(--size-3); */
		width: max-content;
	}
	.about {
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
		width: var(--size-content-1);
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
		transition: opacity 2.5s;
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

	/* DOT STYLES */
	.dots {
		display: flex;
		/* position: relative; */
		flex-direction: column;
		gap: var(--size-5);
		/* cursor: default; */
		/* margin: 0; */
		/* padding: 0; */
		/* list-style: none; */

		& .active {
			& a {
				-webkit-transform: scale3d(1.3, 1.3, 1.3);
				transform: scale3d(1.3, 1.3, 1.3);

				&:after {
					height: 100%;
				}
			}
		}

		& li {
			display: block;
			position: relative;
			float: left;
			cursor: pointer;
			margin-inline: var(--size-3);
			width: 20px;
			height: 20px;

			& a {
				position: absolute;
				top: 0;
				left: 0;
				-webkit-transform: scale3d(1, 1, 1);
				transform: scale3d(1, 1, 1);
				-webkit-transition: all 0.3s ease;
				transition: all 0.3s ease;
				cursor: pointer;
				outline: none;
				box-shadow: inset 0 0 0 2px var(--link);
				border-radius: 50%;
				background-color: transparent;
				width: 100%;
				height: 100%;
				overflow: hidden;
				text-indent: -999em;

				&:after {
					position: absolute;
					bottom: 0;
					left: 0;
					-webkit-transition: height 0.3s ease;
					transition: height 0.3s ease;
					box-shadow: 0 0 1px var(--link);
					background-color: var(--link);
					width: 100%;
					height: 0;
					content: '';
				}
			}
		}
	}

	@media (max-width: 768px) {
		/* .page-indicator {
			display: none;
		} */
		.top {
			height: 30vh;
		}
		.tables {
			width: 100%;
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
		.cutoutImg {
			opacity: 0.1;
		}

		.dots {
			position: absolute;
			right: -40px;
		}

		.serviceName {
			font-size: var(--font-size-0);
			text-wrap: break-word;
			word-break: break-word; /* Ensures words break at the edge of the container */
			overflow-wrap: break-word; /* Allows breaking within words to prevent overflow */
		}
	}

	[title] {
		position: relative;
	}

	[title]:after {
		position: absolute;
		right: 150%;
		bottom: 0%;
		opacity: 0;
		-webkit-transition: opacity 0.1s ease-in-out;
		transition: opacity 0.1s ease-in-out;
		border-radius: var(--radius-round);
		background-color: var(--surface-3);
		padding-inline: var(--size-2);
		width: max-content;
		content: attr(title);
		color: var(--text-2);
		font-size: var(--font-size-0);
		text-transform: uppercase;
	}

	[title]:hover:after {
		opacity: 1;
	}
</style>
