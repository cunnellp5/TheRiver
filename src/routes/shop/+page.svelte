<script lang="ts">
	import MoveDown from 'lucide-svelte/icons/move-down';
</script>

<main>
	<div class="hero">
		<h1>THE RIVER CREATES</h1>
		<div class="arrow">Coming soon!</div>
	</div>
</main>

<style>
	h1 {
		margin-block: var(--size-7);
	}

	main {
		margin: 0 auto;
	}

	h1 {
		margin-bottom: 0.5rem;
		/* text-transform: uppercase; */
	}

	p {
		margin-top: 0;
	}

	.hero {
		height: calc(100vh - var(--size-8));
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.arrow {
		margin-block: var(--size-4);
		animation: var(--animation-float);
		animation-timing-function: var(--ease-elastic-in-out-3);
		animation-duration: infinite;
	}
</style>
