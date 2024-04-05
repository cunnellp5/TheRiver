<script lang="ts">
	import Waves from 'lucide-svelte/icons/waves';
	import LogoWhite from '$lib/components/svgs/logos/LogoWhite.svelte';
</script>

<nav class="nav-desktop">
	<a href="/" class="logo-link">
		<LogoWhite />
	</a>

	<ul class="links">
		<li>
			<a href="/music"> MUSIC </a>
		</li>
		<li>
			<a href="/producers"> PRODUCERS </a>
		</li>
		<li>
			<a href="/shop"> SHOP </a>
		</li>
		<li>
			<a href="/contact"> CONTACT </a>
		</li>
	</ul>
</nav>

<nav class="nav-mobile">
	<Waves />
</nav>

<style>
	.nav-desktop {
		display: none;
	}

	nav {
		/* these top 3 lines are if i want a full screen thing, but then you need to mess with the layout */
		/* position: absolute;
		left: 50%;
		transform: translateX(-50%); */
		align-items: center;
		width: 100%;
		background-color: hsl(var(--gray-9-hsl) / 30%);
		padding-block: var(--size-3);
		padding-inline: var(--size-6);
	}

	a {
		color: var(--text-1);
		text-decoration: none;
		font-size: var(--size-3);
		transition: color 0.3s ease;
	}

	a:hover,
	a:active {
		color: var(--brand);
	}

	.logo-link {
		width: var(--size-11);
	}

	@media (min-width: 768px) {
		.nav-desktop {
			display: flex;
		}

		.nav-mobile {
			display: none;
		}

		nav {
			display: flex;
			justify-content: space-between;
			flex-direction: row;
		}

		.links {
			display: flex;
			gap: var(--size-7);
		}
	}
</style>
