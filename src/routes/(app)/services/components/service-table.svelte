<script lang="ts">
  // import { goto } from "$app/navigation";
  import DropdownServiceRow from "$lib/components/ui/services/dropdown-service-row.svelte";
  import * as Table from "$lib/components/ui/table";
  // import Tooltip from "$lib/components/ui/tooltip/tooltip.svelte";
  // import { serviceCart } from "$lib/stores/services/booking-cart.svelte.ts";

  // const cart = serviceCart();
  const { category, data } = $props();

  // function handleRowClick(service) {
  //   cart.addToCart(service);
  //   goto(`/services/booking?service=${service.id}`);
  // }
</script>

<span
  class="stupid"
  id={category}></span>
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
        <DropdownServiceRow
          {service}
          buttons={null}>
        </DropdownServiceRow>
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
