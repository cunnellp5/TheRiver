<script lang="ts">
	import ToggleTheme from '$lib/components/ui/ToggleTheme.svelte';
	import Socials from '$lib/components/ui/Socials.svelte';
	import socialLinks from '$lib/data/socialLinks';
</script>

<footer>
	<!-- row 1 col 1 -->
	<div class="footer-first">
		<div class="link-wrapper">
			<p class="listHeader">Socials</p>
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
				<li>Twitter</li>
			</a>
		</div>
	</div>

	<!-- row 1 col 2 -->
	<div>
		<div class="link-wrapper">
			<p class="listHeader">Stream</p>
			<a href={socialLinks.youtube} target="_blank">
				<li>Youtube</li>
			</a>
			<a href={socialLinks.soundCloud} target="_blank">
				<li>SoundCloud</li>
			</a>
			<a href={socialLinks.spotify} target="_blank">
				<li>Spotify</li>
			</a>
			<a href={socialLinks.distrokid.vaguelyRelatable} target="_blank">
				<li>Vaguely Relatable [EP]</li>
			</a>
		</div>
	</div>
	<!-- row 1 col 4 -->
	<div>
		<div class="link-wrapper">
			<p class="listHeader">Links</p>
			<a href={socialLinks.cashApp} target="_blank">
				<li>Ca$h app</li>
			</a>
			<a href={socialLinks.linkTree} target="_blank">
				<li>LinkTree</li>
			</a>
		</div>
	</div>
	<!-- row 1 col 3 -->
	<div>
		<div class="link-wrapper">
			<p class="listHeader">Merch</p>
			<a href={socialLinks.etsy} target="_blank">
				<li>Etsy</li>
			</a>
		</div>
	</div>

	<!-- row 1 col 5 -->
	<div>
		<div class="link-wrapper">
			<p class="listHeader">Info</p>
			<p class="address">123 address St</p>
			<p class="address">Denver, CO</p>
		</div>
	</div>

	<!-- row 1 col6 -->
	<div class="toggler">
		<form method="POST">
			<p class="listHeader">Subscribe to the newsletter</p>
			<div class="newsletter-form">
				<label for="email">Get the latest updates on new products and upcoming sales</label>
				<div class="buttonWrapper">
					<input type="email" name="email" placeholder="Your email address" />
					<button class="primary" title="Send email">Subscribe</button>
				</div>
			</div>
		</form>
	</div>

	<!-- row 1 col6 -->
	<!-- <div class="toggler"></div> -->

	<!-- row 2 col 1 -->
	<!-- <div class="toggler"> -->
	<!-- <Socials /> -->
	<!-- <ToggleTheme /> -->
	<!-- </div> -->
	<!-- row 2 col 1 -->
	<!-- <div class="footer-second"></div> -->

	<!-- row 2 col 2 -->
	<!-- <div class="footer-middle-second">
		<div class="toggler-pt-2"></div>
	</div> -->

	<!-- row 3?? -->
	<div class="fullRow copywrite">
		&copy;
		<span class="year">
			{new Date().getFullYear()}
		</span>
		The River
	</div>
</footer>

<style>
	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: var(--size-4);
		margin-block: var(--size-10);
		/* border-top: 1px solid var(--border); */
		/* padding-block: var(--size-7); */
	}
	div {
		display: flex;
		/* align-items: center; */
	}
	p {
		margin-inline-end: var(--size-2);
		color: var(--gray-5);
		font-size: var(--font-size-0);
	}
	a {
		transition: color 0.1s ease;
		/* margin-inline: var(--size-1); */
		color: var(--gray-7);
		font-size: var(--font-size-0);
		line-height: var(--size-4);
		list-style: none;
	}
	a:hover {
		display: inline-block;
		cursor: pointer;
		color: var(--link);
		text-decoration: none;
	}
	input {
		width: 15vw;
		color: var(--grey-6);
		font-size: var(--font-size-0);
	}
	button,
	label {
		font-size: var(--font-size-0);
	}
	label {
		color: var(--gray-8);
	}
	.address {
		color: var(--text-2);
	}
	.listHeader {
		margin-block-end: var(--size-2);
		font-weight: var(--font-weight-2);
		font-size: var(--font-size-0);
		text-transform: uppercase;
	}
	.link-wrapper {
		display: flex;
		flex-direction: column;
	}
	.footer-first {
		flex-direction: row;
		gap: var(--size-4);
	}

	.toggler {
		align-items: start;
	}
	.fullRow {
		grid-row-start: 4;
		grid-column-start: 1;
		grid-column-end: 8;
	}

	.copywrite {
		color: var(--gray-8);
		font-size: var(--font-size-0);
		font-family: 'Courier New', Courier, monospace;
	}

	.year {
		margin-inline: var(--size-1);
	}

	.newsletter-form {
		display: flex;
		flex-direction: column;
		gap: var(--size-3);
	}

	.buttonWrapper {
		display: flex;
		gap: var(--size-3);
	}

	@media (min-width: 768px) {
		footer {
			display: grid;
			/* grid-template-columns: 20% 20% 20% 20% 20%; */
			/* grid-template-rows: 20% 20% 20% 20% 20%; */
			/* display: grid; */
			grid-template-rows: auto; /* Define two rows */
			grid-template-columns: 1fr 1fr 1fr 1fr 1fr 4fr;
			flex-direction: row;
			justify-content: space-between;
			/* border-top: 1px solid var(--border); */
			/* padding-block: var(--size-7); */
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
