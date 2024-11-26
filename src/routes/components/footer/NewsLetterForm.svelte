<script lang="ts">
	import { addToast } from '$lib/stores/toast';
	import { enhance } from '$app/forms';
	import LoaderCircle from 'lucide-svelte/icons/loader-circle';

	let emailInput = $state('');
	let showError = $state(false);
	let errorMessage = $state('');
	let loading = $state(false);

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

	let disabled = $derived(emailInput.length === 0);
</script>

<form
	class="fullRow"
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
	<p class="listHeader">Subscribe to newsletter</p>
	<div class="newsletter-form breaker">
		<div class="buttonWrapper">
			<input type="email" name="email" placeholder="Enter email" bind:value={emailInput} />
			{#if loading}
				<button disabled>
					<div class="spinner">
						<LoaderCircle size={14} />
					</div>
					Loading
				</button>
			{:else}
				<button class:disabled class="primary" type="submit" {disabled}> Sign up </button>
			{/if}
		</div>
		<label for="email" class="newsletter-form__email-label">
			You can unsubscribe at any time
		</label>
		{#if showError}
			<span class="errorMessage">{errorMessage}</span>
		{/if}
	</div>
</form>

<style>
	/* ELEMENTS */
	form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border-block: 1px solid var(--border);
		padding-block: var(--size-10);
	}
	p {
		margin-inline-end: var(--size-2);
		color: var(--gray-5);
	}
	input {
		padding: var(--size-3);
		width: var(--size-14);
		color: var(--grey-6);
		/* font-size: var(--font-size-5); */
	}
	input::placeholder {
		font-size: var(--font-size-0);
	}
	label {
		color: var(--gray-8);
		font-size: var(--font-size-0);
	}
	button {
		min-width: var(--size-11);
		font-size: var(--font-size-0);
	}
	/* CLASSES */
	.listHeader {
		color: var(--link2);
		font-weight: var(--font-weight-8);
		font-size: var(--font-size-4);
		text-transform: uppercase;
	}
	.newsletter-form {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--size-1);
	}
	.buttonWrapper {
		display: flex;
		justify-content: center;
		gap: var(--size-3);
		margin-block: var(--size-4);
	}
	.disabled {
		opacity: 0.7;
	}
	.fullRow {
		grid-column-start: 1;
		grid-column-end: 6;
		margin-block-start: var(--size-5);
	}
</style>
