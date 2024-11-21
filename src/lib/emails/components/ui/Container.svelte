<script lang="ts">
	import styleToString from '$lib/utils/styleToString';

	let { style = {}, children, ...rest } = $props();
	const styles = { maxWidth: '37.5em', ...style };
	const inlineStyle = styleToString({ ...styles });
</script>

<div>
	{@html `<!--[if mso | IE]>
            <table role="presentation" width="100%" align="center" style="${inlineStyle}"><tr><td></td><td style="width:37.5em;background:#ffffff">
          <![endif]-->`}
</div>
<div {...rest} style={inlineStyle}>
	{@render children?.()}
</div>
<div>
	{@html `<!--[if mso | IE]>
            </td><td></td></tr></table>
            <![endif]-->`}
</div>
