<script lang="ts">
	import CircleAlert from 'lucide-svelte/icons/circle-alert';
	import Check from 'lucide-svelte/icons/check';
	// eslint-disable-next-line import/no-unresolved
	import { enhance } from '$app/forms';

	export let form;

	let confirmPassword = '';
	let email = '';
	let firstName = '';
	let lastName = '';
	let password = '';

	$: isConfirmPasswordValid = password === confirmPassword;
	$: isEmailValid = email.includes('@');
	$: isFirstNameValid = firstName.length > 0;
	$: isLastNameValid = lastName.length > 0;
	$: isPasswordValid = password.length >= 6;

	$: isFormValid =
		isEmailValid &&
		isPasswordValid &&
		isConfirmPasswordValid &&
		isFirstNameValid &&
		isLastNameValid;
</script>

<main>
	<section class="hero">
		<h1 class="hero-message">
			<div>Signup</div>
		</h1>
		<p class="under-hero">Create an account to book services with Alexis</p>

		{#if form?.message}
			<p class="error-message"><CircleAlert />{form.message}</p>
		{/if}

		<form method="POST" use:enhance>
			<label for="firstName">First name</label>
			<input bind:value={firstName} name="firstName" id="firstName" required />

			<label for="lastName">Last name</label>
			<input bind:value={lastName} name="lastName" id="lastName" required />

			<hr class="middle-hr" />

			<label for="email">Email</label>
			<input bind:value={email} type="email" name="email" id="email" required />

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

			<br />

			<div class="checkbox-wrapper">
				<label for="isSubscribed">Subscibe for updates</label>
				<input type="checkbox" name="isSubscribed" id="isSubscribed" checked />
			</div>

			<div class="button-list">
				<button type="submit" class="primary" disabled={!isFormValid} class:disabled={!isFormValid}>
					Signup
				</button>
				<hr />
				<a href="/login"> Already a member? Sign in here. </a>
			</div>
		</form>
	</section>
</main>

<style>
	@import url('../auth.css');

	main {
		flex-direction: row;
	}

	.middle-hr {
		margin-block: var(--size-3);
	}

	.checkbox-wrapper {
		display: flex;
		flex-direction: row-reverse;
		justify-content: start;
		align-items: center;
		& > label {
			margin-inline: var(--size-3);
		}
	}

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

	#pw-label {
		margin-top: 0;
	}
</style>
