<script lang="ts">
	import ToggleTheme from './ToggleTheme.svelte';
	import Socials from './Socials.svelte';
</script>

<footer>
	<!-- row 1 col 1 -->
	<div class="footer-first"></div>

	<!-- row 1 col 2 -->
	<div class="footer-middle">
		<Socials />
	</div>

	<!-- row 1 col 3 -->
	<div class="toggler">
		<ToggleTheme />
	</div>

	<!-- row 2 col 1 -->
	<div class="footer-second"></div>

	<!-- row 2 col 2 -->
	<div class="footer-middle-second">
		<div class="toggler-pt-2">
			<div class="footer-second">
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
			</div>

			<br />
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
	</div>

	<!-- row 2 col 3 -->
	<div class="toggler-pt-2"></div>
</footer>

<style>
	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: var(--size-7);
		margin-block: var(--size-10);
		border-top: 1px solid var(--border);
		padding-block: var(--size-7);
	}
	div {
		display: flex;
		align-items: center;
	}
	p {
		margin-block-end: var(--size-1);
		color: var(--gray-5);
		font-size: var(--font-size-0);
	}
	li {
		transition: transform 0.3s ease;
		transition: text-shadow 0.3s ease;
		margin-inline: var(--size-1);
		color: var(--gray-7);
		font-size: var(--font-size-0);
		line-height: var(--size-4);
		list-style: none;
	}
	li:hover {
		display: inline-block;
		transform: scale(1.2);
		cursor: pointer;
		color: var(--gray-9);
		text-shadow:
			0 0 10px #fff,
			0 0 20px #fff,
			0 0 30px #fff,
			0 0 40px #ff00de;
	}
	/* hr {
		margin-block: var(--size-7);
	} */

	.footer-first {
		justify-content: center;
	}
	.footer-second {
		display: flex;
		flex-direction: column;
		align-items: start;
	}

	.toggler {
		justify-content: center;
	}
	.toggler-pt-2 {
		display: flex;
		flex-direction: column;
		/* justify-content: end; */
		align-items: end;
	}

	.footer-middle {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.footer-middle-second {
		display: flex;
		flex-direction: column;
		justify-content: end;
		align-items: center;
		/* box-shadow: var(--shadow-3); */
		padding-block: var(--size-7);
	}

	@media (min-width: 768px) {
		footer {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
			flex-direction: row;
			justify-content: space-between;
			border-top: 1px solid var(--border);
			padding-block: var(--size-7);
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
