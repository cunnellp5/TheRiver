<script lang="ts">
	import Dropdown from '$lib/components/ui/Dropdown.svelte';
	// eslint-disable-next-line import/no-unresolved
	import { page } from '$app/stores';
</script>

<header>
	<h1>ADMIN PORTAL</h1>
</header>
<main>
	<aside>
		<nav class="sidenav">
			<a class:current={$page.url.pathname === '/admin'} href="/admin/"> Home </a>
			<Dropdown>
				<div class="dropLabel" slot="label">App</div>
				<a class:current={$page.url.pathname.includes('/admin/services')} href="/admin/services">
					Services
				</a>
				<!-- <a class:current={$page.url.pathname.includes('/admin/services')} href="/admin/services">
					Services
				</a> -->
				<a class:current={$page.url.pathname.includes('/admin/posts')} href="/admin/posts">
					Posts
				</a>
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
	.sidenav a:hover,
	.dropLabel:hover {
		cursor: pointer;
		background-color: var(--border);
		/* color: #f1f1f1; */
	}
	.current {
		/* background-color: var(--gray-9); */
		/* color: var(--gray-1); */
		color: var(--link);
	}

	.dropLabel {
		width: 100%;
	}
</style>
