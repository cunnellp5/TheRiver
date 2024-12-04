<script lang="ts">
  import * as Card from "$lib/components/ui/shadcn/card";

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

<table>
  <thead>
    <tr>
      <th>count</th>
      <th>Email</th>
      <th>firstName</th>
      <th>lastName</th>
      <th>isAdmin</th>
    </tr>
  </thead>
  <tbody>
    {#each users as user, id}
      <tr>
        <td>{id + 1}</td>
        <td>{user.email}</td>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td class:admin={user.isAdmin} class:defaultUser={!user.isAdmin}>{user.isAdmin}</td>
      </tr>
    {/each}
  </tbody>
</table>

<style>
	table {
		/* background-color: var(--table); */
		width: 100%;
	}

	td {
		padding: 0.5rem;
	}

	tr:nth-child(even) {
		background-color: #f9f9f9;
	}

	.defaultUser {
		color: var(--create);
	}
	.admin {
		color: var(--delete);
	}
</style>
