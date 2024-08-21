<!-- leaving below just in case i dont want to scroll on nav -->
<!-- data-sveltekit-noscroll -->
<script lang="ts">
	import { page } from '$app/stores';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
	const { about } = data;
</script>

<div class="grid-container app-layout">
	<div class="sidenav">
		<a href="/music" class:current={$page.url.pathname === '/music'}>Tracks</a>
		<a href="/music/video" class:current={$page.url.pathname === '/music/video'}>Videos</a>
		<a href="/music/stems" class:current={$page.url.pathname === '/music/stems'}>Stems</a>
	</div>

	<section>
		<h1>The River Sings</h1>
		{#if about.isShowing}
			<p>
				{about.text}
			</p>
		{/if}
		<slot></slot>
	</section>
</div>

<style>
	/* ELEMENTS */
	p {
		color: var(--text-2);
	}
	h1 {
		margin-block: var(--size-7);
		text-transform: uppercase;
	}
	div {
		margin-block: var(--size-7);
	}
	/* CLASSES */
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
</style>
