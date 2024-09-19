<script lang="ts">
	import Seo from '$lib/components/SEO.svelte';
	// control the iframe: https://developers.google.com/youtube/iframe_api_reference
	// carousel: https://www.shadcn-svelte.com/docs/components/carousel
	import * as Card from '$lib/components/ui/shadcn/card';
	import * as Carousel from '$lib/components/ui/shadcn/carousel';

	export let data;
	const { videos } = data;
	// const YOUTUBE_BASE_EMBED_URL = 'https://www.youtube.com/embed/';
</script>

<!-- TODO make video specific description -->
<Seo
	title={'Watch Exclusive Music Videos by The River | Alexis'}
	description={"Explore The River's captivating music videos. Watch her latest visual masterpieces and experience the fusion of music and artistry."} />

<div class="carousel-wrapper">
	<Carousel.Root>
		<Carousel.Content>
			{#each videos as video, i (i)}
				<Carousel.Item>
					<!-- svelte-ignore a11y-missing-attribute -->
					<a class="is-snapped-anchor" target="_blank" data-id={video.videoId} rel="noopener">
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
<div class="small-screen">
	{#each videos as video, i (i)}
		<!-- svelte-ignore a11y-missing-attribute -->
		<a
			class="is-snapped-anchor"
			target="_blank"
			rel="noopener"
			href={'https://www.youtube.com/watch?v=' + video.videoId}>
			<img src={video.thumbnail} alt={video.title} class="thumbnail" />
			<label for="img">{video.title}</label>
		</a>
	{/each}
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
		transition: color 0.3s ease;
		color: var(--text-2);
		font-size: var(--font-size-1);
	}
	a {
		text-align: center;
	}
	a:hover {
		text-decoration: none;
		& label {
			color: var(--link);
		}
	}

	/* CLASSES */
	.carousel-wrapper {
		margin-block: var(--size-4);
		padding-block: var(--size-4);
	}
	.carousel-button-wrapper {
		display: flex;
		justify-content: center;
		gap: var(--size-4);
		margin-inline-end: var(--size-2);
		margin-block: var(--size-4);
	}
	.small-screen {
		display: none;
	}

	@media (max-width: 768px) {
		.small-screen {
			display: grid;
			grid-template-columns: repeat(auto-fill, minmax(var(--size-content-4), 1fr));
			gap: var(--size-4);
			margin-block: var(--size-4);
			padding-inline: var(--size-4);
		}
		.carousel-wrapper {
			display: none;
		}
	}
</style>
