<script lang="ts">
	import * as Table from '$lib/components/ui/shadcn/table';
	import { enhance } from '$app/forms';

	export let url;
	export let title;
	export let about;
	export let isShowing: boolean;

	let isEditing = false;
	let targetElement: HTMLInputElement;

	function toggleEditOn(event: Event): void {
		isEditing = true;
	}

	function toggleEditOff(event: Event): void {
		isEditing = false;
	}

	$: showing = isShowing ? 'true' : 'false';
</script>

<Table.Cell>
	<a href={`${url}`}>
		&#47;{title}
	</a>
</Table.Cell>
{#if isEditing}
	<!-- below is empty on purpose -->
	<Table.Cell></Table.Cell>
	<Table.Cell class="full-width">
		<form method="POST" data-sveltekit-noscroll use:enhance>
			<fieldset>
				<legend>Change visibility</legend>

				<div>
					<input type="radio" id="true" name="isShowing" value="true" bind:group={showing} />
					<label for="true">Visible</label>
				</div>

				<div>
					<input type="radio" id="false" name="isShowing" value="false" bind:group={showing} />
					<label for="false">Hidden</label>
				</div>
			</fieldset>

			<textarea name="about" cols="80" rows="5" value={about} />

			<input type="hidden" name="title" value={title} />
			<input type="hidden" name="url" value={url} />

			<button class="create-button" type="submit">Save</button>
		</form>
	</Table.Cell>
	<Table.Cell>
		<button class="delete-button" on:click={toggleEditOff}>Nvm</button>
	</Table.Cell>
{:else}
	<Table.Cell>{isShowing ? 'Visible' : 'Hidden'}</Table.Cell>
	<Table.Cell>{about}</Table.Cell>
	<Table.Cell>
		<button class="update-button" on:click={toggleEditOn}>edit</button>
	</Table.Cell>
{/if}

<style>
	form {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	button {
		max-height: var(--size-6);
	}
	fieldset {
		& div {
			display: flex;
			align-items: center;
			gap: var(--size-1);
		}
		/* justify-content: center; */
		/* align-self: center; */
	}
</style>
