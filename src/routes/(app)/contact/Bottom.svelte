<script lang="ts">
	import MapPin from 'lucide-svelte/icons/map-pin';
	import AtSign from 'lucide-svelte/icons/at-sign';
	import Phone from 'lucide-svelte/icons/phone';
	import { emailWithBreaks, address } from '$lib/config';
	import ServiceButtons from '$lib/components/ui/button/ServiceButtons.svelte';

	// const email = 'theriverrunsfast@gmail.com';
	// let copied = false;

	// function copyEmail() {
	// 	navigator.clipboard.writeText(email);
	// 	copied = true;
	// 	setTimeout(() => {
	// 		copied = false;
	// 		return copied;
	// 	}, 800); // Reset after 2 seconds
	// }
</script>

<section class="bottom-sections">
	<figure class="section map">
		<a
			class="contact-item"
			href="https://www.google.com/maps/place/30+W+Bayaud+Ave,+Denver,+CO+80223/@39.7145613,-104.9911972,17z/data=!3m1!4b1!4m6!3m5!1s0x876c7f1ef7cf41b7:0xbb0e344a69581183!8m2!3d39.7145613!4d-104.9886223!16s%2Fg%2F11c22m8nd0?entry=ttu&g_ep=EgoyMDI0MDkxNi4wIKXMDSoASAFQAw%3D%3D"
			target="_blank"
			rel="noopener noreferrer">
			<img src="./images/darkMap.webp" alt="dark theme map" class="map__img" />
		</a>
	</figure>
	<figure class="section contact">
		<div class="info-wrapper">
			<h2>Contact</h2>
			<div class="contact-item">
				<AtSign size="16" />
				<p>{@html emailWithBreaks}</p>
			</div>
			<div class="contact-item">
				<MapPin size="16" />
				<p>{address}</p>
			</div>
		</div>
	</figure>
	<figure class="section newsletter">
		<div class="info-wrapper">
			<h2>Book</h2>
			<div class="row">
				<p>Email to book for music/collab.</p>
			</div>
			<div class="serviceButtons">
				<ServiceButtons />
			</div>
		</div>
	</figure>
</section>

<style>
	/* ELEMENTS */
	img {
		border-radius: unset;
	}
	h2 {
		color: var(--stone-9);
		font-style: normal;
		font-variant: small-caps;
		font-size: var(--font-size-6);
		line-height: 1;
		font-family: 'Atyp BL Display Medium';
		letter-spacing: 0em;
	}
	/* CLASSES */
	.row {
		display: flex;
		gap: var(--size-2);
	}
	.map__img {
		width: 100%;
		height: 100%;
		object-fit: cover; /* Ensures the image covers the container without shrinking */
		object-position: center 10%; /* Centers the image within the container */
	}
	.bottom-sections {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
	}
	.map {
		background-color: var(--stone-11);
	}
	.contact {
		background-color: var(--stone-0);
		color: var(--gray-11);
	}
	.info-wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: var(--size-4);
		margin-inline: var(--size-9);
		height: 100%;
	}
	.contact-item {
		display: flex;
		gap: var(--size-2);
		& svg {
			flex-shrink: 0; /* Prevents the icon from shrinking */
		}
	}
	.newsletter {
		background-color: var(--gray-3);
		color: var(--gray-11);
	}
	.serviceButtons {
		display: flex;
		flex-direction: column;
		gap: var(--size-2);
	}

	@media (max-width: 768px) {
		.bottom-sections {
			grid-template-rows: 1fr 1fr 1fr;
			grid-template-columns: 1fr;
		}
	}
</style>
