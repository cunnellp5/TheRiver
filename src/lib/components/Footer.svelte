<script lang="ts">
	import Socials from './Socials.svelte';
	import ToggleTheme from './ToggleTheme.svelte';
</script>

<footer>
	<div>
		<!-- <a href="/">
			<img src="/Logo_White.png" alt="The River Logo White" />
		</a> -->
		<!-- <div class="line-spacer"></div> -->
		<small> &copy {new Date().getFullYear()}</small>
	</div>

	<div class="socials">
		<a href="/">
			<img src="/Logo_White.png" alt="The River Logo White" />
		</a>
		<Socials />
	</div>

	<div class="toggler">
		<ToggleTheme />
	</div>
</footer>

<style>
	footer {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		justify-content: space-between;
		padding-block: var(--size-7);
		border-top: 1px solid var(--border);
	}

	.toggler {
		justify-content: end;
	}

	.socials {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: var(--size-7);
	}

	p {
		display: flex;
		font-family: var(--font-mono);
		font-variant: small-caps;
		letter-spacing: var(--size-2);
	}

	div {
		display: flex;
		align-items: center;
	}

	/* .line-spacer {
		margin-inline: var(--size-2);
		border-left: 0.5px solid rgb(207, 207, 207);
		height: var(--size-3);
	} */

	img {
		width: var(--size-10);
		border-radius: 0;
	}
</style>
