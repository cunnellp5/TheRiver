<script lang="ts">
	import LogoR from '$lib/components/svgs/logos/LogoR2.svelte';
	import Waves from 'lucide-svelte/icons/waves';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import ToggleTheme from '$lib/components/ui/ToggleTheme.svelte';

	export let isSignedIn = false;

	let showAuthLinks = false;

	let visible = false;

	// const toggleAuthMenu = (event: MouseEvent) => {
	// 	event.preventDefault();
	// 	event.stopPropagation();
	// 	showAuthLinks = !showAuthLinks;
	// };

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

	$: includesAdmin = $page.url.pathname.includes('/admin');
	$: includesPosts = $page.url.pathname.includes('/posts');
	$: includesService = $page.url.pathname.includes('/services');
	$: includesMusic = $page.url.pathname.includes('/music');

	$: isContact = $page.url.pathname === '/contact';
	$: isDashboard = $page.url.pathname === '/dashboard';
	$: isHomePage = $page.url.pathname === '/';
	$: isLogin = $page.url.pathname === '/login';
	$: isLogout = $page.url.pathname === '/logout';
	$: isShop = $page.url.pathname === '/shop';
	$: isSignup = $page.url.pathname === '/signup';
</script>

<!-- {#if visible} -->
<nav class="nav-desktop" in:fly={{ duration: 500, y: -400, delay: 500 }}>
	<div>
		<a class="logo-link" href="/">
			<LogoR />
		</a>
		<ul class="links" class:homepageText={isHomePage}>
			<li></li>

			<li class:current={includesAdmin} aria-current={includesAdmin}>
				<a href="/admin"> Admin </a>
			</li>

			<li class:current={isDashboard} aria-current={isDashboard}>
				<a href="/dashboard"> Dashboard </a>
			</li>
		</ul>
	</div>

	<ul class="links" class:homepageText={isHomePage}>
		<li class:current={includesMusic} aria-current={includesMusic}>
			<a href="/music"> Music </a>
		</li>

		<li class:current={includesService} aria-current={includesService}>
			<a href="/services"> services </a>
		</li>

		<li class:current={isShop} aria-current={isShop}>
			<a href="/shop"> Shop </a>
		</li>

		<li class="border-left"></li>

		<li class:current={includesPosts} aria-current={includesPosts}>
			<a href="/blog"> Blog </a>
		</li>
		<li class:current={isContact} aria-current={isContact}>
			<a href="/contact"> Contact </a>
		</li>

		<li class="border-left"></li>

		{#if isSignedIn}
			<form class="logout-wrapper" id="logoutForm" method="POST" action="/logout">
				<li class:current={isLogout} class:homepageText={isHomePage}>
					<button class="logout-button" type="submit">Logout</button>
				</li>
			</form>
		{:else}
			<li class:current={isSignup}>
				<a href="/signup"> Signup </a>
			</li>
			<li class:current={isLogin}>
				<a href="/login"> Login </a>
			</li>
		{/if}
		<li class="border-left"></li>
		<ToggleTheme />
	</ul>
</nav>

<nav class="nav-mobile">
	<a href="/" class="logo-link">
		<LogoR />
	</a>
	<Waves />
</nav>

<!-- {/if} -->

<style>
	/* ELEMENTS */
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

	/* CLASSES */
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
		/* min-height: var(--size-9); */
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

	/* .homepageText {
		& a,
		.logout-button {
			color: var(--gray-1);
		}
		& .border-left {
			border-left: 1px solid var(--border-light);
		}
	} */

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
