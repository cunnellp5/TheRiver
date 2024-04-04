<script lang="ts">
	import Waves from 'lucide-svelte/icons/waves';
</script>

<nav class="nav-desktop">
	<a href="/" class="logo-link">
		<img src="/Logo_White.png" alt="The River Logo White" />
	</a>

	<ul class="links">
		<li>
			<a href="/music">MUSIC</a>
		</li>
		<li>
			<a href="/producers">PRODUCERS</a>
		</li>
		<li>
			<a href="/shop">SHOP</a>
		</li>
		<li>
			<a href="/contact">CONTACT</a>
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
		/* these top 3 lines are if i want a full screen thing, but then you need to mess with the layout */
		/* position: absolute;
		left: 50%;
		transform: translateX(-50%); */

		align-items: center;
		width: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		/* padding: var(--size-1); */

		padding: var(--size-2);
	}

	a {
		color: var(--text-1);
		text-decoration: none;
		font-size: var(--size-3);
		transition: color 0.3s ease;
	}

	a:hover {
		color: var(--brand);
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
		}
	}
</style>
