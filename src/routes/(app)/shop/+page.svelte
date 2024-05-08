<main>
	<section>
		<h1>THE RIVER MARKET</h1>
		<a target="_blank" href="https://www.etsy.com/shop/MadeByTheRiverBed">
			etsy.com @MadeByTheRiverBed
		</a>
		<div class="animation">Check out the store</div>
	</section>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		/* justify-content: center; */
		align-items: center;
		margin-block: var(--size-7);
		/* height: 100vh; */
		padding-block: var(--size-11);
	}
	h1 {
		transform: rotate(4deg);
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
