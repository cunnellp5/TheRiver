<script>
	import * as Table from '$lib/components/ui/shadcn/table';
	import * as Card from '$lib/components/ui/shadcn/card';
	import formatDate from '$lib/utils/formatDate';
	import { enhance } from '$app/forms';

	export let data;

	let loading = false;

	$: ({ videos } = data);
</script>

<div class="adminIntroCardWrapper">
	<Card.Root>
		<Card.Header>
			<Card.Title>Videos</Card.Title>
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
	<ul class="videos-from-db">
		{#if videos.length === 0}
			<li>No videos in the db</li>
		{:else}
			<Table.Root>
				<Table.Caption>A list of visible videos.</Table.Caption>
				<Table.Header>
					<Table.Row>
						<Table.Head>VideoId</Table.Head>
						<Table.Head>Title</Table.Head>
						<Table.Head>Description</Table.Head>
						<Table.Head>Position</Table.Head>
						<Table.Head>Thumbnail</Table.Head>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{#each videos as { videoId, title, description, position, thumbnail, createdAt }}
						<Table.Row>
							<Table.Cell>{videoId}</Table.Cell>
							<Table.Cell>{title}</Table.Cell>
							<Table.Cell>{description}</Table.Cell>
							<Table.Cell>{position}</Table.Cell>
							<Table.Cell>{thumbnail}</Table.Cell>
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
	button {
		font-weight: var(--font-weight-6);
	}
	/* CLASSES */
	.video-data-wrapper {
		display: flex;
		flex-direction: column;
	}
</style>
