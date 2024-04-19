<script lang="ts">
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
		height: 60vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	p {
		font-weight: 800;
		color: var(--text-2);
		font-size: var(--size-3);
		text-transform: uppercase;
		font-family: var(--font-mono);
	}
</style>
