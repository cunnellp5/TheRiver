<script lang="ts">
	import LogoWhite from '$lib/components/svgs/logos/LogoWhite.svelte';
	import Socials from './Socials.svelte';
	import ToggleTheme from './ToggleTheme.svelte';
</script>

<footer>
	<div class="footer-first"></div>

	<div class="footer-middle">
		<Socials />
	</div>

	<div class="toggler">
		<ToggleTheme />
	</div>
	<div class="footer-first"></div>

	<div class="footer-middle">
		<hr />
		<p>Socials</p>
		<li>facebook.com/theriversings</li>
		<li>instagram.com/the.river.sings/</li>
		<li>tiktok.com/@theriversings</li>
		<li>x.com/the_river_sings</li>
		<br />
		<p>Stream</p>
		<li>youtube.com/c/TheRiverSings</li>
		<li>soundcloud.com/theriversings</li>
		<li>open.spotify.com/artist/5zNnchh2RwfMl1iCs8JRPV</li>

		<br />
		<p>Extended Plays [EP]</p>
		<li>distrokid.com/hyperfollow/theriver2/vaguely-relatable-ep</li>

		<br />
		<p>Merch</p>
		<li>etsy.com/shop/MadeByTheRiverBed</li>

		<br />
		<p>Ca$h app</p>
		<li>cash.app/$theriversings</li>

		<br />
		<p>LinkTree</p>
		<li>linktr.ee/theriversings</li>
	</div>

	<div class="toggler"></div>
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
	p {
		color: var(--gray-5);
		font-size: var(--font-size-1);
	}
	li {
		color: var(--gray-7);
		font-size: var(--font-size-0);
		list-style: none;
		transition: transform 0.3s ease;
		transition: text-shadow 0.3s ease;
	}
	li:hover {
		display: inline-block;
		color: var(--gray-9);
		cursor: pointer;
		transform: scale(1.2);
		text-shadow:
			0 0 10px #fff,
			0 0 20px #fff,
			0 0 30px #fff,
			0 0 40px #ff00de;
	}
	hr {
		margin-block: var(--size-7);
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
