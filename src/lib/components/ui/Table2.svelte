<script lang="ts">
	import Download from 'lucide-svelte/icons/download';
	import Ear from 'lucide-svelte/icons/ear';

	export const columns = ['Track', 'File', ''];
	export const data = [
		{
			track: 'Tides',
			file: 'tides reference track.m4a',
			earLink:
				'https://drive.google.com/file/d/1FQGrZFLHxpGzd6u2FkKC7j5kDdla7RNr/view?usp=drive_link',
			downloadLink:
				'https://drive.usercontent.google.com/u/0/uc?id=1FQGrZFLHxpGzd6u2FkKC7j5kDdla7RNr&export=download'
		},
		{
			track: 'Security & Passion',
			file: 'reference track - security and passion.m4a',
			earLink:
				'https://drive.google.com/file/d/1YHrpavNzO3ANkS1Wylkrgcr8oFZIL5OD/view?usp=drive_link',
			downloadLink:
				'https://drive.usercontent.google.com/u/0/uc?id=1YHrpavNzO3ANkS1Wylkrgcr8oFZIL5OD&export=download'
		}
	];
</script>

<main>
	<div class="table">
		{#each columns as column (column)}
			<span class="table-title">{column}</span>
		{/each}
		{#each data as row (row.track)}
			<span>{row.track}</span>
			<span>{row.file}</span>
			<span>
				<div class="table-actions">
					<a target="_blank" href={row.earLink}><Ear /></a>
					<a href={row.downloadLink}><Download /></a>
				</div>
			</span>
		{/each}
	</div>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.hero {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: calc(100vh - var(--size-8));
	}

	h1,
	ul {
		padding-block: var(--size-5);
	}

	p {
		color: var(--text-2);
	}

	a {
		display: flex;
		transition: color 0.4s;
		text-decoration: none;
		&:hover {
			color: var(--link);
		}
	}

	.table {
		display: grid;
		/* grid-template-columns: repeat(3, 1fr); */
		grid-template-rows: repeat(3, 1fr);
		grid-template-columns: 2fr 3fr 1fr;
		padding-bottom: var(--size-11);

		& .table-title {
			color: var(--text-2);
		}

		& span {
			border-bottom: 1px solid var(--border);
			padding: var(--size-3);
		}

		& .table-actions {
			display: flex;
			gap: var(--size-3);
		}
	}
</style>
