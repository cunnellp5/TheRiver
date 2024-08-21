<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { HeadingLevel } from './index.js';

	type $$Props = HTMLAttributes<HTMLHeadingElement> & {
		tag?: HeadingLevel;
	};

	let className: $$Props['class'] = '';
	export let tag: $$Props['tag'] = 'h3';
	export { className as class };
</script>

<svelte:element this={tag} class={className} {...$$restProps}>
	<slot />
</svelte:element>

<style>
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		margin-block: var(--size-4);
	}
</style>
