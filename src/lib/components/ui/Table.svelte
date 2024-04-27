<!-- Table.svelte -->
<script lang="ts">
	export let columns = [];
	export let data = [];
</script>

<table>
	<thead class="surface-2">
		<tr>
			<th></th>
			{#each columns as column (column)}
				<th>
					<h6>
						{column}
					</h6>
				</th>
			{/each}
		</tr>
	</thead>
	<tbody class="">
		{#each data as row (row)}
			<tr>
				<td></td>
				{#each Object.values(row) as cell (cell)}
					{#if cell === 'AVAILABLE'}
						<td>available</td>
					{:else if cell === 'COMING_SOON'}
						<td>soon</td>
					{:else if cell === 'LIMITED_AVAILABILITY'}
						<td>limited supplies (x3 left )</td>
					{:else}
						<td>{cell}</td>
					{/if}
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
		text-align: left;
	}
	table,
	th,
	td {
		/* border-right: 1px solid var(--text-2); */
		background-color: var(--table);
		/* background-color: unset; */
		text-align: left;
	}
	tbody > tr {
		border-top: 1px solid var(--text-2);
	}
	thead,
	th {
		background-image: var(--table);
		/* background-image: linear-gradient(#111, #111, #191919); */
	}
	tbody,
	th {
		font-weight: var(--font-weight-7);
		/* font-size: var(--size-5); */
		/* text-transform: uppercase; */
	}
	thead,
	th {
		font-weight: var(--font-weight-5);
		/* font-size: var(--size-5); */
		text-transform: uppercase;
	}

	button {
		/* padding-block: 0; */
		font-weight: var(--font-weight-9);
	}

	/* .table-body {
		background: hsl(var(--gray-7-hsl) / 70%);
	} */

	h6 {
		background: var(--gradient-22) fixed;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}
</style>
