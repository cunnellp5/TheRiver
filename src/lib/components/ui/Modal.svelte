<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let showModal: boolean;
	export let overrideButtons: boolean = false;
	export let buttonText: string = 'Close';

	const dispatch = createEventDispatcher();

	let dialog: HTMLDialogElement;

	$: if (dialog && showModal === true) dialog.showModal();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
	bind:this={dialog}
	on:close={() => {
		showModal = false;
		dispatch('close');
	}}
	on:click|self={() => dialog.close()}>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div on:click|stopPropagation>
		<slot name="header" />
		<hr />
		<slot />
		<hr />
		<button on:click={() => dialog.close()}>{buttonText}</button>
	</div>
</dialog>

<style>
	hr {
		margin-block: var(--size-8);
	}
	dialog {
		border: none;
		border-radius: 0.2em;
		padding: 0;
		max-width: 32em;
	}
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.3);
	}
	dialog > div {
		padding: 1em;
	}
	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	button {
		display: block;
	}
</style>
