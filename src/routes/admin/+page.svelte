<script lang="ts">
	import * as Card from '$lib/components/ui/shadcn/card';
	import * as Table from '$lib/components/ui/shadcn/table';
	import AdminBusinessInfoRow from './AdminBusinessInfoRow.svelte';

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
					<AdminBusinessInfoRow {key} {value} id={business.id} />
				{/each}
			{/if}
		</Table.Body>
	</Table.Root>
</div>
