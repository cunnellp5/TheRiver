<main>
	<h1>The River Sings</h1>
	<div class="gradient-point-down"></div>
	Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum quisquam sed modi nemo nisi ad sequi
	temporibus voluptas omnis, aliquam rerum. Aspernatur magni aliquam libero dolor, quibusdam ad perferendis
	delectus.
	<div class="videos">videos</div>
	<div class="tracks">tracks</div>
	<div class="producers">producer stuff</div>
	<div class="gradient-point-up"></div>
</main>

<style>
	h1 {
		margin-block: var(--size-7);
	}

	div {
		margin-block: var(--size-7);
	}

	main {
		/* display: grid; */
		/* grid-template-rows: auto auto auto; */
		margin: 0 auto;
	}
	.videos,
	.tracks,
	.producers {
		height: 100vh;
		width: 100%;
		background-image: var(--gradient-1), var(--noise-3);
	}

	.gradient-point-down {
		height: var(--size-9);
		background-image: var(--gradient-1), var(--noise-3);
		-webkit-mask: var(--mask-edge-zig-zag-top);
		mask: var(--mask-edge-zig-zag-top);
	}

	.gradient-point-up {
		height: var(--size-9);
		background-image: var(--gradient-2), var(--noise-3);
		-webkit-mask: var(--mask-edge-drip-bottom);
		mask: var(--mask-edge-drip-bottom);
	}
</style>
