<script lang="ts">
	import Facebook from 'lucide-svelte/icons/facebook';
	import Instagram from 'lucide-svelte/icons/instagram';
	// import Spotify from 'lucide-svelte/icons/spotify';
	import Youtube from 'lucide-svelte/icons/youtube';
</script>

<ul>
	<li>etsy</li>
	<li><Facebook /></li>
	<li><Instagram /></li>
	<li>linktr.ee</li>
	<li>spotify</li>
	<li><Youtube /></li>
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
</style>
