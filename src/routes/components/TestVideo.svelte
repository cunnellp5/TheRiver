<main>
	<article class="gallery">
		<img
			src="https://assets.codepen.io/1506195/unsplash-music-0.avif"
			alt="guitar player at concert" />
		<img src="https://assets.codepen.io/1506195/unsplash-music-1.avif" alt="duo singing" />
		<img src="https://assets.codepen.io/1506195/unsplash-music-2.avif" alt="crowd cheering" />
		<img src="https://assets.codepen.io/1506195/unsplash-music-3.avif" alt="singer performing" />
		<iframe
			width="560"
			height="315"
			src="https://www.youtube-nocookie.com/embed/oWPTJSC0qJU?si=BDXlYQ5voEemMnhN&amp;controls=0"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
			referrerpolicy="strict-origin-when-cross-origin"
			allowfullscreen>
		</iframe>
	</article>
</main>

<style>
	main {
		display: grid;
		place-items: center;
		margin: 0;
		min-height: 100vh;
	}

	img {
		border-radius: 0;
	}

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

	.gallery > img,
	.gallery > iframe {
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

	.gallery img:hover,
	.gallery iframe:hover {
		filter: grayscale(0);
		width: calc(100vh * var(--f) / var(--n));
		height: calc(100vw * var(--f) / var(--m));
	}

	@media (max-width: 768px) {
		.gallery {
			grid-template-columns: auto;
		}

		.gallery > img,
		.gallery > iframe {
			grid-column: auto / span 4;
		}
	}
</style>
