<script lang="ts">
	import styleToString from '$lib/utils/styleToString';

	export let style = {};

	const styleDefault = {
		fontSize: '14px',
		lineHeight: '24px',
		margin: '16px 0',
		...style
	};
</script>

<p style={styleToString(styleDefault)} {...$$restProps}>
	<slot />
</p>
