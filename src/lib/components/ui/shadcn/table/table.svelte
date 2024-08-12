<script lang="ts">
	import type { HTMLTableAttributes } from 'svelte/elements';

	export let captionLocation = 'bottom';

	type $$Props = HTMLTableAttributes;

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<div class="relative w-full overflow-auto">
	<table
		class:caption-bottom={captionLocation === 'bottom'}
		class:caption-top={captionLocation === 'top'}
		class={`w-full text-sm ${className}`}
		{...$$restProps}>
		<slot />
	</table>
</div>

<style>
	table {
		border: unset;
		border-radius: unset;
		border-collapse: collapse;
		background-color: unset;
		& :where(table:not(:has(tfoot)) tr:last-child td:first-child),
		:where(table:not(:has(tfoot)) tr:last-child td:last-child),
		:where(table thead tr:first-child th:first-child),
		:where(table thead tr:first-child th:last-child) {
			border-radius: unset;
		}
		& td {
			background-color: unset;
		}
		& :where(tr:not(:last-child)),
		:where(table thead tr:first-child) {
			border-bottom: 1px solid var(--stone-8);
		}
	}

	.relative {
		position: relative;
	}
	.overflow-auto {
		overflow: auto;
	}
	.w-full {
		width: 100%;
	}
	.caption-bottom {
		caption-side: bottom;
	}
	.text-sm {
		font-size: var(--font-size-0);
	}
</style>
