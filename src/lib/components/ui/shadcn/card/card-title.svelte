<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { HeadingLevel } from './index.js';

	type $$Props = HTMLAttributes<HTMLHeadingElement> & {
		tag?: HeadingLevel;
	};

	let className: $$Props['class'] = '';
	export let tag: $$Props['tag'] = 'h3';
	export { className as class };
</script>

<svelte:element this={tag} class={className} {...$$restProps}>
	<slot />
</svelte:element>

<style>
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		margin-block: var(--size-6);
		/* max-width: var(--size-content-1); */
	}

	.funText {
		background: unset;
		-webkit-background-clip: unset;
		-webkit-text-fill-color: unset;
		background-clip: unset;

		color: var(--text-1);
		font-style: normal;
		font-weight: var(--font-weight-4);
		font-size: var(--font-size-8);
		line-height: 1;
		font-family: 'Atyp BL Display Medium';
		letter-spacing: 0em;
	}

	@media (max-width: 768px) {
		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			font-size: var(--font-size-4);
		}
		.funText {
			font-size: var(--font-size-6);
		}
	}
</style>
