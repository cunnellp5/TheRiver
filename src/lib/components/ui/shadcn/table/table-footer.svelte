<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	type $$Props = HTMLAttributes<HTMLTableSectionElement>;

	let className: $$Props['class'] = '';
	export { className as class };
</script>

<tfoot class={`${className}`} {...$$restProps}>
	<slot />
</tfoot>

<style>
	.bg-primary {
		background-color: var(--surface-4);
	}

	.text-primary-foreground {
		color: var(--text-1);
	}

	.font-medium {
		font-weight: 500;
	}
</style>
