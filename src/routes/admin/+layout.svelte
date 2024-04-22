<script lang="ts">
	import { page } from '$app/stores';
</script>

<header>
	<h1>Admin portal</h1>
</header>
<main>
	<aside>
		<nav class="sidenav">
			<a class:current={$page.url.pathname === '/admin'} href="/admin/"> Admin home </a>
			<a class:current={$page.url.pathname === '/admin/apphomepage'} href="/admin/apphomepage">
				(App) home page
			</a>
			<a class:current={$page.url.pathname === '/admin/posts'} href="/admin/posts">(App) Posts</a>
			<a class:current={$page.url.pathname === '/admin/users'} href="/admin/users">Users</a>
			<a class:current={$page.url.pathname === '/admin/footer'} href="/admin/footer">Footer</a>
			<a class:current={$page.url.pathname === '/admin/settings'} href="/admin/settings"
				>Settings</a>
			<!-- Add more links as needed -->
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
		padding-block: var(--size-5);
		margin-block: var(--size-5);
		/* background-image: var(--gradient-16); */
	}
	article {
		margin-inline: var(--size-4);
	}
	a {
		color: var(--gray-7);
	}

	.sidenav {
		height: 100%;
		width: var(--size-12);
		position: relative;
		z-index: 1;
		background-color: hsl(var(--gray-9-hsl) / 30%);
		overflow-x: hidden;
	}
	.sidenav a {
		padding: var(--size-3);
		text-decoration: none;
		display: block;
		border-bottom: 1px solid var(--gray-9);
	}
	.sidenav a:hover {
		color: #f1f1f1;
		background-color: var(--gray-9);
	}
	.current {
		background-color: var(--gray-9);
		color: var(--gray-1);
	}
</style>
