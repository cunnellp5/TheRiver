<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	type $$Props = HTMLAttributes<HTMLTableSectionElement>;

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<tbody class={`${className}`} {...$$restProps}>
	<slot />
</tbody>

<style>
	tbody {
		font-weight: var(--font-weight-6);
	}
</style>
