<script lang="ts">
	import * as Table from '$lib/components/ui/shadcn/table';
	import * as Card from '$lib/components/ui/shadcn/card';

	export let data;
	const { tracks } = data;
</script>

<div class="adminIntroCardWrapper">
	<Card.Root>
		<Card.Header>
			<Card.Title>Tracks</Card.Title>
			<Card.Description>
				This page shows a list of current Tracks being rendered from Soundcloud
			</Card.Description>
		</Card.Header>
	</Card.Root>
</div>

{#if data}
	<Table.Root>
		<Table.Caption>A list of your SoundCloud tracks.</Table.Caption>
		<Table.Header>
			<Table.Row>
				<Table.Head class="w-[100px]">Title</Table.Head>
				<Table.Head>Order</Table.Head>
			</Table.Row>
		</Table.Header>
		<Table.Body>
			{#each tracks as track}
				<Table.Row>
					<Table.Cell class="font-medium">{track.title}</Table.Cell>
					<Table.Cell>{track.order}</Table.Cell>
				</Table.Row>
			{/each}
		</Table.Body>
	</Table.Root>
{:else}
	<p>no tracks</p>
{/if}

<style>
	p {
		font-size: var(--font-size-1);
	}
</style>
