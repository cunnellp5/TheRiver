<script lang="ts">
	import styleToString from '$lib/utils/styleToString';

	
	interface Props {
		style?: any;
		class?: string | undefined;
		alt?: string;
		src?: string;
		width?: string;
		height?: string;
		[key: string]: any
	}

	let {
		style = {},
		class: className = undefined,
		alt = '',
		src = '',
		width = '0',
		height = '0',
		...rest
	}: Props = $props();

	const styleDefault = {
		display: 'block',
		outline: 'none',
		border: 'none',
		textDecoration: 'none',
		...style
	};
</script>

<img
	{alt}
	{src}
	{width}
	{height}
	style={styleToString(styleDefault)}
	{...rest}
	class={className} />
