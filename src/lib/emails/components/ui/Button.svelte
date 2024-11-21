<script lang="ts">
	import styleToString from '$lib/utils/styleToString';

	interface Props {
		href?: string;
		style?: any;
		pX?: number;
		pY?: number;
		target?: string;
		children?: import('svelte').Snippet;
		[key: string]: any
	}

	let {
		href = '',
		style = {},
		pX = 0,
		pY = 0,
		target = '_blank',
		children,
		...rest
	}: Props = $props();

	const pxToPt = (px: string) => (isNaN(Number(px)) ? null : (parseInt(px, 10) * 3) / 4);

	const y = pY * 2;

	const textRaise = pxToPt(y.toString());

	const buttonStyle = (style2: { [key: string]: string | number }) => {
		const paddingY = style2?.pY || 0;
		const paddingX = style2?.pX || 0;
		return {
			...style2,
			lineHeight: '100%',
			textDecoration: 'none',
			display: 'inline-block',
			maxWidth: '100%',
			padding: `${paddingY}px ${paddingX}px`
		};
	};

	const buttonTextStyle = (style2: { [key: string]: string | number }) => {
		const paddingY = style2?.pY || 0;
		return {
			...style2,
			maxWidth: '100%',
			display: 'inline-block',
			lineHeight: '120%',
			textDecoration: 'none',
			textTransform: 'none',
			msoPaddingAlt: '0px',
			msoTextRaise: pxToPt(paddingY.toString()) || '0px'
		};
	};
</script>

<a {...rest} {href} {target} style={styleToString(buttonStyle({ ...style, pX, pY }))}>
	<span>
		{@html `<!--[if mso]><i style="letter-spacing: ${pX}px;mso-font-width:-100%;mso-text-raise:${textRaise}" hidden>&nbsp;</i><![endif]-->`}
	</span>
	<span style={styleToString(buttonTextStyle({ ...style, pX, pY }))}>
		{@render children?.()}
	</span>
	<span>
		{@html `<!--[if mso]><i style="letter-spacing: ${pX}px;mso-font-width:-100%" hidden>&nbsp;</i><![endif]-->`}
	</span>
</a>
