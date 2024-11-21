<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	type $$Props = HTMLAttributes<HTMLDivElement>;

	interface Props {
		class?: $$Props['class'];
		children?: import('svelte').Snippet;
		[key: string]: any
	}

	let { class: className = '', children, ...rest }: Props = $props();

	
</script>

<div class={className} {...rest}>
	{@render children?.()}
</div>

<style>
	div {
		padding-inline: var(--size-6);
		padding-block-end: var(--size-6);
	}

	.noPadding {
		padding: unset;
	}
</style>
