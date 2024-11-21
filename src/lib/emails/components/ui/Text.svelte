<script lang="ts">
	import styleToString from '$lib/utils/styleToString';

	let { style = {}, children, ...rest } = $props();

	const styleDefault = {
		fontSize: '14px',
		lineHeight: '24px',
		margin: '16px 0',
		...style
	};
</script>

<p style={styleToString(styleDefault)} {...rest}>
	{@render children?.()}
</p>
