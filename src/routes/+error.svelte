<script lang="ts">
	import { page } from '$app/stores';
</script>

<main class:hype={$page.status === 404}>
	{#if $page.status === 404}
		<h1>The River</h1>
		<section>
			<a href="/shop">
				<h3>Creates</h3>
			</a>
			<a href="/music">
				<h2>&nbsp;&nbsp;Sings</h2>
			</a>
			<a href="/services">
				<h4>Beauty</h4>
			</a>
			<a href="/">
				<h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Home</h5>
			</a>
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
	.hype > h1 {
		font-size: var(--size-15);
	}
	section {
		position: absolute;
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
	a {
		text-decoration: none;
	}
	a:hover {
		text-decoration: underline;
	}
</style>
