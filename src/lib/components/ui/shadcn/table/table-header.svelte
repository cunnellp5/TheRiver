<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	type $$Props = HTMLAttributes<HTMLTableSectionElement>;

	// eslint-disable-next-line no-undef-init
	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<thead class={`[&_tr]:border-b ${className}`} {...$$restProps} on:click on:keydown>
	<slot />
</thead>
