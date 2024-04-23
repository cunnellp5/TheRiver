<main>
	<section>
		<h1>THE RIVER MARKET</h1>
		<a target="_blank" href="https://www.etsy.com/shop/MadeByTheRiverBed">
			etsy.com @MadeByTheRiverBed
		</a>
		<div class="animation">Coming soon!</div>
	</section>
</main>

<style>
	main {
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
		height: 100vh;
		margin-block: var(--size-7);
	}
	h1 {
		margin-block: var(--size-7);
		transform: rotate(4deg);
	}

	a:hover {
		text-decoration: none;
	}

	.animation {
		display: flex;
		margin-block: var(--size-4);
		animation: var(--animation-float);
		animation-timing-function: var(--ease-elastic-in-out-3);
		animation-duration: infinite;
		justify-content: center;
	}
</style>
