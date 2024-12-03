<section class="beauty">
	<h2 class="descriptionHeader gradientHeaders">Merch</h2>
	<p>Get some.</p>
	<a
		class="hairLink"
		href="https://www.etsy.com/shop/TheRiverDesign"
		target="_blank"
		rel="noopener">
		<button class="primary">Etsy</button>
	</a>
</section>

<style>
	/* TODO just make this a component if im going to use it one more time somewhere */
	/* ELEMENTS */
	button {
		animation: spin 2.5s infinite linear paused;
		box-shadow:
			var(--shadow-2),
			0 0px var(--surface-3),
			0 0 0 var(--_highlight-size) var(--_highlight);
		border: 1px solid transparent;
		background-color: unset;
		background:
			linear-gradient(to bottom, #222, #111) padding-box,
			conic-gradient(from var(--bg-angle) in oklch longer hue, oklch(0.85 0.37 0) 0 0) border-box; /* extends to outer border edges */
		min-width: var(--size-content-1);
		color: var(--stone-1);
		font-weight: var(--font-weight-6);
		&:hover {
			animation-play-state: running;
		}
	}

	@property --bg-angle {
		inherits: false;
		initial-value: 0deg;
		syntax: '<angle>';
	}

	@keyframes spin {
		to {
			--bg-angle: 360deg;
		}
	}

	section {
		/* filter: var(--noise-filter-1); */
		background-image: radial-gradient(
				ellipse at center center,
				hsla(330, 80%, 35%, 0.109),
				transparent 75%
			),
			var(--noise-2);
		background-size: cover;
	}
	/* CLASSES */
	/* .about, */
	.beauty {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--size-5);
		padding-block: var(--size-content-1);
		& p {
			font-style: normal;
			font-weight: 400;
			font-size: var(--font-size-3);
			line-height: var(--font-lineheight-4);
			font-family: 'Ambit Light';
			text-align: center;
			text-transform: none;
		}
		& button {
			min-width: var(--size-content-1);
		}
	}

	@media (max-width: 768px) {
		/* .about, */
		.beauty {
			padding-block: var(--size-9);
		}
		.descriptionHeader {
			font-size: var(--size-8);
		}
	}
</style>
