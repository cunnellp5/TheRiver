<script lang="ts">
	async function subscribe(event: Event) {
		const form = event.target as HTMLFormElement;
		const data = new FormData(form);
		const response = await fetch('/api/newsletter', {
			method: 'POST',
			body: data
		});
		console.log(response);
		// if (response.ok) {
		// 	const { token } = await response.json();
		// 	localStorage.setItem('token', token);
		// 	location.href = '/dashboard';
		// } else {
		// 	const { error } = await response.json();
		// 	alert(error);
		// }
	}
</script>

<main>
	<section class="hero">
		<h1 class="hero-message">
			<div>Signup</div>
		</h1>
		<p class="under-hero">Create an account to book services with Alexis</p>
		<form on:submit|preventDefault={subscribe} method="post">
			<label for="email">Email</label>
			<input name="email" id="email" /><br />
			<label for="username">Username</label>
			<input name="username" id="username" /><br />
			<label for="password">Password</label>
			<input type="password" name="password" id="password" /><br />
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
	}
</style>
