<script lang="ts">
	import { enhance } from '$app/forms';
</script>

<main>
	<section class="hero">
		<h1 class="hero-message">
			<div>Signup</div>
		</h1>
		<p class="under-hero">Create an account to book services with Alexis</p>
		<form method="post" use:enhance>
			<label for="username">Username</label>
			<input name="username" id="username" /><br />
			<label for="password">Password</label>
			<input type="password" name="password" id="password" /><br />
			<div class="button-list">
				<button class="primary">Signup</button>
				<a href="/auth/login">
					<button>Go to Login</button>
				</a>
			</div>
		</form>
	</section>
	<picture class="promo-art">
		<img
			src="https://doodleipsum.com/700x700?&sat=-100"
			height="800"
			width="800"
			alt="a random doodle"
		/>
	</picture>
</main>

<style>
	main {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		background: var(--grape-0);
	}

	.hero {
		padding: var(--size-10);
		display: grid;
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

	button {
		background: white;
		color: var(--indigo-8);
		font-size: var(--font-size-3);
		padding-inline: var(--size-8);
		padding-block: var(--size-3);
		border-radius: var(--radius-2);
		box-shadow: var(--shadow-2);
	}

	button.primary {
		background: var(--indigo-8);
		text-shadow: 0 1px 0 var(--indigo-9);
		color: white;
	}

	button.primary:hover {
		background: var(--indigo-7);
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
	}

	@media (max-width: 768px) {
		main {
			display: flex;
			flex-direction: column;
		}
	}
</style>
