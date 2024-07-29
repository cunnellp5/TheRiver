<script lang="ts">
	// TODO
	// 1. put src logic on the backend
	// 2. consider a carousel for the videos
	// 3. add logic to stop playing all videos when carousel advances
	// 4. consider logic for full screen viewing of video such that the user has to explicitly exit the full screen mode

	export let data;

	function removeEscapeCharacters(str: string): string {
		return str.replace(/[\n\t\r\b\f\v\\]/g, '');
	}

	function extractSrcFromIframe(iframe: string): string | null {
		const match = iframe.match(/src="([^"]*)"/);
		return match ? match[1] : null;
	}

	const iframes = data.videos.map((video) => removeEscapeCharacters(video));
	const srcs = iframes.map((iframe) => extractSrcFromIframe(iframe));
</script>

<div class="grid-container">
	<div class="videos">
		{#each srcs as src}
			{#if src}
				<div class="iframe">
					<iframe
						width="100%"
						height="315"
						{src}
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
						referrerpolicy="strict-origin-when-cross-origin"
						allowfullscreen>
					</iframe>
				</div>
			{/if}
		{/each}
	</div>
</div>

<style>
	/* ELEMENTS */

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
