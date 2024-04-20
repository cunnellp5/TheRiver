<script lang="ts">
	import MoveDown from 'lucide-svelte/icons/move-down';
</script>

<main>
	<h1>THE RIVER MARKET</h1>
	<a href="https://www.etsy.com/shop/MadeByTheRiverBed">etsy.com @MadeByTheRiverBed</a>
	<div class="animation">Coming spoon!</div>
</main>

<style>
	main {
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
		height: 100vh;
	}

	a:hover {
		text-decoration: none;
	}

	.animation {
		margin-block: var(--size-4);
		animation: var(--animation-float);
		animation-timing-function: var(--ease-elastic-in-out-3);
		animation-duration: infinite;
	}
</style>
