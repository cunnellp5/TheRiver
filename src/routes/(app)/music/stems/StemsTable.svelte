<script lang="ts">
	import Download from 'lucide-svelte/icons/download';
	import Ear from 'lucide-svelte/icons/ear';
</script>

<div class="table">
	<span class="table-title">Album</span>
	<span class="table-title">File / Stem name</span>
	<span class="table-title"></span>

	<span>Tides</span>
	<span>tides reference track.m4a</span>
	<span>
		<div class="table-actions">
			<a
				target="_blank"
				rel="noopener"
				href="https://drive.google.com/file/d/1FQGrZFLHxpGzd6u2FkKC7j5kDdla7RNr/view?usp=drive_link">
				<Ear />
			</a>
			<a
				href="https://drive.usercontent.google.com/u/0/uc?id=1FQGrZFLHxpGzd6u2FkKC7j5kDdla7RNr&export=download">
				<Download />
			</a>
		</div>
	</span>

	<span>Security & Passion</span>
	<span>reference track - security and passion.m4a</span>
	<span>
		<div class="table-actions">
			<a
				target="_blank"
				rel="noopener"
				href="https://drive.google.com/file/d/1YHrpavNzO3ANkS1Wylkrgcr8oFZIL5OD/view?usp=drive_link">
				<Ear />
			</a>
			<a
				href="https://drive.usercontent.google.com/u/0/uc?id=1YHrpavNzO3ANkS1Wylkrgcr8oFZIL5OD&export=download">
				<Download />
			</a>
		</div>
	</span>
</div>

<style>
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
		grid-template-rows: repeat(3, 1fr);
		grid-template-columns: 2fr 3fr 1fr;
		& .table-title {
			opacity: 0.5;
			color: var(--text-2);
			font-size: var(--font-size-0);
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
