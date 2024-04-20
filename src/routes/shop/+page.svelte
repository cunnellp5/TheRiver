<script lang="ts">
	import MoveDown from 'lucide-svelte/icons/move-down';
</script>

<main>
	<h1>
		<!-- THE RIVE<span id="rotate">R</span> MARKET -->
		THE RIVER MARKET
	</h1>
	<div class="animation">Coming spoon!</div>
</main>

<style>
	main {
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
		height: 100vh;
	}
	/* 
	#rotate {
		background: var(--gradient-1) fixed;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;

		display: inline-block;
		transform: scaleX(-1) rotate(-4deg);
		margin: 0;
		padding: 0;
	} */

	.animation {
		margin-block: var(--size-4);
		animation: var(--animation-float);
		animation-timing-function: var(--ease-elastic-in-out-3);
		animation-duration: infinite;
	}
</style>
