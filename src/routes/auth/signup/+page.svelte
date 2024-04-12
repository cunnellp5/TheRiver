<script lang="ts">
	import { enhance } from '$app/forms';
	import CircleAlert from 'lucide-svelte/icons/circle-alert';

	export let form;

	let email = '';
	let password = '';
	let confirmPassword = '';
	let firstName = '';
	let lastName = '';

	$: isEmailValid = email.includes('@');
	$: isPasswordValid = password.length >= 8;
	$: isConfirmPasswordValid = password === confirmPassword;
	$: isFirstNameValid = firstName.length > 0;
	$: isLastNameValid = lastName.length > 0;

	$: isFormValid =
		isEmailValid &&
		isPasswordValid &&
		isConfirmPasswordValid &&
		isFirstNameValid &&
		isLastNameValid;

	$: console.log(
		{ isEmailValid, isPasswordValid, isConfirmPasswordValid, isFirstNameValid, isLastNameValid },
		'isFormValid'
	);
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

		<form method="post" use:enhance>
			<label for="firstName">First name</label>
			<input bind:value={firstName} name="firstName" id="firstName" required />

			<label for="lastName">Last name</label>
			<input bind:value={lastName} name="lastName" id="lastName" required />

			<hr />

			<label for="email">Email</label>
			<input bind:value={email} type="email" name="email" id="email" required />

			<label for="password">Password</label>
			<input bind:value={password} type="password" name="password" id="password" required />

			<label for="confirm">Confirm Password</label>
			<input
				class:invalid={!isConfirmPasswordValid && confirmPassword.length > 0}
				class:valid={isConfirmPasswordValid && confirmPassword.length > 0}
				bind:value={confirmPassword}
				type="password"
				name="confirm"
				id="confirm"
				required
			/>

			<br />

			<div class="checkbox-wrapper">
				<label for="isSubscribed">Subscibe for updates</label>
				<input type="checkbox" name="isSubscribed" id="isSubscribed" checked />
			</div>
			<div class="button-list">
				<button type="submit" class="primary" disabled={!isFormValid} class:disabled={!isFormValid}>
					Signup
				</button>
				<a href="/auth/login">
					<button type="button">Go to Login</button>
				</a>
			</div>
		</form>
	</section>
	<picture class="promo-art">
		<img
			src="https://assets.codepen.io/1506195/unsplash-music-12.avif"
			height="800"
			width="800"
			alt="a random drummer"
		/>
	</picture>
</main>

<style>
	main {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: var(--size-1);
	}

	input {
		border: 1px solid var(--border);
		/* margin-bottom: var(--size-3); */
	}

	label {
		font-size: var(--font-size-0);
		color: var(--link);
		margin-block: var(--size-1);
	}

	hr {
		margin-top: var(--size-7);
		margin-bottom: var(--size-4);
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

	.hero {
		padding: var(--size-10);
		display: grid;
		gap: var(--size-5);
	}

	.hero-message {
		line-height: var(--font-lineheight-0);
	}

	.under-hero {
		color: var(--gray-7);
		font-size: var(--font-size-3);
		word-wrap: break-word;
		margin-block-end: var(--size-3);
	}

	.button-list {
		display: flex;
		gap: var(--size-3);
		margin-top: var(--size-8);
	}

	.disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	.invalid {
		border-color: var(--red-7);
	}

	.valid {
		border-color: var(--green-7);
	}

	.promo-art {
		align-self: stretch;
		& > img {
			block-size: 100%;
			object-fit: cover;
			inline-size: var(--size-15);
			border-radius: var(--radius-round);
		}
	}

	.error-message {
		display: flex;
		flex-direction: row;
		/* color: var(--red-7); */
		background-color: hsl(var(--red-5-hsl) / 30%);
		padding: var(--size-1);
		border-radius: var(--radius-2);
		gap: var(--size-2);
	}

	@media (max-width: 768px) {
		main {
			display: flex;
			flex-direction: column;
		}
		.promo-art > img {
			inline-size: unset;
			border-radius: unset;
		}
	}
</style>
