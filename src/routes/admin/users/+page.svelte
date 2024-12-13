<script lang="ts">
  import * as Card from "$lib/components/ui/shadcn/card";
  import * as Table from "$lib/components/ui/shadcn/table";

  const { data } = $props();

  const { users } = data;
</script>

<div class="adminIntroCardWrapper">
  <Card.Root>
    <Card.Header>
      <Card.Title>Users</Card.Title>
      <Card.Description>List of users</Card.Description>
    </Card.Header>
  </Card.Root>
</div>

<section>
  <Table.Root>
    <Table.Caption>All users with an account</Table.Caption>
    <Table.Header>
      <Table.Row>
        <div class="table-row-header">
          <h5>Users</h5>
        </div>
      </Table.Row>
      <Table.Row>
        <Table.Cell class="blue">count</Table.Cell>
        <Table.Cell class="blue">email</Table.Cell>
        <Table.Cell class="blue">first</Table.Cell>
        <Table.Cell class="blue">last</Table.Cell>
        <Table.Cell class="blue">admin</Table.Cell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {#each users as user, id}
        <Table.Row>
          <Table.Cell>{id + 1}</Table.Cell>
          <Table.Cell>{user.email}</Table.Cell>
          <Table.Cell>{user.firstName}</Table.Cell>
          <Table.Cell>{user.lastName}</Table.Cell>
          <Table.Cell>
            <span
              class="defaultUser"
              class:admin={user.isAdmin}>{user.isAdmin}</span>
          </Table.Cell>
        </Table.Row>
      {/each}
    </Table.Body>
  </Table.Root>
</section>

<style>
  section {
    box-shadow: var(--shadow-3);
    padding: var(--size-4);
    width: 50vw;
    margin: 0 auto;
  }
  .defaultUser {
    color: var(--create);
  }
  .admin {
    color: var(--delete);
  }
</style>
