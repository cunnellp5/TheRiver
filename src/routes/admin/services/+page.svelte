<script lang="ts">
  import DropdownServiceRow from "$lib/components/pages/services/dropdown-service-row.svelte";
  import * as Card from "$lib/components/ui/card/index.js";
  import * as Table from "$lib/components/ui/table/index.js";

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
    </Card.Header>
    <!-- <Card.Content>
      <p>todo</p>
      <ul>
        <li>MVP is create a way to CRUD services</li>
      </ul>
    </Card.Content> -->
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

<main>
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
            <DropdownServiceRow {service}>
              {#snippet buttons()}
                <Table.Cell>
                  <div class="table-row-header">
                    <a href="/admin/services/edit/{service.id}">
                      <button class="update-button">Edit</button>
                    </a>
                  </div>
                </Table.Cell>
              {/snippet}
            </DropdownServiceRow>
          {/each}
        </Table.Body>
      </Table.Root>
    </section>
  {/each}
</main>

<style>
  /* ELEMENTS */
  main {
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    /* justify-content: space-evenly; */
    /* max-inline-size: calc(var(--size-content-2) * 4); */
  }
  section {
    background-color: var(--surface-1);
    box-shadow: var(--shadow-6);
    /* margin-block: var(--size-12); */
    /* box-shadow: var(--shadow-3); */
    padding: var(--size-4);
    max-inline-size: var(--size-content-2);
    min-width: var(--size-content-2);
    margin: var(--size-6) var(--size-2);
  }
  aside {
    display: flex;
    gap: var(--size-4);
  }
  .table-row-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: var(--size-3);
  }
</style>
