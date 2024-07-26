<!-- leaving below just in case i dont want to scroll on nav -->
<!-- data-sveltekit-noscroll -->
<script lang="ts">
	// eslint-disable-next-line import/no-unresolved
	import { page } from '$app/stores';
</script>

<div class="grid-container">
	<div class="sidenav">
		<a href="/music" class:current={$page.url.pathname === '/music'}>Tracks</a>
		<a href="/music/video" class:current={$page.url.pathname === '/music/video'}>Videos</a>
		<a href="/music/stems" class:current={$page.url.pathname === '/music/stems'}>Stems</a>
	</div>

	<section>
		<h1>The River Sings</h1>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum quisquam sed modi nemo nisi
			ad sequi temporibus voluptas omnis, aliquam rerum. Aspernatur magni aliquam libero dolor,
			quibusdam ad perferendis delectus.
		</p>
		<slot></slot>
		<div class="gradient-point-up"></div>
	</section>
</div>

<style>
	/* ELEMENTS */
	h1 {
		margin-block: var(--size-7);
		text-transform: uppercase;
	}
	div {
		margin-block: var(--size-7);
	}
	/* CLASSES */
	/* .grid-container {
		display: grid;
	}
	.sidenav a {
		display: flex;
		justify-content: center;
		align-items: center;
		transform: rotate(-90deg);
		transition: color 0.3s ease;
		height: 100%;
		font-weight: var(--font-weight-5);
		font-size: var(--font-size-1);
		letter-spacing: var(--font-letterspacing-2);
		text-decoration: none;
		text-transform: uppercase;
    }
    .sidenav {
      display: grid;
      position: sticky;
      top: 0;
      grid-column: 1;
      padding: var(--size-3);
      height: var(--size-14);
      color: #818181;
      } */
	.grid-container {
		display: flex;
		flex-direction: column;
		width: 100%;
	}
	.sidenav a {
		transform: unset;
		transition:
			color 0.3s ease,
			transform 0.3s ease;
		/* margin-inline: var(--size-2); */
		background: var(--gray-10);
		padding: var(--size-4);
		text-decoration: none;
		text-transform: uppercase;
	}
	.sidenav {
		display: flex;
		position: sticky;
		top: 0;
		margin: unset;
	}
	a:hover {
		transform: scale(1.1);
	}
	.sidenav,
	.current {
		color: var(--link);
	}
	.gradient-point-up {
		-webkit-mask: var(--mask-edge-drip-bottom);
		mask: var(--mask-edge-drip-bottom);
		border-radius: var(--radius-round);
		background-image: var(--gradient-2), var(--noise-3);
		height: var(--size-9);
	}

	/* MEDIA QUERIES */
	/* @media (max-width: 1440px) {
		.grid-container {
			display: flex;
			flex-direction: column;
		}
		.sidenav a {
			transform: unset;
			margin-inline: var(--size-2);
		}
		.sidenav {
			display: flex;
			margin: unset;
			padding: unset;
			height: unset;
		}
	} */
</style>
