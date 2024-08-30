<script lang="ts">
	import type { HTMLThAttributes } from 'svelte/elements';

	type $$Props = HTMLThAttributes;

	let className: $$Props['class'] = '';
	export { className as class };
</script>

<th class={`${className}`} {...$$restProps}>
	<slot />
</th>

<style>
	th {
		vertical-align: middle;
		background-color: unset;
		/* background-color: hsl(var(--stone-10-hsl) / 0.2); */
		padding-inline: var(--size-3);
		height: var(--size-8);
		color: var(--text-2);
		/* color: var(--link); */
		font-weight: var(--font-weight-0);
		text-align: left;
	}

	/* :global(&:has([role='checkbox'])) {
		padding-right: 0;
	} */
</style>
