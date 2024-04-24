<script lang="ts">
	// eslint-disable-next-line import/no-unresolved
	import { page } from '$app/stores';
</script>

<main>
	{#if $page.status >= 400 && $page.status < 500}
		<h1>{$page.error?.message}</h1>
		<a href="/posts">See the blogs.</a>
	{:else if $page.status === 500}
		<h1>Didnt expect that.</h1>
		<p>We're investigating the issue.</p>
	{/if}
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 60vh;
	}

	p {
		color: var(--text-2);
		font-weight: 800;
		font-size: var(--size-3);
		font-family: var(--font-mono);
		text-transform: uppercase;
	}
</style>
