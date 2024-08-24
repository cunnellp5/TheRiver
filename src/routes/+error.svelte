<script lang="ts">
	import { page } from '$app/stores';
</script>

<main class:hype={$page.status === 404} class="app-layout">
	{#if $page.status === 404}
		<h1>The River</h1>
		<section>
			<a href="/">
				<p>Home</p>
			</a>
			<a href="/music">
				<p>Music</p>
			</a>
			<a href="/services">
				<p>Services</p>
			</a>
			<a href="/shop">
				<p>Merch</p>
			</a>
			<a href="/blog">
				<p>Blog</p>
			</a>
			<a href="/contact">
				<p>Contact</p>
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
		display: block;
		transition: 0.1s ease-in-out;
		text-decoration: none;
	}
	a:hover {
		/* text-decoration: underline; */
		transform: scale(1.2);
	}
</style>
