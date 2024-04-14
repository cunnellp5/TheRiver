<script lang="ts">
	import Etsy from '$lib/components/svgs/socials/Etsy.svelte';
	import Facebook from '$lib/components/svgs/socials/Facebook.svelte';
	import Instagram from '$lib/components/svgs/socials/Instagram.svelte';
	import LinkTree from '$lib/components/svgs/socials/LinkTree.svelte';
	import Spotify from '$lib/components/svgs/socials/Spotify.svelte';
	import Youtube from '$lib/components/svgs/socials/Youtube.svelte';
	import LogoR from '$lib/components/svgs/logos/LogoR2.svelte';
</script>

<ul>
	<li><Facebook /></li>
	<li><Youtube /></li>
	<li><Instagram /></li>
	<li class="logo-link">
		<a href="/">
			<LogoR />
		</a>
	</li>
	<li><LinkTree /></li>
	<li><Spotify /></li>
	<li><Etsy /></li>
</ul>

<style>
	ul {
		display: flex;
		justify-content: center;
		list-style: none;
		padding-inline: 0;
	}

	li {
		display: flex;
		margin-inline: var(--size-1);
		border: 1px solid var(--gray-9);
		justify-content: center;
		align-items: center;
		border-radius: var(--radius-round);
		width: var(--size-8);
	}

	li:hover {
		cursor: pointer;
	}

	.logo-link {
		border: none;
		width: var(--size-8);
		& path {
			fill: var(--indigo-4);
		}
	}
</style>
