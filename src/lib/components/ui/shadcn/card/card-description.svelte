<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	type $$Props = HTMLAttributes<HTMLParagraphElement>;

	let className: $$Props['class'] = '';
	export { className as class };
</script>

<p class={className} {...$$restProps}>
	<slot />
</p>

<style>
	p {
		color: var(--text-2);
		font-style: normal;
		font-weight: var(--font-weight-4);
		font-size: var(--font-size-3);
		font-family: 'Ambit Regular';
		letter-spacing: 0em;
	}
</style>
