<script lang="ts">
	import Seo from '$lib/components/SEO.svelte';
	import { addToast } from '$lib/stores/toast';
	import { enhance } from '$app/forms';
	import Check from 'lucide-svelte/icons/check';
	import { LoaderCircle } from 'lucide-svelte';

	// export let form;

	let loading: boolean = $state(false);
	let disabledInputs: boolean = $state(false);
</script>

<Seo
	title={'Reset Password - Secure Your Account'}
	description={'Reset your password to regain access to your account. Follow the instructions to create a new, secure password and keep your account safe.'} />

<main>
	<section>
		<h1>Reset Password</h1>
		<p>You will be sent a link to reset your password. Enter your email below.</p>
		{#if disabledInputs}
			<div class="submitted">
				<Check />&nbsp;Submitted!
			</div>
		{:else}
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
									type: 'message',
									iconType: 'check',
									dismissible: true,
									timeout: 5000
								});
								loading = false;
								disabledInputs = true;
							})
							.catch(() => {
								cancel();
							});
				}}>
				<input
					name="email"
					type="email"
					id="email"
					placeholder="Enter your email"
					required
					disabled={disabledInputs} />

				{#if loading}
					<button disabled={loading}>
						<div class="spinner">
							<LoaderCircle />
						</div>
						Loading
					</button>
				{:else}
					<button type="submit" disabled={loading} class="update-button">Send Request</button>
				{/if}
			</form>
		{/if}
	</section>
</main>

<style>
	h1 {
		margin-block: var(--size-7);
		text-align: center;
	}
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
		color: var(--text-2);
		font-size: var(--font-size-0);
		text-align: center;
	}
	.submitted {
		display: flex;
		justify-content: center;
		margin-block: var(--size-7);
	}
</style>
