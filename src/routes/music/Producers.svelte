<script lang="ts">
	import ChevronRight from 'lucide-svelte/icons/chevron-right';
	import Ear from 'lucide-svelte/icons/ear';
	import Download from 'lucide-svelte/icons/download';
	import { onMount } from 'svelte';

	// This is the beginnings of scroll animations
	let section: Element;

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						console.log('User has scrolled to the section');
					}
				});
			},
			{
				rootMargin: '-65% 0px -65% 0px'
			}
		);

		observer.observe(section);
	});
</script>

<main bind:this={section}>
	<div class="hero">
		<h1>Download stems</h1>

		<p>Send me your creations.</p>

		<ul>
			<li>
				<a
					href="https://drive.google.com/drive/folders/1zMLDz-1iEerzgr4eu_bZ30GzVUBgr3cr"
					target="_blank"
				>
					<ChevronRight size="16" /> Tides
				</a>
			</li>
			<li>
				<a
					href="https://drive.google.com/drive/folders/1WfE2Cz68NtzI2qMJoDcnNsmgepSRzbUZ"
					target="_blank"
				>
					<ChevronRight size="16" /> Security & Passion
				</a>
			</li>
		</ul>

		<hr />
		<div class="table">
			<span class="table-title">Track</span>
			<span class="table-title">File</span>
			<span class="table-title"></span>

			<span>Tides</span>
			<span>tides reference track.m4a</span>
			<span>
				<div class="table-actions">
					<a
						target="_blank"
						href="https://drive.google.com/file/d/1FQGrZFLHxpGzd6u2FkKC7j5kDdla7RNr/view?usp=drive_link"
					>
						<Ear />
					</a>
					<a
						href="https://drive.usercontent.google.com/u/0/uc?id=1FQGrZFLHxpGzd6u2FkKC7j5kDdla7RNr&export=download"
					>
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
						href="https://drive.google.com/file/d/1YHrpavNzO3ANkS1Wylkrgcr8oFZIL5OD/view?usp=drive_link"
					>
						<Ear />
					</a>
					<a
						href="https://drive.usercontent.google.com/u/0/uc?id=1YHrpavNzO3ANkS1Wylkrgcr8oFZIL5OD&export=download"
					>
						<Download />
					</a>
				</div>
			</span>
		</div>
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
		align-items: center;
		justify-content: center;
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
		text-decoration: none;
		transition: color 0.4s;
		&:hover {
			color: var(--link);
		}
	}

	.table {
		display: grid;
		grid-template-columns: 2fr 3fr 1fr;
		/* grid-template-columns: repeat(3, 1fr); */
		grid-template-rows: repeat(3, 1fr);
		padding-bottom: var(--size-11);

		& .table-title {
			color: var(--text-2);
		}

		& span {
			/* border-top: 1px solid white; */
			border-bottom: 1px solid var(--border);
			padding: var(--size-3);
		}

		& .table-actions {
			display: flex;
			gap: var(--size-3);
		}
	}
</style>
