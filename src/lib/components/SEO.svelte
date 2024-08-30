<script lang="ts">
	import { onMount } from 'svelte';
	import * as config from '$lib/config';
	import { page } from '$app/stores';

	export let title: string;
	export let description: string;

	let url: string;

	onMount(() => {
		title = title || config.title;
		description = description || config.description;
		url = $page.url.href || config.url;
	});
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />

	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={url} />

	<meta property="og:image" content="URL of the image" />

	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="The River" />
	<meta property="og:locale" content="en_US" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="The River - Official Site" />
	<meta
		name="twitter:description"
		content="Discover The River's music, beauty services, and fashion collections. Dive into her creative world today." />
	<meta name="twitter:image" content="URL of the image" />
	<!-- <meta name="twitter:url" content="URL of the shared link" /> -->
	<meta name="twitter:site" content="@the_river_sings" />
	<meta name="twitter:creator" content="@the_river_sings" />
</svelte:head>
