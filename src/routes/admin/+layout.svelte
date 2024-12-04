<script lang="ts">
	import { run } from 'svelte/legacy';
	import BreadCrumb from '$lib/components/ui/BreadCrumb.svelte';
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import adminLinks from './adminLinks';

	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();

	let crumbs: { name: string; link: string }[] = $state([]);

	run(() => {
		if (browser) {
			const pathnames = $page.url.pathname.split('/').filter(Boolean);
			crumbs = pathnames.map((name, index, arr) => ({
				name: name.charAt(0).toUpperCase() + name.slice(1),
				link: `/${arr.slice(0, index + 1).join('/')}`
			}));
		}
	});
</script>

<header>
	<a href="/admin">
		<h1>ADMIN PORTAL</h1>
	</a>
</header>

<main>
	<aside>
		<nav class="sidenav">
			{#each adminLinks as { category, links }}
				<div class="dropLabel">{category}</div>
				{#each links as { name, link, urlPath }}
					<a
						class="indented"
						class:current={urlPath
							? $page.url.pathname.includes(urlPath)
							: $page.url.pathname === link}
						href={link}
						data-sveltekit-noscroll>
						{name}
					</a>
				{/each}
				<hr />
			{/each}
		</nav>
	</aside>
	<article>
		<div class="crumb">
			<BreadCrumb {crumbs}></BreadCrumb>
		</div>
		{@render children?.()}
	</article>
</main>

<style>
	/* ELEMENTS */
	main {
		display: grid;
		grid-template-columns: var(--size-12) 1fr;
		padding-inline: var(--size-7);
	}
	header {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-block: var(--size-8);
		border: thick dashed var(--stone-11);
		padding-block: var(--size-4);
	}
	article {
		margin-inline-start: var(--size-2);
	}
	hr {
		margin-block: var(--size-2);
	}
	a {
		color: var(--gray-7);
		font-weight: 200;
		user-select: none;
		text-decoration: none;
	}
	/* CLASSES */
	.sidenav {
		position: relative;
		z-index: 1;
		background-color: var(--surface);
		width: var(--size-12);
		overflow-x: hidden;
		& a {
			font-weight: var(--font-weight-5);
		}
		& div {
			font-weight: var(--font-weight-7);
		}
	}

	.sidenav .indented {
		display: block;
		padding: var(--size-1);
		font-size: var(--font-size-0);
		text-decoration: none;
	}
	.sidenav .indented:hover {
		cursor: pointer;
		border-radius: var(--radius-2);
		background-color: var(--hover-1);
	}
	.current {
		border-radius: var(--radius-2);
		background-color: var(--hover-1);
		color: var(--link);
	}
	.dropLabel {
		width: 100%;
		color: var(--stone-5);
		font-weight: 200;
	}
	.crumb {
		min-height: var(--size-5);
	}
</style>
