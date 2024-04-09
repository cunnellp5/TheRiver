<script lang="ts">
	import { browser } from '$app/environment';
	import { enhance } from '$app/forms';
	import LogoR from '$lib/components/svgs/logos/LogoR2.svelte';
	import Droplet from 'lucide-svelte/icons/droplet';
	import Droplets from 'lucide-svelte/icons/droplets';
	import Waves from 'lucide-svelte/icons/waves';
	import type { EventHandlers } from '../../app';

	export let isHomePage: boolean;
	let showAuthLinks = false;
	let auth = false;

	const toggleAuthMenu = (event: EventHandlers) => {
		event.preventDefault();
		event.stopPropagation();
		showAuthLinks = !showAuthLinks;
	};

	if (browser) {
		window.addEventListener('click', (e) => {
			if (showAuthLinks === true) {
				showAuthLinks = false;
			}
		});
	}
</script>

<nav class="nav-desktop">
	<a href="/" class="logo-link">
		<LogoR {isHomePage} />
	</a>

	<ul class="links">
		<li>
			<a class:home-link={isHomePage} href="/music"> Music </a>
		</li>
		<li>
			<a class:home-link={isHomePage} href="/producers"> Producers </a>
		</li>
		<li>
			<a class:home-link={isHomePage} href="/shop"> Shop </a>
		</li>
		<li>
			<a class:home-link={isHomePage} href="/contact"> Contact </a>
		</li>
		<li>
			<a class:home-link={isHomePage} href="/posts"> Blog </a>
		</li>

		<li class="border-left"></li>
		<li>
			<button on:click={toggleAuthMenu} type="button">
				{#if showAuthLinks}
					<Droplet />
				{:else}
					<Droplets />
				{/if}
			</button>
		</li>
	</ul>
	<ul class="card">
		{#if showAuthLinks}
			<li>
				<a class:home-link={isHomePage} href="/auth/signup"> Signup </a>
			</li>
			<li>
				<a class:home-link={isHomePage} href="/auth/login"> Login </a>
			</li>
			<li>
				<a class:home-link={isHomePage} href="/auth/logout"> Logout </a>
			</li>
		{/if}
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
	@import './header.css';
	nav {
		/* these top 3 lines are if i want a full screen thing, but then you need to mess with the layout */
		/* position: absolute;
			left: 50%;
			transform: translateX(-50%); */
		align-items: center;
		/* background: hsl(var(--gradient-8) /); */
		background-color: hsl(var(--gray-9-hsl) / 30%);
		padding-block: var(--size-2);
		/* margin-inline: var(--size-3); */
		padding-inline: var(--size-3);
		/* width: 100%; */
		position: relative;
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

	.border-left {
		border-left: 1px solid var(--border);
		height: var(--size-5);
	}

	.card {
		text-align: left;
		position: absolute;
		right: 0;
		top: 100%;
		background-color: hsl(var(--gray-9-hsl) / 30%);
		border-radius: var(--radius-2);
	}

	.card > li > a {
		font-size: var(--size-3);
	}
	.card > li {
		padding-block: var(--size-3);
		padding-inline: var(--size-5);
	}

	@media (min-width: 768px) {
		nav {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
		}

		.links {
			display: flex;
			gap: var(--size-5);
			align-items: center;
		}

		.nav-desktop {
			display: flex;
		}

		.nav-mobile {
			display: none;
		}
	}
</style>
