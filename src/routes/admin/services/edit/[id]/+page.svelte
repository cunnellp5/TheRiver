<script lang="ts">
  import { enhance } from "$app/forms";
  import { goto } from "$app/navigation";
  import { addToast } from "$lib/stores/toast";
  import { LoaderCircle, Trash } from "lucide-svelte";

  const { data } = $props();
  const { service, categories } = data;
  let loading = $state(false);

  function handleToast(status: number = 400): void {
    const toastConfig = {
      message: "An error occurred",
      iconType: "warning",
    };
    if (status === 200) {
      toastConfig.message = "Service updated!";
      toastConfig.iconType = "check";
    }
    addToast(toastConfig);
  }
</script>

<section>
  <h1 class="gradientHeaders">Editing</h1>
  <h1>"{service.name}"</h1>
  <form
    method="post"
    action="?/updateService"
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
      <label for="category-select">Category:</label>
      <select
        name="categoryId"
        id="category-select">
        <option value="">--Please choose an option--</option>
        {#each categories as category}
          <option
            value={category.id}
            selected={category.name === service.category.name}>{category.name}</option>
        {/each}
      </select>
    </div>
    <hr />
    <div class="wrapper">
      <label for="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="name"
        value={service.name}
        required />
    </div>

    <div class="wrapper">
      <label for="description">Description</label>
      <textarea
        name="description"
        id="description"
        placeholder="description"
        value={service.description}
        required></textarea>
    </div>

    <div class="wrapper">
      <label for="price">Price</label>
      <input
        type="number"
        name="price"
        id="price"
        placeholder="price"
        value={service.price}
        required />
    </div>

    <div class="wrapper">
      <label for="duration">Duration</label>
      <input
        type="number"
        name="duration"
        id="duration"
        placeholder="duration"
        value={service.duration}
        required />
    </div>

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
        Update
      {/if}
    </button>
  </form>

  <form
    method="POST"
    action="?/deleteService"
    use:enhance={() => {
      // eslint-disable-next-line no-alert
      if (confirm("Are you sure you want to delete this post?")) {
        return async ({ update }) => {
          update().then(() => {
            goto("/admin/services");
          });
        };
      }
    }}>
    <input
      type="hidden"
      name="id"
      id="id"
      value={service.id} />
    <button
      class="delete-button"
      type="submit">
      <Trash />
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
  form:first-of-type {
    padding-bottom: unset;
  }
  label {
    text-transform: capitalize;
    font-size: var(--font-size-0);
    color: var(--text-2);
  }
  hr {
    margin: unset;
  }
  .wrapper {
    display: grid;
  }
</style>
