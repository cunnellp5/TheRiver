<script lang="ts">
	import CircleAlert from 'lucide-svelte/icons/circle-alert';
	import { addToast } from '$lib/stores/toast';
	import { enhance } from '$app/forms';

	export let form;

	let email = '';
	let password = '';

	$: isFormValid = email.includes('@') && password.length >= 6;
</script>

<main>
	<section class="hero">
		<h1 class="hero-message">
			<div>Login</div>
		</h1>
		<p class="under-hero">Login to book or view appointments</p>

		{#if form?.message}
			<!-- TODO check to ssee if .errorMessage looks better -->
			<p class="error-message"><CircleAlert />{form.message}</p>
		{/if}

		<form
			method="post"
			use:enhance={({ cancel }) =>
				async ({ update, result }) =>
					update()
						.then(() => {
							if (result.status === 302) {
								addToast({ message: 'Logged in!', type: 'info', dismissible: true, timeout: 5000 });
							}
						})
						.catch(() => {
							cancel();
						})}>
			<div class="email-wrapper">
				<label for="email">Email</label>
				<input bind:value={email} type="email" name="email" id="email" required />
			</div>

			<div class="pw-wrapper">
				<label for="password">Password</label>
				<a href="/reset"> Forgot password? </a>
			</div>
			<input bind:value={password} type="password" name="password" id="password" required />

			<div class="button-list">
				<button disabled={!isFormValid} class:disabled={!isFormValid} class="primary" type="submit">
					Login
				</button>
				<hr />
				<a href="/signup"> Don't have an account? Sign up here. </a>
			</div>
		</form>
	</section>
</main>

<style>
	@import '../auth.css';

	.under-hero {
		font-size: var(--font-size-1);
	}

	.email-wrapper {
		display: flex;
		flex-direction: column;
		padding-block: var(--size-3);
	}

	.pw-wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: var(--font-size-0);
	}

	@media (max-width: 768px) {
		main {
			display: flex;
			flex-direction: column;
		}
	}
</style>
