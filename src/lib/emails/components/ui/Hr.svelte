<script lang="ts">
	import styleToString from '$lib/utils/styleToString';
	export let style = {};
	const styleDefault = {
		width: '100%',
		border: 'none',
		borderTop: '1px solid #eaeaea',
		...style
	};
</script>

<hr style={styleToString(styleDefault)} {...$$restProps} />
