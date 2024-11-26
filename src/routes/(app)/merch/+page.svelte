<script lang="ts">
	import ProductCard from './ProductCard.svelte';

	const products: App.Product[] = [
		{
			name: 'Coffee',
			id: '1',
			price: 5
		},
		{
			name: 'Sun Glasses',
			id: '2',
			price: 50
		},
		{
			name: 'poop',
			id: '3',
			price: 500
		}
	];
</script>

<!-- <section class="app-layout"> -->
<!-- grid -->
<div class="grid grid-cols-3 gap-4">
	<div class="col-span-3">The River Store</div>
	{#each products as product}
		<ProductCard {product} />
	{/each}
	<div class="col-span-3">
		<button>Checkout with stripe</button>
	</div>
</div>

<!-- </section> -->

<style>
	/* section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	} */

	.grid {
		display: grid;
		width: 100%;
	}

	.grid-cols-3 {
		grid-template-columns: repeat(3, minmax(0, 1fr));
	}

	.gap-4 {
		gap: var(--size-4);
	}

	.col-span-3 {
		grid-column: span 3 / span 3;
	}
</style>
