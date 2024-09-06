<script lang="ts">
	import socialLinks from '$lib/data/socialLinks';
	import Copywrite from './Copywrite.svelte';
	import NewsLetterForm from './NewsLetterForm.svelte';
</script>

<footer>
	<!-- row 1 col 1 -->
	<div class="linksWrapper">
		<p class="listHeader">Socials</p>
		<a href={socialLinks.facebook} target="_blank">
			<li>Facebook</li>
		</a>
		<a href={socialLinks.instagramSing} target="_blank">
			<li>Insta[Sing]</li>
		</a>
		<a href={socialLinks.instagramBeauty} target="_blank">
			<li>Insta[Beauty]</li>
		</a>
		<a href={socialLinks.tiktok} target="_blank">
			<li>TikTok</li>
		</a>
		<a href={socialLinks.x} target="_blank">
			<li>Twitter</li>
		</a>
	</div>

	<!-- row 1 col 2 -->
	<div class="linksWrapper">
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
	<!-- row 1 col 4 -->
	<div class="linksWrapper">
		<p class="listHeader">Links</p>
		<a href={socialLinks.cashApp} target="_blank">
			<li>Ca$h app</li>
		</a>
		<a href={socialLinks.linkTree} target="_blank">
			<li>LinkTree</li>
		</a>
	</div>
	<!-- row 1 col 3 -->
	<div>
		<div class="linksWrapper">
			<p class="listHeader">Merch</p>
			<a href={socialLinks.etsy} target="_blank">
				<li>Etsy</li>
			</a>
		</div>
	</div>

	<!-- row 1 col 5 -->
	<div class="linksWrapper">
		<p class="listHeader">Contact</p>
		<div>
			<p class="addressBorder">theriverrunsfast@gmail.com</p>
		</div>
		<div>
			<p class="addressBorder">(720) 282-1202</p>
		</div>
		<div>
			<p>30 W Bayaud Ave</p>
			<p class="addressBorder">Denver, CO 80223</p>
		</div>
	</div>

	<NewsLetterForm />

	<!-- FULL ROW -->
	<Copywrite />
</footer>

<style>
	/* ELEMENTS */
	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: var(--size-8);
		margin-block: var(--size-content-1);
	}
	p {
		margin-inline-end: var(--size-2);
		color: var(--gray-5);
	}
	a {
		transition: color 0.1s ease;
		color: var(--stone-7);
		list-style: none;
	}
	a:hover {
		cursor: pointer;
		color: var(--link);
		text-decoration: none;
	}
	/* CLASSES */
	.addressBorder {
		border-bottom: 1px solid var(--border);
	}
	.listHeader {
		font-weight: var(--font-weight-8);
		text-decoration: dotted underline;
		text-decoration-color: hsl(var(--teal-2-hsl) / 50%);
		text-transform: uppercase;
	}
	.linksWrapper {
		display: flex;
		flex-direction: column;
		gap: var(--size-2);
	}
	/* MEDIA */
	@media (min-width: 768px) {
		footer {
			display: grid;
			grid-template-rows: auto;
			justify-content: space-evenly;
			gap: var(--size-4);
		}
	}
</style>
