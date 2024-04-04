<script lang="ts">
	import Circle from 'lucide-svelte/icons/circle';
	import Socials from './Socials.svelte';
</script>

<footer>
	<div>
		<p>TheRiverSings</p>
		<div class="line-spacer"></div>
		<small> &copy {new Date().getFullYear()}</small>
	</div>

	<Socials />

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
		display: flex;
		gap: var(--size-2);
		color: var(--text-2);
	}

	div {
		display: flex;
		align-items: center;
	}

	.dark {
		display: none;
	}

	.line-spacer {
		margin-inline: var(--size-2);
		border-left: 0.5px solid rgb(207, 207, 207);
		height: var(--size-3);
	}
</style>
