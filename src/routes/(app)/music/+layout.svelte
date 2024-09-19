<!-- leaving below just in case i dont want to scroll on nav -->
<!-- data-sveltekit-noscroll -->
<script lang="ts">
	import { page } from '$app/stores';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
	const { about } = data;
</script>

<main class="grid-container gutter">
	<section class="title">
		<h1>The River Sings</h1>
		{#if about.isShowing}
			<p>
				{about.text}
			</p>
		{/if}
		<nav class="sidenav">
			<a href="/music" class:current={$page.url.pathname === '/music'}>Tracks</a>
			<a href="/music/video" class:current={$page.url.pathname === '/music/video'}>Videos</a>
			<a href="/music/stems" class:current={$page.url.pathname === '/music/stems'}>Stems</a>
		</nav>
	</section>

	<section>
		<slot></slot>
	</section>
</main>

<style>
	/* ELEMENTS */
	p {
		color: var(--text-2);
	}
	h1 {
		font-style: normal;
		font-variant: small-caps;
		font-weight: var(--font-weight-4);
		font-size: var(--font-size-8);
		line-height: 1;
		font-family: 'Atyp BL Display Medium';
		letter-spacing: 0em;
	}
	/* CLASSES */
	.title {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: var(--size-4);
		height: var(--size-content-2);
	}
	.grid-container {
		display: flex;
		flex-direction: column;
		width: 100%;
	}
	.sidenav a {
		transform: unset;
		backdrop-filter: blur(20px);
		transition:
			color 0.3s ease,
			transform 0.3s ease;
		padding: var(--size-4);
		text-decoration: none;
		text-transform: uppercase;
	}
	.current {
		color: var(--link);
	}
	.gutter {
		padding-inline: var(--size-7);
	}
</style>
