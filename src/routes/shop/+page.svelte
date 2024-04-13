<main>
	<div class="hero">
		<h1>Shop page</h1>
		<p>Scroll down to animate the elements</p>
	</div>
	<div class="full-height">
		<div>test full height 1</div>
		<!-- <AnimatedElement /> -->
	</div>
	<div class="full-height">
		<div>test fulll height 2</div>
		<!-- <AnimatedElement /> -->
	</div>
</main>

<style>
	h1 {
		margin-block: var(--size-7);
	}

	main {
		margin: 0 auto;
	}

	h1 {
		margin-bottom: 0.5rem;
	}

	p {
		margin-top: 0;
	}

	.hero {
		height: calc(100vh - var(--size-8));
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.full-height {
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		border: 4px solid white;
	}
</style>
