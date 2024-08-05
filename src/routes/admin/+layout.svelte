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

<main>
	<aside>
		<nav class="sidenav">
			<div class="dropLabel">Main</div>
			<!-- <a class:current={$page.url.pathname === '/admin'} href="/admin/"> Home </a> -->
			<a class:current={$page.url.pathname === '/admin/users'} href="/admin/users">Users</a>

			<hr />

			<div class="dropLabel">Home</div>
			<a class:current={$page.url.pathname === '/admin/homepage/hero'} href="/admin/homepage/hero">
				HeroVideo
			</a>
			<a
				class:current={$page.url.pathname === '/admin/homepage/about'}
				href="/admin/homepage/about">
				About
			</a>
			<a
				class:current={$page.url.pathname === '/admin/homepage/articles'}
				href="/admin/homepage/articles">
				Articles
			</a>

			<hr />

			<div class="dropLabel">Music</div>
			<a
				class:current={$page.url.pathname === '/admin/musicpage/tracks'}
				href="/admin/musicpage/tracks">
				Tracks
			</a>
			<a
				class:current={$page.url.pathname === '/admin/musicpage/videos'}
				href="/admin/musicpage/videos">
				Videos
			</a>
			<a
				class:current={$page.url.pathname === '/admin/musicpage/stems'}
				href="/admin/musicpage/stems">
				Stems
			</a>

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
				Schedule
			</a>

			<hr />
			<div class="dropLabel">Contact</div>
			<a
				class:current={$page.url.pathname.includes('/admin/contact/info')}
				href="/admin/contact/info">
				Info
			</a>
		</nav>
	</aside>
	<article>
		<header>
			<h1>ADMIN PORTAL</h1>
		</header>
		<div>
			<BreadCrumb {crumbs}></BreadCrumb>
		</div>
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
		align-items: center;
		margin-block: var(--size-5);
		/* box-shadow: var(--shadow-4); */
		border: 1px dashed var(--stone-11);
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
		& a {
			font-weight: var(--font-weight-5);
		}
		& div {
			font-weight: var(--font-weight-7);
		}
	}

	.sidenav a {
		display: block;
		padding: var(--size-1);
		text-decoration: none;
	}

	.sidenav a:hover {
		cursor: pointer;
		border-radius: var(--radius-2);
		background-color: var(--hover-1);
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
