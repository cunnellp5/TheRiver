<script lang="ts">
	import VanishingHeader from './components/VanishingHeader.svelte';
	import Toasts from '$lib/components/ui/Toasts.svelte';
	import 'open-props/buttons';
	import 'open-props/colors-hsl';
	import 'open-props/masks/edges';
	import 'open-props/normalize';
	import 'open-props/style';
	import '../styles/app.css';
	import type { PageData } from './$types';
	import Footer from './components/Footer.svelte';
	import Header from './components/Header.svelte';
	import PageTransition from './components/Transition.svelte';

	export let data: PageData;
</script>

<Toasts />

<div>
	<!-- This is weirdly nested, but i really wanted a full width blur background -->
	<VanishingHeader duration="300ms" offset={50} tolerance={5}>
		<!-- <div class="blur-bar"> -->
		<div class="app-layout">
			<Header isSignedIn={data.isSignedIn} user={data.user} />
		</div>
		<!-- </div> -->
	</VanishingHeader>

	<!-- TODO move transitions to a new layout so admin portal looks better when navigating -->
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
	/* .blur-bar { */
	/* position: sticky; */
	/* top: 0; */
	/* z-index: 1000; */

	/* backdrop-filter: blur(6px); */
	/* } */
</style>
