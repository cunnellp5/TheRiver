<script lang="ts">
	import Socials from './Socials.svelte';
	import ToggleTheme from './ToggleTheme.svelte';
	import LogoWhite from '$lib/components/svgs/logos/LogoWhite.svelte';
</script>

<footer>
	<div class="footer-first">
		<ul>
			<p>Socials</p>
			<li>https://www.facebook.com/theriversings</li>
			<li>https://www.instagram.com/the.river.sings/</li>
			<li>https://www.tiktok.com/@theriversings</li>
			<li>https://x.com/the_river_sings</li>
			<br />
			<p>Music</p>
			<li>https://www.youtube.com/c/TheRiverSings</li>
			<li>https://soundcloud.com/theriversings</li>
			<li>https://open.spotify.com/artist/5zNnchh2RwfMl1iCs8JRPV</li>

			<br />
			<p>Extended Plays [EP]</p>
			<li>https://distrokid.com/hyperfollow/theriver2/vaguely-relatable-ep</li>

			<br />
			<p>Merch</p>
			<li>https://www.etsy.com/shop/MadeByTheRiverBed</li>

			<br />
			<p>Ca$h app</p>
			<li>https://cash.app/$theriversings</li>

			<br />
			<p>LinkTree</p>
			<li>https://linktr.ee/theriversings</li>
		</ul>
	</div>

	<div class="footer-middle">
		<Socials />
	</div>

	<div class="toggler">
		<ToggleTheme />
	</div>
</footer>

<style>
	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding-block: var(--size-7);
		margin-block: var(--size-10);
		border-top: 1px solid var(--border);
		gap: var(--size-7);
	}

	div {
		display: flex;
		align-items: center;
	}

	li {
		font-size: var(--font-size-0);
	}

	.footer-first {
		justify-content: center;
	}

	.toggler {
		justify-content: center;
	}

	.footer-middle {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	@media (min-width: 768px) {
		footer {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
			flex-direction: row;
			justify-content: space-between;
			padding-block: var(--size-7);
			border-top: 1px solid var(--border);
		}
		.toggler {
			justify-content: end;
		}
		.footer-first {
			justify-content: start;
		}
		/* .logo-svg {
			width: var(--size-11);
		} */
	}
</style>
