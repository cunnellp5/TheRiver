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
		left: 0;
		flex-direction: column;
		justify-content: center;
		z-index: 1000;
		margin-top: 1rem;
		width: 100%;
	}
</style>
