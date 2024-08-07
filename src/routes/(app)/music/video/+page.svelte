<script lang="ts">
	// control the iframe: https://developers.google.com/youtube/iframe_api_reference
	// carousel: https://www.shadcn-svelte.com/docs/components/carousel
	export let data;

	const { videos } = data;

	const YOUTUBE_BASE_EMBED_URL = 'https://www.youtube.com/embed/';
</script>

<div class="grid-container">
	<div class="videos">
		{#each videos as video}
			{#if video}
				<!-- <button
					type="button"
					on:click={() => {
						showModal = true;
					}}> -->
				<a href={`${YOUTUBE_BASE_EMBED_URL}${video.videoId}`}>
					<img src={video.thumbnail} alt={video.title} />
					<label for="img">{video.title}</label>
				</a>
				<!-- </button> -->
			{/if}
		{/each}
	</div>
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
	.grid-container {
		margin-block: var(--size-7);
	}
	.videos {
		display: grid;
		grid-template-columns: repeat(3, 1fr); /* 3 columns */
		grid-auto-rows: minmax(200px, auto); /* Set a base row height */
		gap: var(--size-7);
	}

	/* MEDIA QUERIES */
	@media (max-width: 1440px) {
		.videos {
			grid-template-columns: repeat(2, 1fr); /* 2 columns */
		}
	}
	@media (max-width: 768px) {
		.videos {
			grid-template-columns: repeat(1, 1fr); /* 1 column */
		}
	}
</style>
