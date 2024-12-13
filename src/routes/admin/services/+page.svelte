<script lang="ts">
  import * as Card from "$lib/components/ui/shadcn/card";
  import * as Table from "$lib/components/ui/shadcn/table";

  const { data } = $props();
  const { services } = data;
  const csvUrl = "/api/csv";

  async function downloadCSV() {
    try {
      const response = await fetch(csvUrl, {
        method: "POST",
        body: JSON.stringify({ services }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch CSV file");
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "services.csv";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading CSV:", error);
    }
  }
</script>

<div class="adminIntroCardWrapper">
  <Card.Root>
    <Card.Header>
      <Card.Title>Services</Card.Title>
      <Card.Description>Create, Edit, or delete your services</Card.Description>
    </Card.Header>
    <Card.Content>
      <p>todo</p>
      <ul>
        <li>MVP is create a way to CRUD services</li>
        <li>dont let users start scheduling, yet</li>
      </ul>
    </Card.Content>
    <Card.Footer>
      <aside>
        <a
          href="/admin/services/create"
          data-sveltekit-noscroll>
          <button class="create-button"> Add new service</button>
        </a>
        <button
          onclick={downloadCSV}
          class="update-button">
          Download CSV</button>
      </aside>
    </Card.Footer>
  </Card.Root>
</div>

<!-- {#each Object.entries(services) as [category, listOfServices]}
  <section class="service-table">
    <table>
      <thead class="surface-2">
        <tr>
          <th>
            <h6>{category}</h6>
          </th>
        </tr>
      </thead>
      <tbody class="">
        {#each listOfServices as service}
          <tr>
            <td>{service.name}</td>
            <td>${service.price}</td>
            <td>{service.duration} min</td>
            <td class="actions">
              <button class="update-button">Edit</button>
              <button class="delete-button">delete</button>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </section>
{/each} -->

{#each Object.entries(services) as [category, data]}
  <section>
    <Table.Root>
      <!-- <Table.Caption>{data[0].category.description}</Table.Caption> -->
      <Table.Header>
        <Table.Row>
          <Table.Head class="gradientHeaders">
            {category.toUpperCase()}
          </Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {#each data as service}
          <Table.Row>
            <Table.Cell>{service.name}</Table.Cell>
            <Table.Cell>
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
          </Table.Row>
        {/each}
      </Table.Body>
    </Table.Root>
  </section>
{/each}

<style>
  /* ELEMENTS */
  section {
    /* margin-block: var(--size-12); */
    box-shadow: var(--shadow-3);
    padding: var(--size-4);
    width: 25vw;
    margin: var(--size-6) auto;
  }
  aside {
    display: flex;
    gap: var(--size-4);
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
