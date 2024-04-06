<script lang="ts">
	import Socials from './Socials.svelte';
	import ToggleTheme from './ToggleTheme.svelte';
	import LogoWhite from '$lib/components/svgs/logos/LogoWhite.svelte';
</script>

<footer>
	<div class="footer-first">
		<ToggleTheme />
	</div>

	<div class="footer-middle">
		<Socials />
	</div>

	<div class="toggler">
		<a class="logo-svg" href="/">
			<LogoWhite />
		</a>
	</div>
</footer>

<style>
	footer {
		display: flex;
		flex-direction: column-reverse;
		justify-content: center;
		padding-block: var(--size-7);
		border-top: 1px solid var(--border);
		gap: var(--size-7);
	}
	div {
		display: flex;
		align-items: center;
	}
	.logo-svg {
		width: var(--size-12);
	}
	.footer-first {
		justify-content: center;
	}
	.toggler {
		justify-content: center;
	}
	.footer-middle {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	@media (min-width: 768px) {
		footer {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
			flex-direction: row;
			justify-content: space-between;
			padding-block: var(--size-7);
			border-top: 1px solid var(--border);
		}
		.toggler {
			justify-content: end;
		}
		.footer-first {
			justify-content: start;
		}
		.logo-svg {
			width: var(--size-11);
		}
	}
</style>
