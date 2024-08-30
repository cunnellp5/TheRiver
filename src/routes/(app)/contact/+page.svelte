<script lang="ts">
	import Seo from '$lib/components/SEO.svelte';
	import Socials from '$lib/components/ui/Socials.svelte';
	import Check from 'lucide-svelte/icons/check';
	import Copy from 'lucide-svelte/icons/copy';
	import MapPin from 'lucide-svelte/icons/map-pin';
	import Send from 'lucide-svelte/icons/send';
	import TheRiver from '../../components/TheRiver.svelte';

	const email = 'theriverrunsfast@gmail.com';
	let copied = false;

	function copyEmail() {
		navigator.clipboard.writeText(email);
		copied = true;
		setTimeout(() => {
			copied = false;
			return copied;
		}, 800); // Reset after 2 seconds
	}
</script>

<Seo
	title={'Get in Touch with The River - Contact Us'}
	description={"Have questions or want to collaborate? Reach out to The River through our contact page. We're here to help and connect with you."} />

<div class="app-layout col">
	<div class="content flex">
		<TheRiver />
	</div>
	<div class="flex">
		<section>
			<div class="contact">
				<h5>
					<p class="label">Address</p>
				</h5>
				<div class="addy indent">
					<a
						target="_blank"
						href="https://www.google.com/maps/place/30+W+Bayaud+Ave,+Denver,+CO+80223/@39.7145613,-104.9886223,17z/data=!3m1!4b1!4m6!3m5!1s0x876c7f1ef7cf41b7:0xbb0e344a69581183!8m2!3d39.7145613!4d-104.9886223!16s%2Fg%2F11c22m8nd0?entry=ttu&g_ep=EgoyMDI0MDgyMy4wIKXMDSoASAFQAw%3D%3D">
						<button class="addressWrapper">
							<MapPin />
							<div class="address">
								<p class="address1">30 W Bayaud Ave</p>
								<p class="address2">Denver, CO 80223</p>
							</div>
						</button>
					</a>
				</div>
			</div>
			<div class="contact">
				<h5>
					<p class="label">Email</p>
				</h5>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div class="emailAddy indent">
					<div class="emailAddyButtons">
						<button class="copy" on:click={copyEmail} title="Copy email to clipboard">
							{#if copied}
								<Check />
								Copied to clipboard
							{:else}
								<Copy />
								theriverrunsfast@gmail.com
							{/if}
						</button>
						<a href="mailto:{email}">
							<button title="Send email">
								<Send />
							</button>
						</a>
					</div>
				</div>
			</div>
			<div>
				<h5>
					<p class="label">Links</p>
				</h5>
				<div class="indent">
					<Socials></Socials>
				</div>
			</div>
		</section>
	</div>
</div>

<style>
	/* ELEMENTS */
	button {
		background-color: transparent;
		color: var(--link);
	}
	section {
		display: flex;
		flex-direction: column;
		gap: var(--size-9);
		z-index: 1;
		margin: 0 auto;
		/* box-shadow: var(--shadow-3); */
		border-radius: var(--radius-2);
		/* background-color: var(--surface-4); */
		padding: var(--size-8);
	}
	p {
		letter-spacing: var(--font-letterspacing-3);
	}
	a:hover {
		text-decoration: none;
	}
	/* CLASSES */
	.addy {
		display: flex;
		gap: var(--size-4);
	}

	.indent {
		margin-inline-start: var(--size-4);
	}
	.emailAddyButtons {
		display: flex;
		flex-direction: column;
		gap: var(--size-4);
		margin-block-start: var(--size-4);
		font-size: var(--font-size-1);
		& button {
			width: 100%;
		}
	}
	.address2 {
		color: var(--gray-6);
		font-size: var(--font-size-0);
	}
	.label {
		margin-block: var(--size-3);
		font-weight: var(--font-weight-2);
		letter-spacing: var(--font-letterspacing-4);
		text-transform: uppercase;
	}
	.flex {
		display: flex;
	}
	.address {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
	.addressWrapper {
		display: flex;
		gap: var(--size-4);
	}
	.content {
		padding-block: var(--size-4);
		height: var(--size-content-1);
	}
</style>
