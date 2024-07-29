<script lang="ts">
	export let data;

	const { users } = data;
</script>

<h3>All users</h3>

<table>
	<thead>
		<tr>
			<th>count</th>
			<th>Email</th>
			<th>firstName</th>
			<th>lastName</th>
			<th>isAdmin</th>
			<th>isSubscribed</th>
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
				<td>{user.isSubscribed}</td>
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
		background-color: var(--create);
	}
	.admin {
		background-color: var(--delete);
	}
</style>
