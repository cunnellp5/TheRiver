<script lang="ts">
	import { enhance } from '$app/forms';
	import CircleAlert from 'lucide-svelte/icons/circle-alert';

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
				<button disabled={!isFormValid} class:disabled={!isFormValid} class="primary" type="submit"
					>Login</button
				>
				<hr />
				<a href="/auth/signup"> Don't have an account? Sign up here. </a>
			</div>
		</form>
	</section>
	<picture class="promo-art">
		<img
			src="https://assets.codepen.io/1506195/unsplash-music-12.avif"
			height="500"
			width="800"
			alt="a random doodle"
		/>
	</picture>
</main>

<style>
	@import '../auth.css';

	main {
		flex-direction: row-reverse;
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
