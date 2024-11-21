<script lang="ts">
	interface Props {
		active?: boolean;
		route?: string;
		display?: string;
		borderStyle?: 'horizontal' | 'vertical'; // New prop
	}

	let {
		active = false,
		route = '',
		display = '',
		borderStyle = 'vertical'
	}: Props = $props();
</script>

<li class:current={active} aria-current={active}>
	<a
		data-sveltekit-noscroll
		class:border-horizontal={borderStyle === 'horizontal'}
		class:border-vertical={borderStyle === 'vertical'}
		href={route}>
		{display}
	</a>
</li>

<style>
	a {
		display: inline-block;
		position: relative;
		transition: color 0.3s ease;
		padding-block: var(--size-1);
		height: 100%;
		color: var(--text-2);
		font-weight: var(--font-weight-7);
		font-size: var(--font-size-0);
		letter-spacing: var(--font-letterspacing-2);
		text-decoration: none;
		text-transform: uppercase;
	}

	a:before {
		position: absolute;
		opacity: 0;
		-webkit-transition: all 0.35s ease;
		transition: all 0.35s ease;
		content: '';
	}
	li a:hover,
	.links .current a {
		color: var(--link-1);
	}

	/* VERTICAL */
	a.border-vertical:before {
		top: -25%;
		right: 0;
		bottom: -25%;
		left: 0;
		border-top: 1px solid var(--link);
		border-bottom: 1px solid var(--link);
	}
	li a.border-vertical:hover:before,
	.links .current a.border-vertical:before {
		top: 0;
		bottom: 0;
		opacity: 1;
	}

	/* HORIZONTAL */
	li a.border-horizontal:hover:before,
	.links .current a.border-horizontal:before {
		right: calc(-1 * var(--size-2));
		left: calc(-1 * var(--size-2));
		opacity: 1;
	}
	a.border-horizontal:before {
		top: 0;
		right: calc(-1 * var(--size-4));
		bottom: 0;
		left: calc(-1 * var(--size-4));
		border-right: 2px solid var(--link);
		border-left: 2px solid var(--link);
	}
</style>
