<script lang="ts">
	import RainbowBar from './RainbowBar.svelte';
	import { ShowHideScroll } from '$lib/utils/classes/ShowHideScroll';

	const CssScrollToggler = new ShowHideScroll();
	let scroll = 0;
</script>

<svelte:window bind:scrollY={scroll} />

<div use:CssScrollToggler.setTransitionDuration class={CssScrollToggler.updateClass(scroll)}>
	<RainbowBar />
</div>

<div use:CssScrollToggler.setTransitionDuration class={CssScrollToggler.updateClass(scroll)}>
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
