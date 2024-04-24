<script lang="ts">
	import Producers from './Producers.svelte';
</script>

<div class="grid-container">
	<div class="sidenav">
		<a href="#videos">Videos</a>
		<a href="#tracks">Tracks</a>
		<a href="#producers">Stems</a>
	</div>

	<main>
		<h1>The River Sings</h1>
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum quisquam sed modi nemo nisi ad
		sequi temporibus voluptas omnis, aliquam rerum. Aspernatur magni aliquam libero dolor, quibusdam
		ad perferendis delectus.
		<div id="videos" class="videos">videos</div>
		<div id="tracks" class="tracks">tracks</div>
		<div id="producers"><Producers /></div>
		<div class="gradient-point-up"></div>
	</main>
</div>

<style>
	main {
		margin: 0 auto;
		grid-column: 2;
	}

	h1 {
		margin-block: var(--size-7);
		text-transform: uppercase;
	}

	div {
		margin-block: var(--size-7);
	}

	.grid-container {
		display: grid;
	}

	.sidenav {
		position: sticky;
		top: 0;
		grid-column: 1;
		display: grid;
		padding: var(--size-3);
		color: #818181;
		height: 10%;
	}

	.sidenav a {
		transform: rotate(-90deg);
		text-decoration: none;
		font-size: var(--font-size-1);
		color: inherit;
		display: flex;
		align-items: center;
		justify-content: center;

		color: var(--text-2);
		text-decoration: none;
		text-transform: uppercase;
		font-weight: var(--font-weight-5);
		font-size: var(--size-3);
		transition: color 0.3s ease;
		height: 100%;
		/* letter-spacing: 1px; */
		letter-spacing: var(--font-letterspacing-2);
	}

	.sidenav a:hover {
		color: #f1f1f1;
	}

	.videos,
	.tracks {
		height: 100vh;
		width: 100%;
		background-image: var(--gradient-1), var(--noise-3);
	}

	.gradient-point-up {
		height: var(--size-9);
		background-image: var(--gradient-2), var(--noise-3);
		-webkit-mask: var(--mask-edge-drip-bottom);
		mask: var(--mask-edge-drip-bottom);
	}
</style>
