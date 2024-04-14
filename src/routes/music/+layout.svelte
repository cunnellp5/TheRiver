<div class="grid-container">
	<nav class="sidenav">
		<a href="/dashboard">Videos</a>
		<a href="/users">Tracks</a>
		<a href="/settings">Producers</a>
	</nav>

	<main>
		<slot />
	</main>
</div>

<style>
	.grid-container {
		display: grid;
		/* align-items: center; */
	}

	.sidenav {
		position: sticky;
		top: 0;
		grid-column: 1;
		display: grid;
		padding: var(--size-3);
		color: #818181;
		height: 10%;
	}

	.sidenav a {
		transform: rotate(-90deg);
		text-decoration: none;
		font-size: var(--font-size-1);
		color: inherit;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.sidenav a:hover {
		color: #f1f1f1;
	}

	main {
		grid-column: 2;
	}
</style>
