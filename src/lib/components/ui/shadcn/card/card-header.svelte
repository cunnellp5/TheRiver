<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	type $$Props = HTMLAttributes<HTMLDivElement>;

	let className: $$Props['class'] = '';
	export { className as class };
</script>

<div class={className} {...$$restProps}>
	<slot />
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: var(--size-6);
	}

	.noPadding {
		padding: unset;
	}
</style>
