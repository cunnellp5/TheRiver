<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	type $$Props = HTMLAttributes<HTMLTableRowElement> & {
		'data-state'?: unknown;
	};

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<tr
	class={`data-[state=selected]:bg-muted border-b transition-colors ${className}`}
	{...$$restProps}
	on:click
	on:dblclick
	on:keydown>
	<slot />
</tr>

<style>
	:where(tbody tr):hover {
		cursor: pointer;
	}

	/* :where(tbody tr):hover {
		background-color: hsl(var(--stone-2-hsl) / 0.2);
	} */

	/* todo figure out selected states */
	/* [data-\[state='selected\]'] {
		background-color: var(--text-1);
	} */

	/* TODO add transitions */
	/* .transition-colors {
		transition-duration: var(--transition-duration-0);
		transition-property: background-color;
	} */
</style>
