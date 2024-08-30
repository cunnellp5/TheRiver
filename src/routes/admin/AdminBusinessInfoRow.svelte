<script lang="ts">
	import * as Table from '$lib/components/ui/shadcn/table';
	import Pencil from 'lucide-svelte/icons/pencil';
	import { enhance } from '$app/forms';

	export let key: string;
	export let value: string | number | Date | null;
	export let id: number;

	let isEditing = false;

	function editing() {
		isEditing = true;
	}

	function stopEditing() {
		isEditing = false;
	}
</script>

{#if isEditing}
	<Table.Row>
		<Table.Cell class="fixed-width">{key}</Table.Cell>
		<Table.Cell class="fixed-width">
			<form
				id="updateForm"
				method="POST"
				action="?/updateBusinessInfo"
				use:enhance={() => stopEditing()}>
				<input type="hidden" name="id" value={id} />
				<input type="hidden" name="key" value={key} />
				<input type="text" name="value" bind:value class="fixed-width-input" />
			</form>
		</Table.Cell>
		<Table.Cell>
			<div class="button-wrapper">
				<button form="updateForm" type="submit" class="update-button">Update</button>
				<button type="button" class="delete-button" on:click={stopEditing}>X</button>
			</div>
		</Table.Cell>
	</Table.Row>
{:else}
	<Table.Row on:dblclick={editing}>
		{#if key !== 'id' && key !== 'createdAt' && key !== 'updatedAt'}
			<Table.Cell class="fixed-width keyText">{key}</Table.Cell>
			<Table.Cell class="fixed-width">{value}</Table.Cell>
			<Table.Cell class="fixed-width">
				<div class="button-wrapper">
					<Pencil size={16} />
				</div>
			</Table.Cell>
		{/if}
	</Table.Row>
{/if}

<style>
	.fixed-width-input {
		box-sizing: border-box; /* Include padding and border in the element's total width and height */
		width: 100%; /* Ensure the input field takes up the full width of the cell */
	}

	.button-wrapper {
		display: flex;
		justify-content: end;
		gap: var(--size-4);
	}
</style>
