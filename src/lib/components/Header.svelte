<!-- TODO fix light mode text color -->
<script lang="ts">
	import LogoR from '$lib/components/svgs/logos/LogoR2.svelte';
	import Ellipsis from 'lucide-svelte/icons/ellipsis';
	import Waves from 'lucide-svelte/icons/waves';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import type { EventHandlers } from '../../app';

	let showAuthLinks = false;

	let visible = false;

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

	// TODO only really want to animate this once, ever
	onMount(() => {
		visible = true;
	});
</script>

{#if visible}
	<nav class="nav-desktop" in:fly={{ duration: 500, y: -400, delay: 500 }}>
		<a href="/" class="logo-link">
			<LogoR />
		</a>

		<ul class="links">
			<li
				class:current={$page.url.pathname === '/music'}
				aria-current={$page.url.pathname === '/music'}>
				<a href="/music"> Music </a>
			</li>
			<li
				class:current={$page.url.pathname === '/services'}
				aria-current={$page.url.pathname === '/services'}>
				<a href="/services"> services </a>
			</li>
			<li
				class:current={$page.url.pathname === '/shop'}
				aria-current={$page.url.pathname === '/shop'}>
				<a href="/shop"> Market </a>
			</li>

			<li class="border-left"></li>

			<li
				class:current={$page.url.pathname === '/posts'}
				aria-current={$page.url.pathname === '/posts'}>
				<a href="/posts"> Posts </a>
			</li>
			<li
				class:current={$page.url.pathname === '/contact'}
				aria-current={$page.url.pathname === '/contact'}>
				<a href="/contact"> Contact </a>
			</li>

			<li class="border-left"></li>

			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
			<li on:click={toggleAuthMenu} class="ellipsis">
				<Ellipsis size="28" />
			</li>
		</ul>

		<ul class="card" class:hidden={!showAuthLinks}>
			<a href="/auth/signup">
				<li>Signup</li>
			</a>
			<a href="/auth/login">
				<li>Login</li>
			</a>
			<form id="logoutForm" method="POST" action="/auth/logout">
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
				<li>
					<button class="logout-button" type="submit">Logout</button>
				</li>
			</form>
		</ul>
	</nav>

	<nav class="nav-mobile">
		<a href="/" class="logo-link">
			<LogoR />
		</a>
		<Waves />
	</nav>
{/if}

<style>
	nav {
		align-items: center;
		/* background-color: hsl(var(--gray-9-hsl) / 95%); */
		padding-block: var(--size-2);
		/* padding-inline: var(--size-3); */
		position: relative;
	}

	a {
		color: var(--text-2);
		text-decoration: none;
		text-transform: uppercase;
		font-weight: var(--font-weight-5);
		font-size: var(--font-size-0);
		transition: color 0.3s ease;
		height: 100%;
		letter-spacing: var(--font-letterspacing-2);
	}

	/* a:hover,
	a:active {
		color: var(--link);
	} */

	.links {
		& * {
			-webkit-box-sizing: border-box;
			box-sizing: border-box;
			-webkit-transition: all 0.35s ease;
			transition: all 0.35s ease;
		}
		& a {
			padding: 0.4em 0;
			color: var(--gray-6);
			position: relative;
			text-decoration: none;
			display: inline-block;
		}
		& a:before {
			position: absolute;
			content: '';
			-webkit-transition: all 0.35s ease;
			transition: all 0.35s ease;
			opacity: 0;
			top: 25%;
			bottom: 25%;
			left: 0;
			right: 0;
			border-top: 1px solid var(--link);
			border-bottom: 1px solid var(--link);
		}
	}

	.links a:hover,
	.links .current a {
		color: var(--stone-1);
		/* text-shadow: 2px 2px 10px var(--sand-9); */
	}

	.links a:hover:before,
	.links .current a:before {
		opacity: 1;
		top: 0;
		bottom: 0;
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

	.border-left {
		border-left: 1px solid var(--border);
		height: var(--size-5);
	}

	.card {
		text-align: left;
		position: absolute;
		right: 0;
		top: 100%;
		background-color: hsl(var(--gray-8-hsl) / 75%);
		border-radius: var(--radius-0);

		& li {
			padding-block: var(--size-2);
			padding-inline: var(--size-4);
		}
		& a,
		li,
		button {
			font-size: var(--font-size-0);
			letter-spacing: var(--font-letterspacing-3);
			text-transform: uppercase;
		}

		& button {
			border: none;
			box-shadow: none;
			padding: 0;
		}

		& li:hover {
			background-color: hsl(var(--gray-4-hsl) / 40%);
			cursor: pointer;
			& button {
				background: unset;
			}
		}
	}

	.ellipsis {
		cursor: pointer;
		padding: var(--size-1);
	}

	.logout-button {
		background: inherit;
		padding: 0;
	}

	.hidden {
		display: none;
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
