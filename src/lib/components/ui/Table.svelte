<!-- Table.svelte -->
<script lang="ts">
	export let columns = [];
	export let data = [];
</script>

<table>
	<thead class="surface-4">
		<tr>
			{#each columns as column (column)}
				<th>{column}</th>
			{/each}
			<th></th>
		</tr>
	</thead>
	<tbody class="surface-1">
		{#each data as row (row)}
			<tr>
				{#each Object.values(row) as cell (cell)}
					<td>{cell}</td>
				{/each}
				<td>
					<button class="primary">Book now</button>
				</td>
			</tr>
		{/each}
	</tbody>
</table>

<style>
	/* Add your table styles here */
	table {
		box-shadow: var(--shadow-2);
		border: none;
		border-collapse: collapse;
		width: 100%;
		font-weight: var(--font-weight-2);
		font-size: var(--size-4);
	}
	th {
		color: var(--text-2);
		/* color: hsl(var(--gray-7-hsl) / 60%); */
	}

	table,
	th,
	td {
		background-color: unset;
		text-align: left;
	}
	tr:not(:last-child) {
		border-bottom: 1px solid var(--text-2);
	}

	button {
		padding-block: 0;
	}

	/* .table-body {
		background: hsl(var(--gray-7-hsl) / 70%);
	} */
</style>
