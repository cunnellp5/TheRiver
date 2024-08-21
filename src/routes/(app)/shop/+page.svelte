<script lang="ts">
	import * as Card from '$lib/components/ui/shadcn/card';

	export let data;

	const { feed, url, text } = data;

	// function safeHTML(html: string) {
	// 	const element = document.createElement('div');
	// 	element.innerHTML = html;
	// 	return element.innerHTML;
	// }
</script>

<main class="app-layout">
	<section>
		<a target="_blank" href={url}>
			<h1>THE RIVER MARKET</h1>
		</a>
		<a class="animation" target="_blank" href={url}> {text} </a>
	</section>
	<div class="grid-container">
		<div id="items" class="items">
			{#each feed as item}
				<a href={item.guid} target="_blank">
					<Card.Root class="unset">
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
	section {
		display: flex;
		flex-direction: column;
		/* align-items: center; */
		& .animation {
			justify-self: unset;
		}
	}
	h1 {
		transform: rotate(2deg);
		margin-block: var(--size-7);
	}
	a:hover {
		text-decoration: none;
		& .unset {
			box-shadow: var(--shadow-3);
			background: var(--surface-4);
			color: var(--text-1);
		}
	}

	/* CLASSES */
	.card-content-description {
		& p.image {
			display: flex;
			justify-content: center;
		}
		& img {
			transition: transform 0.5s ease;
			border-radius: unset;
			width: var(--size-content-2);
			height: var(--size-content-1);
			object-fit: cover;
		}
		& p.description {
			display: none;
			/* transition: opacity 0.5s ease; */
			/* color: var(--text-2); */
			/* font-size: var(--font-size-1); */
		}
		& p.price {
			display: none;
			/* transition: opacity 0.5s ease; */
			/* margin-block: var(--size-2); */
			/* font-size: var(--font-size-1); */
		}
	}
	.title {
		width: var(--size-13);
		overflow: hidden;
		font-size: var(--font-size-2);
		text-align: center;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.card-content-description:hover {
		& img {
			transform: scale(1.1);
		}
		& p.description,
		p.price {
			opacity: 0;
		}
	}
	/* .animation {
		display: flex;
		justify-content: center;
		animation: var(--animation-float);
		animation-duration: infinite;
		animation-timing-function: var(--ease-elastic-in-out-3);
		margin-block: var(--size-4);
	} */
	.grid-container {
		/* display: grid; */
		margin-block: var(--size-7);
		width: 100%;
	}
	.items {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		/* grid-auto-rows: minmax(100px, auto); */
		/* gap: var(--size-4); */
		/* width: 100%; */
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
