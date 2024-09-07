<script lang="ts">
	import Etsy from '$lib/components/svgs/socials/Etsy.svelte';
	import Facebook from '$lib/components/svgs/socials/Facebook.svelte';
	import Instagram from '$lib/components/svgs/socials/Instagram.svelte';
	import LinkTree from '$lib/components/svgs/socials/LinkTree.svelte';
	import Spotify from '$lib/components/svgs/socials/Spotify.svelte';
	import Youtube from '$lib/components/svgs/socials/Youtube.svelte';
	import socialLinks from '$lib/data/socialLinks';

	let components = [
		{ name: 'Facebook', SVGComponent: Facebook, link: socialLinks.facebook },
		{ name: 'Youtube', SVGComponent: Youtube, link: socialLinks.youtube },
		{ name: 'Instagram', SVGComponent: Instagram, link: socialLinks.instagramSing },
		{ name: 'Spotify', SVGComponent: Spotify, link: socialLinks.spotify },
		{ name: 'Etsy', SVGComponent: Etsy, link: socialLinks.etsy },
		{ name: 'LinkTree', SVGComponent: LinkTree, link: socialLinks.linkTree }
	];
</script>

<ul>
	{#each components as { name, SVGComponent, link }}
		<a class="socials" href={link} target="_blank" rel="noopener">
			<li>
				<SVGComponent />
			</li>
		</a>
	{/each}
</ul>

<style>
	/* ELEMENTS */
	ul {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		padding-inline: 0;
	}
	a {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-inline: var(--size-2);
		border: 0px solid var(--gray-9);
		aspect-ratio: 1 / 1;
		min-width: var(--size-8);
	}
	a:hover {
		cursor: pointer;
	}
	/* CLASSES */
	.socials {
		fill: var(--socials-2);
		transition:
			fill 0.2s ease,
			border 0.2s ease;
	}
	.socials:hover {
		fill: var(--link);
		border: 3px solid var(--link);
	}
	/* QUERIES */
	@media (max-width: 768px) {
		a {
			flex-basis: calc(33% - var(--size-2) * 3);
			min-width: var(--size-7);
		}
	}
</style>
