<script lang="ts">
	import type { HTMLTdAttributes } from 'svelte/elements';

	type $$Props = HTMLTdAttributes;

	// eslint-disable-next-line no-undef-init
	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<td class={`[&:has([role=checkbox])]:pr-0 ${className}`} {...$$restProps} on:click on:keydown>
	<slot />
</td>

<style>
	td {
		padding: var(--size-3);
		text-align: left;
		&:has([role='checkbox']) {
			padding-right: 0;
		}
	}
</style>
