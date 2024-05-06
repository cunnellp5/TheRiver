<script lang="ts">
	import LogoR from '$lib/components/svgs/logos/LogoR2.svelte';
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
				class:current={$page.url.pathname.includes('/services')}
				aria-current={$page.url.pathname.includes('/services')}>
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

			{#if isSignedIn}
				<form class="logout-wrapper" id="logoutForm" method="POST" action="/logout">
					<li class:current={$page.url.pathname === '/logout'}>
						<button class="logout-button" type="submit">Logout</button>
					</li>
				</form>
			{:else}
				<li class:current={$page.url.pathname === '/signup'}>
					<a href="/signup"> Signup </a>
				</li>
				<li class:current={$page.url.pathname === '/login'}>
					<a href="/login"> Login </a>
				</li>
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
		position: relative;
		align-items: center;
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

	.logout-button {
		box-shadow: none;
		font-size: var(--font-size-0);
		text-transform: uppercase;
	}

	.links {
		& * {
			-webkit-transition: all 0.35s ease;
			transition: all 0.35s ease;
			-webkit-box-sizing: border-box;
			box-sizing: border-box;
		}
		& a,
		.logout-button {
			display: inline-block;
			position: relative;
			padding-block: var(--size-1);
			color: var(--text-2);
			font-weight: var(--font-weight-7);
			text-decoration: none;
		}
		& a:before,
		.logout-button:before {
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
	.logout-wrapper .logout-button:hover,
	.links a:hover,
	.links .current a,
	.links-horz a:hover .links-horz .current a {
		color: var(--text-1);
	}

	.logout-wrapper .logout-button:hover:before,
	.links a:hover:before,
	.links .current a:before {
		top: 0;
		bottom: 0;
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

	.logout-button {
		background: inherit;
		padding: 0;
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
