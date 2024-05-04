<script lang="ts">
	import { QuillConfigReadonly, quillContentInit } from '$lib/utils/QuillConfig';
	import formatDate from '$lib/utils/formatDate';
	import type Quill from 'quill';
	import { onMount } from 'svelte';
	import Badge from '$lib/components/ui/Badge.svelte';
	import type { PageData } from './$types';
	// eslint-disable-next-line import/no-unresolved
	import { page } from '$app/stores';

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
	{#if previous}
		<p>Previous post: <a href="/posts/{previous.slug}">{previous.title}</a></p>
	{/if}
	{#if next}
		<p>Next post: <a href="/posts/{next.slug}">{next.title}</a></p>
	{/if}
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
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
</style>
