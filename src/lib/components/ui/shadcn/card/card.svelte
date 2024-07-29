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
		box-shadow: var(--shadow-1);
		border: 1px solid var(--border);
		border-radius: var(--radius-2);
		background: var(--surface-2);
		color: var(--text-1);
	}
</style>
