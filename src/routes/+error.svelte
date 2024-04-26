<script lang="ts">
	// eslint-disable-next-line import/no-unresolved
	import { page } from '$app/stores';
</script>

<main>
	{#if $page.status === 404}
		<h1>The River</h1>
		<section>
			<div>
				<h3>Creates</h3>
				<h2>&nbsp;&nbsp;Sings</h2>
				<h4>Beauty</h4>
				<a href="/">
					<h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Home</h5>
				</a>
			</div>
		</section>
	{:else if $page.status === 500}
		<h1>We weren't expecting that</h1>
		<p>We're investigating the issue.</p>
	{:else}
		<h1>{$page.status}</h1>
		<p>{$page.error?.message}</p>
		<a href="/">Home</a>
	{/if}
</main>

<style>
	h1 {
		font-size: var(--size-15);
		/* letter-spacing: var(--size-8); */
	}
	section {
		position: absolute;
		/* flex-direction: row; */
		justify-content: start;
	}

	main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	p {
		color: var(--text-2);
		font-weight: 800;
		font-size: var(--size-3);
		font-family: var(--font-mono);
		text-transform: uppercase;
	}
</style>
