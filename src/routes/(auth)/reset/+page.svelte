<script>
	import Seo from '$lib/components/SEO.svelte';
	import { addToast } from '$lib/stores/toast';
	import { enhance } from '$app/forms';

	export let form;

	let loading = false;
</script>

<Seo
	title={'Reset Password - Secure Your Account'}
	description={'Reset your password to regain access to your account. Follow the instructions to create a new, secure password and keep your account safe.'} />

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
								message: 'Your request was sent to the provided address',
								type: 'success',
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
			{:else if form && form.success}
				<button disabled> Submitted! </button>
			{:else}
				<button type="submit" disabled={loading} class="update-button">
					Request Password Reset
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
		gap: var(--size-4);
		padding-block-start: var(--size-7);
	}
	input {
		padding: var(--size-2);
	}
	p {
		margin-block: var(--size-2);
		color: var(--link);
		font-size: var(--font-size-0);
		text-align: center;
	}
</style>
