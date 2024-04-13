<header>
	<h1>Admin portal</h1>
</header>
<main>
	<aside>
		<nav class="sidenav">
			<a href="/admin/">Admin home</a>
			<a href="/admin/apphomepage">App home page</a>
			<a href="/admin/users">Users</a>
			<a href="/admin/footer">Footer</a>
			<a href="/admin/settings">Settings</a>
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
		justify-content: center;
		padding-block: var(--size-5);
		margin-block: var(--size-5);
		/* background-image: var(--gradient-16); */
	}

	article {
		margin-inline: var(--size-4);
	}

	h1 {
		padding-block: var(--size-0);
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
		/* color: #818181; */
		display: block;
		border-bottom: 1px solid var(--gray-9);
	}

	.sidenav a:hover {
		color: #f1f1f1;
		background-color: var(--gray-9);
	}
</style>
