<script lang="ts">
  import { invalidate } from "$app/navigation";
  import { onMount } from "svelte";

  onMount(() => {
    invalidate("home:locals");
  });
</script>

<h1>loggedout</h1>
