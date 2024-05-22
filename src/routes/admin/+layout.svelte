<script lang="ts">
	import BreadCrumb from '$lib/components/ui/BreadCrumb.svelte';
	// eslint-disable-next-line import/no-unresolved
	import { browser } from '$app/environment';
	// eslint-disable-next-line import/no-unresolved
	import { page } from '$app/stores';

	let crumbs: { name: string; link: string }[] = [];

	$: if (browser) {
		const pathnames = $page.url.pathname.split('/').filter(Boolean);
		crumbs = pathnames.map((name, index, arr) => ({
			name: name.charAt(0).toUpperCase() + name.slice(1),
			link: `/${arr.slice(0, index + 1).join('/')}`
		}));
	}
</script>

<header>
	<h1>ADMIN PORTAL</h1>
	<div>
		<BreadCrumb {crumbs}></BreadCrumb>
	</div>
</header>
<main>
	<aside>
		<nav class="sidenav">
			<div class="dropLabel">Main</div>
			<a class:current={$page.url.pathname === '/admin'} href="/admin/"> Home </a>
			<a class:current={$page.url.pathname === '/admin/users'} href="/admin/users">Users</a>
			<hr />

			<div class="dropLabel">Blog</div>
			<a class:current={$page.url.pathname.includes('/admin/posts')} href="/admin/posts"> Posts </a>
			<hr />

			<div class="dropLabel">Services</div>
			<a class:current={$page.url.pathname === '/admin/services'} href="/admin/services"> Jobs </a>
			<a
				class:current={$page.url.pathname.includes('/admin/services/booking')}
				href="/admin/services/booking">
				Bookings
			</a>
			<a
				class:current={$page.url.pathname.includes('/admin/services/time-slots')}
				href="/admin/services/time-slots">
				Time slots
			</a>

			<hr />
			<div class="dropLabel">Contact</div>
		</nav>
	</aside>
	<article>
		<slot />
	</article>
</main>

<style>
	main {
		display: grid;
		grid-template-columns: var(--size-12) 1fr;
	}

	header {
		display: flex;
		flex-direction: column;
		margin-block: var(--size-5);
		padding-block: var(--size-5);
	}

	article {
		margin-inline: var(--size-4);
	}

	hr {
		margin-block: var(--size-4);
	}

	a {
		color: var(--gray-7);
		font-weight: 200;
		user-select: none;
	}

	.sidenav {
		position: relative;
		z-index: 1;
		background-color: var(--surface);
		width: var(--size-12);
		overflow-x: hidden;
	}

	.sidenav a {
		display: block;
		padding: var(--size-1);
		text-decoration: none;
	}

	.sidenav a:hover {
		cursor: pointer;
		border-radius: var(--radius-2);
		background-color: var(--gray-9);
	}

	.current {
		color: var(--link);
	}

	.dropLabel {
		margin-top: var(--size-5);
		margin-bottom: var(--size-1);
		width: 100%;
		color: var(--stone-5);
		font-weight: 200;
	}
</style>
