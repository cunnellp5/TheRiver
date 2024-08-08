<script lang="ts">
	import market from '$lib/data/json/market.json';
	import * as Card from '$lib/components/ui/shadcn/card';

	export let data;

	const { feed } = data;
</script>

<main>
	<section>
		<a target="_blank" href={market.url}>
			<h1>THE RIVER MARKET</h1>
		</a>
		<a class="animation" target="_blank" href={market.url}> {market.text} </a>
	</section>
	<div class="grid-container">
		<div id="items" class="items">
			{#each feed as item}
				<a href={item.guid} target="_blank">
					<Card.Root>
						<Card.Header>
							<Card.Title>{item.title}</Card.Title>
							<Card.Description></Card.Description>
						</Card.Header>
						<Card.Content>
							<div class="card-content-description">
								{item.description}
							</div>
						</Card.Content>
					</Card.Root>
				</a>
			{/each}
		</div>
	</div>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-block: var(--size-7);
		padding-block: var(--size-11);
	}
	h1 {
		transform: rotate(2deg);
		margin-block: var(--size-7);
	}
	a:hover {
		text-decoration: none;
	}

	/* CLASSES */
	.card-content-description {
		word-break: break-all;
	}
	.animation {
		display: flex;
		justify-content: center;
		animation: var(--animation-float);
		animation-duration: infinite;
		animation-timing-function: var(--ease-elastic-in-out-3);
		margin-block: var(--size-4);
	}
	.grid-container {
		display: grid;
		margin-block: var(--size-7);
	}
	.items {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		/* grid-auto-rows: minmax(100px, auto); */
		gap: var(--size-7);
	}

	/* MEDIA QUERIES */
	@media (max-width: 1440px) {
		.items {
			grid-template-columns: repeat(2, 1fr); /* 2 columns */
		}
	}
	@media (max-width: 768px) {
		.items {
			grid-template-columns: repeat(1, 1fr); /* 1 column */
		}
	}
</style>
