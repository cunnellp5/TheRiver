<script lang="ts">
	import { onMount } from 'svelte';
	import TRACKS_FEATURED from './TRACKS_FEATURED';
	import { IFrameLoader } from '$lib/utils/classes/IFrameLoader';

	onMount(() => {
		const iframes = document.querySelectorAll('iframe');
		new IFrameLoader().loadIframesInChunks(iframes, 0);
	});
</script>

<section class="app-layout">
	<div class="title">
		<h2>Out The Mud</h2>
		<time datetime="2024-10-08">Oct 08 2024</time>
	</div>
	<div class="tracksGrid">
		{#each TRACKS_FEATURED as track}
			<div>
				<iframe
					title="out the mud track 1"
					width={track.width}
					height={track.height}
					scrolling="no"
					frameborder="no"
					allow="autoplay"
					loading="lazy"
					data-src={track.iframeUrl}>
				</iframe>
				<div
					style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;">
					<a
						href="https://soundcloud.com/theriversings"
						title="THE RIVER"
						target="_blank"
						style="color: #cccccc; text-decoration: none;">THE RIVER</a>
					·
					<a
						href={track.soundCloudUrl}
						title={track.title}
						target="_blank"
						style="color: #cccccc; text-decoration: none;">
						{@html track.title}
					</a>
				</div>
			</div>
		{/each}
	</div>

	<div class="social-links">
		<a
			href="https://distrokid.com/hyperfollow/theriver2/out-the-mud-volume-1"
			target="_blank"
			rel="noopener">
			<button class="create-button"> Distrokid </button>
		</a>
		<a href="https://open.spotify.com/album/2Yul2PrAV82Wuz12OFQq5o" target="_blank" rel="noopener">
			<button class="create-button"> Spotify </button>
		</a>
		<a
			href="https://www.youtube.com/watch?v=J4uGlJrJK4k&list=OLAK5uy_mtKwMq4QfzLVQLmFp4vGa3WOCm2ZVxYQE"
			target="_blank"
			rel="noopener">
			<button class="create-button"> YouTube </button>
		</a>
	</div>
</section>

<style>
	section,
	.title {
		margin-block: var(--size-7);
		width: 100%;
	}
	.social-links {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: var(--size-3);
		margin-block: var(--size-7);
	}
	.tracksGrid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: var(--size-7);
	}
	.tracksGrid div:first-child {
		grid-row: span 2;
	}
	@media (max-width: 768px) {
		.tracksGrid {
			grid-template-columns: repeat(1, 1fr);
		}
		.social-links {
			flex-direction: column;
		}
		.social-links a,
		.social-links button {
			width: 100%;
		}
	}
</style>
