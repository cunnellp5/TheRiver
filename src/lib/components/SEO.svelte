<script lang="ts">
	import { onMount } from 'svelte';
	import * as config from '$lib/config';
	import { page } from '$app/stores';

	interface Props {
		title: string;
		description: string;
	}
	let { title = $bindable(), description = $bindable() }: Props = $props();
	let url: string | undefined = $state();

	onMount(() => {
		title = title || config.title;
		description = description || config.description;
		url = $page.url.href || 'https://theriversings.com';
	});
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={url} />
	<meta
		property="og:image"
		content="https://res.cloudinary.com/dswpu3qez/image/upload/v1724876045/TheRiver/hoursArticle_dzx2l6.webp" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="The River" />
	<meta property="og:locale" content="en_US" />
	<meta property="twitter:site" content="@the_river_sings" />
	<meta property="twitter:creator" content="@the_river_sings" />
	<meta property="twitter:title" content="The River Sings" />
	<meta
		property="twitter:description"
		content="Discover The River's music, beauty services, and fashion collections. Dive into her creative world today." />
	<meta
		property="twitter:image"
		content="https://res.cloudinary.com/dswpu3qez/image/upload/v1724876045/TheRiver/hoursArticle_dzx2l6.webp" />
	<meta property="twitter:card" content="summary_large_image" />
</svelte:head>
