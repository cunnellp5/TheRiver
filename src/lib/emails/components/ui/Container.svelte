<script>
	import styleToString from '$lib/utils/styleToString';

	export let style = {};
	const styles = { maxWidth: '37.5em', ...style };
	const inlineStyle = styleToString({ ...styles });
</script>

<div>
	{@html `<!--[if mso | IE]>
            <table role="presentation" width="100%" align="center" style="${inlineStyle}"><tr><td></td><td style="width:37.5em;background:#ffffff">
          <![endif]-->`}
</div>
<div {...$$restProps} style={inlineStyle}>
	<slot />
</div>
<div>
	{@html `<!--[if mso | IE]>
            </td><td></td></tr></table>
            <![endif]-->`}
</div>
