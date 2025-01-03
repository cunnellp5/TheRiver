<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/state";
  import DropdownServiceRow from "$lib/components/pages/services/dropdown-service-row.svelte";
  import * as Table from "$lib/components/ui/table";
  import Tooltip from "$lib/components/ui/tooltip/tooltip.svelte";
  import { ServiceStore } from "$lib/stores/booking/service.svelte";

  const { category, data } = $props();

  function handleRowClick(service: App.ServiceItem) {
    ServiceStore.addItem(service);
    goto(`/services/booking?service=${service.id}`);
  }

  const dev = page.url.hostname === "localhost";
</script>

<span
  class="stupid"
  id={category}>
</span>
<section class="tables">
  <Table.Root>
    <Table.Caption>{data[0].category.description}</Table.Caption>
    <Table.Header>
      <Table.Row>
        <div class="table-row-header">
          <h6 class="gradientHeaders">
            {category.toUpperCase()}
          </h6>
        </div>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {#each data as service}
        {#if dev}
          <DropdownServiceRow {service}>
            {#snippet buttons()}
              <Tooltip
                class="update-button"
                text="Book now"
                position="right"
                handleClick={() => handleRowClick(service)}></Tooltip>
            {/snippet}
          </DropdownServiceRow>
        {:else}
          <DropdownServiceRow
            {service}
            buttons={null}>
          </DropdownServiceRow>
        {/if}
      {/each}
    </Table.Body>
  </Table.Root>
</section>

<style>
  .tables {
    box-shadow: var(--shadow-6);
    padding: var(--size-4);
    align-items: center;
    align-self: center;
    z-index: var(--layer-3);
    width: var(--size-md);
    background-color: var(--surface-1);
  }
  .table-row-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: var(--size-3);
  }
  .stupid {
    height: var(--size-10);
  }
  @media (max-width: 768px) {
    .tables {
      width: 100%;
    }
  }
</style>
