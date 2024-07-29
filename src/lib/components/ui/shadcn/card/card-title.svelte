<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { HeadingLevel } from './index.js';

	type $$Props = HTMLAttributes<HTMLHeadingElement> & {
		tag?: HeadingLevel;
	};

	// eslint-disable-next-line no-undef-init
	let className: $$Props['class'] = undefined;
	export let tag: $$Props['tag'] = 'h3';
	export { className as class };
</script>

<svelte:element this={tag} class={className} {...$$restProps}>
	<slot />
</svelte:element>
