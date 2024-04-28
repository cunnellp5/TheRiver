<script lang="ts">
	import BreadCrumb from '$lib/components/ui/BreadCrumb.svelte';
	import Dropdown from '$lib/components/ui/Dropdown.svelte';
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
			<a class:current={$page.url.pathname === '/admin'} href="/admin/"> Home </a>
			<Dropdown>
				<div
					class="dropLabel"
					class:currentParent={$page.url.pathname.includes('/admin/posts')}
					slot="label">
					App
				</div>

				<a class:current={$page.url.pathname.includes('/admin/posts')} href="/admin/posts">
					Posts
				</a>
				<Dropdown>
					<div
						class="dropLabel"
						class:currentParent={$page.url.pathname.includes('/admin/services')}
						slot="label">
						Services
					</div>
					<a class:current={$page.url.pathname === '/admin/services'} href="/admin/services">
						Jobs
					</a>
					<a
						class:current={$page.url.pathname.includes('/admin/services/bookings')}
						href="/admin/services/bookings">
						Bookings
					</a>
					<a
						class:current={$page.url.pathname.includes('/admin/services/time-slots')}
						href="/admin/services/time-slots">
						Time slots
					</a>
				</Dropdown>
			</Dropdown>
			<Dropdown>
				<div class="dropLabel" slot="label">Admin</div>
				<!-- <a class:current={$page.url.pathname === '/admin/apphomepage'} href="/admin/apphomepage">
					home page
				</a> -->
				<a class:current={$page.url.pathname === '/admin/users'} href="/admin/users">Users</a>
				<!-- <a class:current={$page.url.pathname === '/admin/footer'} href="/admin/footer">Footer</a> -->
				<!-- <a class:current={$page.url.pathname === '/admin/settings'} href="/admin/settings">
					Settings
				</a> -->
			</Dropdown>
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
		/* background-image: var(--gradient-16); */
	}
	article {
		margin-inline: var(--size-4);
	}
	a,
	.dropLabel {
		color: var(--gray-7);
		user-select: none;
	}

	.sidenav {
		position: relative;
		z-index: 1;
		background-color: var(--surface);
		/* background-color: hsl(var(--gray-9-hsl) / 30%); */
		width: var(--size-12);
		overflow-x: hidden;
	}
	.sidenav a,
	.dropLabel {
		display: block;
		border-bottom: 1px solid var(--gray-9);
		padding: var(--size-3);
		text-decoration: none;
	}
	.sidenav a:hover {
		cursor: pointer;
		/* color: #f1f1f1; */
		background-color: var(--border);
	}

	.sidenav a {
	}

	.current {
		/* border-right: 1px solid var(--link); */
		border-left: 1px solid var(--link);
		background-color: var(--surface-3);
		/* color: var(--gray-1); */
		color: var(--link);
	}
	.currentParent {
		border-bottom: 1px solid var(--gray-6);
	}

	.dropLabel {
		cursor: pointer;
		width: 100%;
	}
</style>
