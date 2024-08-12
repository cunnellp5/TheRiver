<script lang="ts">
	import * as Card from '$lib/components/ui/shadcn/card';
	import * as Table from '$lib/components/ui/shadcn/table';
	import about from '$lib/data/json/about.json';
	import { enhance } from '$app/forms';
	import About from './About.svelte';
</script>

<div class="adminIntroCardWrapper">
	<Card.Root>
		<Card.Header>
			<Card.Title>About</Card.Title>
			<Card.Description>Edit your about sections</Card.Description>
		</Card.Header>
	</Card.Root>
</div>

<Table.Root>
	<Table.Caption>Abouts</Table.Caption>
	<Table.Header>
		<Table.Row>
			Change your about info
			<!-- <Table.Head>Page</Table.Head> -->
			<!-- <Table.Head>IsShowing</Table.Head> -->
			<!-- <Table.Head>Description</Table.Head> -->
		</Table.Row>
	</Table.Header>
	<Table.Body>
		{#each Object.entries(about) as [key, value]}
			<Table.Row>
				<About url={value.url} title={key} about={value.text} isShowing={value.isShowing}></About>
			</Table.Row>
		{/each}
	</Table.Body>
</Table.Root>
