<script lang="ts">
	import market from '$lib/data/json/market.json';
</script>

<main>
	<section>
		<a target="_blank" href={market.url}>
			<h1>THE RIVER MARKET</h1>
		</a>
		<a class="animation" target="_blank" href={market.url}> {market.text} </a>
	</section>
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

	.animation {
		display: flex;
		justify-content: center;
		animation: var(--animation-float);
		animation-duration: infinite;
		animation-timing-function: var(--ease-elastic-in-out-3);
		margin-block: var(--size-4);
	}
</style>
