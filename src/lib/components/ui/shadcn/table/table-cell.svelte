<script lang="ts">
	import type { HTMLTdAttributes } from 'svelte/elements';

	type $$Props = HTMLTdAttributes;

	let className: $$Props['class'] = '';
	export { className as class };
</script>

<td class={`${className}`} {...$$restProps} on:dblclick on:click on:keydown>
	<slot />
</td>

<style>
	/* ELEMENTS */
	td {
		padding: var(--size-3);
		text-align: left;
		&:has([role='checkbox']) {
			padding-right: 0;
		}
	}

	/* CLASSES */
	/* general */
	.full-width {
		width: 100%;
	}
	.center {
		display: flex;
		justify-content: center;
	}
	.end {
		display: flex;
		justify-content: end;
	}
	/* Admin contact table */
	.fixed-width {
		width: var(--size-content-1);
	}
	.keyText {
		color: var(--text-2);
	}
</style>
