<script lang="ts">
	import * as Card from '$lib/components/ui/shadcn/card';
	import * as Table from '$lib/components/ui/shadcn/table';

	export let data;

	const { services } = data;
	console.log(services, 'fuuu');
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
		<Card.Footer>
			<div class="buttons-wrapper">
				<a href="/admin/services/create" data-sveltekit-noscroll>
					<button class="create-button"> Add new service</button>
				</a>
				<a href="/admin/services/create" data-sveltekit-noscroll>
					<button class="create-button"> Add new category</button>
				</a>
			</div>
		</Card.Footer>
	</Card.Root>
</div>

<!-- {#each Object.entries(services) as [category, listOfServices]}
	<section class="service-table">
		<table>
			<thead class="surface-2">
				<tr>
					<th>
						<h6>{category}</h6>
					</th>
				</tr>
			</thead>
			<tbody class="">
				{#each listOfServices as service}
					<tr>
						<td>{service.name}</td>
						<td>${service.price}</td>
						<td>{service.duration} min</td>
						<td class="actions">
							<button class="update-button">Edit</button>
							<button class="delete-button">delete</button>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</section>
{/each} -->

{#each Object.entries(services) as [category, data]}
	<section>
		<Table.Root>
			<Table.Caption>{data[0].category.description}</Table.Caption>
			<Table.Header>
				<Table.Row>
					<div class="table-row-header">
						<h5>
							{category.toUpperCase()}
						</h5>
						<small>{data.length} ct</small>
					</div>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{#each data as service}
					<Table.Row>
						<Table.Cell>{service.name}</Table.Cell>
						<Table.Cell>
							<div class="price-duration">
								<span class="price">
									${service.price}.00
								</span>
								<span class="time">
									{service.duration} min
								</span>
							</div>
						</Table.Cell>
					</Table.Row>
				{/each}
			</Table.Body>
		</Table.Root>
	</section>
{/each}

<style>
	section {
		margin-block: var(--size-12);
	}
	table {
		width: 100%;
		font-size: var(--font-size-0);
		& :where(td:not(:has(:last-child))),
		th {
			text-align: left;
		}
	}
	.service-table {
		margin-block: var(--size-4);
	}
	.buttons-wrapper {
		display: flex;
		gap: var(--size-4);
	}
	.price-duration {
		display: flex;
		flex-direction: column;
		/* text-align: right; */
	}
	.time {
		color: var(--text-2);
		font-size: var(--font-size-00);
	}
	.price {
		font-size: var(--font-size-0);
	}
	.table-row-header {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: var(--size-3);
	}
</style>
