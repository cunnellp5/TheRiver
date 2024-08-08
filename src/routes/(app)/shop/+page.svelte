<script lang="ts">
	import market from '$lib/data/json/market.json';
	import * as Card from '$lib/components/ui/shadcn/card';

	export let data;

	const { feed } = data;

	// function safeHTML(html: string) {
	// 	const element = document.createElement('div');
	// 	element.innerHTML = html;
	// 	return element.innerHTML;
	// }
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
							<Card.Title>
								<div class="title">
									{item.title?.replace(' by TheRiverDesign', '')}
								</div>
							</Card.Title>
							<Card.Description></Card.Description>
						</Card.Header>
						<Card.Content>
							<div class="card-content-description">
								<!-- eslint-disable-next-line svelte/no-at-html-tags -->
								{@html item.description}
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
		padding-block: var(--size-9);
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
		overflow: hidden;
		word-break: break-all;
		& p.image {
			display: flex;
			justify-content: center;
		}
		& img {
			transition: transform 0.5s ease;
			width: var(--size-content-2);
			height: var(--size-content-2);
			object-fit: scale-down;
		}
		& p.description {
			transition: opacity 0.5s ease;
			margin-block: var(--size-2);
			color: var(--text-2);
			font-size: var(--font-size-1);
		}
		& p.price {
			transition: opacity 0.5s ease;
			margin-block: var(--size-2);
			font-size: var(--font-size-1);
		}
	}
	.title {
		font-size: var(--font-size-4);
	}
	.card-content-description:hover {
		& img {
			transform: scale(1.5);
		}
		& p.description,
		p.price {
			opacity: 0;
		}
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
