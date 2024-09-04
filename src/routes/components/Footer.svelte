<script lang="ts">
	import socialLinks from '$lib/data/socialLinks';
	import { addToast } from '$lib/stores/toast';
	import { enhance } from '$app/forms';
	import LoaderCircle from 'lucide-svelte/icons/loader-circle';

	let emailInput = '';

	let showError = false;
	let errorMessage = '';
	let loading = false;

	$: disabled = emailInput.length === 0;
</script>

<footer>
	<!-- row 1 col 1 -->
	<div class="footer-first">
		<div class="colWrapper">
			<p class="listHeader">Socials</p>
			<a href={socialLinks.facebook} target="_blank">
				<li>Facebook</li>
			</a>
			<a href={socialLinks.instagramSing} target="_blank">
				<li>Instagram [Music]</li>
			</a>
			<a href={socialLinks.instagramBeauty} target="_blank">
				<li>Instagram [Beauty]</li>
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
		<div class="colWrapper">
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
		<div class="colWrapper">
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
		<div class="colWrapper">
			<p class="listHeader">Merch</p>
			<a href={socialLinks.etsy} target="_blank">
				<li>Etsy</li>
			</a>
		</div>
	</div>

	<!-- row 1 col 5 -->
	<div>
		<div class="colWrapper">
			<p class="listHeader">Info</p>
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label>Address</label>
			<p class="address">30 W Bayaud Ave</p>
			<p class="address">Denver, CO 80223</p>
			<br />
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label>Email</label>
			<p class="address">theriverrunsfast@gmail.com</p>
		</div>
	</div>

	<!-- row 1 col6 -->
	<div class="toggler">
		<!-- on:submit|preventDefault={subscribe} -->
		<form
			method="POST"
			action="api/newsLetter?/subscribe"
			use:enhance={async ({ formElement, formData, action, cancel, submitter }) => {
				loading = true;
				return async ({ result, update }) => {
					if (result.status === 200) {
						showError = false;
						addToast({
							message: 'Subscribed to newsletter',
							type: 'message',
							iconType: 'check',
							dismissible: true,
							timeout: 5000
						});
					} else {
						showError = true;
						errorMessage = result?.data?.message || 'An error occurred';
					}
					update();
					loading = false;
				};
			}}>
			<p class="listHeader">Subscribe to the newsletter</p>
			<div class="newsletter-form">
				<label for="email">Get the latest updates on new products and upcoming sales</label>
				<div class="buttonWrapper">
					<input
						type="email"
						name="email"
						placeholder="Your email address"
						bind:value={emailInput} />
					{#if loading}
						<button disabled>
							<div class="spinner">
								<LoaderCircle size={14} />
							</div>
							Loading
						</button>
					{:else}
						<button class:disabled class="primary" type="submit" {disabled}> Subscribe </button>
					{/if}
				</div>
				{#if showError}
					<span class="errorMessage">{errorMessage}</span>
				{/if}
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
		TheRiver
	</div>
</footer>

<style>
	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: var(--size-4);
		margin-block: var(--size-10);
	}
	div {
		display: flex;
	}
	p {
		margin-inline-end: var(--size-2);
		color: var(--gray-5);
		font-size: var(--font-size-0);
	}
	a {
		transition: color 0.1s ease;
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
	.colWrapper {
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
		color: var(--gray-7);
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
		flex-direction: column;
		gap: var(--size-3);
	}

	.disabled {
		opacity: 0.7;
	}

	@media (min-width: 768px) {
		footer {
			display: grid;
			grid-template-rows: auto; /* Define two rows */
			grid-template-columns: 1fr 1fr 1fr 1fr 1fr 4fr;
			flex-direction: row;
			justify-content: space-between;
		}
		.toggler {
			justify-content: end;
		}
		.footer-first {
			justify-content: start;
		}
	}
</style>
