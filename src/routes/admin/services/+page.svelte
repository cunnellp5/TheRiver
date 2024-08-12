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
			<a href="/admin/services/create" data-sveltekit-noscroll>
				<button class="create-service-button"> Add new service</button>
			</a>
		</Card.Footer>
	</Card.Root>
</div>

{#each Object.entries(services) as [category, listOfServices]}
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
							<button class="update-button">Edit</button>
							<button class="delete-button">delete</button>
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

{#each Object.entries(services) as [category, listOfServices]}
	<section>
		<Table.Root>
			<Table.Caption>
				<h5>
					{category}
				</h5>
			</Table.Caption>
			<Table.Header>
				<Table.Row>
					{#each Object.keys(listOfServices[0]) as column (column)}
						<Table.Head>{column}</Table.Head>
						<!-- <Table.Head>About description</Table.Head> -->
						<!-- <Table.Head>Input</Table.Head> -->
					{/each}
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{#each listOfServices as row (row)}
					<Table.Row>
						{#each Object.values(row) as cell (cell)}
							<Table.Cell>
								<!-- <a href={`${aboutInfo.url}`}> -->
								<!-- &#47;{aboutInfo.title} -->
								<!-- </a> -->
								{cell}
							</Table.Cell>
						{/each}

						<!-- <Table.Cell>{aboutInfo.about}</Table.Cell>
						<Table.Cell>
							<form method="POST" data-sveltekit-noscroll use:enhance>
								<textarea name="about" cols="40" rows="1" />
								<input type="hidden" name="title" value={aboutInfo.title} />
								<button type="submit">Save</button>
							</form>
						</Table.Cell> -->
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
	.create-service-button {
		background-color: var(--create);
		color: var(--on-crud-text);
		font-weight: var(--font-weight-7);
	}
</style>
