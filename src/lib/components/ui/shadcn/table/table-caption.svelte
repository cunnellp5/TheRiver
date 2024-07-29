<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	type $$Props = HTMLAttributes<HTMLTableCaptionElement>;

	// eslint-disable-next-line no-undef-init
	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<caption class={`text-muted-foreground mt-4 text-sm ${className}`} {...$$restProps}>
	<slot />
</caption>
