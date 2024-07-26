<script lang="ts">
	import Producers from './Producers.svelte';

	export let data;
	const { tracks } = data;
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
		<div id="tracks" class="tracks">
			{#each tracks as track}
				<iframe
					title={track.title}
					src={track.url}
					width="100%"
					height="300"
					scrolling="no"
					frameborder="no"
					allow="autoplay">
				</iframe>
			{/each}
		</div>
		<div id="producers"><Producers /></div>
		<div class="gradient-point-up"></div>
	</main>
</div>

<style>
	/* ELEMENTS */
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
	iframe {
		box-shadow: var(--shadow-1);
		width: 100%;
		min-width: var(--size-content-1);
		height: var(--size-content-2);
	}

	/* CLASSES */
	.grid-container {
		display: grid;
	}
	.sidenav {
		display: grid;
		position: sticky;
		top: 0;
		grid-column: 1;
		padding: var(--size-3);
		height: var(--size-14);
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
		letter-spacing: var(--font-letterspacing-2);
		text-decoration: none;
		text-transform: uppercase;
	}
	.sidenav a:hover {
		color: var(--link);
	}

	.videos {
		background-image: var(--gradient-1), var(--noise-3);
		width: 100%;
		height: 100vh;
	}

	.tracks {
		display: grid;
		grid-template-columns: repeat(3, 1fr); /* 3 columns */
		grid-auto-rows: minmax(100px, auto); /* Set a base row height */
		gap: var(--size-7);
	}

	.gradient-point-up {
		-webkit-mask: var(--mask-edge-drip-bottom);
		mask: var(--mask-edge-drip-bottom);
		background-image: var(--gradient-2), var(--noise-3);
		height: var(--size-9);
	}

	/* MEDIA QUERIES */
	@media (max-width: 1440px) {
		.sidenav {
			display: none;
		}
		.tracks {
			grid-template-columns: repeat(2, 1fr); /* 2 columns */
		}
	}
	@media (max-width: 768px) {
		.tracks {
			grid-template-columns: repeat(1, 1fr); /* 1 column */
		}
	}
</style>
