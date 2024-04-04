<script lang="ts">
	import Circle from 'lucide-svelte/icons/circle';
</script>

<footer>
	<p>🌊 TheRiverSings &copy {new Date().getFullYear()}</p>
	<p>socials</p>

	<ul>
		<li class="light">
			<Circle />
		</li>
		<li class="dark">
			<Circle fill="#FFFFFF" />
		</li>
	</ul>
</footer>

<style>
	footer {
		display: grid;
		grid-template-columns: auto auto auto;
		justify-content: space-between;
		padding-block: var(--size-7);
		border-top: 1px solid var(--border);
	}

	p {
		color: var(--text-2);
	}

	.dark {
		display: none;
	}
</style>
