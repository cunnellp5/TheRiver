<script lang="ts">
	import RainbowBar from './RainbowBar.svelte';

	export let duration = '300ms';
	export let offset = 0;
	export let tolerance = 0;

	let headerClass = 'show';
	let y = 0;
	let lastY = 0;

	function deriveClass(y: number, dy: number) {
		if (y < offset) {
			return 'show';
		}
		if (Math.abs(dy) <= tolerance) {
			return headerClass;
		}
		if (dy > 0) {
			return 'show';
		}
		return 'hide';
	}

	function updateClass(y: number) {
		const dy = lastY - y;
		lastY = y;
		return deriveClass(y, dy);
	}

	function setTransitionDuration(node: HTMLDivElement) {
		node.style.transitionDuration = duration;
	}

	$: headerClass = updateClass(y);
</script>

<svelte:window bind:scrollY={y} />

<div use:setTransitionDuration class={headerClass}>
	<RainbowBar />
</div>

<div use:setTransitionDuration class={headerClass}>
	<slot />
</div>

<style>
	div {
		position: sticky;
		top: 0;
		z-index: 1000;
		transition: transform 300ms linear;
		background: var(--background);
		width: 100%;
	}
	.show {
		transform: translateY(0%);
	}
	.hide {
		transform: translateY(-100%);
	}
</style>
