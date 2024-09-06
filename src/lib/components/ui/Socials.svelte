<script lang="ts">
	import Etsy from '$lib/components/svgs/socials/Etsy.svelte';
	import Facebook from '$lib/components/svgs/socials/Facebook.svelte';
	import Instagram from '$lib/components/svgs/socials/Instagram.svelte';
	import LinkTree from '$lib/components/svgs/socials/LinkTree.svelte';
	import Spotify from '$lib/components/svgs/socials/Spotify.svelte';
	import Youtube from '$lib/components/svgs/socials/Youtube.svelte';
	import socialLinks from '$lib/data/socialLinks';
</script>

<ul>
	<a class="socials" href={socialLinks.facebook} target="_blank" rel="noopener">
		<li><Facebook /></li>
	</a>
	<a class="socials" href={socialLinks.youtube} target="_blank" rel="noopener">
		<li><Youtube /></li>
	</a>
	<a class="socials" href={socialLinks.instagramSing} target="_blank" rel="noopener">
		<li><Instagram /></li>
	</a>
	<a class="socials" href={socialLinks.spotify} target="_blank" rel="noopener">
		<li><Spotify /></li>
	</a>
	<a class="socials" href={socialLinks.etsy} target="_blank" rel="noopener">
		<li><Etsy /></li>
	</a>
	<a class="socials" href={socialLinks.linkTree} target="_blank" rel="noopener">
		<li><LinkTree /></li>
	</a>
</ul>

<style>
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

	/* social links */
	.socials {
		fill: var(--socials-2);
		transition:
			fill 0.9s ease,
			border 0.6s ease;
	}

	.socials:hover {
		fill: var(--link);
		border: 3px solid var(--link);
	}

	@media (max-width: 768px) {
		a {
			flex-basis: calc(33% - var(--size-2) * 3);
		}
	}
</style>
