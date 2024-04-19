<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import PageTransition from '$lib/components/Transition.svelte';
	import { page } from '$app/stores';
	import 'open-props/normalize';
	import 'open-props/colors-hsl';
	import 'open-props/masks/edges';
	import 'open-props/buttons';
	import 'open-props/style';
	import '../styles/app.css';
</script>

<div class="layout">
	<Header />

	<PageTransition>
		<slot />
	</PageTransition>

	<Footer />
</div>

<style>
	.layout {
		height: 100%;
		max-inline-size: 1440px;
		display: grid;
		grid-template-rows: auto 1fr auto;
		margin-inline: auto;
		padding-inline: var(--size-7);
	}

	@media (min-width: 1440px) {
		.layout {
			padding-inline: 0;
		}
	}
</style>
