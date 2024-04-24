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
		grid-column: 2;
		margin: 0 auto;
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
		display: grid;
		position: sticky;
		top: 0;
		grid-column: 1;
		padding: var(--size-3);
		height: 10%;
		color: #818181;
	}

	.sidenav a {
		display: flex;
		justify-content: center;
		align-items: center;
		transform: rotate(-90deg);
		transition: color 0.3s ease;
		height: 100%;
		color: inherit;

		color: var(--text-2);
		font-weight: var(--font-weight-5);
		font-size: var(--font-size-1);
		font-size: var(--size-3);
		/* letter-spacing: 1px; */
		letter-spacing: var(--font-letterspacing-2);
		text-decoration: none;
		text-decoration: none;
		text-transform: uppercase;
	}

	.sidenav a:hover {
		color: #f1f1f1;
	}

	.videos,
	.tracks {
		background-image: var(--gradient-1), var(--noise-3);
		width: 100%;
		height: 100vh;
	}

	.gradient-point-up {
		-webkit-mask: var(--mask-edge-drip-bottom);
		mask: var(--mask-edge-drip-bottom);
		background-image: var(--gradient-2), var(--noise-3);
		height: var(--size-9);
	}
</style>
