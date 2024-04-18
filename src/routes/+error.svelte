<script lang="ts">
	import { page } from '$app/stores';
</script>

<main>
	{#if $page.status === 404}
		<h1>You must be lost.</h1>
		<a href="/">Go Home</a>
	{:else if $page.status === 500}
		<h1>Uh oh. We weren't expecting that</h1>
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
