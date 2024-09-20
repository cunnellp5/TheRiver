<main>
	<article class="gallery">
		<img
			src="https://res.cloudinary.com/dswpu3qez/image/upload/f_auto/q_auto:eco/TheRiver/AlexisWater1_ji0grg.webp"
			alt="Water model" />
		<img
			src="https://res.cloudinary.com/dswpu3qez/image/upload/f_auto/q_auto:eco/TheRiver/alexismodel1_va2axz.webp"
			alt="fifth element model" />
		<img
			src="https://res.cloudinary.com/dswpu3qez/image/upload/f_auto/q_auto:eco/TheRiver/alexis_blue_h6x97p.webp"
			alt="holding comb model" />
		<img
			src="https://res.cloudinary.com/dswpu3qez/image/upload/f_auto/q_auto:eco/TheRiver/alexisSing_mmyxg6.webp"
			alt="singing blue background" />
		<img
			src="https://res.cloudinary.com/dswpu3qez/image/upload/f_auto/q_auto:eco/TheRiver/alexisArticle2_iqx8vk.webp"
			alt="sitting on yellow floor" />
	</article>
</main>

<style>
	/* ELEMENTS */
	main {
		display: grid;
		place-items: center;
		margin: 0;
		min-height: 100vh;
	}
	img {
		border-radius: 0;
	}
	/* CLASSES */
	.gallery {
		--n: 1; /* number of rows*/
		--m: 5; /* number of columns */
		--g: 0px; /* control the gap */
		--f: 0.8; /* control the scale factor */
		display: grid;
		grid-template-columns: repeat(var(--m), auto);
		gap: var(--g);
		width: 100%;
		height: 100vh;
	}
	.gallery > img {
		filter: grayscale(80%);
		transition: 0.7s linear;
		transition-delay: var(--transition-delay-2);
		transition-timing-function: cubic-bezier(0.14, 0.8, 0.3, 1);
		cursor: pointer;
		width: 0;
		min-width: 100%;
		height: 0;
		min-height: 100%;
		object-fit: cover;
	}
	.gallery img:hover {
		filter: grayscale(0);
		width: calc(100vh * var(--f) / var(--n));
		height: calc(100vw * var(--f) / var(--m));
	}
	/* QUERIES */
	@media (max-width: 768px) {
		.gallery {
			grid-template-columns: auto;
		}
		.gallery > img {
			grid-column: auto / span 4;
			object-position: center 25%; /* Move the center of the image down */
		}
		.gallery img:hover {
			height: calc(100vw * var(--f) * 4 / var(--m));
		}
	}
</style>
