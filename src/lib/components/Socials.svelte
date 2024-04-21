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
	<li class="socials"><Facebook /></li>
	<li class="socials"><Youtube /></li>
	<li class="socials"><Instagram /></li>
	<li class="logo-link">
		<a href="/">
			<LogoR />
		</a>
	</li>
	<li class="socials"><LinkTree /></li>
	<li class="socials"><Spotify /></li>
	<li class="socials"><Etsy /></li>
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
		align-items: center;
		border: 0px solid var(--gray-9);
		justify-content: center;
		margin-inline: var(--size-1);
		width: var(--size-8);
	}

	li:hover {
		cursor: pointer;
	}

	.logo-link {
		border: none;
		width: var(--size-8);
		& path {
			/* fill: var(--indigo-4); */
			transition: fill 0.9s ease;
		}
		& #border {
			opacity: 0;
			transition: opacity 0.9s ease;
		}
	}

	.logo-link:hover {
		& path {
			fill: var(--link);
			border: 0.1px solid var(--link);
		}
		& #border {
			opacity: 1;
		}
	}

	/* social links */
	.socials {
		/* background-color: var(--stone-10); */
		fill: var(--socials-2);
		transition:
			fill 0.9s ease,
			border 0.6s ease;
	}

	.socials:hover {
		fill: var(--link);
		border: 3px solid var(--link);
	}
</style>
