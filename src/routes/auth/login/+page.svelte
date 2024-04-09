<script lang="ts">
	import { enhance } from '$app/forms';
</script>

<main>
	<section class="hero">
		<h1 class="hero-message">
			<div>Login</div>
		</h1>
		<p class="under-hero">Login to book a new appointment</p>
		<form method="post" use:enhance>
			<label for="username">Username</label>
			<input name="username" id="username" /><br />

			<label for="password">Password</label>
			<input type="password" name="password" id="password" /><br />

			<div class="button-list">
				<button class="primary" type="submit">Login</button>
				<a href="/auth/signup">
					<button type="button">Go to Signup</button>
				</a>
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
	main {
		display: flex;
		flex-direction: row-reverse;
		align-items: center;
		justify-content: center;
		height: 100%;
	}

	.hero {
		display: grid;
		padding: var(--size-10);
		gap: var(--size-5);
	}

	.hero-message {
		display: grid;
		grid-template-columns: max-content;
		color: var(--gray-9);
		line-height: var(--font-lineheight-0);
	}

	.hero-message > div:last-child {
		color: var(--indigo-7);
	}

	.under-hero {
		color: var(--gray-7);
		font-size: var(--font-size-4);
		margin-block-end: var(--size-3);
	}

	.button-list {
		display: flex;
		gap: var(--size-3);
	}

	form {
		display: flex;
		flex-direction: column;
		gap: var(--size-1);
	}

	.promo-art {
		align-self: stretch;
	}

	.promo-art > img {
		block-size: 100%;
		object-fit: cover;
		inline-size: var(--size-15);
		border-radius: var(--radius-round);
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
