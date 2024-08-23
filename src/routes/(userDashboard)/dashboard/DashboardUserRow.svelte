<script lang="ts">
	import * as Table from '$lib/components/ui/shadcn/table';
	import Pencil from 'lucide-svelte/icons/pencil';
	import Save from 'lucide-svelte/icons/save';
	import X from 'lucide-svelte/icons/x';
	import { enhance } from '$app/forms';
	import { tick } from 'svelte';

	export let key;
	export let value: string;
	export let id;

	let isEditing = false;
	let inputElement: HTMLInputElement;

	function editing() {
		isEditing = true;

		tick().then(() => {
			if (inputElement) {
				inputElement.focus();
			}
		});
	}

	function stopEditing() {
		isEditing = false;
	}

	console.log({ key, value, id });
</script>

<Table.Row>
	{#if isEditing}
		<Table.Cell>
			<div class="keyColor">
				{key}
			</div>
		</Table.Cell>
		<Table.Cell>
			<form method="POST" action="?/updateUser" use:enhance={stopEditing}>
				<input type="hidden" name="id" value={id} />
				<input type="hidden" name="key" value={key} />

				<input
					type="text"
					name="value"
					bind:value
					bind:this={inputElement}
					class="fixed-width-input" />

				<div class="button-wrapper">
					<button class="update-button" type="submit"> <Save /> </button>
					<button class="delete-button" type="button" on:click={stopEditing}> <X /> </button>
				</div>
			</form>
		</Table.Cell>
	{:else}
		<Table.Cell>{value}</Table.Cell>
		<Table.Cell>
			<div class="button-wrapper">
				<button class="editor" on:click={editing}>
					<Pencil />
				</button>
			</div>
		</Table.Cell>
	{/if}
</Table.Row>

<style>
	form {
		display: flex;
		justify-content: space-between;
		box-sizing: border-box;
		width: 100%;
	}

	.button-wrapper {
		display: flex;
		justify-content: end;
		gap: var(--size-3);
		width: 100%;
	}

	.keyColor {
		color: var(--link);
	}
</style>
