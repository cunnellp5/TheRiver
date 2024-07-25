<script lang="ts">
	import Toast from './Toast.svelte';

	import { dismissToast, toasts } from '../../stores/toast';
</script>

{#if $toasts}
	<section>
		{#each $toasts as toast (toast.id)}
			<Toast
				type={toast.type}
				dismissible={toast.dismissible}
				on:dismiss={() => dismissToast(toast.id)}>{toast.message}</Toast>
		{/each}
	</section>
{/if}

<style lang="postcss">
	section {
		display: flex;
		position: fixed;
		top: 0;
		right: 0;
		flex-direction: column;
		justify-content: center;
		z-index: var(--layer-important);
		margin-top: var(--size-4);
		margin-right: var(--size-4);
	}
</style>
