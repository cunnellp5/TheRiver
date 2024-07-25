<script lang="ts">
	import { QuillConfigReadonly, quillContentInit } from '$lib/utils/QuillConfig';
	import formatDate from '$lib/utils/formatDate';
	import type Quill from 'quill';
	import { onMount } from 'svelte';
	import Badge from '$lib/components/ui/Badge.svelte';
	import type { PageData } from './$types';
	// eslint-disable-next-line import/no-unresolved
	import { page } from '$app/stores';
	import EditDeleteActions from '../components/EditDeleteActions.svelte';

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
</script>

<main>
	<section>
		<hgroup>
			<div class="btnWrapper">
				<EditDeleteActions slug={post.slug} redirect={true} />
			</div>
			<div class="headerAction">
				<h1 id={post.slug}>{post.title}</h1>
			</div>
			<date>{formatDate(new Date(post.createdAt))}</date>
			<div class="tags">
				{#each post.tags as tag}
					<Badge {tag} />
				{/each}
			</div>
		</hgroup>

		<div class="reader-wrapper">
			<div bind:this={reader} />
		</div>
	</section>
</main>

<style>
	main {
		display: grid;
		grid-template-columns: 80% 20%;
	}
	date {
		color: var(--gray-7);
		font-size: var(--font-size-0);
	}
	hgroup {
		margin-block-end: var(--size-6);
	}
	section {
		padding-block-start: var(--size-6);
	}

	/* CLASSES */
	.tags {
		margin-block-start: var(--size-4);
	}
	.headerAction {
		display: flex;
		align-items: center;
		& button {
			margin-inline-start: var(--size-2);
		}
	}
	.reader-wrapper {
		width: 100%;
		& *,
		& *::before,
		& *::placeholder {
			color: var(--text-1);
		}
		& blockquote {
			padding-inline: var(--size-4);
		}
	}
	.btnWrapper {
		display: flex;
		gap: var(--size-2);
		& button {
			width: var(--size-12);
		}
	}
</style>
