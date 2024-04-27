<script lang="ts">
	// eslint-disable-next-line import/no-unresolved
	import { page } from '$app/stores';

	let showChildMenuApp = true;
	let showChildMenuAdmin = true;
</script>

<header>
	<h1>ADMIN PORTAL</h1>
</header>
<main>
	<aside>
		<nav class="sidenav">
			<a class:current={$page.url.pathname === '/admin'} href="/admin/"> Home </a>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<!-- svelte-ignore a11y-missing-attribute -->
			<a
				class="dropdown"
				on:click={() => {
					showChildMenuApp = !showChildMenuApp;
				}}>
				<div class="parent-menu">
					<div class="arrow">{showChildMenuApp ? '▼' : '►'}</div>
					App
				</div>
			</a>
			{#if showChildMenuApp}
				<div class="child-menu">
					<a class:current={$page.url.pathname.includes('/admin/services')} href="/admin/services">
						Services
					</a>
					<a class:current={$page.url.pathname.includes('/admin/posts')} href="/admin/posts">
						Posts
					</a>
				</div>
			{/if}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<!-- svelte-ignore a11y-missing-attribute -->
			<a
				class="dropdown"
				on:click={() => {
					showChildMenuAdmin = !showChildMenuAdmin;
				}}>
				<div class="parent-menu">
					<div class="arrow">{showChildMenuAdmin ? '▼' : '►'}</div>
					Admin
				</div>
			</a>
			{#if showChildMenuAdmin}
				<div class="child-menu">
					<a class:current={$page.url.pathname === '/admin/apphomepage'} href="/admin/apphomepage">
						home page
					</a>
					<a class:current={$page.url.pathname === '/admin/users'} href="/admin/users">Users</a>
					<a class:current={$page.url.pathname === '/admin/footer'} href="/admin/footer">Footer</a>
					<a class:current={$page.url.pathname === '/admin/settings'} href="/admin/settings">
						Settings
					</a>
				</div>
			{/if}
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
	a {
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
	.sidenav a {
		display: block;
		border-bottom: 1px solid var(--gray-9);
		padding: var(--size-3);
		text-decoration: none;
	}
	.sidenav a:hover {
		cursor: pointer;
		background-color: var(--border);
		/* color: #f1f1f1; */
	}
	.current {
		/* background-color: var(--gray-9); */
		/* color: var(--gray-1); */
		color: var(--link);
	}

	.parent-menu {
		display: flex;
		/* justify-content: center; */
		align-items: center;
		/* padding: var(--size-3); */
	}
	.child-menu {
		transition: transform 0.3s ease;
		margin-left: var(--size-3);
		border-left: 1px solid var(--link);
	}
	.arrow {
		margin-inline-end: var(--size-2);
		font-size: var(--size-2);
	}
</style>
