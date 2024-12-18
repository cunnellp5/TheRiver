<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js";
  import * as Table from "$lib/components/ui/table/index.js";

  const { data } = $props();
  const { categories } = data;
</script>

<div class="adminIntroCardWrapper">
  <Card.Root>
    <Card.Header>
      <Card.Title>Categories</Card.Title>
      <Card.Description>Create, Edit, or delete your services</Card.Description>
    </Card.Header>
    <Card.Content>
      <p>todo</p>
      <ul>
        <li>render categories</li>
        <li>crud categories</li>
      </ul>
    </Card.Content>
    <Card.Footer>
      <a
        href="/admin/services/create"
        data-sveltekit-noscroll>
        <button class="create-button">Add new category</button>
      </a>
    </Card.Footer>
  </Card.Root>
</div>

<Table.Root>
  <Table.Caption>Change your categories here</Table.Caption>
  <Table.Header>
    <Table.Row>
      <Table.Head>#</Table.Head>
      <Table.Head>Name</Table.Head>
      <Table.Head>Description</Table.Head>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    {#each categories as category, i}
      <Table.Row>
        <Table.Cell>{i + 1}</Table.Cell>
        <Table.Cell>{category.name}</Table.Cell>
        <Table.Cell>{category.description}</Table.Cell>
      </Table.Row>
    {/each}
  </Table.Body>
</Table.Root>
