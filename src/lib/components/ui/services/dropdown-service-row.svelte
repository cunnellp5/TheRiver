<script lang="ts">
  import * as Table from "$lib/components/ui/table/index.js";
  import Info from "lucide-svelte/icons/info";

  const { service, buttons } = $props();
</script>

<Table.Row>
  <details name="service-details">
    <summary>
      {service.name}
      <Table.Cell class="text-end">
        <div class="price-duration">
          <span class="price">
            ${service?.price}.00
          </span>
          {#if service.duration}
            <span class="time">
              {service.duration} min
            </span>
          {/if}
        </div>
      </Table.Cell>
      {#if buttons}
        {@render buttons?.()}
      {/if}
    </summary>
    <p>
      <Info size={12} />{service.description}
    </p>
    <!-- <Table.Cell>{service.name}</Table.Cell> -->
  </details>
</Table.Row>

<style>
  summary,
  details {
    border-radius: var(--rounded-2);
  }
  summary {
    display: grid;
    grid-template-columns: 1fr 1fr auto;
    align-items: center;
  }
  p {
    padding-inline: var(--size-4);
    font-size: var(--font-size-0);
    color: var(--text-2);
    display: flex;
    gap: var(--size-2);
  }
  details[open] {
    border-inline-start: 2px solid var(--brand);
    & summary {
      background-color: var(--surface-4);
    }
  }
  details:hover:not(details[open]) {
    & summary {
      background-color: var(--surface-4);
    }
  }
  /* CLASSES */
  .price-duration {
    display: flex;
    flex-direction: column;
    /* text-align: right; */
  }
  .time {
    color: var(--text-2);
    font-size: var(--font-size-00);
  }
  .price {
    font-size: var(--font-size-0);
  }
  .table-row-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: var(--size-3);
  }
</style>
