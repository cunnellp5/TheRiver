<script lang="ts">
	import socialLinks from '$lib/data/socialLinks';
	import Copywrite from './Copywrite.svelte';
	import NewsLetterForm from './NewsLetterForm.svelte';
	import { address, emailWithBreaks, phoneNumber } from '$lib/config';
</script>

<footer>
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
	<div class="linksWrapper">
		<p class="listHeader">Merch</p>
		<a href={socialLinks.etsy} target="_blank">
			<li>Etsy</li>
		</a>
		<p class="listHeader marginTop">Links</p>
		<a href={socialLinks.cashApp} target="_blank">
			<li>Ca$h app</li>
		</a>
		<a href={socialLinks.linkTree} target="_blank">
			<li>LinkTree</li>
		</a>
	</div>
	<div class="linksWrapper address">
		<p class="listHeader">Contact</p>
		<div>
			<p class="addressBorder">{@html emailWithBreaks}</p>
		</div>
		<div>
			<p class="addressBorder">{phoneNumber}</p>
		</div>
		<div>
			<a
				href="https://www.google.com/maps/place/30+W+Bayaud+Ave,+Denver,+CO+80223/@39.7145613,-104.9911972,17z/data=!3m1!4b1!4m6!3m5!1s0x876c7f1ef7cf41b7:0xbb0e344a69581183!8m2!3d39.7145613!4d-104.9886223!16s%2Fg%2F11c22m8nd0?entry=ttu&g_ep=EgoyMDI0MDkxNi4wIKXMDSoASAFQAw%3D%3D"
				target="_blank"
				rel="noopener noreferrer">
				<p>{address}</p>
			</a>
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
	.marginTop {
		margin-block-start: var(--size-8);
	}
	.addressBorder {
		margin-bottom: var(--size-2);
		border-bottom: 1px solid var(--border);
	}
	.listHeader {
		color: var(--link2);
		/* color: hsl(var(--teal-2-hsl) / 100%); */
		font-weight: var(--font-weight-8);
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
			justify-content: space-between;
			gap: var(--size-4);
		}
		.marginTop {
			margin-block-start: var(--size-4);
		}
	}
</style>
