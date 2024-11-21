<script lang="ts">
	import type { HTMLTableAttributes } from 'svelte/elements';


	type $$Props = HTMLTableAttributes;

	interface Props {
		captionLocation?: string;
		class?: $$Props['class'];
		children?: import('svelte').Snippet;
		[key: string]: any
	}

	let { captionLocation = 'bottom', class: className = '', children, ...rest }: Props = $props();
	
</script>

<div class="relative w-full overflow-auto">
	<table
		class:caption-bottom={captionLocation === 'bottom'}
		class:caption-top={captionLocation === 'top'}
		class={`w-full text-sm ${className}`}
		{...rest}>
		{@render children?.()}
	</table>
</div>

<style>
	table {
		border: unset;
		border-radius: unset;
		border-collapse: collapse;
		background-color: unset;
		& :where(:global(table:not(:has(tfoot)) tr:last-child td:first-child)),
		:where(:global(table:not(:has(tfoot)) tr:last-child td:last-child)),
		:where(:global(table thead tr:first-child th:first-child)),
		:where(:global(table thead tr:first-child th:last-child)) {
			border-radius: unset;
		}
		& td {
			background-color: unset;
		}
		& :where(:global(tr:not(:last-child))),
		:where(:global(table thead tr:first-child)) {
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
