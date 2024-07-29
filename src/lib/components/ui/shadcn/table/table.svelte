<script lang="ts">
	import type { HTMLTableAttributes } from 'svelte/elements';

	type $$Props = HTMLTableAttributes;

	// eslint-disable-next-line no-undef-init
	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<div class="relative w-full overflow-auto">
	<table class={`w-full caption-bottom text-sm ${className}`} {...$$restProps}>
		<slot />
	</table>
</div>
