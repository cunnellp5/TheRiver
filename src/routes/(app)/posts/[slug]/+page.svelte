<script lang="ts">
	import { QuillConfigReadonly, quillContentInit } from '$lib/utils/QuillConfig';
	import formatDate from '$lib/utils/formatDate';
	import type Quill from 'quill';
	import { onMount } from 'svelte';
	import Badge from '$lib/components/ui/Badge.svelte';
	import type { PageData } from './$types';
	// eslint-disable-next-line import/no-unresolved
	import { page } from '$app/stores';
	import ChevronRight from 'lucide-svelte/icons/chevron-right';
	import ChevronLeft from 'lucide-svelte/icons/chevron-left';

	export let data: PageData;
	let quill: Quill | null;
	let reader: string | HTMLElement;

	$: post = data.posts.find((p) => p.slug === $page.params.slug) || {
		title: '',
		content: '',
		tags: [],
		createdAt: new Date(),
		slug: ''
	};

	onMount(async () => {
		try {
			const { default: Quill } = await import('quill');

			quill = new Quill(reader, QuillConfigReadonly);

			const quillData = await quillContentInit(post.content);

			quill.setContents(quillData);
		} catch (error) {
			// TODO: unable to load quill, provide some fall back
		}
	});

	$: index = data.posts.findIndex((p) => p.slug === $page.params.slug);
	$: next = data.posts[index - 1];
	$: previous = data.posts[index + 1];
</script>

<main>
	<div>
		<section class="surface-4">
			<hgroup>
				<div class="headerAction">
					<h1 id={post.slug}>{post.title}</h1>
				</div>
				<date>{formatDate(new Date(post.createdAt))}</date>
				<div class="tags">
					{#each post.tags as tag}
						<Badge {tag} prefix={'#'} />
					{/each}
				</div>
			</hgroup>

			<div class="reader-wrapper">
				<div bind:this={reader} />
			</div>
			<!-- TODO figure out if both the following are needed? -->
			<!-- <div class="reader-wrapper" class:hidden={!quill}>
				<div bind:this={reader} />
			</div>
	
			<p class="content" class:hidden={quill}>
				{data.post.content}
			</p> -->
		</section>
		<div class="prevNext">
			{#if previous}
				<p title={previous.title}>
					<a class="row" href="/posts/{previous.slug}"><ChevronLeft /> Previous </a>
				</p>
			{/if}
			{#if next}
				<p title={next.title}>
					<a class="row" href="/posts/{next.slug}">
						Next <ChevronRight />
					</a>
				</p>
			{/if}
		</div>
	</div>
	{#if data.posts.length > 5}
		<div class="sidemenu">
			<aside>Other posts:</aside>
			<ul>
				{#each data.posts as { slug, title }}
					<li>
						<a href="/posts/{slug}">{title}</a>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</main>

<style>
	main {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		/* align-items: center; */
		height: 100vh;
	}
	section {
		box-shadow: var(--shadow-2);
		padding: var(--size-7);
	}
	date {
		color: var(--gray-7);
		font-size: var(--font-size-0);
	}
	hgroup {
		margin-block-end: var(--size-6);
	}

	/* CLASSES */
	.tags {
		margin-block-start: var(--size-4);
	}

	.headerAction {
		display: flex;
		/* justify-content: space-between; */
		align-items: center;
		& button {
			margin-inline-start: var(--size-2);
		}
	}
	/* .hidden {
		display: none;
	} */
	.reader-wrapper {
		width: 100%;
		& *,
		& *::before,
		& *::placeholder {
			/* background-color: var(--yellow-0); */
			color: var(--text-1);
			font-weight: 100;
		}
		& blockquote {
			padding-inline: var(--size-4);
		}
	}

	.sidemenu {
		position: relative;
		padding: var(--size-4);
		width: var(--size-14);
		& li {
			margin-bottom: var(--size-2);
			margin-left: var(--size-2);
		}
	}
	.prevNext {
		display: flex;
		justify-content: space-between;
	}
	.row {
		display: flex;
		flex-direction: row;
	}
</style>
