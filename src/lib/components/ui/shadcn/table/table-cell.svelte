<script lang="ts">
	import type { HTMLTdAttributes } from 'svelte/elements';

	type $$Props = HTMLTdAttributes;

	let className: $$Props['class'] = '';
	export { className as class };
</script>

<td class={`${className}`} {...$$restProps} on:click on:keydown>
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
</style>
