<script>
	import { enhance } from '$app/forms';
</script>

<main>
	<section>
		<h1>Reset Password</h1>
		<form method="POST" id="password-reset-request-form" use:enhance>
			<input name="email" type="email" id="email" placeholder="Enter your email" required />
			<button type="submit">Request Password Reset</button>
		</form>
	</section>
</main>

<style>
	main {
		display: flex;
		/* flex-direction: column; */
		justify-content: center;
		/* align-items: center; */
		/* height: 90vh; */
		padding-block: var(--size-11);
	}
	form {
		display: flex;
		flex-direction: column;
		padding-block-start: var(--size-7);
	}

	input {
		margin: 0.5rem;
		padding: 0.5rem;
	}

	button {
		margin: 0.5rem;
		padding: 0.5rem;
	}
</style>
