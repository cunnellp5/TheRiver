<script lang="ts">
	import Check from 'lucide-svelte/icons/check';
	import Seo from '$lib/components/SEO.svelte';
	import { enhance } from '$app/forms';
	import { addToast } from '$lib/stores/toast';
	import { goto } from '$app/navigation';
	import { LoaderCircle } from 'lucide-svelte';

	export let data;

	const { email } = data;

	let confirmPassword = '';
	let password = '';
	let loading = false;

	$: isConfirmPasswordValid = password === confirmPassword;
	$: isPasswordValid = password.length >= 6;

	// $: isFormValid =
	// 	isEmailValid &&
	// 	isPasswordValid &&
	// 	isConfirmPasswordValid &&
	// 	isFirstNameValid &&
	// 	isLastNameValid;
</script>

<Seo
	title={'Reset Your Password - Secure Form Access'}
	description={'Use this secure form to reset your password. Enter your new password to regain access to your account. This page is accessible with a temporary link for your security.'} />

<main>
	<section>
		<h1>RESET PASSWORD</h1>

		<form
			method="POST"
			use:enhance={async ({ formElement, formData, action, cancel, submitter }) => {
				loading = true;
				return async ({ result, update }) => {
					if (result.status === 200) {
						addToast({
							message: 'Password updated',
							type: 'message',
							iconType: 'check',
							dismissible: true,
							timeout: 5000
						});
						await goto('/dashboard');
					}
					loading = false;
					update();
				};
			}}>
			<p>{email}</p>
			<div
				class="passwords"
				class:invalidPasswords={(!isConfirmPasswordValid && confirmPassword.length > 0) ||
					(!isPasswordValid && password.length > 0 && confirmPassword.length > 0)}
				class:validPasswords={isConfirmPasswordValid &&
					confirmPassword.length > 0 &&
					isPasswordValid}>
				<label id="pw-label" for="password">Password</label>
				<input
					bind:value={password}
					type="password"
					name="password"
					id="password"
					min="6"
					required />

				<br />

				<label for="confirm">Confirm Password</label>
				<input
					class:invalid={!isConfirmPasswordValid && confirmPassword.length > 0}
					class:valid={isConfirmPasswordValid && confirmPassword.length > 0}
					bind:value={confirmPassword}
					type="password"
					name="confirm"
					id="confirm"
					required />

				<div class="help-text">
					<div class="checker">
						{#if isPasswordValid}
							<Check size="16" />
						{/if}
						Passwords should be 6 characters long
					</div>
					<div class="checker">
						{#if isConfirmPasswordValid && confirmPassword.length > 0}
							<Check size="16" />
						{/if}
						Confirmed matching
					</div>
				</div>
			</div>

			<input type="hidden" name="email" id="email" value={email} />

			{#if loading}
				<button disabled={loading}>
					<div class="spinner">
						<LoaderCircle />
					</div>
					Loading
				</button>
			{:else}
				<button
					class="update-button"
					disabled={!isConfirmPasswordValid || !isPasswordValid}
					type="submit">Reset</button>
			{/if}
		</form>
	</section>
</main>

<style>
	/* ELEMENTS */
	main {
		display: flex;
		justify-content: center;
		margin-block-start: var(--size-10);
	}
	form {
		display: flex;
		flex-direction: column;
		gap: var(--size-7);
		margin-block-start: var(--size-10);
	}
	input {
		border: 1px solid var(--border);
	}
	label {
		margin-block: var(--size-1);
		color: var(--link);
		font-size: var(--font-size-0);
	}
	/* CLASSES */
	.passwords {
		display: flex;
		flex-direction: column;
		transition: border-left-color 0.3s ease;
		margin-block: var(--size-4);
		border-left: 2px solid var(--link);
		padding-left: var(--size-4);
		& > label {
			margin-block: var(--size-2);
		}
	}
	.invalidPasswords {
		border-left-color: var(--red-7);
	}
	.validPasswords {
		border-left-color: var(--green-7);
	}
	.invalid {
		border-color: var(--red-7);
	}
	.valid {
		border-color: var(--green-7);
	}
	.help-text {
		display: flex;
		flex-direction: column;
		margin-top: var(--size-2);
		color: var(--gray-6);
		font-size: var(--font-size-0);
	}
	.checker {
		display: flex;
		gap: var(--size-1);
	}
	/* IDs */
	#pw-label {
		margin-top: 0;
	}
</style>
