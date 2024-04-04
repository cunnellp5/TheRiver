<script>
	import 'open-props/style';
	import 'open-props/normalize';
	import 'open-props/buttons';

	import 'open-props/masks/edges';

	import '../app.css';

	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="layout">
	<Header />

	<!-- <section> -->
	<slot />
	<!-- </section> -->

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
