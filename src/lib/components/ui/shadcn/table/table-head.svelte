<script lang="ts">
	import type { HTMLThAttributes } from 'svelte/elements';

	type $$Props = HTMLThAttributes;

	// eslint-disable-next-line no-undef-init
	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<th
	class={`text-muted-foreground h-12 px-4 text-left align-middle font-medium [&:has([role=checkbox])]:pr-0
		${className}`}
	{...$$restProps}>
	<slot />
</th>
