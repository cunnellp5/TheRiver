<script lang="ts">
	import { enhance } from '$app/forms';
	import CircleAlert from 'lucide-svelte/icons/circle-alert';

	export let form;

	$: console.log(form);
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
			<label for="email">Email</label>
			<input type="email" name="email" id="email" required /><br />

			<label for="name">Name</label>
			<input name="name" id="name" required /><br />

			<label for="username">Username</label>
			<input name="username" id="username" required /><br />

			<label for="password">Password</label>
			<input type="password" name="password" id="password" required /><br />

			<div class="checkbox-wrapper">
				<label for="isSubscribed">Subscibe for updates</label>
				<input type="checkbox" name="isSubscribed" id="isSubscribed" /><br />
			</div>

			<div class="button-list">
				<button type="submit" class="primary">Signup</button>
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

	form {
		display: flex;
		flex-direction: column;
		gap: var(--size-1);
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
