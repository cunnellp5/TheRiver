<script lang="ts">
	import * as GenericCard from '$lib/components/ui/shadcn/card';
	import { onMount } from 'svelte';

	let { articles } = $props();
</script>

<section>
	{#each articles as article, i}
		<GenericCard.Root class={i % 2 === 0 ? 'option1' : 'option2'}>
			<a href={article.link} target="_blank" class="articleLink" rel="noopener">
				<div
					class="app-layout articleWrapper"
					style="display: flex; flex-direction: {i % 2 === 0
						? 'row'
						: 'row-reverse'}; justify-content: space-between; align-items: center;">
					<GenericCard.Header class="mobilePad">
						<GenericCard.Title class="funText">
							{article.articleTitle}
						</GenericCard.Title>
						<GenericCard.Description>
							{article.description}
						</GenericCard.Description>
					</GenericCard.Header>
					<GenericCard.Content class="noPadding">
						<img
							class="crop"
							height="600px"
							width="600px"
							loading="lazy"
							src={article.img}
							alt={article.articleTitle} />
					</GenericCard.Content>
				</div>
			</a>
		</GenericCard.Root>
	{/each}
</section>

<style>
	/* CLASSES */
	.articleLink {
		text-decoration: none;
		& img {
			filter: grayscale(80%);
			-webkit-transition: 0.3s ease-in-out;
			transition: 0.3s ease-in-out;
			transition-delay: var(--transition-delay-1);
		}
	}
	.articleLink:hover {
		& img {
			-webkit-transform: scale(1.05);
			transform: scale(1.05);
			filter: grayscale(0);
		}
	}
	@media (max-width: 768px) {
		.articleWrapper {
			display: flex;
			flex-direction: column !important;
			padding-block-end: var(--size-9);
		}
	}
</style>
