<script lang="ts">
	import styleToString from '$lib/utils/styleToString';

	export let style = {};

	const styleDefaultTable = {
		width: '100%',
		...style
	};

	const styleDefaultTr = {
		display: 'grid',
		gridAutoColumns: 'minmax(0, 1fr)',
		gridAutoFlow: 'column'
	};
</script>

<table
	style={styleToString(styleDefaultTable)}
	align="center"
	border={0}
	cellPadding={0}
	cellSpacing={0}
	role="presentation"
	{...$$restProps}>
	<tbody>
		<tr style={styleToString(styleDefaultTr)}>
			<slot />
		</tr>
	</tbody>
</table>
