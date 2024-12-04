<script lang="ts">
  import { enhance } from "$app/forms";
  import * as Table from "$lib/components/ui/shadcn/table";
  import Pencil from "lucide-svelte/icons/pencil";

  interface Props {
    key: string;
    value: string | number | Date | null;
    id: number;
  }

  let { key, value = $bindable(), id }: Props = $props();

  let isEditing = $state(false);

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
        <button type="button" class="delete-button" onclick={stopEditing}>X</button>
      </div>
    </Table.Cell>
  </Table.Row>
{:else}
  <Table.Row>
    {#if key !== "id" && key !== "createdAt" && key !== "updatedAt"}
      <Table.Cell class="fixed-width keyText">{key}</Table.Cell>
      <Table.Cell class="fixed-width" on:dblclick={editing}>{value}</Table.Cell>
      <Table.Cell class="fixed-width">
        <div class="button-wrapper">
          <button onclick={editing}>
            <Pencil size={16} />
          </button>
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
