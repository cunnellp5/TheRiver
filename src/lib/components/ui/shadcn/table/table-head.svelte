<script lang="ts">
	import type { HTMLThAttributes } from 'svelte/elements';

	type $$Props = HTMLThAttributes;

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<th class={`[&:has([role=checkbox])]:pr-0 ${className}`} {...$$restProps}>
	<slot />
</th>

<style>
	th {
		vertical-align: middle;
		background-color: unset;
		padding-inline: var(--size-3);
		height: var(--size-8);
		color: var(--text-2);
		font-weight: 500;
		text-align: left;
	}

	/* :global(&:has([role='checkbox'])) {
		padding-right: 0;
	} */
</style>
