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
	import { onNavigate } from '$app/navigation';

	interface Props {
		data: PageData;
		children?: import('svelte').Snippet;
	}

	let { data, children }: Props = $props();

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
	<VanishingHeader>
		<Header isSignedIn={data.isSignedIn} user={data.user} />
	</VanishingHeader>

	{@render children?.()}

	<Footer />
</div>
