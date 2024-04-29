<script lang="ts">
	export let data;

	const { services } = data;

	const remappedServices = services.reduce((acc, service) => {
		if (!acc[service.category]) {
			acc[service.category] = [];
		}
		acc[service.category].push({
			Service: service.name,
			Description: service.description,
			Duration: `${service.duration} min`,
			Availability: service.availability,
			Price: `$${service.price}`
		});
		return acc;
	}, {});
</script>

{#each Object.entries(remappedServices) as [category, listOfServices]}
	<section class="service-table">
		<h2>{category}</h2>
		<table>
			<thead class="surface-2">
				<tr>
					{#each Object.keys(listOfServices[0]) as column (column)}
						<th>
							<h6>
								{column}
							</h6>
						</th>
					{/each}
				</tr>
			</thead>
			<tbody class="">
				{#each listOfServices as row (row)}
					<tr>
						{#each Object.values(row) as cell (cell)}
							<td>{cell}</td>
						{/each}
						<td class="actions">
							<button class="primary">Book now</button>
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
	</section>
{/each}

<style>
	div {
		margin-block: var(--size-4);
		box-shadow: var(--shadow-1);
		border: 1px solid var(--color-gray-1);
		padding: var(--size-4);
	}
	.surface-4 {
		width: max-content;
	}
</style>
