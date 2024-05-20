<script>
	import { createEventDispatcher } from 'svelte';
	import { fade } from 'svelte/transition';
	import X from 'lucide-svelte/icons/x';
	// import SuccessIcon from './SuccessIcon.svelte';
	// import ErrorIcon from './ErrorIcon.svelte';
	// import InfoIcon from './InfoIcon.svelte';
	// import CloseIcon from './CloseIcon.svelte';

	const dispatch = createEventDispatcher();

	export let type = 'error';
	export let dismissible = true;
</script>

<article class={type} role="alert" transition:fade>
	<!-- {#if type === 'success'} -->
	<!-- <SuccessIcon width="1.1em" /> -->
	<!-- {:else if type === 'error'} -->
	<!-- <ErrorIcon width="1.1em" /> -->
	<!-- {:else} -->
	<!-- <InfoIcon width="1.1em" /> -->
	<!-- {/if} -->

	<div class="text">
		<slot />
	</div>

	{#if dismissible}
		<button class="close" on:click={() => dispatch('dismiss')}>
			<X />
		</button>
	{/if}
</article>

<style lang="postcss">
	article {
		display: flex;
		align-items: center;
		margin: 0 auto 0.5rem auto;
		border-radius: 0.2rem;
		padding-inline: var(--size-2);
		padding-block: var(--size-4);
		width: var(--size-14);
		color: var(--stone-1);
	}
	.error {
		background: IndianRed;
	}
	.success {
		background: MediumSeaGreen;
	}
	.info {
		background: var(--cyan-7);
	}
	.text {
		margin-left: 1rem;
	}
	button {
		margin: 0 0 0 auto;
		box-shadow: none;
		border: 0 none;
		background: transparent;
		padding: 0;
		color: var(--stone-1);
		font-size: 1rem;
		line-height: 1;
	}
</style>
