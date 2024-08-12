<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	type $$Props = HTMLAttributes<HTMLTableCaptionElement>;

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<caption class={`${className}`} {...$$restProps}>
	<slot />
</caption>

<style>
	.text-muted-foreground {
		color: var(--text-2);
	}

	.text-sm {
		font-size: var(--font-size-0);
	}

	.mt-4 {
		margin-block-start: var(--size-3);
	}
</style>
