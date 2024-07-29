<script>
	// eslint-disable-next-line import/no-unresolved
	import { enhance } from '$app/forms';

	export let form;
	let loading = false;
</script>

<ul>
	<li>Clicking the button below will fetch the latest youtube videos and update the DB</li>
	<li>The <em>/music/videos</em> section will then have the latest videos</li>
</ul>

{#if form}
	<pre>{JSON.stringify(form, null, 2)}</pre>
{/if}

{#if loading}
	<div class="loader">Loading...</div>
{/if}

<form
	method="POST"
	use:enhance={({ cancel }) => {
		loading = true;
		// eslint-disable-next-line no-alert, no-restricted-globals
		if (confirm('This updates our DB with the latest youtube videos. Are you sure?')) {
			return async ({ update }) =>
				update().finally(() => {
					loading = false;
				});
		}
		loading = false;
		return cancel();
	}}>
	<button class="secondary" type="submit">Update DB with latest youtube videos</button>
</form>

<style>
	li {
		margin-block: var(--size-3);
		font-size: var(--font-size-1);
		list-style-type: disc;
	}
	pre {
		border: 1px solid var(--border);
		padding: var(--size-3);
		max-width: var(--size-content-3);
		overflow: auto;
	}
	button {
		margin-block: var(--size-7);
		font-weight: var(--font-weight-6);
	}
</style>
