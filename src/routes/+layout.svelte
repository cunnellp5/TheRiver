<script lang="ts">
	import PageTransition from './components/Transition.svelte';
	import 'open-props/buttons';
	import 'open-props/colors-hsl';
	import 'open-props/masks/edges';
	import 'open-props/normalize';
	import 'open-props/style';
	import '../styles/app.css';
	import Footer from './components/footer/Footer.svelte';
	import Header from './components/Header.svelte';
</script>

<div class="layout">
	<Header />

	<!-- TODO move transitions to a new layout so admin portal looks better when navigating -->
	<PageTransition>
		<slot />
	</PageTransition>

	<Footer />
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

	.layout {
		display: grid;
		grid-template-rows: auto 1fr auto;
		margin-inline: auto;
		padding-inline: var(--size-7);
		height: 100%;
		max-inline-size: 1440px;
	}

	@media (min-width: 1440px) {
		.layout {
			padding-inline: 0;
		}
	}
</style>
