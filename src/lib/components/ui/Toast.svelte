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
		padding: 0.75rem 1.5rem;
		width: 20rem;
		color: white;
	}
	.error {
		background: IndianRed;
	}
	.success {
		background: MediumSeaGreen;
	}
	.info {
		background: SkyBlue;
	}
	.text {
		margin-left: 1rem;
	}
	button {
		margin: 0 0 0 auto;
		border: 0 none;
		background: transparent;
		padding: 0;
		color: white;
		font-size: 1rem;
		line-height: 1;
	}
</style>
