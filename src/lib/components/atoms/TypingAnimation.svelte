<script lang="ts">
	import { onMount } from 'svelte';

	export let text: string = '';
	export let duration: number = 200;

	let displayText = '';
	let i = 0;
	let typingEffect: ReturnType<typeof setInterval>;

	onMount(() => {
		typingEffect = setInterval(() => {
			if (i < text.length) {
				displayText = text.substring(0, i + 1);
				i = i + 1;
			} else {
				clearInterval(typingEffect);
			}
		}, duration);

		return () => {
			clearInterval(typingEffect);
		};
	});
</script>

<h1 class="jumbo headingReset">
	{displayText}
</h1>

<style>
	.jumbo {
		box-shadow: var(--shadow-3);
		border-radius: var(--radius-2);
		background-color: var(--sand-1);
		padding: var(--size-3);
		color: var(--stone-10);
		font-style: normal;
		font-weight: var(--font-weight-9);
		font-size: var(--font-size-fluid-3);
		line-height: var(--font-lineheight-1);
		font-family: 'Atyp BL Display Medium', monospace;
		letter-spacing: 0em;
		text-transform: uppercase;
	}

	@keyframes rainbow {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
</style>
