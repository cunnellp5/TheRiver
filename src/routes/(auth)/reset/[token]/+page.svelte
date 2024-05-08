<script lang="ts">
	import CircleAlert from 'lucide-svelte/icons/circle-alert';
	import Check from 'lucide-svelte/icons/check';
	export let data;

	const { email } = data;

	let confirmPassword = '';
	let password = '';

	$: isConfirmPasswordValid = password === confirmPassword;
	$: isPasswordValid = password.length >= 6;

	// $: isFormValid =
	// 	isEmailValid &&
	// 	isPasswordValid &&
	// 	isConfirmPasswordValid &&
	// 	isFirstNameValid &&
	// 	isLastNameValid;
</script>

<main>
	<section>
		<h1>RESET PASSWORD</h1>

		<form action="">
			<p>{email}</p>
			<!-- <label for="password">password</label>
			<input type="password" id="password" name="password" required />

			<label for="password_confirmation">password confirmation</label>
			<input type="password" id="password_confirmation" name="password_confirmation" required /> -->
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

			<button type="submit">reset password</button>
		</form>
	</section>
</main>

<style>
	main {
		display: flex;
		justify-content: center;
		margin-block-start: var(--size-10);
	}

	form {
		display: flex;
		flex-direction: column;
		gap: var(--size-1);
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
