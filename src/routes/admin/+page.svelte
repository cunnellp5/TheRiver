<script lang="ts">
	import * as Card from '$lib/components/ui/shadcn/card';
	import * as Table from '$lib/components/ui/shadcn/table';

	export let data;

	$: ({ business } = data);
</script>

<div class="adminIntroCardWrapper">
	<Card.Root>
		<Card.Header>
			<Card.Title>Welcome</Card.Title>
			<Card.Description>Update all content on your website</Card.Description>
		</Card.Header>
		<Card.Content></Card.Content>
	</Card.Root>
</div>
<div class="adminIntroCardWrapper">
	<Table.Root>
		<Table.Caption>Contact information</Table.Caption>
		<Table.Header>
			<Table.Row>The River LLC</Table.Row>
		</Table.Header>
		<Table.Body>
			{#if business}
				{#each Object.entries(business) as [key, value]}
					<Table.Row>
						{#if key !== 'id' && key !== 'createdAt' && key !== 'updatedAt'}
							<Table.Cell>{key.toUpperCase()}</Table.Cell>
							<Table.Cell>{value}</Table.Cell>
							<div class="button-wrapper">
								<button class="update-button">edit</button>
							</div>
						{/if}
					</Table.Row>
				{/each}
			{/if}
			<!-- <Table.Row>
				<Table.Cell>Name</Table.Cell>
				<Table.Cell>{business?.name || 'no name'}</Table.Cell>
			</Table.Row>
			<Table.Row>
				<Table.Cell>Address</Table.Cell>
				<Table.Cell>{business?.address || 'no address'}</Table.Cell>
			</Table.Row>
			<Table.Row>
				<Table.Cell>City</Table.Cell>
				<Table.Cell>{business?.city || 'no city'}</Table.Cell>
			</Table.Row>
			<Table.Row>
				<Table.Cell>State</Table.Cell>
				<Table.Cell>{business?.state || 'no state'}</Table.Cell>
			</Table.Row>
			<Table.Row>
				<Table.Cell>Zip</Table.Cell>
				<Table.Cell>{business?.zip || 'no zip'}</Table.Cell>
			</Table.Row>
			<Table.Row>
				<Table.Cell>Phone</Table.Cell>
				<Table.Cell>{business?.phone || 'no phone'}</Table.Cell>
			</Table.Row>
			<Table.Row>
				<Table.Cell>Email</Table.Cell>
				<Table.Cell>{business?.email || 'no email'}</Table.Cell>
			</Table.Row> -->
		</Table.Body>
	</Table.Root>
</div>

<style>
	p {
		margin-block: var(--size-2);
		font-size: var(--font-size-1);
	}
	.button-wrapper {
		display: flex;
		align-content: center;
		justify-content: center;
	}
	.update-button {
		height: 100%;
	}
</style>
