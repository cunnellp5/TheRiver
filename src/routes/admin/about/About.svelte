<script lang="ts">
  import { enhance } from "$app/forms";

  import * as Table from "$lib/components/ui/shadcn/table";
  import { run } from "svelte/legacy";

  interface Props {
    url: any;
    title: any;
    about: any;
    isShowing: boolean;
    id: any;
  }

  const { url, title, about, isShowing, id }: Props = $props();

  let isEditing = $state(false);

  function toggleEditOn(): void {
    isEditing = true;
  }

  function toggleEditOff(): void {
    isEditing = false;
  }

  let showing;
  run(() => {
    showing = isShowing ? "true" : "false";
  });
</script>

<Table.Cell>
  <a href={`${url}`}>
    &#47;{title}
  </a>
</Table.Cell>
{#if isEditing}
  <Table.Cell class="full-width">
    <form
      class="content"
      method="POST"
      data-sveltekit-noscroll
      use:enhance={() => toggleEditOff()}>
      <fieldset>
        <legend>Change visibility</legend>

        <div>
          <input
            type="radio"
            id="true"
            name="isShowing"
            value="true"
            bind:group={showing} />
          <label for="true">Visible</label>
        </div>

        <div>
          <input
            type="radio"
            id="false"
            name="isShowing"
            value="false"
            bind:group={showing} />
          <label for="false">Hidden</label>
        </div>
      </fieldset>

      <textarea
        name="about"
        cols="80"
        rows="3"
        value={about}></textarea>

      <div class="buttons-wrapper">
        <input
          type="hidden"
          name="title"
          value={title} />
        <input
          type="hidden"
          name="url"
          value={url} />
        <input
          type="hidden"
          name="id"
          value={id} />

        <button
          class="create-button"
          type="submit">Save</button>
        <button
          class="delete-button"
          onclick={toggleEditOff}>Nvm</button>
      </div>
    </form>
  </Table.Cell>
{:else}
  <Table.Cell>
    <div class="content">
      <span
        class:visible={isShowing}
        class:hidden={!isShowing}>
        {isShowing ? "Visible" : "Hidden"}
      </span>
      <span>
        {about}
      </span>
    </div>
  </Table.Cell>
  <Table.Cell class="end">
    <button
      class="update-button"
      onclick={toggleEditOn}>edit</button>
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
  .visible {
    color: var(--green-5);
  }
  .hidden {
    color: var(--red-5);
  }
</style>
