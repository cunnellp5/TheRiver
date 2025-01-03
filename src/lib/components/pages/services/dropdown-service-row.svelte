<script lang="ts">
  import * as Table from "$lib/components/ui/table/index.js";

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
      {service.description}
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
    padding-inline: var(--size-1);
    font-size: var(--font-size-0);
    color: var(--text-2);
    display: flex;
    max-inline-size: var(--size-13);
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
</style>
