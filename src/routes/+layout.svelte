<nav>
	<a href="/" class="logo-link"><img src="/Logo_White.png" alt="The River Logo White" /></a>
	<a href="/music">Music</a>
	<a href="/producers">Producers</a>
	<a href="/shop">Shop</a>
</nav>

<main>
	<slot />
</main>

<style>
	nav {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		padding: 12px 0;
	}

	nav a {
		color: white;
		margin: 0 20px;
		text-decoration: none;
		font-size: 1.2em;
		transition: color 0.3s ease;
		text-transform: uppercase;
	}

	nav a:hover {
		color: #ddd;
	}

	img {
		width: 100px;
	}

	.logo-link {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	@media (max-width: 600px) {
		nav {
			flex-direction: column;
		}

		nav a {
			margin: 10px 0;
		}
	}
</style>
