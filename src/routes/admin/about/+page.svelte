<script lang="ts">
	import * as Card from '$lib/components/ui/shadcn/card';
	import * as Table from '$lib/components/ui/shadcn/table';
	import about from '$lib/data/json/about.json';
	import { enhance } from '$app/forms';

	const routesWithAbout = [
		{
			title: 'home',
			about: about.home
		},
		{
			title: 'music',
			about: about.music
		},
		{
			title: 'service',
			about: about.service
		},
		{
			title: 'market',
			about: about.market
		},
		{
			title: 'blog',
			about: about.blog
		},
		{
			title: 'contact',
			about: about.contact
		},
		{
			title: 'announcement',
			about: about.announcement
		}
	];
</script>

<div class="adminIntroCardWrapper">
	<Card.Root>
		<Card.Header>
			<Card.Title>About</Card.Title>
			<Card.Description>Edit your about sections</Card.Description>
		</Card.Header>
		<Card.Content>
			<ul>
				TODOs
				<li>Move inputs to components with scoped state</li>
				<li>Add a show/hide boolean to data</li>
			</ul>
		</Card.Content>
		<Card.Footer>
			<p>🚧 under construction</p>
		</Card.Footer>
	</Card.Root>
</div>

<Table.Root>
	<Table.Caption>List of About</Table.Caption>
	<Table.Header>
		<Table.Row>
			<Table.Head>Page</Table.Head>
			<Table.Head>About description</Table.Head>
			<Table.Head>Input</Table.Head>
		</Table.Row>
	</Table.Header>
	<Table.Body>
		{#each routesWithAbout as aboutInfo}
			<Table.Row>
				<Table.Cell>&#47;{aboutInfo.title}</Table.Cell>
				<Table.Cell>{aboutInfo.about}</Table.Cell>
				<Table.Cell>
					<form method="POST" data-sveltekit-noscroll use:enhance>
						<textarea name="about" cols="40" rows="1" />
						<input type="hidden" name="title" value={aboutInfo.title} />
						<button type="submit">Save</button>
					</form>
				</Table.Cell>
			</Table.Row>
		{/each}
	</Table.Body>
</Table.Root>

<style>
	form {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
</style>
