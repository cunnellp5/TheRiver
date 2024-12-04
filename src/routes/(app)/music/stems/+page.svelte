<script lang="ts">
  import Seo from "$lib/components/seo.svelte";
  import StemsHeader from "./stems-header.svelte";
  import StemsTable from "./stems-table.svelte";
</script>

<Seo
  title="Download, Explore or Listen To Raw Tracks & Remixes by The River | Alexis"
  description="Access The River's exclusive music stems. Dive deep into her creative process with raw audio tracks and remixes for a unique behind-the-scenes experience." />

<section class="app-layout">
  <StemsHeader />
  <StemsTable />
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    gap: var(--size-7);
    width: 100%;
  }
</style>
