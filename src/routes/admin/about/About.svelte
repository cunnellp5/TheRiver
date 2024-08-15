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
	<Table.Cell class="full-width">
		<form class="content" method="POST" data-sveltekit-noscroll use:enhance>
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

			<textarea name="about" cols="80" rows="3" value={about} />

			<div class="buttons-wrapper">
				<input type="hidden" name="title" value={title} />
				<input type="hidden" name="url" value={url} />

				<button class="create-button" type="submit">Save</button>
				<button class="delete-button" on:click={toggleEditOff}>Nvm</button>
			</div>
		</form>
	</Table.Cell>
{:else}
	<Table.Cell>
		<div class="content">
			<span>
				{isShowing ? 'Visible' : 'Hidden'}
			</span>
			<span>
				{about}
			</span>
		</div>
	</Table.Cell>
	<Table.Cell class="end">
		<button class="update-button" on:click={toggleEditOn}>edit</button>
	</Table.Cell>
{/if}

<style>
	button {
		max-height: var(--size-7);
	}
	fieldset {
		& div {
			display: flex;
			align-items: center;
			gap: var(--size-1);
		}
	}
	/* CLASSES */
	.content {
		display: flex;
		align-items: center;
		gap: var(--size-10);
	}
	.buttons-wrapper {
		display: flex;
		gap: var(--size-3);
	}
</style>
