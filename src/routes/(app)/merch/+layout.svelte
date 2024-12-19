<script lang="ts">
  const { children } = $props();
</script>

<section class="app-layout">
  <h1>Merch</h1>
  {@render children?.()}
</section>
