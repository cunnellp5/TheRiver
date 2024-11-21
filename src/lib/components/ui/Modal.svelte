<script lang="ts">
	import { run, self, createBubbler, stopPropagation } from 'svelte/legacy';

	const bubble = createBubbler();
	import { createEventDispatcher } from 'svelte';

	interface Props {
		showModal: boolean;
		overrideButtons?: boolean;
		header?: import('svelte').Snippet;
		children?: import('svelte').Snippet;
		buttons?: import('svelte').Snippet;
	}

	let {
		showModal = $bindable(),
		overrideButtons = false,
		header,
		children,
		buttons
	}: Props = $props();
	// export let buttonText: string = 'Close';

	const dispatch = createEventDispatcher();

	let dialog: HTMLDialogElement = $state();

	run(() => {
		if (dialog && showModal === true) {
			dialog.showModal();
		} else if (dialog && showModal === false) {
			dialog.close();
		}
	});
</script>

<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_noninteractive_element_interactions -->
<dialog
	bind:this={dialog}
	onclose={() => {
		showModal = false;
		dispatch('close');
	}}
	onclick={self(() => dialog.close())}>
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div onclick={stopPropagation(bubble('click'))}>
		{@render header?.()}
		<hr />
		{@render children?.()}
		<hr />
		{#if overrideButtons}
			{@render buttons?.()}
		{/if}
		{#if !overrideButtons}
			<button onclick={() => dialog.close()}>Close</button>
		{/if}
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
