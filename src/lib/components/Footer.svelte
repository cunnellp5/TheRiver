<script lang="ts">
	import Socials from './Socials.svelte';
	import ToggleTheme from './ToggleTheme.svelte';
</script>

<footer>
	<div>
		<p>The River Sings</p>
		<div class="line-spacer"></div>
		<small> &copy {new Date().getFullYear()}</small>
	</div>

	<Socials />

	<ToggleTheme />
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
		font-family: var(--font-serif);
	}

	div {
		display: flex;
		align-items: center;
	}

	.line-spacer {
		margin-inline: var(--size-2);
		border-left: 0.5px solid rgb(207, 207, 207);
		height: var(--size-3);
	}
</style>
