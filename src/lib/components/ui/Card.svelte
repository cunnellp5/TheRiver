<script lang="ts">
	import SkeletonText from '$lib/components/ui/skeletons/SkeletonText.svelte';
	import SkeletonImg from '$lib/components/ui/skeletons/SkeletonImg.svelte';

	export let articleImage;
	export let articleTitle;
	export let message;
	export let link;
</script>

<div class="card">
	<figure>
		<figure>
			{#if articleImage}
				<img class="skeleton" src={articleImage} alt={articleTitle} />
			{:else}
				<SkeletonImg />
			{/if}
		</figure>
	</figure>
	<div class="contentWrapper">
		<h5 class="title" data-title>
			{#if articleTitle}
				{articleTitle}
			{:else}
				<SkeletonText title={true} />
			{/if}
		</h5>
		<div data-message>
			{#if message}
				<p>{message}</p>
			{:else}
				<SkeletonText />
				<SkeletonText />
			{/if}
		</div>
		{#if link}
			<a data-link href={link}>{articleTitle}</a>
		{:else}
			<SkeletonText short={true} />
		{/if}
	</div>
	<div>
		<slot class="buttons" name="buttons"></slot>
	</div>
</div>

<style>
	.card {
		display: flex;
		flex: 1 1 var(--size-14);
		flex-direction: column;
		gap: var(--size-3);
		transition:
			flex-grow 0.5s ease,
			flex-shrink 0.5s ease;
		box-shadow: var(--shadow-1);
		padding: var(--size-4);
	}

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

	.buttons {
		display: flex;
		flex-direction: column;
	}
</style>
