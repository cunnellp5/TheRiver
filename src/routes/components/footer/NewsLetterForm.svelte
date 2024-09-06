<script lang="ts">
	import { addToast } from '$lib/stores/toast';
	import { enhance } from '$app/forms';
	import LoaderCircle from 'lucide-svelte/icons/loader-circle';

	let emailInput = '';
	let showError = false;
	let errorMessage = '';
	let loading = false;

	function formSuccess() {
		showError = false;
		addToast({
			message: 'Subscribed to newsletter',
			type: 'message',
			iconType: 'check',
			dismissible: true,
			timeout: 5000
		});
	}

	$: disabled = emailInput.length === 0;
</script>

<form
	method="POST"
	action="api/newsLetter?/subscribe"
	use:enhance={async ({ formElement, formData, action, cancel, submitter }) => {
		loading = true;
		return async ({ result, update }) => {
			if (result.status === 200) {
				formSuccess();
			} else {
				showError = true;
				errorMessage = result?.data?.message || 'An error occurred';
			}
			update();
			loading = false;
		};
	}}>
	<p class="listHeader">Subscribe to the newsletter</p>
	<div class="newsletter-form breaker">
		<label for="email" class="newsletter-form__email-label"
			>Get the latest updates on new products and upcoming sales</label>
		<div class="buttonWrapper">
			<input type="email" name="email" placeholder="Enter Email Address" bind:value={emailInput} />
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

<style>
	/* ELEMENTS */
	div {
		display: flex;
	}
	p {
		margin-inline-end: var(--size-2);
		color: var(--gray-5);
	}
	input {
		color: var(--grey-6);
	}
	label {
		color: var(--gray-8);
	}
	/* CLASSES */
	.listHeader {
		font-weight: var(--font-weight-8);
		text-decoration: dotted underline;
		text-decoration-color: hsl(var(--teal-2-hsl) / 50%);
		text-transform: uppercase;
	}
	.newsletter-form {
		display: flex;
		flex-direction: column;
		margin-block-start: var(--size-2);
	}
	.buttonWrapper {
		flex-direction: column;
		gap: var(--size-3);
	}
	.disabled {
		opacity: 0.7;
	}
</style>
