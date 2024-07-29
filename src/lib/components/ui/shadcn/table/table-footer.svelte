<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	type $$Props = HTMLAttributes<HTMLTableSectionElement>;

	// eslint-disable-next-line no-undef-init
	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<tfoot class={`bg-primary text-primary-foreground font-medium ${className}`} {...$$restProps}>
	<slot />
</tfoot>
