<script lang="ts">
  import * as Table from "$lib/components/ui/shadcn/table";

  const { category, data } = $props();
</script>

<span class="stupid" id={category}></span>
<section class="tables">
  <Table.Root>
    <Table.Caption>{data[0].category.description}</Table.Caption>
    <Table.Header>
      <Table.Row>
        <div class="table-row-header">
          <h6>
            {category.toUpperCase()}
          </h6>
        </div>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {#each data as service}
        <Table.Row>
          <Table.Cell>
            <p class="serviceName">
              {service.name}
            </p>
          </Table.Cell>
          <Table.Cell>
            <div class="price-duration">
              <span class="price">
                ${service.price}.00
              </span>
              <span class="time">
                {service.duration ? `${service.duration}min` : ""}
              </span>
            </div>
          </Table.Cell>
        </Table.Row>
      {/each}
    </Table.Body>
  </Table.Root>
</section>

<style>
	.serviceName {
		font-size: var(--font-size-2);
	}
	.tables {
		align-items: center;
		align-self: center;
		z-index: var(--layer-3);
		width: var(--size-content-3);
		& tr {
			font-size: var(--font-size-1);
		}
	}
	.price-duration {
		display: flex;
		flex-direction: column;
	}
	.time {
		color: var(--text-2);
		font-size: var(--font-size-0);
	}
	.price {
		font-size: var(--font-size-1);
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
		.serviceName {
			font-size: var(--font-size-0);
			text-wrap: break-word;
			word-break: break-word; /* Ensures words break at the edge of the container */
			overflow-wrap: break-word; /* Allows breaking within words to prevent overflow */
		}
	}
</style>
