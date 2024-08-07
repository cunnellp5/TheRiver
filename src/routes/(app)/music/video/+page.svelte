<script lang="ts">
	// control the iframe: https://developers.google.com/youtube/iframe_api_reference
	// carousel: https://www.shadcn-svelte.com/docs/components/carousel
	import * as Card from '$lib/components/ui/shadcn/card';
	import * as Carousel from '$lib/components/ui/shadcn/carousel';

	export let data;

	const { videos } = data;

	const YOUTUBE_BASE_EMBED_URL = 'https://www.youtube.com/embed/';
</script>

<div class="w-full">
	<Carousel.Root>
		<Carousel.Content>
			{#each videos as video, i (i)}
				<Carousel.Item>
					<Card.Root>
						<Card.Content>
							<span class="text-4xl font-semibold">{i + 1}</span>
							<a href={`${YOUTUBE_BASE_EMBED_URL}${video.videoId}`}>
								<img src={video.thumbnail} alt={video.title} />
								<label for="img">{video.title}</label>
							</a>
						</Card.Content>
					</Card.Root>
				</Carousel.Item>
			{/each}
		</Carousel.Content>
		<Carousel.Previous />
		<Carousel.Next />
	</Carousel.Root>
</div>

<style>
	/* ELEMENTS */
	img {
		cursor: pointer;
		border-radius: var(--radius-2);
	}
	label {
		font-size: var(--font-size-0);
	}
	a {
		text-align: center;
	}

	/* CLASSES */
	.w-full {
		display: flex;
		justify-content: center;
		/* width: 100%; */
		/* max-width: var(--size-content-2); */
	}
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
