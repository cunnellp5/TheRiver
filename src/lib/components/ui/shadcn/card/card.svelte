<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	type $$Props = HTMLAttributes<HTMLDivElement>;

	let className: $$Props['class'] = undefined;

	export { className as class };
</script>

<div class={className} {...$$restProps}>
	<slot />
</div>

<style>
	div {
		box-shadow: var(--shadow-1);
		border: 1px solid var(--border);
		border-radius: var(--radius-2);
		background: var(--surface-2);
		color: var(--text-1);
	}

	.unset {
		box-shadow: unset;
		border: unset;
		border-radius: unset;
		background: unset;
		color: unset;
	}
	.option1 {
		border: unset;
		border-radius: unset;
		background: var(--surface-4);
		height: 60vh;
		color: var(--text-1);
		& > a > div {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
		}
	}
	.option2 {
		border: unset;
		border-radius: unset;
		background: unset;
		height: 60vh;
		color: var(--text-1);
		& > a > div {
			display: flex;
			flex-direction: row-reverse;
			justify-content: space-between;
			align-items: center;
		}
	}
</style>
