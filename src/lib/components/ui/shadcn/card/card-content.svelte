<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	type $$Props = HTMLAttributes<HTMLDivElement>;

	// eslint-disable-next-line no-undef-init
	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<div class={className} {...$$restProps}>
	<slot />
</div>

<style>
	div {
		padding-inline: var(--size-6);
		padding-block-end: var(--size-6);
	}
</style>
