<script lang="ts">
	import { QuillConfigReadonly, quillContentInit } from '$lib/utils/QuillConfig';
	import formatDate from '$lib/utils/formatDate';
	import type Quill from 'quill';
	import { onMount } from 'svelte';
	import Badge from '$lib/components/ui/Badge.svelte';
	// eslint-disable-next-line import/no-unresolved
	import ChevronRight from 'lucide-svelte/icons/chevron-right';
	import ChevronLeft from 'lucide-svelte/icons/chevron-left';
	import { fly } from 'svelte/transition';
	import { page } from '$app/stores';
	import type { PageData } from './$types';

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

	async function selectPost(
		clickedPost:
			| {
					id: number;
					createdAt: Date;
					updatedAt: Date;
					title: string;
					content: string;
					description: string;
					slug: string;
					published: boolean;
					tags: string[];
			  }
			| { title: string; content: string; tags: never[]; createdAt: Date; slug: string }
	) {
		const quillData = await quillContentInit(post.content);
		quill?.setContents(quillData);
		post = clickedPost;
	}

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
	<div class="section surface-4">
		<div class="prevNext">
			{#if previous}
				<p title={previous.title}>
					<a class="row" href="/posts/{previous.slug}"><ChevronLeft /> Older </a>
				</p>
			{/if}
			&nbsp; &nbsp; &nbsp;
			{#if next}
				<p title={next.title}>
					<a class="row" href="/posts/{next.slug}">
						Newer <ChevronRight />
					</a>
				</p>
			{/if}
		</div>
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
	</div>
	{#if data.posts.length > 5}
		<div class="sidemenu">
			<aside>Other posts:</aside>
			<ul>
				{#each data.posts as { slug, title }}
					<li
						class:selectedMenu={slug === $page.url.pathname.split('/').pop()}
						on:click={() => selectPost(post)}>
						<a href="/posts/{slug}">{title}</a>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</main>

<style>
	ul {
		display: flex;
		flex-direction: column;
		gap: var(--size-3);
	}
	main {
		display: grid;
		grid-template-columns: 3fr 0.5fr;
		/* justify-content: space-between; */
		justify-items: center;
	}
	.section {
		/* align-self: center; */
		box-shadow: var(--shadow-2);
		border-radius: var(--radius-2);
		padding: var(--size-7);
		height: fit-content;
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
			/* font-weight: 100; */
		}
		& blockquote {
			padding-inline: var(--size-4);
		}
	}

	.sidemenu {
		border-left: 1px solid var(--border);
		padding: var(--size-2);
		width: var(--size-13);
		line-height: var(--font-lineheight-0);
		& li {
			/* margin-block: var(--size-2); */
			margin-left: var(--size-2);
			padding: var(--size-2);
		}
		& a:hover {
			text-decoration: none;
		}
	}
	.prevNext {
		display: flex;
		position: sticky;
		top: 0;
		justify-content: space-between;
	}
	.row {
		display: flex;
		flex-direction: row;
	}
	.selectedMenu {
		display: inline-block;
		transition:
			font-weight 1.2s,
			background-color 1.2s;
		border-radius: var(--radius-2);
		background: hsl(var(--gray-7-hsl) / 20%);
		font-weight: var(--font-weight-7);
		& a {
			color: hsl(var(--green-1-hsl) / 85%);
		}
	}
</style>
