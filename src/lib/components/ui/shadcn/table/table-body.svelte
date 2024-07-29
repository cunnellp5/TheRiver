<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	type $$Props = HTMLAttributes<HTMLTableSectionElement>;

	// eslint-disable-next-line no-undef-init
	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<tbody class={`[&_tr:last-child]:border-0 ${className}`} {...$$restProps}>
	<slot />
</tbody>

<style>
	tbody {
		font-weight: var(--font-weight-6);
	}
</style>
