<script lang="ts">
	import Check from 'lucide-svelte/icons/check';
	import { createEventDispatcher } from 'svelte';
	import { fly } from 'svelte/transition';

	const dispatch = createEventDispatcher();
	export let data = [];
	export let selectedServices; // defined as a new Set() in the parent

	function select(serviceRowId: number) {
		dispatch('selectService', {
			id: serviceRowId
		});
	}
</script>

<table>
	<thead class="surface-2">
		<tr>
			{#each Object.keys(data[0]) as column (column)}
				{#if column !== 'id'}
					<th>
						<h6>
							{column}
						</h6>
					</th>
				{/if}
			{/each}
		</tr>
	</thead>
	<tbody class="">
		{#each data as row (row)}
			<tr>
				{#each Object.values(row) as cell (cell)}
					{#if cell !== row.id}
						<td>{cell}</td>
					{/if}
				{/each}
				<td class="actions">
					{#if selectedServices.has(row.id)}
						<button in:fly={{ x: -10 }} class="primary" on:click={() => select(row.id)}>
							<Check />
						</button>
					{:else}
						<button in:fly={{ x: 10 }} class="secondary" on:click={() => select(row.id)}>
							Select
						</button>
					{/if}

					<!-- <button class="secondary" on:click={() => select(row.id)}>Select</button> -->
				</td>
			</tr>
			<!-- <tr> -->
			<!-- <td colspan={columns.length - 2} class="description">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem ratione maxime deleniti
				tempora tempore cumque, iusto quas expedita tenetur doloribus dolor sed unde ipsam beatae
				perspiciatis doloremque. Itaque, ad. Mollitia!
			</td> -->
			<!-- </tr> -->
		{/each}
	</tbody>
</table>

<style>
	button {
		width: 100px;
		height: 50px;
		overflow: hidden;
		font-weight: var(--font-weight-9);
		text-overflow: ellipsis;
		white-space: nowrap;
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
		/* width: 100%; */
		color: var(--text-1);
		font-weight: var(--font-weight-2);
		font-size: var(--size-3);
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

	.description {
		color: var(--text-2);
		font-size: var(--font-size-0);
	}
</style>
