<script lang="ts">
	import BreadCrumb from '$lib/components/ui/BreadCrumb.svelte';
	import { browser } from '$app/environment';
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
	<a href="/admin">
		<h1>ADMIN PORTAL</h1>
	</a>
</header>

<main>
	<aside>
		<nav class="sidenav">
			<div class="dropLabel">Main</div>
			<!-- <a class:current={$page.url.pathname === '/admin'} href="/admin/"> Home </a> -->
			<a
				class="indented"
				class:current={$page.url.pathname === '/admin/users'}
				href="/admin/users"
				data-sveltekit-noscroll>
				Users
			</a>
			<a
				class="indented"
				class:current={$page.url.pathname === '/admin/about'}
				href="/admin/about"
				data-sveltekit-noscroll>
				About
			</a>

			<hr />

			<div class="dropLabel">Home</div>
			<a
				class="indented"
				class:current={$page.url.pathname === '/admin/homepage/hero'}
				href="/admin/homepage/hero"
				data-sveltekit-noscroll>
				HeroVideo
			</a>
			<a
				class="indented"
				class:current={$page.url.pathname === '/admin/homepage/articles'}
				href="/admin/homepage/articles"
				data-sveltekit-noscroll>
				Articles
			</a>

			<hr />

			<div class="dropLabel">Music</div>
			<a
				class="indented"
				class:current={$page.url.pathname === '/admin/musicpage/tracks'}
				href="/admin/musicpage/tracks"
				data-sveltekit-noscroll>
				Tracks
			</a>
			<a
				class="indented"
				class:current={$page.url.pathname === '/admin/musicpage/videos'}
				href="/admin/musicpage/videos"
				data-sveltekit-noscroll>
				Videos
			</a>
			<a
				class="indented"
				class:current={$page.url.pathname === '/admin/musicpage/stems'}
				href="/admin/musicpage/stems"
				data-sveltekit-noscroll>
				Stems
			</a>

			<hr />

			<div class="dropLabel">Services</div>
			<a
				class="indented"
				class:current={$page.url.pathname === '/admin/services'}
				href="/admin/services"
				data-sveltekit-noscroll>
				Jobs
			</a>
			<a
				class="indented"
				class:current={$page.url.pathname.includes('/admin/services/booking')}
				href="/admin/services/booking"
				data-sveltekit-noscroll>
				Bookings
			</a>
			<a
				class="indented"
				class:current={$page.url.pathname.includes('/admin/services/time-slots')}
				href="/admin/services/time-slots"
				data-sveltekit-noscroll>
				Schedule
			</a>

			<hr />

			<div class="dropLabel">Market</div>
			<a
				class:current={$page.url.pathname.includes('/admin/market')}
				class="indented"
				href="/admin/market"
				data-sveltekit-noscroll>
				Info
			</a>

			<hr />

			<div class="dropLabel">Blog</div>
			<a
				class="indented"
				class:current={$page.url.pathname.includes('/admin/posts')}
				href="/admin/posts"
				data-sveltekit-noscroll>
				Posts
			</a>

			<hr />

			<div class="dropLabel">Contact</div>
			<a
				class="indented"
				class:current={$page.url.pathname.includes('/admin/contact')}
				href="/admin/contact"
				data-sveltekit-noscroll>
				Info
			</a>
		</nav>
	</aside>
	<article>
		<div class="crumb">
			<BreadCrumb {crumbs}></BreadCrumb>
		</div>
		<slot />
	</article>
</main>

<style>
	/* ELEMENTS */
	main {
		display: grid;
		grid-template-columns: var(--size-12) 1fr;
	}
	header {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-block: var(--size-8);
		border: thick dashed var(--stone-11);
		padding-block: var(--size-4);
	}
	article {
		margin-inline-start: var(--size-2);
	}
	hr {
		margin-block: var(--size-2);
	}
	a {
		color: var(--gray-7);
		font-weight: 200;
		user-select: none;
		text-decoration: none;
	}
	/* CLASSES */
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

	.sidenav .indented {
		display: block;
		padding: var(--size-1);
		font-size: var(--font-size-0);
		text-decoration: none;
	}
	.sidenav .indented:hover {
		cursor: pointer;
		border-radius: var(--radius-2);
		background-color: var(--hover-1);
	}
	.current {
		border-radius: var(--radius-2);
		background-color: var(--hover-1);
		color: var(--link);
	}
	.dropLabel {
		width: 100%;
		color: var(--stone-5);
		font-weight: 200;
	}
	.crumb {
		min-height: var(--size-5);
	}
</style>
