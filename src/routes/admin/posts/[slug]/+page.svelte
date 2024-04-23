<script lang="ts">
	import { enhance } from '$app/forms';
	import { QuillConfigReadonly, quillContentInit } from '$lib/utils/QuillConfig';
	import formatDate from '$lib/utils/formatDate';
	import Pencil from 'lucide-svelte/icons/pencil';
	import Trash from 'lucide-svelte/icons/trash';
	import type Quill from 'quill';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import EditDeleteActions from '../EditDeleteActions.svelte';

	export let data: PageData;
	let quill: Quill | null;
	let reader: string | HTMLElement;

	let post = data.posts.find((post) => post.slug === $page.params.slug) || {
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

			let quillData = await quillContentInit(post.content);

			quill.setContents(quillData);
		} catch (error) {
			// TODO: unable to load quill, provide some fall back
		}
	});
</script>

<main>
	<section>
		<hgroup>
			<div class="headerAction">
				<h1 id={post.slug}>{post.title}</h1>
				<EditDeleteActions slug={post.slug} actionLocation={'/posts?/deletePost'} redirect={true} />
			</div>
			<date>{formatDate(new Date(post.createdAt))}</date>
			<div class="tags">
				{#each post.tags as tag}
					<span class="badge"># {tag}</span>
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
</main>

<style>
	main {
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	date {
		font-size: var(--font-size-0);
		color: var(--gray-7);
	}
	hgroup {
		margin-block-end: var(--size-6);
	}

	/* CLASSES */
	.badge {
		padding-inline: var(--size-2);
		padding-block: var(--size-1);

		background: hsl(var(--gray-8-hsl) / 50%);
		color: hsl(var(--pink-2-hsl) / 50%);
		border-radius: var(--radius-3);
		font-size: var(--font-size-0);
		margin-inline-end: var(--size-1);
	}

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
			color: var(--stone-2);
		}
		& blockquote {
			padding-inline: var(--size-4);
		}
	}
	.delete {
		background-color: hsl(var(--red-5-hsl) / 80%);
	}
</style>
