<script>
	import styleToString from '$lib/utils/styleToString';
	export let style = {};
	export let target = '_blank';
	export let href = '';

	const styleDefault = {
		color: '#067df7',
		textDecoration: 'none',
		...style
	};
</script>

<a {...$$restProps} {href} {target} style={styleToString(styleDefault)}>
	<slot />
</a>
