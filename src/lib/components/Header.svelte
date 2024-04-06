<script lang="ts">
	import Waves from 'lucide-svelte/icons/waves';
	import LogoR from '$lib/components/svgs/logos/Logo-R.svelte';

	export let isHomePage: boolean;
</script>

<nav class="nav-desktop">
	<a href="/" class="logo-link">
		<LogoR {isHomePage} />
	</a>

	<ul class="links">
		<li>
			<a class:home-link={isHomePage} href="/music"> MUSIC </a>
		</li>
		<li>
			<a class:home-link={isHomePage} href="/producers"> PRODUCERS </a>
		</li>
		<li>
			<a class:home-link={isHomePage} href="/shop"> SHOP </a>
		</li>
		<li>
			<a class:home-link={isHomePage} href="/contact"> CONTACT </a>
		</li>
	</ul>
</nav>

<nav class="nav-mobile">
	<a href="/" class="logo-link">
		<LogoR {isHomePage} />
	</a>

	{#if isHomePage}
		<Waves color="#ffffff" />
	{:else}
		<Waves />
	{/if}
</nav>

<style>
	nav {
		/* these top 3 lines are if i want a full screen thing, but then you need to mess with the layout */
		/* position: absolute;
			left: 50%;
			transform: translateX(-50%); */
		align-items: center;
		background-color: hsl(var(--gray-9-hsl) / 30%);
		padding-block: var(--size-2);
		padding-inline: var(--size-3);
		width: 100%;
	}

	a {
		color: var(--text-2);
		text-decoration: none;
		font-size: var(--size-3);
		transition: color 0.3s ease;
	}

	a:hover,
	a:active {
		color: var(--link);
	}

	.nav-desktop {
		display: none;
	}

	.nav-mobile {
		display: flex;
		justify-content: space-between;
	}

	.logo-link {
		width: var(--size-8);
	}

	/* Dynamic class because home page has a video thats darker than the theme */
	.home-link {
		color: var(--gray-4);
	}

	@media (min-width: 768px) {
		nav {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
		}

		.links {
			display: flex;
			gap: var(--size-7);
		}

		.nav-desktop {
			display: flex;
		}

		.nav-mobile {
			display: none;
		}
	}
</style>
