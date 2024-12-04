<script lang="ts">
	import Socials from '$lib/components/ui/Socials.svelte';
</script>

<section class="about">
	<h2 class="descriptionHeader gradientHeaders">Music Art Hair Nails</h2>

	<br />
	<p>
		The River is a rising HipHop/R&B artist based in Denver, Colorado.
		<br />
		<br />
		She is a multi-faceted individual who was a marching band nerd and later explored dance, multimedia
		arts, and songwriting.
		<br />
		<br />
		Today you can find her producing music, making clothes, art, and providing beauty services for hair
		and nails.
	</p>

	<div class="aboutGrid">
		<div></div>
		<div class="textCenter placeCenter">
			<a href="/music">
				<button class="circle gradientButtonsTop">
					<p class="rotateToNormal">Listen to my latest tracks</p>
				</button>
			</a>
		</div>
		<div></div>
		<div class="textCenter placeCenter gradient">
			<p class="rotateToNormal">I'm Alexis!</p>
		</div>
		<div class="placeCenter">
			<img
				class="rotateToNormal"
				src="https://res.cloudinary.com/dswpu3qez/image/upload/w_200,c_fill,ar_1:1,g_auto/v1724875596/TheRiver/alexisArticle3_tl91an.webp"
				alt="alexis face" />
		</div>
		<div class="textCenter placeCenter">
			<a href="https://www.etsy.com/shop/TheRiverDesign" target="_blank" rel="noopener">
				<button class="circle gradientButtonsRight">
					<p class="rotateToNormal">Check out my art</p>
				</button>
			</a>
		</div>
		<div></div>
		<div class="textCenter placeCenter">
			<a
				class="nailsLink"
				href="https://the-river-sings.square.site/"
				target="_blank"
				rel="noopener">
				<button class="circle gradientButtonsBottom">
					<p class="rotateToNormal">Book your next hair / nail appt</p>
				</button>
			</a>
		</div>
		<div></div>
	</div>
	<p>Let's <span class="lobster">flow</span> together.</p>
	<div class="socials">
		<Socials />
	</div>
</section>

<style>
	/* ELEMENTS */
	section {
		background-image: radial-gradient(
			circle at center center,
			hsla(98, 36%, 30%, 0.109),
			transparent 75%
		);
		background-size: cover;
	}
	button {
		width: 100%;
		height: 100%;
	}
	.rotateToNormal {
		transform: rotate(-45deg);
	}
	.textCenter {
		text-align: center;
	}
	.textLeft {
		text-align: left;
	}
	.textRight {
		text-align: right;
	}
	.placeCenter {
		place-content: center;
	}
	img {
		border-radius: var(--radius-round);
		/* height: var(--size-8); */
	}
	/* CLASSES */
	.lobster {
		color: var(--link);
		font-family: 'Lobster', cursive;
	}
	/* .beauty, */
	.about {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--size-2);
		padding-block: var(--size-content-1);
		& p {
			/* font-style: normal; */
			font-weight: 400;
			font-size: var(--font-size-3);
			/* line-height: var(--font-lineheight-4); */
			font-family: 'Ambit Light';
			/* text-align: center; */
			text-transform: none;
		}
		/* & button {
			min-width: var(--size-content-1);
		} */
	}

	.aboutGrid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		transform: rotate(45deg);
		/* gap: var(--size-5); */
		margin-block: var(--size-8);
		/* color: var(--link); */
		/* width: 100%; */
		& div {
			/* place-content: center; */
			place-items: center;
			border-radius: var(--border-radius-1);
			width: 250px;
			height: 250px;
		}
	}

	.gradientButtonsRight {
		background: linear-gradient(to right, var(--surface-3), var(--surface-1)) padding-box;
	}
	.gradientButtonsLeft {
		background: linear-gradient(to Left, var(--surface-3), var(--surface-1)) padding-box;
	}
	.gradientButtonsBottom {
		background: linear-gradient(to bottom, var(--surface-3), var(--surface-1)) padding-box;
	}
	.gradientButtonsTop {
		background: linear-gradient(to top, var(--surface-3), var(--surface-1)) padding-box;
	}

	.gradient {
		border: 1px solid transparent;
		background:
			linear-gradient(to left, var(--surface-3), var(--surface-1)) padding-box,
			conic-gradient(from var(--bg-angle) in oklch longer hue, oklch(0.85 0.37 0) 0 0) border-box;
	}

	.circle {
		border-radius: var(--radius-3);
	}
	/* IDS */

	@media (max-width: 768px) {
		/* .beauty, */
		.about {
			padding-block: var(--size-9);
		}
		.descriptionHeader {
			font-size: var(--size-8);
		}
	}
</style>
