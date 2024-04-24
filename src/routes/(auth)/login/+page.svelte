<script lang="ts">
	import CircleAlert from 'lucide-svelte/icons/circle-alert';
	// eslint-disable-next-line import/no-unresolved
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
			<p class="error-message"><CircleAlert />{form.message}</p>
		{/if}

		<form method="post" use:enhance>
			<label for="email">Email</label>
			<input bind:value={email} type="email" name="email" id="email" required />

			<label for="password">Password</label>
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

	@media (max-width: 768px) {
		main {
			display: flex;
			flex-direction: column;
		}
	}
</style>
