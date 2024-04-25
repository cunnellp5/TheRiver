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
		/* border-collapse: collapse; */
		width: 100%;
		font-size: var(--size-6);
	}
	th {
		color: var(--link);
	}

	button {
		padding-block: 0;
	}
</style>
