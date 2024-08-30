<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let showModal: boolean;
	export let overrideButtons: boolean = false;

	const dispatch = createEventDispatcher();

	let dialog: HTMLDialogElement;

	$: if (dialog && showModal === true) {
		dialog.showModal();
	} else if (dialog && showModal === false) {
		dialog.close();
	}
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
		<slot />
		<hr />
		{#if overrideButtons}
			<slot name="buttons" />
		{/if}
		{#if !overrideButtons}
			<button on:click={() => dialog.close()}>Close</button>
		{/if}
	</div>
</dialog>

<style>
	hr {
		margin-block: var(--size-8);
	}
	dialog {
		animation: slideUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
		margin-top: unset;
		border: none;
		border-radius: 0.2em;
		padding: 0;
		padding-top: var(--size-4);
		width: 100vw;
	}
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.3);
	}
	dialog > div {
		padding: var(--size-3);
	}
	dialog[open] {
		animation: slideDown 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes slideDown {
		from {
			transform: translateY(-100%);
		}
		to {
			transform: translateY(0);
		}
	}
	@keyframes slideUp {
		0% {
			display: block;
			transform: translateY(0);
			/* transform: scaleY(1); */
			/* opacity: 1; */
		}

		100% {
			display: none;
			transform: translateY(-100%);
			/* opacity: 0; */
		}
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
