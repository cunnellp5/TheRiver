<script lang="ts">
	import Spotify from '$lib/components/svgs/socials/Spotify.svelte';
	import Etsy from '$lib/components/svgs/socials/Etsy.svelte';
	import LinkTree from '$lib/components/svgs/socials/LinkTree.svelte';
	import Facebook from '$lib/components/svgs/socials/Facebook.svelte';
	import Instagram from '$lib/components/svgs/socials/Instagram.svelte';
	import Youtube from '$lib/components/svgs/socials/Youtube.svelte';
</script>

<ul>
	<li><Facebook /></li>
	<li><Youtube /></li>
	<li><Instagram /></li>
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
		margin-inline: var(--size-1);
	}

	li:hover {
		cursor: pointer;
	}
</style>
