<script>
	import styleToString from '$lib/utils/styleToString';
	export let style = {};
	export let as = 'h1';
</script>

<svelte:element this={as} style={styleToString({ ...style })} {...$$restProps}>
	<slot />
</svelte:element>
