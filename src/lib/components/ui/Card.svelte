<script lang="ts">
	import SkeletonText from '$lib/components/ui/skeletons/SkeletonText.svelte';
	import SkeletonImg from '$lib/components/ui/skeletons/SkeletonImg.svelte';

	export let articleImage;
	export let articleTitle;
	export let message;
	export let link;
</script>

<div class="card">
	<a href={link}>
		<figure>
			<div class="imageWrapper">
				{#if articleImage}
					<img class="skeleton" src={articleImage} alt={articleTitle} />
					<p class="overlayTitle">{articleTitle}</p>
				{:else}
					<SkeletonImg />
				{/if}
			</div>
		</figure>
		<div class="contentWrapper">
			<!-- <h5 class="title" data-title>
				{#if articleTitle}
					{articleTitle}
				{:else}
					<SkeletonText title={true} />
				{/if}
			</h5> -->
			<div data-message>
				{#if message}
					<p>{message}</p>
				{:else}
					<SkeletonText />
					<SkeletonText />
				{/if}
			</div>
			<div class="link-wrapper">
				{#if link}
					<p data-link class="credits">{articleTitle}</p>
				{:else}
					<SkeletonText short={true} />
				{/if}
			</div>
		</div>
		<div>
			<slot class="buttons" name="buttons"></slot>
		</div>
	</a>
</div>

<!-- 
background: var(--gradient-1) fixed;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text; -->

<style>
	a {
		color: var(--link);
		font-size: var(--font-size-0);
		text-decoration: none;
	}

	p {
		margin-block: var(--size-3);
		color: var(--text-2);
		font-size: var(--font-size-1);
	}

	figure {
		border-radius: var(--radius-2);
	}

	img {
		-webkit-transform: scale(1);
		transform: scale(1);
		-webkit-transition: 0.3s ease-in-out;
		transition: 0.3s ease-in-out;
		transition-delay: var(--transition-delay-1);
		border-radius: 0;
		aspect-ratio: var(--ratio-square);
		object-fit: cover;
	}

	img:hover {
		-webkit-transform: scale(1.05);
		transform: scale(1.05);
	}

	figure {
		margin: 0;
		padding: 0;
		overflow: hidden;
	}

	.credits {
		color: var(--link);
		font-size: var(--font-size-0);
	}
	.imageWrapper {
		position: relative;
		width: 100%;
		height: auto;
	}
	.link-wrapper {
		display: flex;
		justify-content: flex-end;
	}
	.card {
		display: flex;
		position: relative;
		flex: 1 1 var(--size-14);
		flex-direction: column;
		gap: var(--size-3);
		transition:
			flex-grow 0.5s ease,
			flex-shrink 0.5s ease;
		/* margin-inline: var(--size-5); */
		/* margin: var(--size-5); */
		box-shadow: var(--shadow-1);
		background: var(--surface-3);
		padding: var(--size-5);
	}
	.card:hover {
		-webkit-transition: 0.3s ease-in-out;
		transition: 0.3s ease-in-out;
		transition-delay: var(--transition-delay-1);
		box-shadow: var(--shadow-2);
	}
	.buttons {
		display: flex;
		flex-direction: column;
	}
	.overlayTitle {
		position: absolute;
		bottom: 0;
		/* transform: rotate(2deg); */
		background-color: rgba(181, 81, 81, 0.9);
		padding: var(--size-1);
		color: white;
		font-weight: var(--font-weight-7);
		font-size: var(--size-4);
	}
</style>
