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
	/* ELEMENTS */
	section {
		/* filter: var(--noise-filter-1); */
		background-image: radial-gradient(
				circle at center center,
				hsla(330, 80%, 35%, 0.109),
				hsla(0, 0%, 0%, 0)
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
