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
	<meta property="og:type" content="Type of content" />
	<meta property="og:site_name" content="Name of the website" />
	<meta property="og:locale" content="Language and country of the content" />

	<meta name="twitter:card" content="Type of Twitter card" />
	<meta name="twitter:title" content="Title of the shared link" />
	<meta name="twitter:description" content="Description of the content" />
	<meta name="twitter:image" content="URL of the image" />
	<meta name="twitter:url" content="URL of the shared link" />
	<meta name="twitter:site" content="Twitter handle of the website" />
	<meta name="twitter:creator" content="Twitter handle of the content creator" />
</svelte:head>
