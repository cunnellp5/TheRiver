<script lang="ts">
	import LogoR from '$lib/components/svgs/logos/LogoR2.svelte';
	import Ellipsis from 'lucide-svelte/icons/ellipsis';
	import ChevronDown from 'lucide-svelte/icons/chevron-down';
	import Waves from 'lucide-svelte/icons/waves';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	// eslint-disable-next-line import/no-unresolved
	import { page } from '$app/stores';
	// eslint-disable-next-line import/no-unresolved
	import { browser } from '$app/environment';

	export let isSignedIn = false;

	let showAuthLinks = false;

	let visible = false;

	const toggleAuthMenu = (event: MouseEvent) => {
		event.preventDefault();
		event.stopPropagation();
		showAuthLinks = !showAuthLinks;
	};

	if (browser) {
		window.addEventListener('click', () => {
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
		<div>
			<a class="logo-link" href="/">
				<LogoR />
			</a>
			<ul class="links">
				<li></li>
				<li
					class:current={$page.url.pathname.includes('/admin')}
					aria-current={$page.url.pathname.includes('/admin')}>
					<a href="/admin"> Admin </a>
				</li>
				<li
					class:current={$page.url.pathname === '/dashboard'}
					aria-current={$page.url.pathname === '/dashboard'}>
					<a href="/dashboard"> Dashboard </a>
				</li>
			</ul>
		</div>

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
				class:current={$page.url.pathname.includes('/posts')}
				aria-current={$page.url.pathname.includes('/posts')}>
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
				{#if showAuthLinks}
					<ChevronDown size="28" />
				{:else}
					<Ellipsis size="28" />
				{/if}
			</li>
		</ul>

		<ul class="card surface-4 links-horz" class:hidden={!showAuthLinks}>
			{#if isSignedIn}
				<form id="logoutForm" method="POST" action="/logout">
					<li>
						<button class="logout-button" type="submit">Logout</button>
					</li>
				</form>
			{:else}
				<a href="/signup" class:current={$page.url.pathname === '/signup'}>
					<li>Signup</li>
				</a>
				<a href="/login" class:current={$page.url.pathname === '/login'}>
					<li>Login</li>
				</a>
			{/if}
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
		/* padding-inline: var(--size-3); */
		position: relative;
		align-items: center;
		/* background-color: hsl(var(--gray-9-hsl) / 95%); */
		padding-block: var(--size-2);
	}

	a {
		transition: color 0.3s ease;
		height: 100%;
		color: var(--text-2);
		font-weight: var(--font-weight-5);
		font-size: var(--font-size-0);
		letter-spacing: var(--font-letterspacing-2);
		text-decoration: none;
		text-transform: uppercase;
	}

	/* a:hover,
	a:active {
		color: var(--link);
	} */

	.links {
		& * {
			-webkit-transition: all 0.35s ease;
			transition: all 0.35s ease;
			-webkit-box-sizing: border-box;
			box-sizing: border-box;
		}
		& a {
			display: inline-block;
			position: relative;
			padding-block: var(--size-1);
			color: var(--text-2);
			font-weight: var(--font-weight-7);
			text-decoration: none;
		}
		& a:before {
			position: absolute;
			top: 25%;
			right: 0;
			bottom: 25%;
			left: 0;
			opacity: 0;
			-webkit-transition: all 0.35s ease;
			transition: all 0.35s ease;
			border-top: 1px solid var(--link);
			border-bottom: 1px solid var(--link);
			content: '';
		}
	}

	.links-horz {
		text-align: center;
		& * {
			-webkit-transition: all 0.35s ease;
			transition: all 0.35s ease;
			-webkit-box-sizing: border-box;
			box-sizing: border-box;
		}
		& a,
		form {
			display: inline-block;
			position: relative;
			/* padding-block: var(--size-1); */
			color: var(--text-2);
			font-weight: var(--font-weight-7);
			text-decoration: none;
		}
		& a:before,
		form:before {
			position: absolute;
			top: 0;
			right: 25%;
			bottom: 0;
			left: 25%;
			opacity: 0;
			z-index: -1;
			-webkit-transition: all 0.35s ease;
			transition: all 0.35s ease;
			border-right: 1px solid var(--link);
			border-left: 1px solid var(--link);
			content: '';
		}
	}

	.links a:hover,
	.links .current a,
	.links-horz a:hover .links-horz .current a {
		color: var(--text-1);
	}

	.links a:hover:before,
	.links .current a:before {
		top: 0;
		bottom: 0;
		opacity: 1;
	}

	.links-horz a:hover:before,
	.links-horz .current a:before,
	.links-horz form:hover:before,
	.links-horz .current form:before {
		right: 0;
		left: 0;
		opacity: 1;
	}

	.nav-desktop {
		display: none;
	}

	.nav-mobile {
		display: flex;
		justify-content: space-between;
	}

	a.logo-link {
		display: flex;
		width: var(--size-8);
	}

	div {
		display: flex;
		align-items: center;
	}

	.border-left {
		border-left: 1px solid var(--border);
		height: var(--size-5);
	}

	.card {
		position: absolute;
		top: 100%;
		right: 0;
		border-radius: var(--radius-0);
		background-color: hsl(var(--background) / 75%);
		& li {
			margin-block: var(--size-1);
			padding-inline: var(--size-2);
			padding-block: var(--size-2);
		}
		& a,
		li,
		button {
			display: block;
			/* display: inline-block; */
			/* position: relative; */
			box-shadow: none;
			/* padding-block: var(--size-1); */
			color: var(--text-2);
			font-weight: var(--font-weight-7);
			font-size: var(--font-size-0);
			letter-spacing: var(--font-letterspacing-3);
			/* text-decoration: none; */
			text-shadow: none;
			text-transform: uppercase;
		}

		& button {
			box-shadow: none;
			border: none;
			padding: 0;
		}

		& li:hover {
			cursor: pointer;
			border-right: 1px solid var(--link);
			border-left: 1px solid var(--link);
			/* background-color: var(--border); */
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
			align-items: center;
			gap: var(--size-5);
		}

		.nav-desktop {
			display: flex;
		}

		.nav-mobile {
			display: none;
		}
	}
</style>
