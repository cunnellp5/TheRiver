<!-- Table.svelte -->
<script lang="ts">
	export let columns = [];
	export let data = [];
</script>

<table>
	<thead class="surface-2">
		<tr>
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
				<td class="actions">
					<button class="primary">Book now</button>
				</td>
			</tr>
		{/each}
	</tbody>
</table>

<style>
	button {
		font-weight: var(--font-weight-9);
	}
	h6 {
		background: var(--gradient-22) fixed;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	table {
		box-shadow: var(--shadow-2);
		border: none;
		border-collapse: collapse;
		background-color: var(--table);
		width: 100%;
		font-weight: var(--font-weight-2);
		font-size: var(--size-4);
	}
	tbody {
		font-weight: var(--font-weight-7);
	}
	thead {
		font-weight: var(--font-weight-1);
		text-transform: uppercase;
	}
	th {
		background-image: var(--table);
		background-color: var(--table);
		color: var(--text-2);
		font-weight: var(--font-weight-7);
		text-align: left;
	}
	tbody > tr {
		border-top: 1px solid var(--text-2);
	}

	td {
		background-color: var(--table);
		&:not(.actions) {
			text-align: left;
		}
	}
</style>
