<script lang="ts">
	import type { HTMLTdAttributes } from 'svelte/elements';

	type $$Props = HTMLTdAttributes;

	// eslint-disable-next-line no-undef-init
	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<td
	class={`p-4 align-middle [&:has([role=checkbox])]:pr-0 ${className}`}
	{...$$restProps}
	on:click
	on:keydown>
	<slot />
</td>
