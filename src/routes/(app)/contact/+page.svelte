<script lang="ts">
	import Check from 'lucide-svelte/icons/check';
	import Copy from 'lucide-svelte/icons/copy';
	import Send from 'lucide-svelte/icons/send';
	import MapPin from 'lucide-svelte/icons/map-pin';
	import Socials from '$lib/components/ui/Socials.svelte';
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

<div class="header">
	<div class="content flex">
		<TheRiver />
	</div>
	<div>
		<svg
			class="waves top"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			viewBox="0 24 150 28"
			preserveAspectRatio="none"
			shape-rendering="auto">
			<defs>
				<path
					id="gentle-wave"
					d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
			</defs>
			<g class="parallax">
				<use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(0, 119, 190,0.7" />
				<use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(0, 119, 190,0.5)" />
				<use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(0, 119, 190,0.3)" />
				<use xlink:href="#gentle-wave" x="48" y="7" fill="rgba(0, 119, 190, 1)" />
			</g>
		</svg>
	</div>
	<div class="inner-header flex">
		<div class="app-layout">
			<div class="main-page-wrapper">
				<section>
					<div class="contact">
						<p class="label">Address</p>
						<div class="addy">
							<a
								target="_blank"
								href="https://www.google.com/maps/place/30+W+Bayaud+Ave,+Denver,+CO+80223/@39.7145613,-104.9886223,17z/data=!3m1!4b1!4m6!3m5!1s0x876c7f1ef7cf41b7:0xbb0e344a69581183!8m2!3d39.7145613!4d-104.9886223!16s%2Fg%2F11c22m8nd0?entry=ttu&g_ep=EgoyMDI0MDgyMy4wIKXMDSoASAFQAw%3D%3D">
								<MapPin />
							</a>
							<div>
								<p class="address1">30 W Bayaud Ave</p>
								<p class="address2">Denver, CO 80223</p>
							</div>
						</div>
					</div>
					<div class="contact">
						<p class="label">Email</p>
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<!-- svelte-ignore a11y-no-static-element-interactions -->
						<div class="emailAddy">
							<p>theriverrunsfast@gmail.com</p>
							<div class="emailAddyButtons">
								<button class="copy" on:click={copyEmail} title="Copy email to clipboard">
									{#if copied}
										<Check size="24" />
									{:else}
										<Copy size="24" />
									{/if}
								</button>
								<a href="mailto:{email}">
									<button title="Send email">
										<Send size="24" />
									</button>
								</a>
							</div>
						</div>
					</div>
					<hr />
					<div>
						<Socials></Socials>
					</div>
				</section>
			</div>
		</div>
	</div>

	<!--Waves Container-->
	<!-- <div>
		<svg
			class="waves bottom"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			viewBox="0 24 150 28"
			preserveAspectRatio="none"
			shape-rendering="auto">
			<defs>
				<path
					id="gentle-wave"
					d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
			</defs>
			<g class="parallax">
				<use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(0, 119, 190, 0.7" />
				<use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(0, 119, 190, 0.5)" />
				<use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(0, 119, 190, 0.3)" />
				<use xlink:href="#gentle-wave" x="48" y="7" fill="rgba(0, 119, 190, 1)" />
			</g>
		</svg>
	</div> -->
	<!--Waves end-->
</div>

<!--Header ends-->

<!--Content starts-->

<!--Content ends-->

<style>
	/* ELEMENTS */
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: var(--size-9);
		z-index: 1;
		margin: 0 auto;
		box-shadow: var(--shadow-3);
		border-radius: var(--radius-2);
		background-color: var(--surface-4);
		padding: var(--size-8);
	}
	p {
		letter-spacing: var(--font-letterspacing-3);
	}
	hr {
		margin: unset;
	}
	/* CLASSES */
	.main-page-wrapper {
		/* display: flex; */
		/* justify-content: center; */
	}
	.app-layout {
		display: flex;
		justify-content: center;
		align-items: center;
		/* margin-block: var(--size-12); */
	}
	.addy {
		display: flex;
		gap: var(--size-4);
	}
	.emailAddyButtons {
		display: flex;
		gap: var(--size-4);
		margin-block-start: var(--size-2);
	}
	.address2 {
		color: var(--gray-6);
		font-size: var(--font-size-1);
	}
	.label {
		margin-block-end: var(--size-3);
		color: var(--gray-7);
		text-transform: uppercase;
	}
	/* WAVES */
	.header {
		position: relative;
		/* background: linear-gradient(
			90deg,
			rgba(84, 58, 183, 0) 10%,
			rgba(84, 58, 183, 0.5) 35%,
			rgba(0, 172, 193, 0.5) 65%,
			rgba(0, 172, 193, 0) 90%
		); */
	}
	.inner-header {
		margin: 0;
		padding: 0;
		width: 100%;
		height: 65vh;
	}
	.flex {
		display: flex;
		/* justify-content: center; */
		/* align-items: center; */
		/* text-align: center; */
	}
	.top {
		transform: rotate(180deg);
	}
	.waves {
		position: relative;
		margin-bottom: -7px; /*Fix for safari gap*/
		width: 100%;
		height: 15vh;
		min-height: 100px;
		max-height: 150px;
	}

	.content {
		position: relative;
		background-color: rgba(0, 119, 190, 1);
		padding-block-start: var(--size-8);
		height: var(--size-content-1);
		text-align: center;
	}

	/* Animation */
	.parallax > use {
		animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
	}
	.parallax > use:nth-child(1) {
		animation-duration: 7s;
		animation-delay: -2s;
	}
	.parallax > use:nth-child(2) {
		animation-duration: 10s;
		animation-delay: -3s;
	}
	.parallax > use:nth-child(3) {
		animation-duration: 13s;
		animation-delay: -4s;
	}
	.parallax > use:nth-child(4) {
		animation-duration: 20s;
		animation-delay: -5s;
	}

	@keyframes move-forever {
		0% {
			transform: translate3d(-90px, 0, 0);
		}
		100% {
			transform: translate3d(85px, 0, 0);
		}
	}
	/*Shrinking for mobile*/
	@media (max-width: 768px) {
		.waves {
			height: 40px;
			min-height: 40px;
		}
		.content {
			height: 30vh;
		}
	}
</style>
