<script lang="ts">
	// import { getCart } from './cart.svelte.ts';

	// const counter = getCart();
	let { children } = $props();
</script>

<section class="app-layout">
	<!-- <button onclick={counter.increment}>
		clicks: {counter.count}
	</button> -->
	<h1>Merch</h1>
	{@render children?.()}
</section>
