<script lang="ts">
  // import { getCart } from './cart.svelte.ts';
  // const counter = getCart();
  const { children } = $props();
</script>

<section class="app-layout">
  <h1>Merch</h1>
  {@render children?.()}
</section>
