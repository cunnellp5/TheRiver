<script lang="ts">
	import * as Card from '$lib/components/ui/shadcn/card';
	import * as Table from '$lib/components/ui/shadcn/table';
	import About from './About.svelte';

	let { data } = $props();

	let { about } = $derived(data);
</script>

<div class="adminIntroCardWrapper">
	<Card.Root>
		<Card.Header>
			<Card.Title>About</Card.Title>
			<Card.Description>Toggle visibility</Card.Description>
			<Card.Description>Change the text</Card.Description>
			<Card.Description>Follow link to view changes</Card.Description>
		</Card.Header>
	</Card.Root>
</div>

<Table.Root>
	<Table.Caption>Change any of the about sections</Table.Caption>
	<Table.Header>
		<Table.Row>About table</Table.Row>
	</Table.Header>
	<Table.Body>
		{#each about as value}
			<Table.Row>
				<About
					url={value.url}
					title={value.name}
					about={value.text}
					isShowing={value.isShowing}
					id={value.id}></About>
			</Table.Row>
		{/each}
	</Table.Body>
</Table.Root>
