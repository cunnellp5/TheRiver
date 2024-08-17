<script lang="ts">
	import ToggleTheme from './ToggleTheme.svelte';
	import Socials from './Socials.svelte';
	import socialLinks from '$lib/data/socialLinks';
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
			<div class="link-wrapper">
				<!-- <p>Socials</p> -->
				<a href={socialLinks.facebook} target="_blank">
					<li>Facebook</li>
				</a>
				<a href={socialLinks.instagram} target="_blank">
					<li>Instagram</li>
				</a>
				<a href={socialLinks.tiktok} target="_blank">
					<li>TikTok</li>
				</a>
				<a href={socialLinks.x} target="_blank">
					<li>Twitter / x.com</li>
				</a>
			</div>
			<div class="link-wrapper">
				<!-- <p>Stream</p> -->
				<a href={socialLinks.youtube} target="_blank">
					<li>Youtube</li>
				</a>
				<a href={socialLinks.soundCloud} target="_blank">
					<li>SoundCloud</li>
				</a>
				<a href={socialLinks.spotify} target="_blank">
					<li>Spotify</li>
				</a>
			</div>
			<div class="link-wrapper">
				<!-- <p>Misc</p> -->
				<a href={socialLinks.etsy} target="_blank">
					<li>Etsy</li>
				</a>
				<a href={socialLinks.cashApp} target="_blank">
					<li>Ca$h app</li>
				</a>
				<a href={socialLinks.linkTree} target="_blank">
					<li>LinkTree</li>
				</a>
			</div>
			<div class="link-wrapper">
				<!-- <p>Extended Plays [EP]</p> -->
				<a href={socialLinks.distrokid.vaguelyRelatable} target="_blank">
					<li>vaguely-relatable-ep</li>
				</a>
			</div>
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
		margin-inline-end: var(--size-2);
		color: var(--gray-5);
		font-size: var(--font-size-0);
	}
	a {
		transition: color 0.1s ease;
		margin-inline: var(--size-1);
		color: var(--gray-7);
		font-size: var(--font-size-0);
		line-height: var(--size-4);
		list-style: none;
	}
	a:hover {
		display: inline-block;
		/* transform: scale(1.2); */
		cursor: pointer;
		color: var(--link);
		text-decoration: none;
		/* text-shadow:
			0 0 10px #fff,
			0 0 20px #fff,
			0 0 30px #fff,
			0 0 40px #ff00de; */
	}
	/* hr {
		margin-block: var(--size-7);
	} */
	.link-wrapper {
		display: flex;
		gap: var(--size-2);
		margin-block: var(--size-2);
	}
	.footer-first {
		justify-content: center;
	}
	.footer-second {
		display: flex;
		flex-direction: column;
		/* align-items: start; */
	}

	.toggler {
		justify-content: center;
	}
	.toggler-pt-2 {
		display: flex;
		flex-direction: column;
		/* justify-content: end; */
		/* align-items: end; */
	}

	.footer-middle {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.footer-middle-second {
		/* display: flex; */
		flex-direction: column;
		/* justify-content: end; */
		/* align-items: center; */
		/* box-shadow: var(--shadow-6); */
		/* border-right: 1px dashed var(--link); */
		/* border-left: 1px dashed var(--link); */
		/* padding-inline: var(--size-3); */
		/* padding-block: var(--size-7); */
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
