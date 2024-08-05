<script lang="ts">
	import * as Card from '$lib/components/ui/shadcn/card';
	import * as Table from '$lib/components/ui/shadcn/table';
	import about from '$lib/data/json/about.json';
	// eslint-disable-next-line import/no-unresolved
	import { enhance } from '$app/forms';

	let editToggle = false;

	const routesWithAbout = [
		{
			title: 'Home',
			about: about.home
		},
		{
			title: 'Music',
			about: about.music
		},
		{
			title: 'Service',
			about: about.service
		},
		{
			title: 'Market',
			about: about.market
		},
		{
			title: 'Blog',
			about: about.blog
		},
		{
			title: 'Contact',
			about: about.contact
		},
		{
			title: 'Announcement',
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
				<Table.Cell>{aboutInfo.title}</Table.Cell>
				<Table.Cell>{aboutInfo.about}</Table.Cell>
				<Table.Cell>
					<form method="POST" data-sveltekit-noscroll use:enhance>
						<textarea name="about" cols="40" />
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
