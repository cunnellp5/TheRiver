<script lang="ts">
	import * as Table from '$lib/components/ui/shadcn/table';

	export let data;
	const { tracks } = data;
</script>

{#if data}
	<h3>Tracks from SoundCloud</h3>
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
