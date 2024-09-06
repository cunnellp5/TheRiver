<script lang="ts">
	import Seo from '$lib/components/SEO.svelte';
</script>

<Seo
	title={'Shop Unique Handmade Jewelry & Clothing by The River | Etsy Store'}
	description={"Shop The River's exclusive collection of handmade jewelry and clothing. Each piece is a unique expression of style, crafted with passion and designed to make a statement."} />

<main class="app-layout">
	<section>
		<a target="_blank" href="https://www.etsy.com/shop/TheRiverDesign" rel="noopener">
			<h1>THE RIVER MARKET</h1>
		</a>
		<a
			class="animation"
			target="_blank"
			href="https://www.etsy.com/shop/TheRiverDesign"
			rel="noopener">
			@TheRiverDesigns
		</a>
	</section>
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

	/* MEDIA QUERIES */
	/* @media (max-width: 1440px) {
		.items {
			grid-template-columns: repeat(2, 1fr);
		}
	}
	@media (max-width: 768px) {
		.items {
			grid-template-columns: repeat(1, 1fr);
		}
	} */
</style>
