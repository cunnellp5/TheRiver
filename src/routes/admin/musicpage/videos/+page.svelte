<script>
	import * as Table from '$lib/components/ui/shadcn/table';
	import * as Card from '$lib/components/ui/shadcn/card';
	import formatDate from '$lib/utils/formatDate';
	// eslint-disable-next-line import/no-unresolved
	import { enhance } from '$app/forms';

	export let data;
	export let form;

	let loading = false;

	$: ({ videos } = data);
</script>

<div class="adminIntroCardWrapper">
	<Card.Root>
		<Card.Header>
			<Card.Title>Videos</Card.Title>
			<!-- <Users /> -->
			<Card.Description>This page shows a list of current videos</Card.Description>
		</Card.Header>
		<Card.Content>
			<p>Clicking the button below will fetch the latest youtube videos and update the DB.</p>
			<p>The <em>/music/videos</em> section will then have the latest videos.</p>
		</Card.Content>
		<Card.Footer>
			<form
				method="POST"
				action="?/getLatestYoutubeVideos"
				use:enhance={({ cancel }) => {
					loading = true;
					// eslint-disable-next-line no-alert, no-restricted-globals
					if (confirm('This updates our DB with the latest youtube videos. Are you sure?')) {
						return async ({ update }) =>
							update().finally(() => {
								loading = false;
							});
					}
					loading = false;
					return cancel();
				}}>
				<button class="secondary" type="submit">Get latest youtube videos</button>
			</form>
		</Card.Footer>
	</Card.Root>
</div>

<div class="video-data-wrapper">
	{#if form}
		<div>
			<h4>youtube data</h4>
			<pre>{JSON.stringify(form, null, 2)}</pre>
			<form method="POST" action="?/updateDb">
				<input type="hidden" name="iframes" value={form} />
				<button class="primary" type="submit">Update the DB</button>
			</form>
		</div>
	{/if}

	<ul class="videos-from-db">
		{#if videos.length === 0}
			<li>No videos in the db</li>
		{:else}
			<Table.Root>
				<Table.Caption>A list of visible videos.</Table.Caption>
				<Table.Header>
					<Table.Row>
						<Table.Head class="w-[100px]">Source</Table.Head>
						<Table.Head>Created</Table.Head>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{#each videos as { iframe, createdAt }, i (i)}
						<Table.Row>
							<Table.Cell class="font-medium">{iframe}</Table.Cell>
							<Table.Cell>{formatDate(createdAt)}</Table.Cell>
						</Table.Row>
					{/each}
				</Table.Body>
			</Table.Root>
		{/if}
	</ul>
</div>

{#if loading}
	<div class="loader">Loading...</div>
{/if}

<style>
	/* ELEMENTS */
	li {
		margin-inline-start: var(--size-6);
		margin-block: var(--size-3);
		font-size: var(--font-size-1);
		list-style-type: number;
	}
	pre {
		border: 1px solid var(--border);
		padding: var(--size-3);
		max-width: var(--size-content-3);
		overflow: auto;
	}
	button {
		font-weight: var(--font-weight-6);
	}

	/* CLASSES */
	.video-data-wrapper {
		display: flex;
		flex-direction: column;
	}
</style>
