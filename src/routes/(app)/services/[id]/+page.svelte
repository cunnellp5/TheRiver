<script lang="ts">
  import { page } from "$app/stores";

  const { data } = $props();
  const { services } = data;
  const pageId = Number($page.params.id);

  const service = services.find(service => service.id === pageId);
</script>

<main>
  <h1>Select date and time</h1>
  <hr />
  <h2>{service?.name}</h2>
</main>

<style>
  main {
    display: grid;
    grid-template-columns: 1fr;
    margin: 0 auto;
    width: var(--size-content-3);
    /* flex-direction: column; */
    /* justify-content: center; */
    /* align-items: center; */
    /* height: 100vh; */
    /* max-inline-size: var(--size-content-3); */
  }
  h1 {
    font-size: 2rem;
  }
</style>
