<script lang="ts">
	import ChevronRight from 'lucide-svelte/icons/chevron-right';
</script>

<section id="stems">
	<h3>Download stems</h3>
	<p>Send me your creations.</p>
	<article>
		<small>Google drive links:</small>
		<ul>
			<li>
				<a
					href="https://drive.google.com/drive/folders/1zMLDz-1iEerzgr4eu_bZ30GzVUBgr3cr"
					target="_blank"
					rel="noopener">
					<ChevronRight size="16" /> Tides
				</a>
			</li>
			<li>
				<a
					href="https://drive.google.com/drive/folders/1WfE2Cz68NtzI2qMJoDcnNsmgepSRzbUZ"
					target="_blank"
					rel="noopener">
					<ChevronRight size="16" /> Security & Passion
				</a>
			</li>
		</ul>
	</article>
</section>

<style>
	small {
		opacity: 0.3;
	}
	section {
		display: flex;
		flex-direction: column;
		gap: var(--size-3);
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
</style>
