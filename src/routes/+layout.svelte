<script lang="ts">
	import Toasts from '$lib/components/ui/Toasts.svelte';
	import 'open-props/buttons';
	import 'open-props/colors-hsl';
	import 'open-props/masks/edges';
	import 'open-props/normalize';
	import 'open-props/style';
	import '../styles/app.css';
	import type { PageData } from './$types';
	import Footer from './components/footer/Footer.svelte';
	import Header from './components/header/Header.svelte';
	import VanishingHeader from './components/header/VanishingHeader.svelte';
	import PageTransition from './components/body/PageTransition.svelte';
	import { onNavigate } from '$app/navigation';

	export let data: PageData;

	// Use view transitions if available
	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<Toasts />

<div>
	<VanishingHeader duration="300ms" offset={50} tolerance={5}>
		<div class="app-layout">
			<Header isSignedIn={data.isSignedIn} user={data.user} />
		</div>
	</VanishingHeader>

	<PageTransition>
		<slot />
	</PageTransition>

	<div class="app-layout">
		<Footer />
	</div>
</div>
