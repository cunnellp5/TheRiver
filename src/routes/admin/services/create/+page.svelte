<script lang="ts">
  import { enhance } from "$app/forms";
  import { goto } from "$app/navigation";
  import { addToast } from "$lib/stores/toast";
  import { LoaderCircle } from "lucide-svelte";

  const { data } = $props();
  const { categories } = data;
  let loading = $state(false);
  // const isFormValid = $derived(email.includes("@") && password.length >= 6);

  const inputData = [
    {
      type: "text",
      name: "name",
      placeholder: "Add New Service Name",
    },
    {
      type: "text",
      name: "description",
      placeholder: "Describe the service",
    },
    {
      type: "number",
      name: "price",
      placeholder: "420 in USD",
    },
    {
      type: "number",
      name: "duration",
      placeholder: "666 in min",
    },
  ];

  function handleToast(status: number = 400): void {
    const toastConfig = {
      message: "An error occurred",
      iconType: "warning",
    };
    if (status === 200) {
      toastConfig.message = "Service added!";
      toastConfig.iconType = "check";
    }
    addToast(toastConfig);
  }
</script>

<section>
  <h1>Add new services</h1>
  <hr />
  <form
    method="post"
    action="?/createService"
    use:enhance={async () => {
      loading = true;
      return async ({ result, update }) => {
        handleToast(result.status);
        loading = false;
        update().then(() => {
          if (result.status === 200) {
            goto("/admin/services");
          }
        });
      };
    }}>
    <div class="wrapper">
      <label for="category-select">Choose a category:</label>
      <select
        name="categoryId"
        id="category-select">
        <option value="">--Please choose an option--</option>
        {#each categories as category}
          <option value={category.id}>{category.name}</option>
        {/each}
      </select>
    </div>

    {#each inputData as input}
      <div class="wrapper">
        <label for={input.name}>{input.name}</label>
        <input
          type={input.type}
          name={input.name}
          id={input.name}
          placeholder={input.placeholder}
          required />
      </div>
    {/each}

    <!-- TODO use grid to stack loading over text -->
    <!-- disabled={!isFormValid || loading} -->
    <button
      class="primary"
      type="submit">
      {#if loading}
        <div class="spinner">
          <LoaderCircle />
        </div>
        Loading
      {:else}
        Add
      {/if}
    </button>
  </form>
</section>

<style>
  section {
    display: grid;
    grid-template-rows: 1fr;
    place-content: center;
  }
  form {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--size-7);
    background-color: var(--surface-1);
    max-inline-size: var(--size-content-3);
    padding: var(--size-7);
  }
  label {
    text-transform: capitalize;
    font-size: var(--font-size-0);
    color: var(--text-2);
  }
  .wrapper {
    display: grid;
  }
</style>
