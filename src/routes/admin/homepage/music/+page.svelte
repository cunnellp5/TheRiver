<script lang="ts">
	export let data;
	const { tracks } = data;
</script>

{#if data}
	<h3>Tracks from SoundCloud</h3>
	{#each tracks as track}
		<ul>
			<li>
				<p>
					{track.title}
				</p>
			</li>
		</ul>
	{/each}
{:else}
	<p>no tracks</p>
{/if}

<style>
	li {
		margin: var(--size-1);
		font-size: var(--font-size-4);
	}
	p {
		font-size: var(--font-size-1);
	}
</style>
