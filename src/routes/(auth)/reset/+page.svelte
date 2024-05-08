<script>
	import { addToast } from '$lib/stores/toast';
	// eslint-disable-next-line import/no-unresolved
	import { enhance } from '$app/forms';

	export let form;

	let loading = false;
</script>

<main>
	<section>
		<h1>REQUEST RESET</h1>
		<form
			method="POST"
			id="password-reset-request-form"
			use:enhance={({ cancel }) => {
				loading = true;
				return async ({ update }) =>
					update()
						.then(() => {
							addToast({
								message:
									'An email should should be arriving shortly. Feel free to close this window',
								type: 'info',
								dismissible: true
							});
							loading = false;
						})
						.catch(() => {
							cancel();
						});
			}}>
			<input name="email" type="email" id="email" placeholder="Enter your email" required />

			{#if loading}
				<button disabled={loading}> loading... </button>
			{:else}
				<button type="submit" disabled={loading}>
					{form && form.success ? 'Submitted!' : 'Request Password Reset'}
				</button>
			{/if}
		</form>

		{#if form && form.message}
			<p>{form.message}</p>
		{/if}
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

	p {
		margin-block: var(--size-7);
		text-align: center;
	}
</style>
