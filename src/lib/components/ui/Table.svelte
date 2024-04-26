<!-- Table.svelte -->
<script lang="ts">
	export let columns = [];
	export let data = [];
</script>

<table>
	<thead>
		<tr>
			{#each columns as column (column)}
				<th>{column}</th>
			{/each}
		</tr>
	</thead>
	<tbody>
		{#each data as row (row)}
			<tr>
				{#each Object.values(row) as cell (cell)}
					<td>{cell}</td>
				{/each}
				<td>
					<button>Book now</button>
				</td>
			</tr>
		{/each}
	</tbody>
</table>

<style>
	/* Add your table styles here */
	table {
		border: none;
		border-collapse: collapse;
		width: 100%;
		font-size: var(--size-4);
	}
	th {
		color: hsl(var(--gray-7-hsl) / 60%);
	}

	table,
	th,
	td {
		background-color: unset;
		text-align: left;
	}

	tr {
		border-bottom: 1px solid var(--border);
	}
	button {
		padding-block: 0;
	}
</style>
