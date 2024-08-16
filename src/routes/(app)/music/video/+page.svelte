<script lang="ts">
	// control the iframe: https://developers.google.com/youtube/iframe_api_reference
	// carousel: https://www.shadcn-svelte.com/docs/components/carousel
	import * as Card from '$lib/components/ui/shadcn/card';
	import * as Carousel from '$lib/components/ui/shadcn/carousel';

	export let data;

	const { videos } = data;

	// const YOUTUBE_BASE_EMBED_URL = 'https://www.youtube.com/embed/';
</script>

<div class="carousel-wrapper">
	<Carousel.Root>
		<Carousel.Content>
			{#each videos as video, i (i)}
				<Carousel.Item>
					<!-- svelte-ignore a11y-missing-attribute -->
					<a class="is-snapped-anchor" target="_blank" data-id={video.videoId}>
						<Card.Root>
							<Card.Content>
								<img src={video.thumbnail} alt={video.title} class="thumbnail" />
							</Card.Content>
							<Card.Footer>
								<label for="img">{video.title}</label>
							</Card.Footer>
						</Card.Root>
					</a>
				</Carousel.Item>
			{/each}
		</Carousel.Content>
		<div class="carousel-button-wrapper">
			<Carousel.Previous />
			<Carousel.Next />
		</div>
	</Carousel.Root>
</div>

<style>
	/* ELEMENTS */
	img {
		cursor: pointer;
		margin-block-start: var(--size-6);
		border-radius: var(--radius-2);
		width: var(--size-content-4);
		height: var(--size-content-2);
		object-fit: cover;
		pointer-events: none;
	}
	label {
		color: var(--text-2);
		font-size: var(--font-size-1);
	}
	a {
		text-align: center;
	}

	/* CLASSES */
	.carousel-wrapper {
		margin-block: var(--size-4);
		/* border: 1px solid red; */
		padding-block: var(--size-4);
	}
	.carousel-button-wrapper {
		display: flex;
		justify-content: end;
		gap: var(--size-4);
		margin-inline-end: var(--size-2);
		margin-block: var(--size-4);
	}
	/* CLASSES */
	/* .w-full { */
	/* display: flex; */
	/* justify-content: center; */
	/* width: 100%; */
	/* max-width: var(--size-content-2); */
	/* } */
	/* .grid-container {
		margin-block: var(--size-7);
	}
	.videos {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-auto-rows: minmax(200px, auto);
		gap: var(--size-7);
	}

	@media (max-width: 1440px) {
		.videos {
			grid-template-columns: repeat(2, 1fr);
		}
	}
	@media (max-width: 768px) {
		.videos {
			grid-template-columns: repeat(1, 1fr);
		}
	} */
</style>
