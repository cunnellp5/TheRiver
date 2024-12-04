<script lang="ts">
  import { applyAction, enhance } from "$app/forms";
  import * as Table from "$lib/components/ui/shadcn/table";
  import { addToast } from "$lib/stores/toast";
  import Pencil from "lucide-svelte/icons/pencil";
  import Save from "lucide-svelte/icons/save";
  import X from "lucide-svelte/icons/x";
  import { tick } from "svelte";
  import DashboardUserInput from "./DashboardUserInput.svelte";

  type UserValue = string | boolean | number | Date | null;

  interface Props {
    value: UserValue;
    key: string;
    id: number;
  }

  const { value, key, id }: Props = $props();
  let isEditing = $state(false);
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
    if (key === "isSubscribed") {
      return value === true ? "Subscribed" : "Not subscribed";
    }
    return value;
  }

  const keyMapper: { [key: string]: string } = {
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
    isSubscribed: "Subscription",
  };
</script>

<!-- TODO USER EMAIL MODAL -->
<Table.Row>
  {#if isEditing}
    <Table.Cell colspan={2}>
      <p class="keyColor">
        {keyMapper[key]}
      </p>
      <form
        method="POST"
        action="?/updateUser"
        use:enhance={async ({ formElement, formData, action, cancel, submitter }) => {
          if (formData.get("value") === value?.toString()) {
            stopEditing();
            applyAction({ type: "success", status: 200 });
            cancel();
          }
          return async ({ result, update }) => {
            if (result.status === 200) {
              stopEditing();
              update();
              addToast({
                message: `Updated ${keyMapper[key]}`,
                type: "message",
                iconType: "check",
                dismissible: true,
                timeout: 5000,
              });
            }
            else {
              update();
            }
          };
        }}>
        <input type="hidden" name="id" value={id} />
        <input type="hidden" name="key" value={key} />

        <p>
          <DashboardUserInput {key} {value} />
        </p>

        <div class="buttonWrapper">
          <button class="create-button" type="submit"> <Save /> </button>
          <button class="delete-button" type="button" onclick={stopEditing}> <X /> </button>
        </div>
      </form>
    </Table.Cell>
  {:else}
    <Table.Cell colspan={2}>
      <div class="dashInputWrapper">
        <p>
          {cellValue({ value, key })}
        </p>
        <div class="buttonWrapper">
          <button class="update-button" onclick={editing}>
            <Pencil />
          </button>
        </div>
      </div>
    </Table.Cell>
  {/if}
</Table.Row>

<style>
	form {
		display: flex;
		justify-content: space-between;
		gap: var(--size-3);
		box-sizing: border-box;
		width: 100%;
	}

	.buttonWrapper {
		display: flex;
		flex-shrink: 0;
		gap: var(--size-3);
	}
	.dashInputWrapper {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 100%;
	}
	.keyColor {
		color: var(--link);
	}

	@media (max-width: 768px) {
		.update-button {
			width: 100%;
		}
		.dashInputWrapper {
			flex-direction: column;
			gap: var(--size-3);
		}
		form {
			flex-direction: column;
			gap: var(--size-3);
		}
		.create-button,
		.delete-button {
			width: 50%;
		}
	}
</style>
