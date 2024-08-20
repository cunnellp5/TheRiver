<script lang="ts">
	import Etsy from '$lib/components/svgs/socials/Etsy.svelte';
	import Facebook from '$lib/components/svgs/socials/Facebook.svelte';
	import Instagram from '$lib/components/svgs/socials/Instagram.svelte';
	import LinkTree from '$lib/components/svgs/socials/LinkTree.svelte';
	import Spotify from '$lib/components/svgs/socials/Spotify.svelte';
	import Youtube from '$lib/components/svgs/socials/Youtube.svelte';
	import LogoR from '$lib/components/svgs/logos/LogoR2.svelte';
	import socialLinks from '$lib/data/socialLinks';
</script>

<ul>
	<li class="logo-link">
		<a href="/">
			<LogoR />
		</a>
	</li>
	<a class="socials" href={socialLinks.facebook} target="_blank">
		<li><Facebook /></li>
	</a>
	<a class="socials" href={socialLinks.instagram} target="_blank">
		<li><Youtube /></li>
	</a>
	<a class="socials" href={socialLinks.instagram} target="_blank">
		<li><Instagram /></li>
	</a>
	<a class="socials" href={socialLinks.linkTree} target="_blank">
		<li><LinkTree /></li>
	</a>
	<a class="socials" href={socialLinks.spotify} target="_blank">
		<li><Spotify /></li>
	</a>
	<a class="socials" href={socialLinks.etsy} target="_blank">
		<li><Etsy /></li>
	</a>
</ul>

<style>
	ul {
		display: flex;
		flex-direction: column;
		/* flex-wrap: wrap; */
		padding-inline: 0;
		/* width: 100%; */
		/* list-style: none; */
	}

	a {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-inline: var(--size-1);
		border: 0px solid var(--gray-9);
		width: var(--size-8);
	}

	a:hover {
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

	@media (max-width: 600px) {
		.logo-link {
			font-size: 20%;
		}
	}
</style>
