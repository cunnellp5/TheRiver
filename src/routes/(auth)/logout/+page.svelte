<script lang="ts">
	import Seo from '$lib/components/SEO.svelte';
</script>

<Seo
	title={'Logout - See You Next Time!'}
	description={'You have successfully logged out. Thank you for visiting. We look forward to seeing you again soon!'} />

<main>
	<h2>Logged out.</h2>
	<p>🫶 See you later!</p>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: var(--size-7);
		height: 70vh;
	}
</style>
