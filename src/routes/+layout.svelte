<script lang="ts">
	import Toasts from '$lib/components/ui/Toasts.svelte';
	import 'open-props/buttons';
	import 'open-props/colors-hsl';
	import 'open-props/masks/edges';
	import 'open-props/normalize';
	import 'open-props/style';
	import '../styles/app.css';
	import type { PageData } from './$types';
	import Header from './components/Header.svelte';
	import PageTransition from './components/Transition.svelte';
	import Footer from './components/footer/Footer.svelte';

	export let data: PageData;
</script>

<Toasts />

<div>
	<div class="app-layout">
		<Header isSignedIn={data.isSignedIn} />
	</div>

	<!-- TODO move transitions to a new layout so admin portal looks better when navigating -->
	<!-- TODO remove padding and width restrictions at this level to allow for custom full width pages -->
	<PageTransition>
		<slot />
	</PageTransition>

	<div class="app-layout">
		<Footer />
	</div>
</div>

<style>
	/* .layout:not(.home) {
		height: 100%;
		max-inline-size: 1440px;
		display: grid;
		grid-template-rows: auto 1fr auto;
		margin-inline: auto;
		padding-inline: var(--size-7);
	} */

	/* .layout {
		display: grid;
		grid-template-rows: auto 1fr auto;
		margin-inline: auto;
		padding-inline: var(--size-7);
		height: 100%;
		max-inline-size: 1440px;
	} */

	/* @media (min-width: 1440px) {
		.app-layout {
			padding-inline: 0;
		}
	} */
</style>
