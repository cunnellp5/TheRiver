<script lang="ts">
	import Waves from 'lucide-svelte/icons/waves';
</script>

<nav class="nav-desktop">
	<a href="/" class="logo-link">
		<img src="/Logo_White.png" alt="The River Logo White" />
	</a>

	<ul class="links">
		<li>
			<a href="/music">Music</a>
		</li>
		<li>
			<a href="/producers">Producers</a>
		</li>
		<li>
			<a href="/shop">Shop</a>
		</li>
		<li>
			<a href="/contact">Contact</a>
		</li>
	</ul>
</nav>

<nav class="nav-mobile">
	<Waves />
</nav>

<style>
	.nav-desktop {
		display: none;
	}

	nav {
		align-items: center;
		width: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		padding-block: var(--size-1);
	}

	nav a {
		color: white;
		text-decoration: none;
		font-size: var(--size-4);
		transition: color 0.3s ease;
		text-transform: uppercase;
	}

	nav a:hover {
		color: #ddd;
	}

	img {
		width: var(--size-11);
		border-radius: 0;
	}

	@media (min-width: 768px) {
		.nav-desktop {
			display: flex;
		}

		.nav-mobile {
			display: none;
		}

		nav {
			display: flex;
			justify-content: space-between;
			flex-direction: row;
		}

		.links {
			display: flex;
			gap: var(--size-7);
			margin-block: 0;
		}

		nav a {
			margin: 10px 0;
		}
	}
</style>
