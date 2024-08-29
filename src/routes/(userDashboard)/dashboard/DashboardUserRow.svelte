<script lang="ts">
	import * as Table from '$lib/components/ui/shadcn/table';
	import Pencil from 'lucide-svelte/icons/pencil';
	import Save from 'lucide-svelte/icons/save';
	import X from 'lucide-svelte/icons/x';
	import { applyAction, enhance } from '$app/forms';
	import { tick } from 'svelte';
	import DashboardUserInput from './DashboardUserInput.svelte';
	import { addToast } from '$lib/stores/toast';

	type UserValue = string | boolean | number | Date | null;

	export let value: UserValue;
	export let key: string;
	export let id: string;
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

	function cellValue({ value, key }: { value: UserValue; key: string }) {
		if (key === 'isSubscribed') {
			return value === true ? 'Subscribed' : 'Not subscribed';
		}
		return value;
	}

	function getToastMessage(key: string) {
		if (key === 'isSubscribed') {
			return 'Updated subscription';
		}
		return `Updated ${key}`;
	}

	const keyMapper: { [key: string]: string } = {
		firstName: 'First Name',
		lastName: 'Last Name',
		email: 'Email',
		isSubscribed: 'Subscription'
	};
</script>

<!-- TODO USER EMAIL MODAL -->
<Table.Row>
	{#if isEditing}
		<Table.Cell>
			<div class="keyColor">
				{keyMapper[key]}
			</div>
		</Table.Cell>
		<Table.Cell>
			<form
				method="POST"
				action="?/updateUser"
				use:enhance={async ({ formElement, formData, action, cancel, submitter }) => {
					if (formData.get('value') === value?.toString()) {
						stopEditing();
						applyAction({ type: 'success', status: 200 });
						cancel();
					}
					return async ({ result, update }) => {
						if (result.status === 200) {
							stopEditing();
							update();
							addToast({
								message: getToastMessage(key),
								type: 'success',
								dismissible: true,
								timeout: 5000
							});
						} else {
							update();
						}
					};
				}}>
				<input type="hidden" name="id" value={id} />
				<input type="hidden" name="key" value={key} />

				<DashboardUserInput {key} {value} />

				<div class="button-wrapper">
					<button class="update-button" type="submit"> <Save /> </button>
					<button class="delete-button" type="button" on:click={stopEditing}> <X /> </button>
				</div>
			</form>
		</Table.Cell>
	{:else}
		<Table.Cell>{cellValue({ value, key })}</Table.Cell>
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
