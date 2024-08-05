<script lang="ts">
	import * as Card from '$lib/components/ui/shadcn/card';

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

<div class="adminIntroCardWrapper">
	<Card.Root>
		<Card.Header>
			<Card.Title>Services</Card.Title>
			<Card.Description>Create, Edit, or delete your services</Card.Description>
		</Card.Header>
		<Card.Content>
			<p>todo</p>
			<ul>
				<li>move to generic table</li>
				<li>MVP is create a way to CRUD services</li>
				<li>dont let users start scheduling, yet</li>
			</ul>
		</Card.Content>
	</Card.Root>
</div>

{#each Object.entries(remappedServices) as [category, listOfServices]}
	<section class="service-table">
		<h4>{category}</h4>
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
							<button class="secondary">Select</button>
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
	.service-table {
		margin-block: var(--size-4);
	}
</style>
