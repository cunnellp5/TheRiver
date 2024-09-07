<!-- leaving below just in case i dont want to scroll on nav -->
<!-- data-sveltekit-noscroll -->
<script lang="ts">
	import { page } from '$app/stores';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
	const { about } = data;
</script>

<div class="sidenav">
	<a href="/music" class:current={$page.url.pathname === '/music'}>Tracks</a>
	<a href="/music/video" class:current={$page.url.pathname === '/music/video'}>Videos</a>
	<a href="/music/stems" class:current={$page.url.pathname === '/music/stems'}>Stems</a>
</div>

<div class="grid-container gutter">
	<section class="title">
		<h1>The River Sings</h1>
		{#if about.isShowing}
			<p>
				{about.text}
			</p>
		{/if}
	</section>
	<section>
		<slot></slot>
	</section>
</div>

<style>
	/* ELEMENTS */
	p {
		color: var(--text-2);
	}
	h1 {
		/* background: unset;
		-webkit-background-clip: unset;
		-webkit-text-fill-color: unset;
		background-clip: unset; */

		/* color: var(--link); */
		font-style: normal;
		font-variant: small-caps;
		font-weight: var(--font-weight-4);
		font-size: var(--font-size-8);
		line-height: 1;
		font-family: 'Atyp BL Display Medium';
		letter-spacing: 0em;
		/* text-transform: uppercase; */
	}
	div {
		margin-block: var(--size-7);
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
	.sidenav {
		display: flex;
		position: fixed;
		top: 1px;
		/* top: var(--size-1); */
		flex-direction: column;
		z-index: var(--layer-important);
		margin: unset;
		width: fit-content;
	}
	a:hover {
		transform: scale(1.1);
	}
	.sidenav,
	.current {
		color: var(--link);
	}
	.gutter {
		padding-inline: var(--size-7);
	}
	@media (max-width: 768px) {
		.sidenav {
			/* margin: 0 auto; */
			top: 1%;
			left: 50%;
			flex-direction: row;
			justify-content: center;
			transform: translate(-50%);
			font-size: var(--font-size-0);
		}
		.sidenav a {
			padding: var(--size-3);
		}
	}
</style>
