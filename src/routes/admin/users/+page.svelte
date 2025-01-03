<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js";
  import * as Table from "$lib/components/ui/table/index.js";

  const { data } = $props();

  const { users } = data;
</script>

<div class="adminIntroCardWrapper">
  <Card.Root>
    <Card.Header>
      <Card.Title>Users</Card.Title>
    </Card.Header>
  </Card.Root>
</div>

<section>
  <Table.Root>
    <!-- <Table.Caption>All users with an account</Table.Caption> -->
    <Table.Header>
      <div class="table-row-header gradientHeaders">
        <h5>Users table ({users.length})</h5>
      </div>
      <Table.Row>
        <Table.Head class="stone">count</Table.Head>
        <Table.Head class="stone">email</Table.Head>
        <Table.Head class="stone">first</Table.Head>
        <Table.Head class="stone">last</Table.Head>
        <Table.Head class="stone">admin</Table.Head>
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
    width: var(--size-lg);
  }
  .defaultUser {
    color: var(--create);
  }
  .admin {
    color: var(--delete);
  }
</style>
