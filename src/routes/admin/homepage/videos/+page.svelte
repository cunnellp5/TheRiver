<script>
	// eslint-disable-next-line import/no-unresolved
	import { enhance } from '$app/forms';

	export let data;
	export let form;

	let loading = false;

	$: ({ videos } = data);
</script>

<ul>
	<li>Clicking the button below will fetch the latest youtube videos and update the DB</li>
	<li>The <em>/music/videos</em> section will then have the latest videos</li>
</ul>

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
			<h4>DB data</h4>
			{#each videos as { id, iframe, updatedAt, createdAt } (id)}
				<li>
					<p>{iframe}</p>
					<p>{updatedAt}</p>
					<p>{createdAt}</p>
				</li>
			{/each}
		{/if}
	</ul>
</div>

{#if loading}
	<div class="loader">Loading...</div>
{/if}

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

<style>
	/* ELEMENTS */
	li {
		margin-block: var(--size-3);
		font-size: var(--font-size-1);
		list-style-type: disc;
	}
	pre {
		border: 1px solid var(--border);
		padding: var(--size-3);
		max-width: var(--size-content-3);
		overflow: auto;
	}
	button {
		margin-block: var(--size-7);
		font-weight: var(--font-weight-6);
	}

	/* CLASSES */
	.video-data-wrapper {
		display: flex;
		flex-direction: row;
		/* align-items: center; */
	}
	.videos-from-db {
		margin: var(--size-7);
		& li {
			list-style-type: none;
		}
	}
</style>
