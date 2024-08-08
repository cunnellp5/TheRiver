<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	type $$Props = HTMLAttributes<HTMLParagraphElement>;

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<p class={className} {...$$restProps}>
	<slot />
</p>

<style>
	p {
		color: var(--text-2);
		font-size: var(--font-size-0);
	}
</style>
